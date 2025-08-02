import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Components
import { GlobalRippleEffect } from "@/components/layout/GlobalRippleEffect";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { PageTransition } from "@/components/layout/PageTransition";
import { Navigation } from "@/components/layout/Navigation";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextRoute, setNextRoute] = useState<string | null>(null);
  const location = useLocation();

  // Handle initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 7000); // 7 second loader

    return () => clearTimeout(timer);
  }, []);

  // Handle page transitions
  useEffect(() => {
    if (!isLoading && location.pathname !== '/') {
      setIsTransitioning(true);
    }
  }, [location.pathname, isLoading]);

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    if (nextRoute) {
      setNextRoute(null);
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground font-inter">
      {/* Global Ripple Effect */}
      <GlobalRippleEffect />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Page Transition Overlay */}
      <PageTransition 
        isTransitioning={isTransitioning} 
        onComplete={handleTransitionComplete} 
      />
      
      {/* Main Content */}
      <main className="relative z-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-light text-primary mb-4">Lunexa</h3>
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Revolutionizing cryptocurrency trading through advanced artificial intelligence 
                and machine learning technologies.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { href: '/', label: 'Home' },
                  { href: '/about', label: 'About' },
                  { href: '/pricing', label: 'Pricing' },
                  { href: '/blog', label: 'Blog' },
                  { href: '/contact', label: 'Contact' }
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-foreground mb-4">Legal</h4>
              <div className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Risk Disclosure'].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/50 mt-8 pt-8 text-center">
            <p className="text-muted-foreground">
              © 2024 Lunexa. All rights reserved. Built with advanced AI technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
