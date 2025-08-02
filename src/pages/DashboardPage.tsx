import React, { useState, useEffect } from 'react';
import { GlassCard } from '@/components/ui/glass-card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  BarChart3, 
  Activity,
  Wallet,
  Bitcoin,
  RefreshCw,
  Settings,
  Download,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const [portfolio, setPortfolio] = useState({
    totalBalance: 325980.65,
    totalProfit: 47280.23,
    profitPercentage: 16.9,
    dayChange: 2340.89,
    dayChangePercentage: 0.72
  });

  const [cryptoData, setCryptoData] = useState([
    { symbol: 'BTC', name: 'Bitcoin', price: 67580.50, change: 2.3, amount: 0.48 },
    { symbol: 'ETH', name: 'Ethereum', price: 3240.80, change: -1.2, amount: 2.15 },
    { symbol: 'ADA', name: 'Cardano', price: 0.45, change: 5.7, amount: 12000 },
    { symbol: 'SOL', name: 'Solana', price: 145.60, change: 3.1, amount: 45 }
  ]);

  const [aiInsights, setAiInsights] = useState([
    { type: 'buy', asset: 'ETH', confidence: 87, reason: 'Technical breakout pattern detected' },
    { type: 'sell', asset: 'BTC', confidence: 73, reason: 'Resistance level reached' },
    { type: 'hold', asset: 'ADA', confidence: 92, reason: 'Strong accumulation phase' }
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoData(prev => prev.map(crypto => ({
        ...crypto,
        price: crypto.price + (Math.random() - 0.5) * crypto.price * 0.01,
        change: crypto.change + (Math.random() - 0.5) * 2
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <section className="py-8 border-b border-border/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-2">
                Analytics <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-muted-foreground">Real-time portfolio insights powered by AI</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="default" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <GlassCard className="p-6" variant="featured">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Wallet className="w-6 h-6 text-primary" />
                </div>
                <div className={`flex items-center text-sm ${portfolio.dayChangePercentage >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {portfolio.dayChangePercentage >= 0 ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                  {Math.abs(portfolio.dayChangePercentage)}%
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  ${portfolio.totalBalance.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Balance</div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-green-500/20">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div className="text-sm text-green-400">+{portfolio.profitPercentage}%</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  +${portfolio.totalProfit.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Total Profit</div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Activity className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-sm text-primary">Live</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">AI Trading</div>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-purple-500/20">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-sm text-muted-foreground">Today</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground mb-1">
                  +${portfolio.dayChange.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Daily Change</div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Charts and Data */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Portfolio Performance Chart */}
            <div className="lg:col-span-2">
              <GlassCard className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-medium text-foreground">Portfolio Performance</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">1D</Button>
                    <Button variant="default" size="sm">1W</Button>
                    <Button variant="outline" size="sm">1M</Button>
                    <Button variant="outline" size="sm">1Y</Button>
                  </div>
                </div>
                
                {/* Simulated Chart Area */}
                <div className="relative h-64 mb-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-lg"></div>
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="var(--primary)" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    
                    {/* Chart line */}
                    <polyline
                      fill="none"
                      stroke="var(--primary)"
                      strokeWidth="2"
                      points="20,160 60,140 100,120 140,100 180,80 220,90 260,70 300,60 340,50 380,40"
                    />
                    
                    {/* Fill area */}
                    <polygon
                      fill="url(#chartGradient)"
                      points="20,160 60,140 100,120 140,100 180,80 220,90 260,70 300,60 340,50 380,40 380,180 20,180"
                    />
                  </svg>
                </div>
                
                <div className="grid grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <div className="text-primary font-medium">$270,560</div>
                    <div className="text-muted-foreground">Jan</div>
                  </div>
                  <div>
                    <div className="text-primary font-medium">$298,340</div>
                    <div className="text-muted-foreground">Feb</div>
                  </div>
                  <div>
                    <div className="text-primary font-medium">$315,890</div>
                    <div className="text-muted-foreground">Mar</div>
                  </div>
                  <div>
                    <div className="text-primary font-medium">$325,980</div>
                    <div className="text-muted-foreground">Now</div>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* AI Insights */}
            <div>
              <GlassCard className="p-6">
                <h3 className="text-xl font-medium text-foreground mb-6">AI Trading Insights</h3>
                <div className="space-y-4">
                  {aiInsights.map((insight, index) => (
                    <div key={index} className="p-4 glass rounded-lg border border-border/20">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${
                            insight.type === 'buy' ? 'bg-green-400' :
                            insight.type === 'sell' ? 'bg-red-400' : 'bg-yellow-400'
                          }`}></div>
                          <span className="font-medium text-foreground capitalize">{insight.type} {insight.asset}</span>
                        </div>
                        <span className="text-sm text-primary">{insight.confidence}%</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{insight.reason}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Holdings */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <GlassCard className="p-6">
            <h3 className="text-xl font-medium text-foreground mb-6">Current Holdings</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/20">
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Asset</th>
                    <th className="text-right py-3 px-4 text-muted-foreground font-medium">Price</th>
                    <th className="text-right py-3 px-4 text-muted-foreground font-medium">Holdings</th>
                    <th className="text-right py-3 px-4 text-muted-foreground font-medium">Value</th>
                    <th className="text-right py-3 px-4 text-muted-foreground font-medium">24h Change</th>
                  </tr>
                </thead>
                <tbody>
                  {cryptoData.map((crypto, index) => (
                    <tr key={index} className="border-b border-border/10 hover:bg-muted/5 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                            {crypto.symbol === 'BTC' && <Bitcoin className="w-4 h-4 text-primary" />}
                            {crypto.symbol === 'ETH' && <div className="w-4 h-4 rounded-full bg-blue-400"></div>}
                            {crypto.symbol !== 'BTC' && crypto.symbol !== 'ETH' && 
                              <div className="w-4 h-4 rounded-full bg-primary"></div>}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{crypto.symbol}</div>
                            <div className="text-sm text-muted-foreground">{crypto.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-right text-foreground">
                        ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-4 px-4 text-right text-foreground">
                        {crypto.amount.toLocaleString(undefined, { maximumFractionDigits: 4 })}
                      </td>
                      <td className="py-4 px-4 text-right text-foreground font-medium">
                        ${(crypto.price * crypto.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <div className={`flex items-center justify-end gap-1 ${
                          crypto.change >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {crypto.change >= 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                          {Math.abs(crypto.change).toFixed(1)}%
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Trading Activity */}
      <section className="py-8 pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <GlassCard className="p-6">
              <h3 className="text-xl font-medium text-foreground mb-6">Recent Trades</h3>
              <div className="space-y-4">
                {[
                  { type: 'buy', asset: 'BTC', amount: '0.125', price: '$67,340', time: '2 min ago' },
                  { type: 'sell', asset: 'ETH', amount: '0.5', price: '$3,245', time: '15 min ago' },
                  { type: 'buy', asset: 'ADA', amount: '2000', price: '$0.43', time: '1 hour ago' },
                  { type: 'sell', asset: 'SOL', amount: '10', price: '$142', time: '2 hours ago' }
                ].map((trade, index) => (
                  <div key={index} className="flex items-center justify-between p-3 glass rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        trade.type === 'buy' ? 'bg-green-400' : 'bg-red-400'
                      }`}></div>
                      <div>
                        <div className="font-medium text-foreground capitalize">
                          {trade.type} {trade.asset}
                        </div>
                        <div className="text-sm text-muted-foreground">{trade.amount} @ {trade.price}</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{trade.time}</div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-xl font-medium text-foreground mb-6">Market Overview</h3>
              <div className="space-y-4">
                {[
                  { name: 'Fear & Greed Index', value: '67', status: 'Greed', color: 'text-yellow-400' },
                  { name: 'Market Cap', value: '$2.1T', status: '+2.3%', color: 'text-green-400' },
                  { name: 'Volume 24h', value: '$89B', status: '-5.2%', color: 'text-red-400' },
                  { name: 'BTC Dominance', value: '52.4%', status: '+0.8%', color: 'text-green-400' }
                ].map((metric, index) => (
                  <div key={index} className="flex items-center justify-between p-3 glass rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">{metric.name}</div>
                      <div className="text-2xl font-bold text-primary">{metric.value}</div>
                    </div>
                    <div className={`text-sm font-medium ${metric.color}`}>
                      {metric.status}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;