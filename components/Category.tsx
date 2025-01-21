"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function Category() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Dresses', 'Accessories', 'Footwear', 'Outerwear'].map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer bg-gold-300 rounded-2xl p-6 text-center hover:bg-brown-600 hover:text-white transition-colors duration-300"
            >
              <h3 className="font-semibold">{category}</h3>
              <p className="text-sm group-hover:text-gray-300">Shop Now</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
