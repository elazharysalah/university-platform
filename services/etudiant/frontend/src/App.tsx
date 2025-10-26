import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import MainLayout from "@/components/layout/MainLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Absences from "./pages/Absences";
import Justificatifs from "./pages/Justificatifs";
import Documents from "./pages/Documents";
import Notes from "./pages/Notes";
import Demandes from "./pages/Demandes";
import PFE from "./pages/PFE";
import Agenda from "./pages/Agenda";
import Paiements from "./pages/Paiements";
import Messagerie from "./pages/Messagerie";
import Aide from "./pages/Aide";
import Profile from "./pages/Profile";
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
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute><MainLayout /></ProtectedRoute>}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/absences" element={<Absences />} />
              <Route path="/justificatifs" element={<Justificatifs />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/demandes" element={<Demandes />} />
              <Route path="/pfe" element={<PFE />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/paiements" element={<Paiements />} />
              <Route path="/messagerie" element={<Messagerie />} />
              <Route path="/aide" element={<Aide />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
