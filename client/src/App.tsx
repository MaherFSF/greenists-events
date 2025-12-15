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
import Store from "./pages/Store";
import Volunteer from "./pages/Volunteer";
import Team from "./pages/Team";
import Academy from "./pages/Academy";
import HeritageGallery from "./pages/HeritageGallery";

// Lazy load segment pages
const Weddings = lazy(() => import("./pages/segments/Weddings"));

// Lazy load all 13 sector sub-pages
const CorporateSector = lazy(() => import("./pages/sectors/Corporate"));
const WeddingsSector = lazy(() => import("./pages/sectors/Weddings"));
const HealthcareSector = lazy(() => import("./pages/sectors/Healthcare"));
const KidsSector = lazy(() => import("./pages/sectors/Kids"));
const GovernmentSector = lazy(() => import("./pages/sectors/Government"));
const BankingSector = lazy(() => import("./pages/sectors/Banking"));
const NGOSector = lazy(() => import("./pages/sectors/NGO"));
const EducationSector = lazy(() => import("./pages/sectors/Education"));
const EntertainmentSector = lazy(() => import("./pages/sectors/Entertainment"));
const ConstructionSector = lazy(() => import("./pages/sectors/Construction"));
const EnergySector = lazy(() => import("./pages/sectors/Energy"));
const TravelSector = lazy(() => import("./pages/sectors/Travel"));
const CondolencesSector = lazy(() => import("./pages/sectors/Condolences"));

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
      <Route path="/store" component={Store} />
      <Route path="/volunteer" component={Volunteer} />
      <Route path="/team" component={Team} />
      <Route path="/academy" component={Academy} />
      <Route path="/heritage" component={HeritageGallery} />
      
      {/* Segment Pages */}
      <Route path="/weddings">
        <Suspense fallback={<PageLoader />}>
          <Weddings />
        </Suspense>
      </Route>
      
      {/* All 13 Sector Sub-Pages */}
      <Route path="/sectors/corporate">
        <Suspense fallback={<PageLoader />}>
          <CorporateSector />
        </Suspense>
      </Route>
      <Route path="/sectors/weddings">
        <Suspense fallback={<PageLoader />}>
          <WeddingsSector />
        </Suspense>
      </Route>
      <Route path="/sectors/healthcare">
        <Suspense fallback={<PageLoader />}>
          <HealthcareSector />
        </Suspense>
      </Route>
      <Route path="/sectors/kids">
        <Suspense fallback={<PageLoader />}>
          <KidsSector />
        </Suspense>
      </Route>
      <Route path="/sectors/government">
        <Suspense fallback={<PageLoader />}>
          <GovernmentSector />
        </Suspense>
      </Route>
      <Route path="/sectors/banking">
        <Suspense fallback={<PageLoader />}>
          <BankingSector />
        </Suspense>
      </Route>
      <Route path="/sectors/ngo">
        <Suspense fallback={<PageLoader />}>
          <NGOSector />
        </Suspense>
      </Route>
      <Route path="/sectors/education">
        <Suspense fallback={<PageLoader />}>
          <EducationSector />
        </Suspense>
      </Route>
      <Route path="/sectors/entertainment">
        <Suspense fallback={<PageLoader />}>
          <EntertainmentSector />
        </Suspense>
      </Route>
      <Route path="/sectors/construction">
        <Suspense fallback={<PageLoader />}>
          <ConstructionSector />
        </Suspense>
      </Route>
      <Route path="/sectors/energy">
        <Suspense fallback={<PageLoader />}>
          <EnergySector />
        </Suspense>
      </Route>
      <Route path="/sectors/travel">
        <Suspense fallback={<PageLoader />}>
          <TravelSector />
        </Suspense>
      </Route>
      <Route path="/sectors/condolences">
        <Suspense fallback={<PageLoader />}>
          <CondolencesSector />
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
