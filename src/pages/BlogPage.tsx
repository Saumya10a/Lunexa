import React, { useState } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  TrendingUp,
  Clock,
  Tag,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [currentTrending, setCurrentTrending] = useState(0);

  const featuredPost = {
    title: "The Future of DeFi: How AI is Revolutionizing Decentralized Finance",
    excerpt: "Explore how artificial intelligence is transforming DeFi protocols, enabling smarter liquidity management, and creating new opportunities for yield optimization.",
    author: "Dr. Alexandra Chen",
    date: "December 15, 2024",
    readTime: "8 min read",
    image: "/api/placeholder/800/400",
    tags: ["AI", "DeFi", "Future"]
  };

  const blogPosts = [
    {
      title: "Understanding Market Sentiment Analysis in Crypto Trading",
      excerpt: "Learn how our AI algorithms analyze social media, news, and market data to predict price movements.",
      author: "Marcus Thompson",
      date: "December 12, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["Trading", "AI", "Analysis"]
    },
    {
      title: "Risk Management Strategies for Volatile Markets",
      excerpt: "Discover proven techniques to protect your portfolio during market downturns.",
      author: "Sarah Rodriguez",
      date: "December 10, 2024",
      readTime: "5 min read",
      image: "/api/placeholder/400/250",
      tags: ["Risk", "Strategy", "Portfolio"]
    },
    {
      title: "The Psychology of Automated Trading",
      excerpt: "Why removing emotions from trading decisions leads to better outcomes.",
      author: "David Kim",
      date: "December 8, 2024",
      readTime: "7 min read",
      image: "/api/placeholder/400/250",
      tags: ["Psychology", "Automation", "Trading"]
    },
    {
      title: "Blockchain Security: Best Practices for 2024",
      excerpt: "Essential security measures every crypto trader should implement.",
      author: "David Kim",
      date: "December 5, 2024",
      readTime: "9 min read",
      image: "/api/placeholder/400/250",
      tags: ["Security", "Blockchain", "Safety"]
    },
    {
      title: "Yield Farming vs. Traditional Trading",
      excerpt: "Comparing different investment strategies in the crypto ecosystem.",
      author: "Dr. Alexandra Chen",
      date: "December 3, 2024",
      readTime: "6 min read",
      image: "/api/placeholder/400/250",
      tags: ["DeFi", "Yield", "Comparison"]
    },
    {
      title: "Machine Learning Models in Price Prediction",
      excerpt: "A deep dive into the algorithms that power our trading predictions.",
      author: "Sarah Rodriguez",
      date: "December 1, 2024",
      readTime: "10 min read",
      image: "/api/placeholder/400/250",
      tags: ["ML", "Prediction", "Technology"]
    }
  ];

  const trendingPosts = [
    {
      title: "Bitcoin ETF Approval Impact Analysis",
      views: "12.5k",
      image: "/api/placeholder/200/120"
    },
    {
      title: "Ethereum 2.0 Staking Rewards Guide",
      views: "8.3k",
      image: "/api/placeholder/200/120"
    },
    {
      title: "Top 10 DeFi Protocols to Watch",
      views: "15.2k",
      image: "/api/placeholder/200/120"
    },
    {
      title: "NFT Market Trends Q4 2024",
      views: "6.8k",
      image: "/api/placeholder/200/120"
    }
  ];

  const tags = ["AI", "DeFi", "Trading", "Security", "Analysis", "Strategy", "Technology", "Psychology"];

  const filteredPosts = selectedTag 
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6 animate-slide-down">
              Lunexa <span className="gradient-text">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up">
              Expert analysis, market insights, and the latest developments in 
              AI-powered cryptocurrency trading.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <GlassCard className="max-w-6xl mx-auto overflow-hidden group cursor-pointer" variant="featured">
            <div className="lg:grid lg:grid-cols-2 gap-8">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover glass transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary/90 text-background px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredPost.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-2xl lg:text-3xl font-medium mb-4 text-foreground leading-tight">
                  {featuredPost.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Tags Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTag === null 
                    ? 'bg-primary text-background shadow-lg shadow-primary/30' 
                    : 'bg-muted/20 text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                All Posts
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedTag === tag 
                      ? 'bg-primary text-background shadow-lg shadow-primary/30' 
                      : 'bg-muted/20 text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  <span className="text-highlight">#{tag}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trending Posts Carousel */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-light tracking-tight">
                <TrendingUp className="inline w-6 h-6 mr-2 text-primary" />
                Trending Now
              </h2>
              
              <div className="flex space-x-2">
                <button 
                  onClick={() => setCurrentTrending(prev => 
                    prev === 0 ? trendingPosts.length - 1 : prev - 1
                  )}
                  className="p-2 glass rounded-full hover:bg-primary/10 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4 text-primary" />
                </button>
                <button 
                  onClick={() => setCurrentTrending(prev => 
                    (prev + 1) % trendingPosts.length
                  )}
                  className="p-2 glass rounded-full hover:bg-primary/10 transition-colors"
                >
                  <ChevronRight className="w-4 h-4 text-primary" />
                </button>
              </div>
            </div>

            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTrending * 25}%)` }}
              >
                {trendingPosts.map((post, index) => (
                  <div key={index} className="w-1/4 flex-shrink-0 px-2">
                    <GlassCard className="overflow-hidden group cursor-pointer" variant="hover">
                      <div className="relative">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-24 object-cover glass transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute bottom-2 right-2 bg-background/80 px-2 py-1 rounded text-xs text-primary">
                          {post.views} views
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-sm font-medium text-foreground leading-tight">
                          {post.title}
                        </h3>
                      </div>
                    </GlassCard>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <GlassCard 
                  key={index} 
                  className="overflow-hidden group cursor-pointer"
                  variant="hover"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover glass transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-lg font-medium mb-3 text-foreground leading-tight line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <Tag className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-medium text-foreground mb-2">
                  No posts found
                </h3>
                <p className="text-muted-foreground">
                  Try selecting a different tag or view all posts.
                </p>
              </div>
            )}

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Load More Articles
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Infinite Marquee for Recent Posts */}
      <section className="py-12 overflow-hidden border-t border-border/50">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-light text-muted-foreground">
            Recent Publications
          </h2>
        </div>
        
        <div className="relative">
          <div className="animate-marquee whitespace-nowrap hover:pause-animation">
            <div className="inline-flex space-x-6">
              {[...blogPosts, ...blogPosts].map((post, index) => (
                <div 
                  key={index} 
                  className="inline-block w-72 glass-card p-4 cursor-pointer group"
                >
                  <div className="flex space-x-3">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-16 h-16 object-cover glass rounded transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground whitespace-normal line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {post.author} • {post.readTime}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;