import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Index from "./pages/Index";
import Departments from "./pages/Departments";
import DepartmentDetail from "./pages/DepartmentDetail";
import SchemeDetail from "./pages/SchemeDetail";
import About from "./pages/About";
import Contact from "./pages/Grievance";
import NotFound from "./pages/NotFound";
import Footer from "@/components/Footer";
import CareerPage from "./pages/CareerPage";
import CareerDetailsPage from "./pages/CareerDetailsPage";
import Gallery from "./pages/Gallery";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="pt-6.9">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/department/:id" element={<DepartmentDetail />} />
                <Route
                  path="/scheme/:departmentId/:schemeId"
                  element={<SchemeDetail />}
                />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/career" element={<CareerPage />} />
                <Route path="/career/:id" element={<CareerDetailsPage />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
