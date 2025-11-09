import React from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Star, Truck, Heart, Zap, MapPin, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Average delivery time under 30 minutes with real-time tracking",
      color: "from-yellow-400 to-amber-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: Shield,
      title: "100% Safe",
      description: "Contactless delivery and restaurant safety certifications",
      color: "from-amber-400 to-orange-500",
      bgColor: "bg-amber-500/10"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "Curated restaurants with highest ratings and quality standards",
      color: "from-yellow-300 to-amber-400",
      bgColor: "bg-yellow-400/10"
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Zero delivery fees on orders above $25 from partner restaurants",
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-600/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative py-24 bg-gradient-to-br from-gray-900 to-amber-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-6 w-full h-full">
            {Array.from({ length: 72 }).map((_, i) => (
              <div key={i} className="border border-yellow-200/20"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-lg border border-yellow-500/30 text-yellow-200 px-6 py-3 rounded-2xl mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="font-semibold">Why Choose Gomoto</span>
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
              Experience The
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent animate-shine">
              Difference
            </span>
          </h2>
          <p className="text-xl text-yellow-100/70 max-w-2xl mx-auto leading-relaxed">
            We're revolutionizing food delivery with cutting-edge technology and 
            uncompromising quality standards.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <motion.div
                  className={`inline-flex p-4 rounded-2xl mb-6 ${feature.bgColor} border border-white/20`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-8 h-8 text-yellow-400" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-yellow-100/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
              </div>

              {/* Floating Element */}
              <motion.div
                className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${feature.color} rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: index * 0.5 
                }}
              />
            </motion.div>
          ))}
        </motion.div>

     
      </div>
    </div>
  );
};

export default FeaturesSection;