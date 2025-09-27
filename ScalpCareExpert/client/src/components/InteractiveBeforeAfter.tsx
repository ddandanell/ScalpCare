import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterImage {
  before: string;
  after: string;
  title: string;
  description: string;
  clientName: string;
  treatment: string;
  duration: string;
}

interface InteractiveBeforeAfterProps {
  images: BeforeAfterImage[];
}

export default function InteractiveBeforeAfter({ images }: InteractiveBeforeAfterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const currentImage = images[currentIndex];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    const handleGlobalTouchEnd = () => setIsDragging(false);

    document.addEventListener('mouseup', handleGlobalMouseUp);
    document.addEventListener('touchend', handleGlobalTouchEnd);

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('touchend', handleGlobalTouchEnd);
    };
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setSliderPosition(50);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setSliderPosition(50);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Image Counter */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 micro-bounce"
            disabled={images.length <= 1}
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <span className="text-sm font-medium text-slate-600">
            {currentIndex + 1} of {images.length}
          </span>
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 micro-bounce"
            disabled={images.length <= 1}
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
        
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setSliderPosition(50);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-emerald-500 scale-125'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Interactive Before/After Container */}
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-col-resize group"
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        {/* Before Image */}
        <div className="absolute inset-0">
          <img
            src={currentImage.before}
            alt={`Before: ${currentImage.title}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={currentImage.after}
            alt={`After: ${currentImage.title}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
        </div>

        {/* Slider Line */}
        <div
          ref={sliderRef}
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 transition-all duration-200"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-slate-300 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          Before
        </div>
        <div className="absolute top-4 right-4 bg-emerald-500/90 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
          After
        </div>

        {/* Hover Overlay */}
        {isHovering && (
          <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-slate-700">
              Drag to compare
            </div>
          </div>
        )}
      </div>

      {/* Image Details */}
      <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{currentImage.title}</h3>
            <p className="text-slate-600 mb-4">{currentImage.description}</p>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-medium">Client:</span>
              <span>{currentImage.clientName}</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="font-medium text-slate-700">Treatment:</span>
              <span className="text-slate-600">{currentImage.treatment}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-slate-100">
              <span className="font-medium text-slate-700">Duration:</span>
              <span className="text-slate-600">{currentImage.duration}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-medium text-slate-700">Results:</span>
              <span className="text-emerald-600 font-semibold">Excellent</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
