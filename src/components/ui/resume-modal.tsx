'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { useEffect } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-5xl h-full max-h-[90vh] bg-[#0f172a] border border-glass-border rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-glass-border bg-background/50">
              <h2 className="text-xl font-bold font-heading">Resume</h2>
              <div className="flex items-center gap-2">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="p-2 text-foreground/70 hover:text-foreground hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="flex-grow w-full bg-white/5 relative">
              <iframe
                src="/resume.pdf#view=FitH"
                className="w-full h-full border-none"
                title="Resume PDF"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
