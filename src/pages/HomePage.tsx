import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { AINeuralNetwork, LiveMarketData, BlockchainInfrastructure } from '@/components/sections/MysteryElements';
import { 
  Wallet, 
  Settings, 
  Zap, 
  Shield, 
  TrendingUp, 
  Brain,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Trading",
      description: "Advanced machine learning algorithms analyze market patterns 24/7"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Grade Security",
      description: "Multi-layer encryption and cold storage protection for your assets"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-Time Analytics",
      description: "Live market data and portfolio insights updated every millisecond"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Execute trades in microseconds with our optimized infrastructure"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Crypto Investor",
      image: "/api/placeholder/60/60",
      quote: "Lunexa's AI has consistently outperformed my manual trading by 340%",
      roi: "+340%"
    },
    {
      name: "Marcus Rodriguez",
      role: "DeFi Trader",
      image: "/api/placeholder/60/60",
      quote: "The platform's intelligence saved me from major losses during market volatility",
      roi: "+156%"
    },
    {
      name: "Emma Thompson",
      role: "Portfolio Manager",
      image: "/api/placeholder/60/60",
      quote: "Finally, a trading platform that actually understands market psychology",
      roi: "+289%"
    }
  ];

  const howItWorks = [
    {
      icon: <Wallet className="w-12 h-12" />,
      title: "Connect Wallet",
      description: "Securely link your crypto wallet with our encrypted protocols"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Configure AI",
      description: "Set your risk tolerance and trading preferences"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automate Trading",
      description: "Let our AI execute optimal trades while you focus on what matters"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        
        {/* Crypto Image Grid */}
        <div className="absolute right-8 top-32 hidden lg:block opacity-30">
          <div className="grid grid-cols-3 gap-2 w-64">
            <div className="col-span-2 h-32 glass rounded-lg bg-gradient-to-br from-primary/20 to-rose/20" />
            <div className="h-16 glass rounded-lg bg-gradient-to-br from-rose/20 to-primary/20" />
            <div className="h-16 glass rounded-lg bg-gradient-to-br from-primary/20 to-rose/20" />
            <div className="col-span-2 h-32 glass rounded-lg bg-gradient-to-br from-rose/20 to-primary/20" />
            <div className="h-16 glass rounded-lg bg-gradient-to-br from-primary/20 to-rose/20" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 animate-fade-in-up">
              The Future of{' '}
              <span className="gradient-text">Crypto Trading</span>{' '}
              is Here
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl animate-fade-in-up opacity-80">
              Harness the power of advanced AI to maximize your crypto investments 
              with unprecedented precision and intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Button variant="hero" size="xl" className="group">
                Start Trading Now
                <Zap className="w-5 h-5 ml-2 group-hover:animate-pulse" />
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              How <span className="text-highlight">Lunexa</span> Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to revolutionize your trading experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
              <GlassCard 
                key={index} 
                className="p-8 text-center group cursor-pointer"
                variant="hover"
              >
                <div className="text-primary mb-6 flex justify-center group-hover:animate-float">
                  {step.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-4 w-8 h-1 bg-gradient-to-r from-primary to-rose mx-auto rounded-full" />
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Powered by <span className="text-highlight">Intelligence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <GlassCard 
                key={index} 
                className="p-8 group cursor-pointer"
                variant="hover"
              >
                <div className="text-primary mb-4 group-hover:animate-pulse">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Trusted by <span className="text-highlight">Traders</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <GlassCard className="p-8 text-center" variant="featured">
                      <div className="flex justify-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full glass border-2 border-primary/30"
                        />
                      </div>
                      <blockquote className="text-xl font-light mb-6 text-foreground">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="space-y-2">
                        <div className="font-medium text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-2xl font-bold text-primary">{testimonial.roi}</div>
                      </div>
                    </GlassCard>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button 
                onClick={() => setCurrentTestimonial((prev) => 
                  prev === 0 ? testimonials.length - 1 : prev - 1
                )}
                className="p-2 glass rounded-full hover:bg-primary/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>
              
              <button 
                onClick={() => setCurrentTestimonial((prev) => 
                  (prev + 1) % testimonials.length
                )}
                className="p-2 glass rounded-full hover:bg-primary/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-lunexa-dark-gray/20 to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-8">
              Our <span className="text-highlight">Mission</span>
            </h2>
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              To democratize sophisticated trading strategies through cutting-edge 
              artificial intelligence, making professional-grade crypto trading 
              accessible to everyone, everywhere.
            </p>
            <div className="mt-12">
              <Button variant="outline" size="lg">
                Learn Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mystery Elements */}
      <AINeuralNetwork />
      <LiveMarketData />
      <BlockchainInfrastructure />
    </div>
  );
};

export default HomePage;