import React, { useState, useEffect } from 'react';
import { Brain, TrendingUp, Network } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';

// Mystery Element 1: AI Neural Network
export const AINeuralNetwork: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="hidden lg:block fixed bottom-8 right-8 z-30">
      <GlassCard 
        className="p-6 w-64 cursor-pointer transform transition-all duration-300 hover:scale-105"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        variant="hover"
      >
        <div className="relative overflow-hidden">
          <div className="flex items-center space-x-3 mb-4">
            <Brain className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">AI Neural Hub</span>
          </div>
          
          {/* Neural Network Visualization */}
          <div className="relative h-32">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/60 rounded-full animate-pulse"
                style={{
                  left: `${20 + (i % 3) * 30}%`,
                  top: `${20 + Math.floor(i / 3) * 25}%`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
            
            {/* Mouse follower particle */}
            {isVisible && (
              <div
                className="absolute w-1 h-1 bg-rose rounded-full animate-pulse"
                style={{
                  left: mousePos.x,
                  top: mousePos.y,
                  transform: 'translate(-50%, -50%)',
                }}
              />
            )}
          </div>
          
          <div className="text-xs text-muted-foreground">
            Real-time AI processing: 
            <span className="text-primary ml-1">42.7k ops/sec</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

// Mystery Element 2: Live Market Data
export const LiveMarketData: React.FC = () => {
  const [prices, setPrices] = useState({
    btc: 45234.56,
    eth: 3124.78,
    ada: 1.23,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setPrices(prev => ({
        btc: prev.btc + (Math.random() - 0.5) * 100,
        eth: prev.eth + (Math.random() - 0.5) * 50,
        ada: prev.ada + (Math.random() - 0.5) * 0.05,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:block fixed top-24 right-8 z-30">
      <GlassCard className="p-4 w-56 animate-float" variant="featured">
        <div className="flex items-center space-x-2 mb-3">
          <TrendingUp className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary">Live Markets</span>
        </div>
        
        <div className="space-y-2">
          {Object.entries(prices).map(([coin, price]) => (
            <div key={coin} className="flex justify-between text-xs">
              <span className="text-muted-foreground uppercase">{coin}</span>
              <span className="text-foreground font-medium">
                ${price.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        
        <div className="mt-3 pt-2 border-t border-border/50">
          <div className="text-xs text-primary">
            Portfolio: +12.4% 
            <span className="text-muted-foreground ml-1">(24h)</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

// Mystery Element 3: Blockchain Infrastructure
export const BlockchainInfrastructure: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [dataFlow, setDataFlow] = useState(false);

  const nodes = [
    { id: 1, x: 20, y: 30, label: 'Validator' },
    { id: 2, x: 70, y: 20, label: 'Router' },
    { id: 3, x: 50, y: 60, label: 'Oracle' },
    { id: 4, x: 80, y: 70, label: 'Bridge' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDataFlow(prev => !prev);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:block fixed bottom-8 left-8 z-30">
      <GlassCard className="p-6 w-72 h-48" variant="hover">
        <div className="flex items-center space-x-2 mb-4">
          <Network className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium text-primary">Blockchain Network</span>
        </div>
        
        <div className="relative h-32">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {nodes.map((node, i) => 
              nodes.slice(i + 1).map((nextNode, j) => (
                <line
                  key={`${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${nextNode.x}%`}
                  y2={`${nextNode.y}%`}
                  stroke="rgba(212, 175, 55, 0.3)"
                  strokeWidth="1"
                  className={dataFlow ? 'animate-pulse' : ''}
                />
              ))
            )}
          </svg>
          
          {/* Nodes */}
          {nodes.map((node) => (
            <div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              onClick={() => setActiveNode(activeNode === node.id ? null : node.id)}
            >
              <div className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeNode === node.id 
                  ? 'bg-primary border-primary shadow-lg shadow-primary/50' 
                  : 'bg-primary/60 border-primary/60 hover:bg-primary hover:border-primary'
              }`} />
              {activeNode === node.id && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 
                               bg-popover border border-border/50 rounded px-2 py-1 text-xs 
                               text-popover-foreground whitespace-nowrap">
                  {node.label}
                </div>
              )}
            </div>
          ))}
          
          {/* Data Flow Particles */}
          {dataFlow && (
            <div className="absolute w-1 h-1 bg-rose rounded-full animate-ping"
                 style={{ left: '20%', top: '30%' }} />
          )}
        </div>
      </GlassCard>
    </div>
  );
};