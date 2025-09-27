import { useState, useEffect, useRef } from 'react';

interface HeatmapData {
  x: number;
  y: number;
  intensity: number;
  timestamp: number;
}

interface ClickData {
  x: number;
  y: number;
  element: string;
  timestamp: number;
}

export default function AnalyticsHeatmap() {
  const [heatmapData, setHeatmapData] = useState<HeatmapData[]>([]);
  const [clickData, setClickData] = useState<ClickData[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [showHeatmap, setShowHeatmap] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load existing data
    const savedHeatmap = localStorage.getItem('heatmapData');
    const savedClicks = localStorage.getItem('clickData');
    
    if (savedHeatmap) {
      setHeatmapData(JSON.parse(savedHeatmap));
    }
    if (savedClicks) {
      setClickData(JSON.parse(savedClicks));
    }

    // Start recording on page load
    setIsRecording(true);
  }, []);

  useEffect(() => {
    if (!isRecording) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Only record if within container bounds
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        const newData: HeatmapData = {
          x: (x / rect.width) * 100, // Convert to percentage
          y: (y / rect.height) * 100,
          intensity: 1,
          timestamp: Date.now()
        };

        setHeatmapData(prev => {
          const updated = [...prev, newData].slice(-1000); // Keep last 1000 points
          localStorage.setItem('heatmapData', JSON.stringify(updated));
          return updated;
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const element = (e.target as HTMLElement).tagName;
      const newClick: ClickData = {
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
        element,
        timestamp: Date.now()
      };

      setClickData(prev => {
        const updated = [...prev, newClick].slice(-500); // Keep last 500 clicks
        localStorage.setItem('clickData', JSON.stringify(updated));
        return updated;
      });
    };

    const handleScroll = () => {
      // Track scroll depth
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      const scrollEvent = {
        type: 'scroll',
        depth: scrollPercent,
        timestamp: Date.now()
      };

      const scrollData = JSON.parse(localStorage.getItem('scrollData') || '[]');
      scrollData.push(scrollEvent);
      localStorage.setItem('scrollData', JSON.stringify(scrollData.slice(-100)));
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isRecording]);

  const generateHeatmapIntensity = () => {
    // Group nearby points and calculate intensity
    const gridSize = 20; // 20x20 grid
    const intensityMap: {[key: string]: number} = {};

    heatmapData.forEach(point => {
      const gridX = Math.floor(point.x / (100 / gridSize));
      const gridY = Math.floor(point.y / (100 / gridSize));
      const key = `${gridX}-${gridY}`;
      
      intensityMap[key] = (intensityMap[key] || 0) + point.intensity;
    });

    return intensityMap;
  };

  const getAnalyticsSummary = () => {
    const totalClicks = clickData.length;
    const uniqueElements = new Set(clickData.map(c => c.element)).size;
    const avgClickX = clickData.reduce((sum, c) => sum + c.x, 0) / totalClicks || 0;
    const avgClickY = clickData.reduce((sum, c) => sum + c.y, 0) / totalClicks || 0;

    const scrollData = JSON.parse(localStorage.getItem('scrollData') || '[]');
    const avgScrollDepth = scrollData.reduce((sum: number, s: any) => sum + s.depth, 0) / scrollData.length || 0;

    return {
      totalClicks,
      uniqueElements,
      avgClickPosition: { x: avgClickX, y: avgClickY },
      avgScrollDepth,
      heatmapPoints: heatmapData.length
    };
  };

  const clearData = () => {
    setHeatmapData([]);
    setClickData([]);
    localStorage.removeItem('heatmapData');
    localStorage.removeItem('clickData');
    localStorage.removeItem('scrollData');
  };

  const exportData = () => {
    const data = {
      heatmap: heatmapData,
      clicks: clickData,
      scroll: JSON.parse(localStorage.getItem('scrollData') || '[]'),
      summary: getAnalyticsSummary(),
      timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const intensityMap = generateHeatmapIntensity();
  const summary = getAnalyticsSummary();

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {/* Control Panel */}
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 space-y-2">
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
          <span className="text-sm font-medium">
            {isRecording ? 'Recording' : 'Paused'}
          </span>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setIsRecording(!isRecording)}
            className="px-3 py-1 text-xs bg-slate-100 hover:bg-slate-200 rounded transition-colors"
          >
            {isRecording ? 'Pause' : 'Resume'}
          </button>
          <button
            onClick={() => setShowHeatmap(!showHeatmap)}
            className="px-3 py-1 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors"
          >
            {showHeatmap ? 'Hide' : 'Show'} Heatmap
          </button>
        </div>
      </div>

      {/* Analytics Summary */}
      <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 space-y-2">
        <h4 className="text-sm font-semibold text-slate-900">Analytics Summary</h4>
        <div className="text-xs space-y-1 text-slate-600">
          <div>Total Clicks: {summary.totalClicks}</div>
          <div>Elements Clicked: {summary.uniqueElements}</div>
          <div>Avg Scroll Depth: {summary.avgScrollDepth.toFixed(1)}%</div>
          <div>Heatmap Points: {summary.heatmapPoints}</div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={clearData}
            className="px-2 py-1 text-xs bg-red-100 hover:bg-red-200 text-red-700 rounded transition-colors"
          >
            Clear
          </button>
          <button
            onClick={exportData}
            className="px-2 py-1 text-xs bg-green-100 hover:bg-green-200 text-green-700 rounded transition-colors"
          >
            Export
          </button>
        </div>
      </div>

      {/* Heatmap Overlay */}
      {showHeatmap && (
        <div
          ref={containerRef}
          className="fixed inset-0 pointer-events-none z-40"
        >
          {Object.entries(intensityMap).map(([key, intensity]) => {
            const [gridX, gridY] = key.split('-').map(Number);
            const x = (gridX / 20) * 100;
            const y = (gridY / 20) * 100;
            const opacity = Math.min(intensity / 10, 0.8); // Normalize intensity
            
            return (
              <div
                key={key}
                className="absolute w-5 h-5 bg-red-500 rounded-full pointer-events-none"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  opacity,
                  transform: 'translate(-50%, -50%)'
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
