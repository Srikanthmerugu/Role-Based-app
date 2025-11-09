import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";
import demoVideo from '../../assets/video (11).mp4'

const VideoDemoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  // Replace with your actual video path

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    }
  };

  return (
    <div className="relative py-24 bg-gradient-to-br from-gray-900 to-amber-900/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-300/40 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        



         <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-400 to-yellow-400 bg-clip-text text-transparent">
               See Our
            </span>
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent animate-shine">
              {" "}Service in Action
            </span>
          </h2>






          <p className="text-lg sm:text-xl text-amber-400/80 max-w-2xl mx-auto mb-2">
            Watch how we deliver happiness right to your doorstep
          </p>
          <div className="w-24 h-1 bg-amber-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Video Container */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-white/20 backdrop-blur-lg border-2 border-amber-400/50 rounded-3xl shadow-2xl overflow-hidden group hover:border-amber-500 hover:shadow-amber-500/30 transition-all duration-500">
            
            {/* Video Player */}
            <div 
              className="relative aspect-video"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={demoVideo}
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                onClick={togglePlay}
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 via-transparent to-amber-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Play/Pause Button Center */}
              {!isPlaying && (
                <motion.button
                  className="absolute inset-0 flex items-center justify-center w-full h-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  onClick={togglePlay}
                >
                  <div className="w-20 h-20 bg-amber-600/90 rounded-full flex items-center justify-center shadow-2xl border-2 border-amber-500 backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </motion.button>
              )}

              {/* Video Controls */}
              <motion.div
                className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black/50 backdrop-blur-lg rounded-2xl px-4 py-3 border border-amber-500/30 transition-all duration-300 ${
                  showControls ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {/* Play/Pause */}
                <motion.button
                  onClick={togglePlay}
                  className="p-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                </motion.button>

                {/* Mute/Unmute */}
                <motion.button
                  onClick={toggleMute}
                  className="p-2 rounded-lg bg-amber-600/50 hover:bg-amber-600 text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                </motion.button>

                {/* Fullscreen */}
                <motion.button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-lg bg-amber-600/50 hover:bg-amber-600 text-white transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Maximize className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Video Status Indicator */}
              <div className="absolute top-4 right-4">
                <motion.div
                  className={`px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm border ${
                    isPlaying 
                      ? 'bg-green-500/20 text-green-700 border-green-500/30' 
                      : 'bg-amber-500/20 text-amber-700 border-amber-500/30'
                  }`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  {isPlaying ? 'Playing' : 'Paused'}
                </motion.div>
              </div>
            </div>

            {/* Video Info Bar */}
            <div className="bg-white/10 backdrop-blur-lg border-t border-amber-400/30 p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-bold text-amber-900 mb-1">
                    Gomoto Delivery Service Demo
                  </h3>
                  <p className="text-amber-800/70 text-sm">
                    See how we ensure fast, safe, and reliable food delivery
                  </p>
                </div>
                
                <motion.button
                  onClick={togglePlay}
                  className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-xl hover:bg-amber-700 border border-amber-700 transition-all duration-300 flex items-center gap-2 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4" />
                      Pause Demo
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 ml-0.5" />
                      Play Demo
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

      
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        
        /* Custom video controls styling */
        video::-webkit-media-controls {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default VideoDemoSection;