import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown, Shield } from 'lucide-react';

const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started with AI trading',
      features: [
        'Basic AI trading algorithms',
        'Portfolio tracking',
        '5 active strategies',
        'Email support',
        'Mobile app access',
        'Basic market analysis'
      ],
      icon: <Shield className="w-8 h-8" />,
      badge: null,
      variant: 'default' as const
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$99',
      period: '/month',
      description: 'Advanced AI strategies for serious traders',
      features: [
        'Advanced AI algorithms',
        'Real-time market analysis',
        'Unlimited strategies',
        'Priority support',
        'Advanced risk management',
        'Custom indicators',
        'API access',
        'Performance analytics'
      ],
      icon: <Star className="w-8 h-8" />,
      badge: 'Most Popular',
      variant: 'featured' as const
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'Premium solutions for institutional traders',
      features: [
        'Premium AI algorithms',
        'White-label solutions',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations',
        'Advanced reporting',
        'Multi-exchange support',
        'Institutional-grade security'
      ],
      icon: <Crown className="w-8 h-8" />,
      badge: 'Enterprise',
      variant: 'hover' as const
    }
  ];

  const faqs = [
    {
      question: "How does the AI trading algorithm work?",
      answer: "Our AI analyzes millions of data points including price movements, volume, social sentiment, and market indicators to identify optimal trading opportunities. The system continuously learns and adapts to market conditions."
    },
    {
      question: "Is my crypto wallet secure with Lunexa?",
      answer: "Absolutely. We use bank-grade encryption and never store your private keys. Your funds remain in your wallet, and we only execute trades through secure API connections with read-only permissions."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. Your access will continue until the end of your current billing period."
    },
    {
      question: "What exchanges are supported?",
      answer: "We support all major cryptocurrency exchanges including Binance, Coinbase Pro, Kraken, FTX, and many others. Enterprise plans include support for additional exchanges."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with the results, we'll provide a full refund within the first 30 days."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 animate-slide-down">
              Choose Your <span className="gradient-text">Plan</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up">
              Unlock the power of AI-driven cryptocurrency trading with plans designed 
              for every type of trader, from beginners to institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={plan.id} className="relative">
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-primary to-rose px-4 py-1 rounded-full text-sm font-medium text-background">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>{plan.badge}</span>
                      </div>
                    </div>
                  </div>
                )}

                <GlassCard 
                  className={`p-8 h-full relative overflow-hidden ${
                    plan.id === 'pro' ? 'ring-2 ring-primary/30' : ''
                  }`}
                  variant={plan.variant}
                  onMouseEnter={() => setSelectedPlan(plan.id)}
                  onMouseLeave={() => setSelectedPlan(null)}
                >
                  {/* Glow effect for Pro plan */}
                  {plan.id === 'pro' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-rose/5 pointer-events-none" />
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="text-primary mb-6 flex justify-center">
                      {plan.icon}
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-medium text-center mb-2 text-foreground">
                      {plan.name}
                    </h3>

                    {/* Price */}
                    <div className="text-center mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-primary">{plan.price}</span>
                        <span className="text-muted-foreground ml-1">{plan.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-center text-muted-foreground mb-8 leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      variant={plan.id === 'pro' ? 'hero' : 'outline'} 
                      className="w-full"
                      size="lg"
                    >
                      {plan.id === 'free' ? 'Get Started Free' : 'Start Free Trial'}
                      {plan.id === 'pro' && <Zap className="w-4 h-4 ml-2" />}
                    </Button>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              All plans include 30-day money-back guarantee
            </p>
            <Button variant="ghost" size="sm">
              Compare all features →
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
                Frequently Asked <span className="text-highlight">Questions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about Lunexa
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <GlassCard key={index} className="overflow-hidden" variant="hover">
                  <button
                    className="w-full p-6 text-left focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-foreground pr-4">
                        {faq.question}
                      </h3>
                      <div className={`transform transition-transform duration-200 ${
                        openFaq === index ? 'rotate-45' : ''
                      }`}>
                        <div className="w-6 h-6 flex items-center justify-center">
                          <div className="w-4 h-0.5 bg-primary absolute" />
                          <div className="w-0.5 h-4 bg-primary absolute" />
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <GlassCard className="p-12 text-center max-w-4xl mx-auto" variant="featured">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
              Ready to Start <span className="text-highlight">Trading Smarter</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of traders who are already using Lunexa's AI to maximize their returns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">
                Start Free Trial
                <Zap className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl">
                Schedule Demo
              </Button>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;