import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/sonner";
import MainLayout from "@/components/layout/MainLayout";
import Dashboard from "@/pages/Dashboard";
import AllCarousels from "@/pages/AllCarousels";
import CarouselEditor from "@/pages/CarouselEditor";
import CarouselPreview from "@/pages/CarouselPreview";
import ScratchEditor from "@/pages/ScratchEditor";
import IdeaGeneratorEditor from "@/pages/IdeaGeneratorEditor";
import AnalyticsDashboardPage from "@/pages/AnalyticsDashboardPage";
import PersonaManagementPage from "@/pages/PersonaManagementPage";
import AccountSettings from "@/pages/AccountSettings";
import AccountLandingPage from "@/pages/AccountLandingPage";
import PricingPlan from "@/pages/PricingPlan";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import LandingPage from "@/pages/LandingPage";
import WaitlistPage from "@/pages/WaitlistPage";
import NotFound from "@/pages/NotFound";
import Index from "@/pages/Index";
import { ROUTES } from "@/constants/routes";
import "./App.css";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000, // 5 minutes
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<WaitlistPage />} />
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path={ROUTES.LANDING} element={<LandingPage />} />
          <Route path={ROUTES.WAITLIST} element={<WaitlistPage />} />
          <Route path={ROUTES.INDEX} element={<Index />} />
          <Route path={ROUTES.SIGNUP} element={<SignUp />} />
          <Route path={ROUTES.SIGNIN} element={<SignIn />} />
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <MainLayout>
                <Dashboard />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.PERSONA_MANAGEMENT}
            element={
              <MainLayout>
                <PersonaManagementPage />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.ANALYTICS_DASHBOARD}
            element={
              <MainLayout>
                <AnalyticsDashboardPage />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.ACCOUNT}
            element={
              <MainLayout>
                <AccountLandingPage />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.ALL_CAROUSELS}
            element={
              <MainLayout>
                <AllCarousels />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.ACCOUNT_PERSONAL}
            element={
              <MainLayout>
                <AccountSettings initialTab="personal" />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.ACCOUNT_PREFERENCE}
            element={
              <MainLayout>
                <AccountSettings initialTab="preference" />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.ACCOUNT_LINKEDIN}
            element={
              <MainLayout>
                <AccountSettings initialTab="linkedin" />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.ACCOUNT_BILLING}
            element={
              <MainLayout>
                <AccountSettings initialTab="billing" />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.ACCOUNT_PASSWORD}
            element={
              <MainLayout>
                <AccountSettings initialTab="password" />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.ACCOUNT_LOGOUT}
            element={
              <MainLayout>
                <AccountSettings initialTab="logout" />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.PRICING_PLAN}
            element={
              <MainLayout>
                <PricingPlan />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.CAROUSEL_EDITOR}
            element={
              <MainLayout>
                <CarouselEditor />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.CAROUSEL_EDITOR_SCRATCH}
            element={
              <MainLayout>
                <ScratchEditor />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.CAROUSEL_EDITOR_IDEA_GENERATOR}
            element={
              <MainLayout>
                <IdeaGeneratorEditor />
              </MainLayout>
            }
          />

          <Route
            path={ROUTES.CAROUSEL_EDITOR_PREVIEW}
            element={
              <MainLayout>
                <CarouselPreview />
              </MainLayout>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
