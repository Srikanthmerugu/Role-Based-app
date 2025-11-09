import React from "react";
import { motion } from "framer-motion";
import { Star, Clock, MapPin, Heart } from "lucide-react";

const PopularRestaurants = () => {
  const restaurants = [
    {
      name: "Golden Dragon",
      cuisine: "Chinese • Asian",
      rating: 4.8,
      deliveryTime: "20-30 min",
      price: "$$",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=300&fit=crop",
      featured: true
    },
    {
      name: "Burger Palace",
      cuisine: "American • Fast Food",
      rating: 4.6,
      deliveryTime: "15-25 min",
      price: "$$",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      featured: false
    },
    {
      name: "Pizza Italia",
      cuisine: "Italian • Pizza",
      rating: 4.9,
      deliveryTime: "25-35 min",
      price: "$$$",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/bc/d0/e9/getlstd-property-photo.jpg?w=500&h=-1&s=1",
      featured: true
    },
    {
      name: "Sushi Master",
      cuisine: "Japanese • Sushi",
      rating: 4.7,
      deliveryTime: "30-40 min",
      price: "$$$$",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      featured: false
    }
  ];

  return (
    <div className="relative py-24 bg-gradient-to-br from-gray-900 to-amber-900/30 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
              Popular
            </span>
            <span className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300 bg-clip-text text-transparent animate-shine">
              Restaurants
            </span>
          </h2>
          <p className="text-xl text-yellow-100/70 max-w-2xl mx-auto">
            Discover the most loved restaurants in your area with exclusive deals and fastest delivery
          </p>
        </motion.div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Restaurant Card */}
              <div className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:shadow-yellow-500/20 transition-all duration-500 group-hover:border-yellow-500/30">
                
                {/* Featured Badge */}
                {restaurant.featured && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-amber-600 text-black px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    Featured
                  </div>
                )}

                {/* Favorite Button */}
                <motion.button
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 backdrop-blur-sm rounded-full border border-white/20 hover:border-yellow-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-5 h-5 text-white hover:text-yellow-400 transition-colors" />
                </motion.button>

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                      {restaurant.name}
                    </h3>
                    <span className="text-yellow-400 font-semibold">{restaurant.price}</span>
                  </div>

                  <p className="text-yellow-100/70 text-sm mb-4">{restaurant.cuisine}</p>

                  {/* Rating and Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{restaurant.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-100/70 text-sm">{restaurant.deliveryTime}</span>
                      </div>
                    </div>
                  </div>

                  {/* Order Button */}
                  <motion.button
                    className="w-full mt-4 py-3 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 border border-yellow-500/30 text-yellow-400 rounded-xl font-semibold hover:bg-gradient-to-r hover:from-yellow-500/30 hover:to-amber-600/30 transition-all duration-300 group-hover:border-yellow-400/50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Order Now
                  </motion.button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-12 py-4 bg-transparent border-2 border-yellow-400/60 text-yellow-400 font-bold rounded-2xl hover:bg-yellow-400/10 transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-3">
              View All Restaurants
              <MapPin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PopularRestaurants;