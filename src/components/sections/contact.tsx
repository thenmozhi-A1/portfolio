'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Using a simple fetch to avoid triggering security software if that's the issue
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          ...formData
        })
      });
      const data = await response.json();
      if (data.success) {
        alert("Sent!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-center">Get In Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-foreground/80 mt-6 mb-8 text-sm md:text-base">
          <a href="tel:8489102133" className="hover:text-primary transition-colors">📞 8489102133</a>
          <span className="hidden md:inline">•</span>
          <a href="mailto:thenmozhiayothi@gmail.com" className="hover:text-primary transition-colors">✉️ thenmozhiayothi@gmail.com</a>
          <span className="hidden md:inline">•</span>
          <span>📍 Vadapalani, Chennai-600 026</span>
        </div>
        <div className="max-w-2xl mx-auto mt-12">
          <GlassCard interactive={false}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full bg-background/50 border border-glass-border rounded-lg px-4 py-3"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full bg-background/50 border border-glass-border rounded-lg px-4 py-3"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <textarea
                placeholder="Message"
                required
                rows={5}
                className="w-full bg-background/50 border border-glass-border rounded-lg px-4 py-3"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button type="submit" className="w-full bg-primary text-white font-medium py-3 rounded-lg">
                Send Message
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
