import { useState, useEffect } from 'react';
import { CheckCircle, Circle, Clock, Target, TrendingUp } from 'lucide-react';

interface ProgressStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  current: boolean;
  estimatedTime: string;
}

export default function ProgressTracker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps: ProgressStep[] = [
    {
      id: 'consultation',
      title: 'Initial Consultation',
      description: 'Book your free assessment and discuss your hair concerns',
      completed: false,
      current: true,
      estimatedTime: '5 minutes'
    },
    {
      id: 'assessment',
      title: 'Scalp Analysis',
      description: 'Professional microscopic examination of your scalp health',
      completed: false,
      current: false,
      estimatedTime: '30 minutes'
    },
    {
      id: 'treatment',
      title: 'Treatment Plan',
      description: 'Personalized treatment strategy based on your results',
      completed: false,
      current: false,
      estimatedTime: '15 minutes'
    },
    {
      id: 'followup',
      title: 'Follow-up Care',
      description: 'Ongoing support and monitoring of your progress',
      completed: false,
      current: false,
      estimatedTime: 'Ongoing'
    }
  ];

  // Simulate progress updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          const newProgress = prev + Math.random() * 5;
          return Math.min(100, newProgress);
        }
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Update steps based on progress
  useEffect(() => {
    const progressPerStep = 100 / steps.length;
    const newCurrentStep = Math.floor(progress / progressPerStep);
    setCurrentStep(Math.min(newCurrentStep, steps.length - 1));
  }, [progress]);

  const getStepStatus = (index: number) => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'current';
    return 'pending';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
          <Target className="w-4 h-4" />
          Your Journey Progress
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">
          Track Your Hair Health Journey
        </h3>
        <p className="text-slate-600">
          Follow your personalized treatment plan and see your progress in real-time
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-700">Overall Progress</span>
          <span className="text-sm font-bold text-emerald-600">{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full transition-all duration-1000 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-6">
        {steps.map((step, index) => {
          const status = getStepStatus(index);
          const isCompleted = status === 'completed';
          const isCurrent = status === 'current';
          const isPending = status === 'pending';

          return (
            <div
              key={step.id}
              className={`flex items-start gap-4 p-6 rounded-xl transition-all duration-300 ${
                isCurrent 
                  ? 'bg-emerald-50 border-2 border-emerald-200 shadow-lg' 
                  : isCompleted
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-slate-50 border border-slate-200'
              }`}
            >
              {/* Step Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                isCompleted
                  ? 'bg-green-500 text-white'
                  : isCurrent
                  ? 'bg-emerald-500 text-white animate-pulse'
                  : 'bg-slate-300 text-slate-600'
              }`}>
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6" />
                ) : isCurrent ? (
                  <TrendingUp className="w-6 h-6" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className={`text-lg font-semibold ${
                    isCurrent ? 'text-emerald-700' : isCompleted ? 'text-green-700' : 'text-slate-700'
                  }`}>
                    {step.title}
                  </h4>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>{step.estimatedTime}</span>
                  </div>
                </div>
                <p className={`text-sm ${
                  isCurrent ? 'text-emerald-600' : isCompleted ? 'text-green-600' : 'text-slate-600'
                }`}>
                  {step.description}
                </p>

                {/* Current Step Progress */}
                {isCurrent && (
                  <div className="mt-3">
                    <div className="w-full bg-white/50 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${(progress % 25) * 4}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Status Badge */}
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                isCompleted
                  ? 'bg-green-100 text-green-700'
                  : isCurrent
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                {isCompleted ? 'Completed' : isCurrent ? 'In Progress' : 'Pending'}
              </div>
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-300">
          View Details
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-600 transition-all duration-300 micro-bounce">
          Continue Journey
        </button>
      </div>
    </div>
  );
}
