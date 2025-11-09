import React from "react";
import { motion } from "framer-motion";
import { Search, Utensils, CreditCard, Bike } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Browse & Choose",
      description: "Explore hundreds of restaurants and cuisines in your area",
      color: "from-yellow-400 to-amber-500",
      step: "01"
    },
    {
      icon: Utensils,
      title: "Select Your Meal",
      description: "Choose from thousands of delicious dishes with full customization",
      color: "from-amber-500 to-orange-600",
      step: "02"
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Pay safely with multiple payment options including crypto",
      color: "from-yellow-300 to-amber-400",
      step: "03"
    },
    {
      icon: Bike,
      title: "Fast Delivery",
      description: "Track your order in real-time with live GPS tracking",
      color: "from-amber-400 to-orange-500",
      step: "04"
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-tr from-gray-900 via-amber-900/10 to-gray-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-float-delayed"></div>
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
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
              How It
            </span>
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent animate-shine">
              Works
            </span>
          </h2>
          <p className="text-xl text-yellow-100/70 max-w-2xl mx-auto">
            Getting your favorite food delivered has never been easier. Just four simple steps!
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500/20 via-amber-500/30 to-yellow-500/20 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Step Card */}
                <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-center shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group-hover:border-yellow-500/30">
                  
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border border-yellow-300/50">
                    <span className="font-black text-black text-sm">{step.step}</span>
                  </div>

                  {/* Icon Container */}
                  <motion.div
                    className="inline-flex p-5 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-amber-600/20 border border-yellow-500/30 mb-6 group-hover:bg-gradient-to-r group-hover:from-yellow-500/30 group-hover:to-amber-600/30 transition-all duration-500"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <step.icon className="w-8 h-8 text-yellow-400" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-yellow-100/70 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                </div>

                {/* Animated Dot on Connecting Line */}
                <motion.div
                  className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full border-2 border-gray-900 shadow-lg hidden lg:block"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(245, 158, 11, 0.7)",
                      "0 0 0 10px rgba(245, 158, 11, 0)",
                      "0 0 0 0 rgba(245, 158, 11, 0)"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: index * 0.5 
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-12 py-5 bg-gradient-to-r from-yellow-400 to-amber-600 text-black font-bold rounded-2xl shadow-2xl hover:shadow-yellow-500/40 transition-all duration-300 group overflow-hidden relative"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 text-lg flex items-center gap-3">
              Start Ordering Now
              <Bike className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;