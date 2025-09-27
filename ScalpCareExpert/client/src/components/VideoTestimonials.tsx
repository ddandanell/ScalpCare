import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Pause, Volume2, VolumeX, Maximize, Star, Quote } from 'lucide-react';

interface VideoTestimonial {
  id: number;
  name: string;
  location: string;
  treatment: string;
  duration: string;
  rating: number;
  thumbnail: string;
  videoUrl: string;
  quote: string;
  results: string[];
}

export default function VideoTestimonials() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const testimonials: VideoTestimonial[] = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Dubai Marina",
      treatment: "Essential Scalp Assessment",
      duration: "3 months",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
      quote: "The results exceeded my expectations. My hair is now healthier than it's been in years!",
      results: ["85% improvement in hair thickness", "Eliminated scalp dryness", "Reduced hair breakage by 90%"]
    },
    {
      id: 2,
      name: "Ahmed A.",
      location: "Jumeirah",
      treatment: "Premium Lifestyle Consultation",
      duration: "4 months",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4",
      quote: "As an expat, I was struggling with hair changes. ScalpCare Expert helped me adapt perfectly to Dubai's climate.",
      results: ["Complete hair shock recovery", "Adapted to Dubai climate", "Improved scalp health"]
    },
    {
      id: 3,
      name: "Emma T.",
      location: "Downtown Dubai",
      treatment: "VIP Executive Hair Health Audit",
      duration: "6 months",
      rating: 5,
      thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face",
      videoUrl: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_5mb.mp4",
      quote: "The VIP consultation was worth every dirham. They understood my busy lifestyle and created a plan that actually works.",
      results: ["Optimized for executive lifestyle", "Reduced stress-related hair loss", "Improved hair quality"]
    }
  ];

  const currentTestimonial = testimonials[currentVideo];

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        if (videoRef.current.requestFullscreen) {
          videoRef.current.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % testimonials.length);
    setIsPlaying(false);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsPlaying(false);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => setIsPlaying(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('ended', handleEnded);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, [currentVideo]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            <Quote className="w-4 h-4" />
            Video Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Hear From Our
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-500 bg-clip-text text-transparent">
              Happy Clients
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Watch real clients share their transformation stories and see the results for yourself.
          </p>
        </div>

        {/* Video Player */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="relative aspect-video bg-slate-900">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster={currentTestimonial.thumbnail}
                  muted={isMuted}
                >
                  <source src={currentTestimonial.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button
                    onClick={togglePlayPause}
                    className="w-16 h-16 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 micro-bounce"
                    size="icon"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8" />
                    ) : (
                      <Play className="w-8 h-8 ml-1" />
                    )}
                  </Button>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={toggleMute}
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </Button>
                    <Button
                      onClick={toggleFullscreen}
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    >
                      <Maximize className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      onClick={prevVideo}
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </Button>
                    <Button
                      onClick={nextVideo}
                      variant="ghost"
                      size="icon"
                      className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Info */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Client Info */}
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={currentTestimonial.thumbnail}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{currentTestimonial.name}</h3>
                    <p className="text-slate-600">{currentTestimonial.location}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-slate-600">
                  <p><span className="font-medium">Treatment:</span> {currentTestimonial.treatment}</p>
                  <p><span className="font-medium">Duration:</span> {currentTestimonial.duration}</p>
                </div>
              </CardContent>
            </Card>

            {/* Quote & Results */}
            <Card className="p-6">
              <CardContent className="p-0">
                <blockquote className="text-lg text-slate-700 italic mb-4">
                  "{currentTestimonial.quote}"
                </blockquote>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Results Achieved:</h4>
                  <ul className="space-y-1">
                    {currentTestimonial.results.map((result, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentVideo(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentVideo
                  ? 'ring-4 ring-emerald-500 scale-110'
                  : 'hover:scale-105'
              }`}
            >
              <img
                src={testimonial.thumbnail}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
              {index === currentVideo && (
                <div className="absolute inset-0 bg-emerald-500/20 flex items-center justify-center">
                  <Play className="w-6 h-6 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
