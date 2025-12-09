import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', delay: 0.2 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#d4af37]/10 flex items-center justify-center"
        >
          <CheckCircle className="w-10 h-10 text-[#d4af37]" />
        </motion.div>
        <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-white/50">Thank you for reaching out. I'll get back to you soon.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="space-y-2"
        >
          <label className="text-sm font-medium text-white/60">Name</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#d4af37]/50 focus:ring-[#d4af37]/20 h-12 rounded-xl"
          />
        </motion.div>
        
        <motion.div
          whileFocus={{ scale: 1.02 }}
          className="space-y-2"
        >
          <label className="text-sm font-medium text-white/60">Email</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your@email.com"
            required
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#d4af37]/50 focus:ring-[#d4af37]/20 h-12 rounded-xl"
          />
        </motion.div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white/60">Message</label>
        <Textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell me about your project..."
          required
          rows={5}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-[#d4af37]/50 focus:ring-[#d4af37]/20 rounded-xl resize-none"
        />
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-14 bg-gradient-to-r from-[#d4af37] to-[#e5c04b] hover:from-[#e5c04b] hover:to-[#d4af37] text-black font-semibold rounded-xl transition-all duration-300 disabled:opacity-50"
        >
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
            />
          ) : (
            <>
              Send Message
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </motion.div>
    </motion.form>
  );
}
