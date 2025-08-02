import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Target, 
  Users, 
  Lightbulb, 
  Award,
  Heart,
  ExternalLink
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState<number | null>(null);

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparency",
      description: "Open algorithms, clear fees, honest communication"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision",
      description: "Accurate predictions, precise execution, measurable results"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building together, sharing knowledge, growing collectively"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "Cutting-edge research, breakthrough technologies, future-ready solutions"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Uncompromising quality, continuous improvement, exceptional service"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Integrity",
      description: "Ethical practices, responsible AI, trustworthy partnerships"
    }
  ];

  const team = [
    {
      name: "Dr. Alexandra Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=256&h=256&fit=crop&crop=face",
      bio: "Former Goldman Sachs quantitative analyst with 15 years in algorithmic trading"
    },
    {
      name: "Marcus Thompson",
      role: "CTO & Co-Founder", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=256&h=256&fit=crop&crop=face",
      bio: "Ex-Google AI researcher specializing in machine learning and blockchain technology"
    },
    {
      name: "Sarah Rodriguez",
      role: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&fit=crop&crop=face",
      bio: "PhD in Computer Science from MIT, published 50+ papers on financial AI"
    },
    {
      name: "David Kim",
      role: "Head of Security",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop&crop=face",
      bio: "Cybersecurity expert with experience at Coinbase and regulatory compliance"
    }
  ];

  const blogPosts = [
    { title: "The Future of DeFi Trading", author: "Dr. Chen", date: "Dec 2024" },
    { title: "AI Ethics in Financial Markets", author: "Sarah R.", date: "Nov 2024" },
    { title: "Blockchain Security Best Practices", author: "David K.", date: "Nov 2024" },
    { title: "Market Psychology and AI", author: "Marcus T.", date: "Oct 2024" },
    { title: "Regulatory Compliance in Crypto", author: "Dr. Chen", date: "Oct 2024" },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 animate-slide-down">
              About <span className="gradient-text">Lunexa</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up">
              We're pioneering the next generation of cryptocurrency trading through 
              artificial intelligence, making sophisticated strategies accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-light tracking-tight mb-6">
                  Our <span className="text-highlight">Story</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2023 by a team of former Wall Street quants and Silicon Valley AI researchers, 
                  Lunexa emerged from a simple observation: traditional trading strategies were failing 
                  in the volatile crypto markets.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  After losing significant personal investments to market manipulation and emotional trading, 
                  our founders realized that only advanced AI could consistently navigate the complex, 
                  24/7 cryptocurrency landscape.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, our algorithms process over 10 billion data points daily, helping thousands of 
                  traders achieve consistent profits while they sleep.
                </p>
              </div>
              <div className="relative">
                <GlassCard className="p-8 text-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">$2.4B+</div>
                      <div className="text-sm text-muted-foreground">Trading Volume</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">50k+</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">127%</div>
                      <div className="text-sm text-muted-foreground">Avg. Annual ROI</div>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Our <span className="text-highlight">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision we make and every line of code we write
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <GlassCard 
                key={index} 
                className="p-8 group cursor-pointer"
                variant="hover"
              >
                <div className="text-primary mb-4 group-hover:animate-pulse">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 text-foreground">
                  <span className="text-highlight">{value.title}</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Meet Our <span className="text-highlight">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              World-class experts in AI, finance, and blockchain technology
            </p>
          </div>

          {/* Horizontal Scrollable Team Cards */}
          <div className="relative">
            <div className="overflow-x-auto pb-6">
              <div className="flex space-x-6 min-w-max px-4">
                {team.map((member, index) => (
                  <GlassCard 
                    key={index} 
                    className="flex-shrink-0 w-80 p-6 cursor-pointer group"
                    variant="hover"
                    onMouseEnter={() => setSelectedTeamMember(index)}
                    onMouseLeave={() => setSelectedTeamMember(null)}
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-48 object-cover glass transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-foreground">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </div>

          {/* Team Member Popup */}
          {selectedTeamMember !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div 
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                onClick={() => setSelectedTeamMember(null)}
              />
              <GlassCard className="relative z-10 p-8 max-w-md w-full">
                <div className="text-center">
                  <img 
                    src={team[selectedTeamMember].image} 
                    alt={team[selectedTeamMember].name}
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 glass border-2 border-primary/30"
                  />
                  <h3 className="text-2xl font-medium mb-2 text-foreground">
                    {team[selectedTeamMember].name}
                  </h3>
                  <p className="text-primary mb-4">{team[selectedTeamMember].role}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {team[selectedTeamMember].bio}
                  </p>
                  <Button variant="outline" size="sm">
                    View LinkedIn
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </GlassCard>
            </div>
          )}
        </div>
      </section>

      {/* Infinite Marquee Blog Posts */}
      <section className="py-20 overflow-hidden">
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Latest <span className="text-highlight">Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Thoughts and research from our team
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="animate-marquee whitespace-nowrap">
            <div className="inline-flex space-x-6">
              {[...blogPosts, ...blogPosts, ...blogPosts].map((post, index) => (
                <GlassCard 
                  key={index} 
                  className="inline-block w-80 p-6 cursor-pointer group"
                  variant="hover"
                >
                  <h3 className="text-lg font-medium mb-2 text-foreground whitespace-normal">
                    {post.title}
                  </h3>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;