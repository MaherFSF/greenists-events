import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";
import { generateQuotePDF, generateQuoteNumber, getValidityDate } from "../services/quoteGenerator";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);

  // PDF Quote Download Endpoint
  app.get('/api/quotes/:quoteNumber/pdf', async (req, res) => {
    try {
      const { quoteNumber } = req.params;
      
      // Get quote data from query params or generate sample
      const quoteData = {
        quoteNumber: quoteNumber || generateQuoteNumber(),
        clientName: req.query.clientName as string || 'عميل كريم',
        clientEmail: req.query.clientEmail as string || 'client@example.com',
        clientPhone: req.query.clientPhone as string || '+967 773 673 918',
        eventType: req.query.eventType as string || 'Corporate Conference',
        eventTypeAr: req.query.eventTypeAr as string || 'مؤتمر شركات',
        eventDate: req.query.eventDate as string || new Date().toLocaleDateString('en-GB'),
        guestCount: parseInt(req.query.guestCount as string) || 100,
        duration: req.query.duration as string || '4 hours',
        venueType: req.query.venueType as string || 'Indoor Venue',
        venueTypeAr: req.query.venueTypeAr as string || 'قاعة داخلية',
        items: [
          { name: 'Venue Rental', nameAr: 'إيجار القاعة', quantity: 1, unitPrice: 500, total: 500 },
          { name: 'Catering (Premium)', nameAr: 'تقديم الطعام (فاخر)', quantity: 100, unitPrice: 15, total: 1500 },
          { name: 'Decoration Package', nameAr: 'باقة الديكور', quantity: 1, unitPrice: 300, total: 300 },
          { name: 'Sound & Lighting', nameAr: 'الصوت والإضاءة', quantity: 1, unitPrice: 400, total: 400 },
          { name: 'Photography', nameAr: 'التصوير', quantity: 1, unitPrice: 250, total: 250 },
        ],
        subtotal: parseFloat(req.query.subtotal as string) || 2950,
        vat: parseFloat(req.query.vat as string) || 442.5,
        total: parseFloat(req.query.total as string) || 3392.5,
        currency: (req.query.currency as 'USD' | 'YER' | 'SAR') || 'USD',
        sustainabilityScore: parseInt(req.query.sustainabilityScore as string) || 85,
        validUntil: getValidityDate(14),
      };
      
      const pdfBuffer = await generateQuotePDF(quoteData);
      
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename="Greenists-Quote-${quoteNumber}.pdf"`);
      res.setHeader('Content-Length', pdfBuffer.length);
      res.send(pdfBuffer);
    } catch (error) {
      console.error('PDF generation error:', error);
      res.status(500).json({ error: 'Failed to generate PDF' });
    }
  });
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // development mode uses Vite, production mode uses static files
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
