import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { demoData } from '../data/demoData';
import { InquiryFormData } from '../types';

export const ContactSection: React.FC = () => {
  const { contactInfo } = demoData;
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    partnerName: '',
    phone: '',
    email: '',
    date: '',
    venue: '',
    celebrationType: 'Full Wedding Celebration',
    guestCount: '',
    servicesRequired: ['Wedding Day Photography', 'Cinematic Wedding Films'],
    message: ''
  });

  const celebrationTypes = [
    'Full Wedding Celebration',
    'Multi-Day Destination Wedding',
    'Pre-Wedding / Couple Session',
    'Engagement / Ring Ceremony',
    'Intimate Wedding / Reception'
  ];

  const availableServices = [
    'Wedding Day Photography',
    'Cinematic Wedding Films',
    'Pre-Wedding Session',
    'Sangeet & Reception Coverage'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesRequired.includes(service);
      const updated = exists
        ? prev.servicesRequired.filter((s) => s !== service)
        : [...prev.servicesRequired, service];
      return { ...prev, servicesRequired: updated };
    });
  };

  const [formError, setFormError] = useState<string | null>(null);

  const handleQuickFill = () => {
    setFormError(null);
    setFormData({
      name: 'Priya Sharma',
      partnerName: 'Arjun Verma',
      phone: '+91 98765 43210',
      email: 'priya.sharma@example.com',
      date: '2025-11-20',
      venue: 'Novotel Varun Beach, Visakhapatnam',
      celebrationType: 'Full Wedding Celebration',
      guestCount: '250 - 350 guests',
      servicesRequired: ['Wedding Day Photography', 'Cinematic Wedding Films'],
      message: 'Looking for editorial documentary coverage and seaside couple portraits.'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!formData.name.trim()) {
      setFormError('Please enter your name.');
      return;
    }

    // Validation for phone and email format
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid phone or WhatsApp number with at least 10 digits.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormError('Please enter a valid email address (e.g. name@example.com).');
      return;
    }

    if (!formData.date) {
      setFormError('Please select your anticipated celebration date.');
      return;
    }

    if (!formData.venue.trim()) {
      setFormError('Please enter your wedding venue or city.');
      return;
    }

    setSubmitting(true);

    // Client-side validated, ready for production API / Supabase endpoint hook
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 md:py-28 lg:py-32 bg-charcoal-900 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Direct Inquiries & Studio Presence */}
          <div className="lg:col-span-5 min-w-0">
            <div className="inline-flex items-center space-x-2 mb-3">
              <span className="w-6 h-px bg-champagne" />
              <span className="text-xs uppercase tracking-super-wide text-champagne">
                Direct Inquiries
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-light text-ivory mb-5 leading-tight">
              Connect With Our Studio
            </h2>
            <p className="text-xs sm:text-sm text-ivory-muted font-light leading-relaxed mb-8">
              We welcome couples to our Visakhapatnam studio by appointment or via direct digital channels for immediate consultation.
            </p>

            <div className="space-y-4">
              {/* WhatsApp Direct Link */}
              <a
                href={demoData.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 rounded-xl bg-charcoal-800/80 border border-white/5 hover:border-champagne/40 transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-ivory-dark">WhatsApp Direct</p>
                  <p className="text-xs sm:text-sm font-medium text-ivory group-hover:text-champagne transition-colors truncate">
                    {contactInfo.whatsappDisplay}
                  </p>
                </div>
              </a>

              {/* Studio Phone Link */}
              <a
                href={demoData.socialLinks.phone}
                className="flex items-center space-x-4 p-4 rounded-xl bg-charcoal-800/80 border border-white/5 hover:border-champagne/40 transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
              >
                <div className="w-10 h-10 rounded-full bg-champagne/10 text-champagne flex items-center justify-center shrink-0 border border-champagne/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-ivory-dark">Studio Contact</p>
                  <p className="text-xs sm:text-sm font-medium text-ivory group-hover:text-champagne transition-colors truncate">
                    {contactInfo.phoneDisplay}
                  </p>
                </div>
              </a>

              {/* Official Email Link */}
              <a
                href={demoData.socialLinks.email}
                className="flex items-center space-x-4 p-4 rounded-xl bg-charcoal-800/80 border border-white/5 hover:border-champagne/40 transition-all group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-champagne"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 text-ivory-warm flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] uppercase tracking-wider text-ivory-dark">Official Inquiries</p>
                  <p className="text-xs sm:text-sm font-medium text-ivory group-hover:text-champagne transition-colors truncate">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              {/* Studio Location Card */}
              <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/5 flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-white/5 text-champagne flex items-center justify-center shrink-0 border border-white/10 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-ivory-dark">Studio Location & Hours</p>
                  <p className="text-xs sm:text-sm font-medium text-ivory mb-0.5">{contactInfo.studioLocation}</p>
                  <p className="text-[11px] text-ivory-dark">{contactInfo.businessHours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Production-Ready Structured Inquiry Form */}
          <div className="lg:col-span-7 rounded-2xl bg-charcoal-800/90 border border-white/10 p-6 sm:p-8 md:p-10 shadow-2xl min-w-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-ivory leading-snug">
                Check Date & Bespoke Quote
              </h3>
              {!submitted && (
                <button
                  type="button"
                  onClick={handleQuickFill}
                  className="text-[10px] uppercase tracking-wider text-champagne hover:underline transition-colors focus-visible:outline-none"
                  title="Auto-fill sample celebration details"
                >
                  ✦ Quick-Fill Demo
                </button>
              )}
            </div>
            <p className="text-xs text-ivory-muted mb-6 leading-relaxed">
              Complete the celebration details below to verify crew calendar availability. Fields marked with <span className="text-champagne">*</span> are required.
            </p>

            {submitted ? (
              <div className="p-8 rounded-xl bg-charcoal-900 border border-champagne/30 text-center animate-fadeIn space-y-4">
                <div className="w-12 h-12 rounded-full bg-champagne/15 border border-champagne text-champagne mx-auto flex items-center justify-center text-xl">
                  ✓
                </div>
                <p className="font-serif-luxury text-2xl sm:text-3xl text-ivory">Date Inquiry Successfully Logged</p>
                <p className="text-xs sm:text-sm text-ivory-warm max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-champagne font-medium">{formData.name}</span>. Our studio director has received your inquiry for{' '}
                  <span className="text-champagne font-medium">{formData.date}</span> at{' '}
                  <span className="text-champagne font-medium">{formData.venue}</span>.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(`Hello AURA STORIES, I submitted an inquiry for ${formData.date} at ${formData.venue} (${formData.name}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-champagne text-black text-xs uppercase font-semibold tracking-widest hover:bg-champagne-light transition-all flex items-center justify-center gap-2 shadow-lg shadow-champagne/20"
                  >
                    <MessageCircle className="w-4 h-4 text-black" />
                    <span>Open WhatsApp Chat Directly</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        partnerName: '',
                        phone: '',
                        email: '',
                        date: '',
                        venue: '',
                        celebrationType: 'Full Wedding Celebration',
                        guestCount: '',
                        servicesRequired: ['Wedding Day Photography', 'Cinematic Wedding Films'],
                        message: ''
                      });
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/10 hover:border-white/20 text-xs uppercase tracking-wider text-ivory-muted hover:text-ivory transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3.5 rounded-lg bg-red-900/20 border border-red-500/40 text-red-300 text-xs flex items-center justify-between">
                    <span>{formError}</span>
                    <button
                      type="button"
                      onClick={() => setFormError(null)}
                      className="text-red-400 hover:text-red-200 ml-2 text-sm font-bold"
                    >
                      ×
                    </button>
                  </div>
                )}
                {/* Names: Primary & Partner */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                      Your Name <span className="text-champagne">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-white/10 text-ivory text-xs focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne transition-colors"
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
                      placeholder="e.g. Arjun Verma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-white/10 text-ivory text-xs focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                      Phone / WhatsApp <span className="text-champagne">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-white/10 text-ivory text-xs focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne transition-colors"
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
                      placeholder="priya@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-white/10 text-ivory text-xs focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne transition-colors"
                    />
                  </div>
                </div>

                {/* Date & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                      Wedding / Celebration Date <span className="text-champagne">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-white/10 text-ivory text-xs focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                      Wedding Location / Venue <span className="text-champagne">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.venue}
                      onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                      placeholder="e.g. Radisson Blu Vizag / Novotel / Destination"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-white/10 text-ivory text-xs focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne transition-colors"
                    />
                  </div>
                </div>

                {/* Celebration Type & Guest Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                      Celebration Type <span className="text-champagne">*</span>
                    </label>
                    <select
                      value={formData.celebrationType}
                      onChange={(e) => setFormData({ ...formData, celebrationType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-white/10 text-ivory text-xs focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne transition-colors"
                    >
                      {celebrationTypes.map((type) => (
                        <option key={type} value={type} className="bg-charcoal-900 text-ivory">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                      Estimated Guest Count <span className="text-ivory-dark font-light">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      placeholder="e.g. 200 - 350 guests"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-white/10 text-ivory text-xs focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne transition-colors"
                    />
                  </div>
                </div>

                {/* Services Required Checkboxes */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-2 font-medium">
                    Services Required
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {availableServices.map((service) => {
                      const isChecked = formData.servicesRequired.includes(service);
                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => handleServiceToggle(service)}
                          className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs text-left border transition-colors ${
                            isChecked
                              ? 'bg-champagne/15 border-champagne/60 text-champagne-light'
                              : 'bg-charcoal-900/80 border-white/10 text-ivory-dark hover:border-white/20'
                          }`}
                        >
                          <span
                            className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                              isChecked ? 'border-champagne bg-champagne text-black' : 'border-white/20'
                            }`}
                          >
                            {isChecked && <span className="text-[10px] font-bold">✓</span>}
                          </span>
                          <span className="truncate">{service}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message / Vision */}
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-ivory-dark mb-1 font-medium">
                    Message / Visual Vision <span className="text-ivory-dark font-light">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your celebration, specific ceremonies, or personal creative vision..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-charcoal-900 border border-white/10 text-ivory text-xs focus:border-champagne focus:outline-none focus:ring-1 focus:ring-champagne transition-colors"
                  />
                </div>

                {/* Submit Button with Loading State */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-full bg-champagne hover:bg-champagne-light text-black text-xs uppercase font-semibold tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-champagne/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne disabled:opacity-70 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{submitting ? 'Submitting...' : 'Submit Date Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
