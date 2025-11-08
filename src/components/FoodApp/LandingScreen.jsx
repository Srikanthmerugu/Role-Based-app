import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import video from '../../assets/0_Delivery_Food_Delivery_3840x2160.mp4'

export default function LandingScreen() {
  const [currentStage, setCurrentStage] = useState(0);
  const [brandLetters, setBrandLetters] = useState([]);
  const brandName = "GOMATO";
  const caption = "Food Delivery";

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentStage(1);
      
      // Animate brand letters one by one
      const letters = brandName.split('');
      letters.forEach((letter, index) => {
        setTimeout(() => {
          setBrandLetters(prev => [...prev, { letter, id: index }]);
        }, index * 200);
      });

      // Move to final stage
      setTimeout(() => {
        setCurrentStage(2);
      }, letters.length * 200 + 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Floating particles
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 5,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 3
  }));

  return (
    <div className="relative w-screen h-screen gradient-bg overflow-hidden">
      {/* Background particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="particle opacity-20"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            top: '110%'
          }}
          animate={{
            y: [-1000, -100],
            x: [0, Math.random() * 100 - 50],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
      ))}

      {/* Video Background Placeholder */}
      <div className="absolute inset-0 video-overlay">
        <motion.div
          className="w-full h-full bg-black/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

             {/* Background video */}
      <video
        className="video-bg"
        src={video}
        autoPlay
        // loop
        muted
        playsInline
      />

      {/* Dark vignette + cinematic letterbox feel */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />


    </motion.div>
          
      </div>

   

      <AnimatePresence>
        {currentStage === 1 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="text-center">
              {/* Brand Logo/Icon */}
              <motion.div
                className="mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: 'spring' }}
              >
                <motion.div
                  className="w-32 h-32 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mx-auto flex items-center justify-center shadow-2xl food-icon"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                >
                  <span className="text-4xl">🍕</span>
                </motion.div>
              </motion.div>

              {/* Brand Name Letters */}
              <div className="flex justify-center items-center space-x-2 mb-2">
                {brandLetters.map(({ letter, id }) => (
                  <motion.span
                    key={id}
                    className="text-6xl md:text-8xl font-black letter-glow"
                    initial={{ 
                      opacity: 0, 
                      y: 100, 
                      scale: 0.5,
                      rotate: -180 
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1,
                      rotate: 0 
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 15,
                      delay: id * 0.1
                    }}
                    whileHover={{
                      scale: 1.2,
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <span className="brand-text-gradient">
                      {letter}
                    </span>
                  </motion.span>
                ))}
              </div>

              {/* Caption */}
              <motion.p
                className="text-2xl md:text-3xl text-white/90 font-light tracking-widest"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: brandName.length * 0.1 + 0.5, duration: 0.8 }}
              >
                {caption}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {currentStage === 2 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              {/* Final Brand Display */}
              <motion.div
                className="mb-3"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >
                <motion.div
                  className="w-40 h-40 bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-500 rounded-full mx-auto flex items-center justify-center shadow-2xl mb-3"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.8 }
                  }}
                >
                  <span className="text-6xl">🚀</span>
                </motion.div>
              </motion.div>

              <motion.h1
                className="text-7xl md:text-9xl font-black mb-3 tracking-tighter"
                initial={{ letterSpacing: '1em' }}
                animate={{ letterSpacing: '0.1em' }}
                transition={{ duration: 1, ease: 'easeOut' }}
              >
                <span className="brand-text-gradient">
                  GOMATO
                </span>
              </motion.h1>

              <motion.p
                className="text-3xl md:text-4xl text-white font-light mb-3 tracking-widest"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Food Delivery
              </motion.p>

              <motion.div
                className="text-white/70 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p>Fast • Fresh • Delicious</p>
              </motion.div>

              {/* CTA Button */}
<motion.button
  className="mt-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 
             text-white text-xl font-semibold rounded-full shadow-2xl 
             hover:shadow-orange-500/25 transition-all duration-300"
  whileHover={{
    scale: 1.05,
    boxShadow: '0 20px 40px rgba(249, 115, 22, 0.3)',
  }}
  whileTap={{ scale: 0.95 }}
>
  Order Now
</motion.button>


            </motion.div>
            
          </motion.div>
        )}

        
      </AnimatePresence>
    </div>
  );
};

