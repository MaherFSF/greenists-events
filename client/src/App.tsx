import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { lazy, Suspense } from "react";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Calculator from "./pages/Calculator";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import AIPlanner from "./pages/AIPlanner";
import SupplierPortal from "./pages/SupplierPortal";
import SubBrands from "./pages/SubBrands";
import ClientPortal from "./pages/ClientPortal";
import Booking from "./pages/Booking";
import StaffPortal from "./pages/StaffPortal";
import SpecializedSectors from "./pages/SpecializedSectors";

// Lazy load segment pages
const Weddings = lazy(() => import("./pages/segments/Weddings"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-green-700 font-medium">Loading...</p>
    </div>
  </div>
);

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/calculator" component={Calculator} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" component={Products} />
      <Route path="/ai-planner" component={AIPlanner} />
      <Route path="/suppliers" component={SupplierPortal} />
      <Route path="/brands" component={SubBrands} />
      <Route path="/portal" component={ClientPortal} />
      <Route path="/booking" component={Booking} />
      <Route path="/staff" component={StaffPortal} />
      <Route path="/sectors" component={SpecializedSectors} />
      
      {/* Segment Pages */}
      <Route path="/weddings">
        <Suspense fallback={<PageLoader />}>
          <Weddings />
        </Suspense>
      </Route>
      
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
