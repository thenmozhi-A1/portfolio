'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

// Submit form to Web3Forms API
const submitForm = async (data: Record<string, string>) => {
  const formData = new FormData();
  // TODO: Replace with your actual Web3Forms access key
  formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("message", data.message);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message || 'Failed to send message');
  }

  return result;
};

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const mutation = useMutation({
    mutationFn: submitForm,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
          <p className="mt-4 text-foreground/70 mb-2">Have a project in mind? Let&apos;s work together.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-foreground/80 mt-6 mb-8 text-sm md:text-base">
            <a href="tel:8489102133" className="hover:text-primary transition-colors">📞 8489102133</a>
            <span className="hidden md:inline">•</span>
            <a href="mailto:thenmozhiayothi@gmail.com" className="hover:text-primary transition-colors">✉️ thenmozhiayothi@gmail.com</a>
            <span className="hidden md:inline">•</span>
            <span>📍 Vadapalani, Chennai-600 026</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <GlassCard interactive={false}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full bg-background/50 border border-glass-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-background/50 border border-glass-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-background/50 border border-glass-border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              
              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {mutation.isPending ? 'Sending...' : 'Send Message'}
              </button>

              {mutation.isSuccess && (
                <p className="text-green-500 text-sm text-center font-medium bg-green-500/10 py-2 rounded-md">
                  Message sent successfully!
                </p>
              )}
              {mutation.isError && (
                <p className="text-red-500 text-sm text-center font-medium bg-red-500/10 py-2 rounded-md">
                  Failed to send message. Make sure to add your Web3Forms Access Key!
                </p>
              )}
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
