import React from "react";
import { motion } from "framer-motion";
import { Star, Clock, Shield, Truck, Zap, Heart, MapPin } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const features = [
    { icon: Clock, text: "15–30 Min Delivery" },
    { icon: Star, text: "4.9 Rating (10k+)" },
    { icon: Shield, text: "Safe & Hygienic" },
    { icon: Truck, text: "Free Delivery" },
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers", icon: Heart },
    { number: "200+", label: "Restaurant Partners", icon: MapPin },
    { number: "15+", label: "Cities", icon: Zap },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-yellow-900 via-yellow-700 to-amber-600 text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.6)_1px,_transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Animated glowing orbs */}
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-yellow-500 to-amber-300 rounded-full blur-3xl opacity-30"
        animate={{ y: [0, -30, 0], x: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-gradient-to-tr from-amber-400 to-yellow-200 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 40, 0], x: [0, -25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle rotating glass shapes */}
      <motion.div
        className="absolute top-1/4 left-1/3 w-64 h-64 border border-yellow-300/30 rounded-3xl backdrop-blur-xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-80 h-80 border border-yellow-200/20 rounded-full backdrop-blur-xl"
        animate={{ rotate: [-360, 0] }}
        transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
      />

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[90vh]">
          {/* Left section */}
          <motion.div
            className="flex flex-col justify-center space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Gradient glowing badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 backdrop-blur-lg px-6 py-3 rounded-full shadow-lg border border-yellow-300/30 w-fit"
            >
              <div className="w-3 h-3 bg-yellow-200 rounded-full animate-ping"></div>
              <span className="font-semibold text-sm tracking-wide text-yellow-100">
                ⚡ Fastest Food Delivery in Town
              </span>
              <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
            </motion.div>

            {/* Heading with shine animation */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-6xl font-black leading-tight"
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-yellow-200 to-amber-100 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                  Delicious Food
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent bg-clip-text animate-[shine_2.5s_ease-in-out_infinite]" />
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-50 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Delivered To Your Door
              </span>
            </motion.h1>

            {/* Features Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 max-w-md"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-lg shadow-md hover:shadow-xl"
                >
                  <div className="p-2 rounded-lg bg-white/20">
                    <feature.icon className="w-5 h-5 text-yellow-100" />
                  </div>
                  <span className="text-sm font-medium text-yellow-50">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-yellow-300 to-amber-400 text-black font-bold rounded-2xl shadow-2xl hover:shadow-yellow-200/50 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">Order Now</span>
                <Truck className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="px-10 py-4 bg-transparent text-yellow-100 font-bold rounded-2xl border-2 border-yellow-200/60 hover:bg-yellow-200/10 shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-lg">Download App</span>
              </motion.button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              variants={itemVariants}
              className="flex gap-8 pt-10 border-t border-yellow-100/20"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.08 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <stat.icon className="w-5 h-5 text-yellow-200" />
                    <div className="text-2xl font-bold text-yellow-50">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-sm text-yellow-100/80">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            className="relative flex justify-center items-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative z-10 bg-white/10 backdrop-blur-lg border border-yellow-200/20 rounded-3xl shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="https://gomoto.like-themes.com/wp-content/uploads/2020/04/slider-courier-mask.png"
                alt="Delivery"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Floating orb glow behind image */}
            <motion.div
              className="absolute -bottom-10 -left-10 w-80 h-80 bg-gradient-to-br from-yellow-300 to-amber-400 blur-3xl rounded-full opacity-30"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Subtle floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-100/50 blur-sm"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Shine animation keyframes */}
      <style>{`
        @keyframes shine {
          0% { background-position: -200%; }
          100% { background-position: 200%; }
        }
        .animate-shine {
          background-size: 200% auto;
          animation: shine 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
