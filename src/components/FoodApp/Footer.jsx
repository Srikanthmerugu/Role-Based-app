import React from "react";
import { motion } from "framer-motion";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaApple,
  FaGooglePlay
} from "react-icons/fa";
import { 
  FiArrowUp, 
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock
} from "react-icons/fi";
import { Truck, Shield, Heart, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-600 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-16 ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-amber-700 rounded-xl flex items-center justify-center">
                <Truck className="text-white text-lg" />
              </div>
              <span className="text-2xl font-black text-amber-50">GOMOTO</span>
            </div>
            
            <p className="text-yellow-900 mb-6 leading-relaxed">
              Delivering happiness to your doorstep with premium quality food, 
              lightning-fast service, and unmatched customer experience.
            </p>
            
            <div className="flex gap-3">
              {[
                { icon: FaFacebookF, color: "hover:text-amber-50" },
                { icon: FaTwitter, color: "hover:text-amber-50" },
                { icon: FaInstagram, color: "hover:text-amber-50" },
                { icon: FaLinkedinIn, color: "hover:text-amber-50" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/30 backdrop-blur-lg border border-white/40 rounded-xl flex items-center justify-center text-amber-700 hover:bg-amber-600 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-amber-50 mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "About Us", "Our Services", "Pricing", "Blog",
                "Careers", "Help Center", "Contact", "FAQs"
              ].map((link, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-yellow-900 hover:text-amber-50 transition-all duration-300 py-2 hover:translate-x-2"
                  whileHover={{ x: 5 }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-amber-50 mb-6">Contact Info</h3>
            <div className="space-y-4">
              {[
                { icon: FiMapPin, text: "123 Delivery Street, Food City" },
                { icon: FiPhone, text: "+1 (555) 123-4567" },
                { icon: FiMail, text: "hello@gomoto.com" },
                { icon: FiClock, text: "24/7 Customer Support" }
              ].map((contact, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/30 rounded-lg flex items-center justify-center">
                    <contact.icon className="text-amber-700" />
                  </div>
                  <span className="text-yellow-900 text-sm">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter & App Download */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold text-amber-50 mb-6">Stay Updated</h3>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-yellow-900 mb-3 text-sm">Subscribe for exclusive deals</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/30 border border-white/40 rounded-xl text-amber-50 placeholder-amber-700/60 focus:outline-none focus:border-amber-600 text-sm"
                />
                <motion.button
                  className="px-4 bg-amber-700 text-white rounded-xl hover:bg-amber-800 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiArrowUp className="rotate-45" />
                </motion.button>
              </div>
            </div>

            {/* App Download */}
            <div>
              <p className="text-yellow-900 mb-3 text-sm">Get our mobile app</p>
              <div className="flex gap-2">
                <motion.a
                  href="#"
                  className="flex-1 flex items-center gap-2 bg-white/30 border border-white/40 rounded-xl p-2 hover:bg-amber-600 hover:text-white transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <FaApple className="text-lg" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </motion.a>
                
                <motion.a
                  href="#"
                  className="flex-1 flex items-center gap-2 bg-white/30 border border-white/40 rounded-xl p-2 hover:bg-amber-600 hover:text-white transition-all duration-300 text-sm"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <FaGooglePlay className="text-lg" />
                  <div className="text-left">
                    <div className="text-xs opacity-80">Get it on</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        

      
      </div>
    </div>
  );
};

export default Footer;