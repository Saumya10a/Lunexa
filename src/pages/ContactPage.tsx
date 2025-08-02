import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare,
  Globe,
  Twitter,
  Linkedin,
  Github
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "hello@lunexa.ai",
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Available Monday to Friday, 9AM to 6PM PST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "San Francisco, CA",
      description: "123 Crypto Street, Financial District"
    }
  ];

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", href: "#" },
    { icon: <Github className="w-5 h-5" />, name: "GitHub", href: "#" },
    { icon: <Globe className="w-5 h-5" />, name: "Website", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 animate-slide-down">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up">
              Ready to revolutionize your trading strategy? We're here to help you 
              get started with AI-powered cryptocurrency trading.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div>
                <GlassCard className="p-8" variant="featured">
                  <div className="mb-8">
                    <h2 className="text-2xl font-medium mb-2 text-foreground">
                      Send us a Message
                    </h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-medium text-foreground mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-muted-foreground">
                        Thank you for reaching out. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 neumorphic rounded-lg bg-transparent border-0 
                                   text-foreground placeholder-muted-foreground 
                                   focus:ring-2 focus:ring-primary focus:outline-none
                                   transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 neumorphic rounded-lg bg-transparent border-0 
                                   text-foreground placeholder-muted-foreground 
                                   focus:ring-2 focus:ring-primary focus:outline-none
                                   transition-all duration-300"
                          placeholder="Enter your email address"
                        />
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 neumorphic rounded-lg bg-transparent border-0 
                                   text-foreground focus:ring-2 focus:ring-primary focus:outline-none
                                   transition-all duration-300"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="sales">Sales Question</option>
                          <option value="partnership">Partnership</option>
                          <option value="press">Press Inquiry</option>
                        </select>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 neumorphic rounded-lg bg-transparent border-0 
                                   text-foreground placeholder-muted-foreground 
                                   focus:ring-2 focus:ring-primary focus:outline-none
                                   transition-all duration-300 resize-none"
                          placeholder="Tell us about your project or question..."
                        />
                      </div>

                      {/* Submit Button */}
                      <Button 
                        type="submit" 
                        variant="hero" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </GlassCard>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-medium mb-6 text-foreground">
                    Contact Information
                  </h2>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <GlassCard key={index} className="p-6 group cursor-pointer" variant="hover">
                        <div className="flex items-start space-x-4">
                          <div className="text-primary group-hover:animate-pulse">
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="font-medium text-foreground mb-1">
                              {info.title}
                            </h3>
                            <p className="text-primary font-medium mb-1">
                              {info.content}
                            </p>
                            <p className="text-muted-foreground text-sm">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-medium mb-4 text-foreground">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="p-3 glass rounded-lg hover:bg-primary/10 transition-colors group"
                      >
                        <div className="text-primary group-hover:animate-pulse">
                          {social.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Response */}
                <GlassCard className="p-6" variant="featured">
                  <div className="flex items-center space-x-3 mb-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <h3 className="font-medium text-foreground">
                      Quick Response Guarantee
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We typically respond to all inquiries within 2-4 hours during business hours. 
                    For urgent matters, please call our support line directly.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-light tracking-tight mb-8">
              Need <span className="text-highlight">Quick Answers</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out our frequently asked questions or browse our help center.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Browse FAQ
              </Button>
              <Button variant="ghost" size="lg">
                Help Center →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;