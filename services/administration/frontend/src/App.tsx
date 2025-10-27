import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import EtudiantsPage from "./pages/EtudiantsPage";
import DoctorantsPage from "./pages/DoctorantsPage";
import EnseignantsPage from "./pages/EnseignantsPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/etudiants" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <EtudiantsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/doctorants" 
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <DoctorantsPage />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/enseignants" 
              element={
                <ProtectedRoute allowedRoles={['admin', 'enseignant']}>
                  <EnseignantsPage />
                </ProtectedRoute>
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
