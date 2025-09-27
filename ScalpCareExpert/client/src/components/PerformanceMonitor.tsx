import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  memoryUsage: number;
  networkSpeed: string;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0,
    memoryUsage: 0,
    networkSpeed: 'unknown'
  });

  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    // Measure performance metrics
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      const fidEntries = performance.getEntriesByType('first-input');
      const clsEntries = performance.getEntriesByType('layout-shift');

      // Calculate metrics
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = lcpEntries[lcpEntries.length - 1]?.startTime || 0;
      const firstInputDelay = (fidEntries[0] as any)?.processingStart - fidEntries[0]?.startTime || 0;
      const cumulativeLayoutShift = clsEntries.reduce((sum, entry) => sum + (entry as any).value, 0);
      const timeToInteractive = navigation.domContentLoadedEventEnd - (navigation as any).navigationStart;

      // Memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

      // Network speed detection
      const connection = (navigator as any).connection;
      let networkSpeed = 'unknown';
      if (connection) {
        if (connection.effectiveType === '4g') networkSpeed = '4G';
        else if (connection.effectiveType === '3g') networkSpeed = '3G';
        else if (connection.effectiveType === '2g') networkSpeed = '2G';
        else if (connection.effectiveType === 'slow-2g') networkSpeed = 'Slow 2G';
      }

      const newMetrics: PerformanceMetrics = {
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        firstInputDelay,
        cumulativeLayoutShift,
        timeToInteractive,
        memoryUsage,
        networkSpeed
      };

      setMetrics(newMetrics);

      // Check for performance issues
      checkPerformanceIssues(newMetrics);
    };

    // Wait for page to fully load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Monitor performance over time
    const interval = setInterval(() => {
      measurePerformance();
    }, 30000); // Check every 30 seconds

    return () => {
      window.removeEventListener('load', measurePerformance);
      clearInterval(interval);
    };
  }, []);

  const checkPerformanceIssues = (metrics: PerformanceMetrics) => {
    const newAlerts: string[] = [];

    if (metrics.loadTime > 3000) {
      newAlerts.push('⚠️ Page load time is slow (>3s)');
    }

    if (metrics.firstContentfulPaint > 1800) {
      newAlerts.push('⚠️ First Contentful Paint is slow (>1.8s)');
    }

    if (metrics.largestContentfulPaint > 2500) {
      newAlerts.push('⚠️ Largest Contentful Paint is slow (>2.5s)');
    }

    if (metrics.firstInputDelay > 100) {
      newAlerts.push('⚠️ First Input Delay is high (>100ms)');
    }

    if (metrics.cumulativeLayoutShift > 0.1) {
      newAlerts.push('⚠️ Cumulative Layout Shift is high (>0.1)');
    }

    if (metrics.memoryUsage > 50 * 1024 * 1024) { // 50MB
      newAlerts.push('⚠️ High memory usage (>50MB)');
    }

    if (metrics.networkSpeed === '2G' || metrics.networkSpeed === 'Slow 2G') {
      newAlerts.push('⚠️ Slow network connection detected');
    }

    setAlerts(newAlerts);
  };

  const getPerformanceScore = () => {
    let score = 100;

    // Deduct points for poor performance
    if (metrics.loadTime > 3000) score -= 20;
    if (metrics.firstContentfulPaint > 1800) score -= 15;
    if (metrics.largestContentfulPaint > 2500) score -= 15;
    if (metrics.firstInputDelay > 100) score -= 10;
    if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    if (metrics.memoryUsage > 50 * 1024 * 1024) score -= 10;
    if (metrics.networkSpeed === '2G' || metrics.networkSpeed === 'Slow 2G') score -= 20;

    return Math.max(0, score);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const formatBytes = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const score = getPerformanceScore();

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-20 left-4 bg-slate-900 text-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
      >
        📊
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-4 w-80 z-50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-slate-500 hover:text-slate-700"
        >
          ✕
        </button>
      </div>

      {/* Performance Score */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-700">Performance Score</span>
          <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${
              score >= 90 ? 'bg-green-500' : score >= 70 ? 'bg-yellow-500' : 'bg-red-500'
            }`}
            style={{ width: `${score}%` }}
          ></div>
        </div>
      </div>

      {/* Metrics */}
      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Load Time:</span>
          <span className="font-medium">{metrics.loadTime.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">First Paint:</span>
          <span className="font-medium">{metrics.firstContentfulPaint.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Largest Paint:</span>
          <span className="font-medium">{metrics.largestContentfulPaint.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Input Delay:</span>
          <span className="font-medium">{metrics.firstInputDelay.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Layout Shift:</span>
          <span className="font-medium">{metrics.cumulativeLayoutShift.toFixed(3)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Memory:</span>
          <span className="font-medium">{formatBytes(metrics.memoryUsage)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Network:</span>
          <span className="font-medium">{metrics.networkSpeed}</span>
        </div>
      </div>

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="space-y-1">
          <h4 className="text-sm font-medium text-red-600">Performance Issues:</h4>
          {alerts.map((alert, index) => (
            <div key={index} className="text-xs text-red-600 bg-red-50 p-2 rounded">
              {alert}
            </div>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => window.location.reload()}
          className="px-3 py-1 text-xs bg-blue-100 hover:bg-blue-200 text-blue-700 rounded transition-colors"
        >
          Refresh
        </button>
        <button
          onClick={() => {
            const data = {
              metrics,
              score,
              alerts,
              timestamp: new Date().toISOString()
            };
            console.log('Performance Data:', data);
          }}
          className="px-3 py-1 text-xs bg-green-100 hover:bg-green-200 text-green-700 rounded transition-colors"
        >
          Log Data
        </button>
      </div>
    </div>
  );
}
