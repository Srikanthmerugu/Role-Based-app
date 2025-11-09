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
      step: "01",
    },
    {
      icon: Utensils,
      title: "Select Your Meal",
      description: "Choose from thousands of delicious dishes with full customization",
      color: "from-amber-500 to-orange-600",
      step: "02",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description: "Pay safely with multiple payment options including crypto",
      color: "from-yellow-300 to-amber-400",
      step: "03",
    },
    {
      icon: Bike,
      title: "Fast Delivery",
      description: "Track your order in real-time with live GPS tracking",
      color: "from-amber-400 to-orange-500",
      step: "04",
    },
  ];

  return (
    <div className="relative py-24 bg-gradient-to-tr from-gray-950 via-amber-900/20 to-gray-800 overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
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
            </span>{" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent animate-shine">
              Works
            </span>
          </h2>
          <p className="text-xl text-yellow-100/80 max-w-2xl mx-auto">
            Getting your favorite food delivered has never been easier. Just four simple steps!
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600/30 via-amber-500/40 to-yellow-600/30 hidden lg:block"></div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
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
                <div className="relative bg-gradient-to-b from-gray-900/70 to-gray-800/60 backdrop-blur-xl border border-yellow-500/30 rounded-3xl p-8 text-center shadow-xl hover:shadow-yellow-500/30 transition-all duration-500 group-hover:border-yellow-400 group-hover:shadow-yellow-500/40">
                  
                  {/* Step Number */}
                  <div className="absolute -top-5 -right-5 w-14 h-14 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg border border-yellow-200/60">
                    <span className="font-black text-gray-900 text-sm">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="inline-flex p-5 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border border-yellow-400/60 mb-6 group-hover:shadow-lg group-hover:shadow-yellow-400/40"
                    whileHover={{ scale: 1.15, rotate: 15 }}
                    transition={{ duration: 0.4 }}
                  >
                    <step.icon className="w-8 h-8 text-yellow-400 group-hover:text-yellow-300 transition-colors duration-300" />
                  </motion.div>

                  {/* Text */}
                  <h3 className="text-2xl font-bold text-yellow-200 mb-4 group-hover:text-yellow-300 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-yellow-100/70 leading-relaxed group-hover:text-yellow-100 transition-colors duration-300">
                    {step.description}
                  </p>

                  {/* Soft Glow on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                  ></div>
                </div>

                {/* Animated Dot on Line */}
                <motion.div
                  className="absolute top-1/2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full border-2 border-gray-900 shadow-lg hidden lg:block"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(245, 158, 11, 0.7)",
                      "0 0 0 10px rgba(245, 158, 11, 0)",
                      "0 0 0 0 rgba(245, 158, 11, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-12 py-5 bg-gradient-to-r from-yellow-400 to-amber-600 text-gray-900 font-bold rounded-2xl shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 group relative overflow-hidden"
            whileHover={{ scale: 1.07, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10 text-lg flex items-center justify-center gap-3">
              Start Ordering Now
              <Bike className="w-6 h-6 group-hover:translate-x-1 transition-transform text-gray-900" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorks;
