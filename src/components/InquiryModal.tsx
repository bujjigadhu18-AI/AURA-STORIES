import React, { useState, useEffect } from 'react';
import { X, Send, Sparkles, MessageCircle, CheckCircle2 } from 'lucide-react';
import { demoData } from '../data/demoData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, selectedPackage }) => {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [modalError, setModalError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    partnerName: '',
    phone: '',
    email: '',
    date: '',
    venue: '',
    celebrationType: 'Full Wedding Celebration',
    notes: ''
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleQuickFill = () => {
    setModalError(null);
    setFormData({
      name: 'Priya Sharma',
      partnerName: 'Arjun Verma',
      phone: '+91 98765 43210',
      email: 'priya.sharma@example.com',
      date: '2025-11-20',
      venue: 'Novotel Varun Beach, Visakhapatnam',
      celebrationType: 'Full Wedding Celebration',
      notes: selectedPackage ? `Inquiring for ${selectedPackage}` : 'Traditional muhurtham & beachside evening reception.'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalError(null);

    if (!formData.name.trim()) {
      setModalError('Please enter your name.');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setModalError('Please enter a valid phone or WhatsApp number with at least 10 digits.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setModalError('Please enter a valid email address (e.g. name@example.com).');
      return;
    }

    if (!formData.date) {
      setModalError('Please select your celebration date.');
      return;
    }

    if (!formData.venue.trim()) {
      setModalError('Please specify the city or wedding venue.');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setSent(false);
    setFormData({
      name: '',
      partnerName: '',
      phone: '',
      email: '',
      date: '',
      venue: '',
      celebrationType: 'Full Wedding Celebration',
      notes: ''
    });
    onClose();
  };

  const whatsappInquiryUrl = `https://wa.me/${demoData.contactInfo.whatsapp}?text=${encodeURIComponent(
    `Hello AURA STORIES, I would like to inquire about wedding coverage availability for ${formData.date || 'our wedding'} at ${formData.venue || 'Visakhapatnam'} (${formData.name || 'Client'}).`
  )}`;

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-modal-title"
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-charcoal-900 border border-white/10 p-6 sm:p-8 shadow-2xl my-auto max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-ivory-dark hover:text-ivory hover:bg-white/5 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
          aria-label="Close Inquiry Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center justify-between mb-1 pr-8">
          <div className="inline-flex items-center space-x-1.5">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span className="text-[10px] uppercase tracking-widest text-champagne font-medium">
              {demoData.businessName} Commission Request
            </span>
          </div>

          {!sent && (
            <button
              type="button"
              onClick={handleQuickFill}
              className="text-[10px] uppercase tracking-wider text-champagne/80 hover:text-champagne hover:underline transition-colors focus-visible:outline-none"
              title="Click to automatically fill sample celebration data"
            >
              ✦ Quick-Fill Demo
            </button>
          )}
        </div>

        <h3 id="inquiry-modal-title" className="font-serif-luxury text-2xl sm:text-3xl text-ivory mb-1">
          Check Date & Request Quotation
        </h3>
        
        {selectedPackage ? (
          <p className="text-xs text-champagne mb-4">
            Subject: <span className="font-semibold">{selectedPackage}</span>
          </p>
        ) : (
          <p className="text-xs text-ivory-muted mb-4 leading-relaxed">
            Provide your anticipated celebration details to verify creative team availability.
          </p>
        )}

        {sent ? (
          /* Confirmation Screen with Active WhatsApp Link and Close Button */
          <div className="py-6 text-center animate-fadeIn space-y-4">
            <div className="w-12 h-12 rounded-full bg-champagne/15 border border-champagne text-champagne mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>

            <div>
              <p className="font-serif-luxury text-2xl sm:text-3xl text-ivory mb-1.5">
                Inquiry Successfully Logged
              </p>
              <p className="text-xs sm:text-sm text-ivory-warm max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-champagne font-medium">{formData.name}</span>. Your date inquiry for{' '}
                <span className="text-champagne font-medium">{formData.date}</span> at{' '}
                <span className="text-champagne font-medium">{formData.venue}</span> has been received.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/5 text-left text-xs space-y-1.5 text-ivory-dark max-w-md mx-auto">
              <p><strong className="text-ivory">Direct Contact:</strong> {formData.phone}</p>
              <p><strong className="text-ivory">Email:</strong> {formData.email}</p>
              {selectedPackage && <p><strong className="text-ivory">Selected Collection:</strong> {selectedPackage}</p>}
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-champagne hover:bg-champagne-light text-black text-xs uppercase font-semibold tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-champagne/20"
              >
                <MessageCircle className="w-4 h-4 text-black" />
                <span>Open WhatsApp Chat Directly</span>
              </a>

              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full py-2.5 rounded-full border border-white/10 hover:border-white/20 text-xs uppercase tracking-wider text-ivory-muted hover:text-ivory transition-colors"
              >
                Back to Website
              </button>
            </div>
          </div>
        ) : (
          /* Structured Form */
          <form onSubmit={handleSubmit} className="space-y-3.5">
            {modalError && (
              <div className="p-3 rounded-lg bg-red-900/30 border border-red-500/50 text-red-200 text-xs flex items-center justify-between">
                <span>{modalError}</span>
                <button
                  type="button"
                  onClick={() => setModalError(null)}
                  className="text-red-300 hover:text-white ml-2 font-bold text-sm"
                  aria-label="Dismiss error"
                >
                  ×
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                  Your Name <span className="text-champagne">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-charcoal-800 border border-white/10 text-ivory text-xs placeholder:italic placeholder:text-ivory-dark/40 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
                  placeholder="e.g. Priya Sharma"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                  Partner's Name <span className="text-ivory-dark font-light">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.partnerName}
                  onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-charcoal-800 border border-white/10 text-ivory text-xs placeholder:italic placeholder:text-ivory-dark/40 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
                  placeholder="e.g. Arjun Verma"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                  WhatsApp / Phone <span className="text-champagne">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-charcoal-800 border border-white/10 text-ivory text-xs placeholder:italic placeholder:text-ivory-dark/40 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
                  placeholder="e.g. +91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                  Email Address <span className="text-champagne">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-charcoal-800 border border-white/10 text-ivory text-xs placeholder:italic placeholder:text-ivory-dark/40 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
                  placeholder="e.g. priya@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                  Celebration Date <span className="text-champagne">*</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-charcoal-800 border border-white/10 text-ivory text-xs focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                  City / Venue <span className="text-champagne">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.venue}
                  onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-charcoal-800 border border-white/10 text-ivory text-xs placeholder:italic placeholder:text-ivory-dark/40 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
                  placeholder="e.g. Novotel / Radisson Blu Vizag"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                Additional Notes / Vision <span className="text-ivory-dark font-light">(optional)</span>
              </label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-charcoal-800 border border-white/10 text-ivory text-xs placeholder:italic placeholder:text-ivory-dark/40 focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne"
                placeholder="Ceremony schedule, guest count, or aesthetic requests..."
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-3 w-full py-3.5 rounded-full bg-champagne hover:bg-champagne-light text-black text-xs uppercase font-semibold tracking-widest transition-all duration-300 flex items-center justify-center gap-1.5 shadow-lg shadow-champagne/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne disabled:opacity-75 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-black" />
              <span>{submitting ? 'Verifying Calendar...' : 'Verify Date & Request Details'}</span>
            </button>

            {/* Direct WhatsApp Alternate Option */}
            <div className="pt-2">
              <div className="flex items-center my-2.5">
                <span className="flex-grow border-t border-white/10" />
                <span className="px-2.5 text-[9px] uppercase tracking-wider text-ivory-dark">
                  or connect immediately
                </span>
                <span className="flex-grow border-t border-white/10" />
              </div>
              <a
                href={demoData.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full border border-champagne/30 bg-champagne/5 hover:bg-champagne/15 text-champagne-light text-xs uppercase tracking-wider font-medium transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
              >
                <MessageCircle className="w-3.5 h-3.5 text-champagne" />
                <span>Chat Directly on WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default InquiryModal;

