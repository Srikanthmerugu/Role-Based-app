import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Clock, Shield, Truck, Zap, Heart, MapPin, Play, Pause } from "lucide-react";
import video from "../../assets/0_Delivery_Food_Delivery_3840x2160 (1).mp4";

export default function LandingScreen() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [showHero, setShowHero] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        const enable = () => {
          video.play();
          setIsPlaying(true);
          document.removeEventListener("click", enable);
        };
        document.addEventListener("click", enable);
      }
    };

    video.addEventListener("loadeddata", playVideo);

    const handleEnd = () => {
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(() => setShowHero(true), 800);
      }, 500);
    };

    video.addEventListener("ended", handleEnd);

    return () => {
      video.removeEventListener("ended", handleEnd);
    };
  }, []);

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

  const brandName = ["G", "O", "M", "O", "T", "O"];
  const letterVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8, rotateX: 90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: { 
        delay: i * 0.2, 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1],
        type: "spring",
        stiffness: 100
      },
    }),
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-yellow-300/10 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-6 w-full h-full">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border border-yellow-200/20"></div>
            ))}
          </div>
        </div>

        {/* Floating Shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'bg-yellow-400/20' : 
              i % 3 === 1 ? 'bg-amber-500/15' : 'bg-yellow-300/10'
            }`}
            style={{
              width: Math.random() * 120 + 30,
              height: Math.random() * 120 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 40 - 20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key="landing"
            className="absolute inset-0 w-full h-full overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              scale: 1.05,
              transition: { duration: 1.2, ease: "easeInOut" }
            }}
          >
            {/* Enhanced Video Background with Glass Overlay */}
            <div className="absolute inset-0">
              <video
                ref={videoRef}
                className="w-full h-full object-cover z-100"
                src={video}
                muted
                playsInline
                preload="auto"
              />


              {/* <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black-900/20 to-black/10 "></div> */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-amber-900/30 to-black/80 "></div>
              <div className="absolute inset-0 bg-gradient-to-t from-yellow/40 via-transparent to-yellow/40"></div>
            </div>

            {/* Video Control */}
            {/* <motion.button
              onClick={togglePlay}
              className="absolute top-8 right-8 z-20 p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-yellow-500/30 hover:bg-yellow-500/20 transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300" />
              ) : (
                <Play className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300" />
              )}
            </motion.button> */}

            {/* Main Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
              {/* Enhanced Logo Animation */}
              <motion.div
                className="flex space-x-1 mb-8 relative"
                initial="hidden"
                animate="visible"
              >
                {brandName.map((char, i) => (
                  <motion.div key={i} className="relative" custom={i} variants={letterVariants}>
                    <motion.span
                      className="text-7xl md:text-9xl font-black bg-gradient-to-br from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,215,0,0.6)]"
                      whileHover={{ 
                        scale: 1.2,
                        y: -10,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {char}
                    </motion.span>
                    <motion.div
                    //   className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 blur-xl opacity-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.5 }}
                      transition={{ delay: i * 0.2 + 1 }}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Enhanced Tagline */}
              <motion.div
                className="max-w-2xl mx-auto mb-12"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 1 }}
              >
                <motion.p
                  className="text-3xl md:text-2xl font-light text-yellow-100/90 mb-6 tracking-widest leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.8 }}
                >
                  Premium • Fast • Reliable
                </motion.p>
                <motion.div
                  className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: 96 }}
                  transition={{ delay: 2.5, duration: 0.8 }}
                />
              </motion.div>

              {/* Enhanced CTA Button */}
              <motion.button
                className="relative px-16 py-5 rounded-2xl text-xl font-bold text-black group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Button Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 bg-[length:200%_100%]"
                  animate={{ backgroundPosition: ['0%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <span className="relative z-10 drop-shadow-lg flex items-center gap-3">
                  Order Now
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Truck className="w-6 h-6" />
                  </motion.div>
                </span>
              </motion.button>

              {/* Additional Info */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-yellow-200/70"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2 }}
              >
                {[
                  { icon: Clock, text: "15-30min" },
                  { icon: Star, text: "4.9 Rating" },
                  { icon: Shield, text: "100% Safe" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 text-sm font-medium"
                    whileHover={{ scale: 1.1, color: "#FEF3C7" }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section Transition */}
      <AnimatePresence>
        {showHero && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <EnhancedHeroSection />
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Enhanced Hero Section Component
const EnhancedHeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  const features = [
    { icon: Clock, text: "15–30 Min Delivery", bg: "bg-white/10" },
    // { icon: Star, text: "4.9 Rating (10k+)", bg: "bg-white/10" },
    // { icon: Shield, text: "Food Safety Certified", bg: "bg-white/10" },
    { icon: Truck, text: "Free Delivery", bg: "bg-white/10" },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Heart },
    { number: "200+", label: "Restaurant Partners", icon: MapPin },
    { number: "15+", label: "Cities", icon: Zap },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-amber-900/20 to-gray-800 overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 grid-rows-10 w-full h-full">
            {Array.from({ length: 200 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-yellow-200/10"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
              />
            ))}
          </div>
        </div>

        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'bg-yellow-400/30' : 
              i % 4 === 1 ? 'bg-amber-500/20' : 
              i % 4 === 2 ? 'bg-yellow-300/25' : 'bg-amber-400/15'
            }`}
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 items-center ">
          {/* Left Content */}
          <motion.div
            className="flex flex-col justify-center space-y-"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Premium Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 backdrop-blur-xl border border-yellow-500/30 text-white px-3 py-2 rounded-2xl shadow-2xl w-fit group hover:shadow-yellow-500/20 transition-all duration-500"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <motion.div
                className="w-3 h-3 bg-yellow-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="font-semibold text-sm tracking-wider">
                 Fastest Food Delivery in Town
              </span>
              <Zap className="w-5 h-5 text-yellow-400 animate-bounce" />
            </motion.div>

            {/* Main Title */}
            <motion.div variants={itemVariants} className="space-y-1">
              <motion.h1 
                className="text-6xl lg:text-7xl font-black leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                  Delicious Food
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent animate-shine bg-[length:200%_auto]">
                  Delivered Fast
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-yellow-100/80 font-light leading-relaxed"
                variants={itemVariants}
              >
                Experience premium food delivery service with real-time tracking, 
                exclusive restaurants, and instant delivery to your doorstep.
              </motion.p>
            </motion.div>

            {/* Features Grid */}
            {/* <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 max-w-lg"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-4 px-2 p-1 rounded-2xl ${feature.bg} backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 group`}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    borderColor: "rgba(255,255,255,0.4)"
                  }}
                >
                  <motion.div 
                    className="p-2 rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 group-hover:from-yellow-300 group-hover:to-amber-500 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <feature.icon className="w-5 h-5 text-white" />
                  </motion.div>
                  <span className="text-sm font-semibold text-white">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div> */}

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-5"
            >
              <motion.button
                className="relative px-12 py-5 bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-bold rounded-2xl shadow-2xl overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <span className="relative z-10 text-lg flex items-center gap-3">
                  Order Now
                  <Truck className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                className="px-12 py-5 bg-transparent text-white font-bold rounded-2xl border-2 border-yellow-400/60 hover:bg-yellow-400/10 shadow-xl transition-all duration-300 group backdrop-blur-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">Download App</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex gap-12 pt-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <motion.div
                      className="p-2 rounded-lg bg-yellow-400/20"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                    <div className="text-2xl font-bold text-yellow-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-sm font-medium text-yellow-200/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>




            
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute  bg-gradient-to-br from-yellow-400/30 to-amber-600/20 rounded-3xl blur-3xl scale-110 animate-pulse"></div>
              
              {/* Main Image Container */}
              <motion.div
                className="relative z-10 bg-gradie rounded-3xl shad border-white/20 backdrop-blu"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://gomoto.like-themes.com/wp-content/uploads/2020/04/slider-courier-mask.png"
                  alt="Premium Delivery Service"
                  className="w-full h-auto object-cover"
                />
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-4 py-2 rounded-full font-bold text-sm shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🚀 Fast Delivery
                </motion.div>
              </motion.div>

              {/* Floating Elements Around Image */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-20 h-20 rounded-2xl border ${
                    i === 0 ? 'border-yellow-400/40 top-4 -left-4' :
                    i === 1 ? 'border-amber-500/30 bottom-8 -right-6' :
                    'border-yellow-300/50 top-1/2 -left-8'
                  } backdrop-blur-sm`}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};