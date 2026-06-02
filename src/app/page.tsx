"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Camera,
  Video,
  Plane,
  Building2,
  Heart,
  Shield,
  Clock,
  Star,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Play,
  ArrowRight,
  Menu,
  X,
  Check,
} from "lucide-react";

// Instagram SVG Icon
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

// Simplified services - only 4 main ones
const services = [
  {
    icon: Camera,
    title: "Fotografie",
    description: "Emotionale Hochzeitsfotos",
  },
  {
    icon: Video,
    title: "Videografie",
    description: "Cineastische 4K Filme",
  },
  {
    icon: Plane,
    title: "Drohne",
    description: "Spektakuläre Luftaufnahmen",
  },
  {
    icon: Building2,
    title: "Location",
    description: "Exklusive Eventlocation",
  },
];

// Simplified features
const features = [
  { icon: Heart, text: "500+ Hochzeiten" },
  { icon: Star, text: "5-Sterne" },
  { icon: Shield, text: "Backup-Team" },
  { icon: Clock, text: "48h Sneak Peek" },
];

// Simplified testimonials - only 2
const testimonials = [
  {
    name: "Sarah & Thomas",
    text: "Die Fotos sind wie aus einem Märchen – natürlich und wunderschön!",
    rating: 5,
  },
  {
    name: "Fatima & Ahmed",
    text: "Endlich ein Team, das unsere Traditionen versteht. Absolute Empfehlung!",
    rating: 5,
  },
];

// Simplified FAQ - only 4 most important
const faqItems = [
  {
    question: "Wie weit im Voraus buchen?",
    answer: "Wir empfehlen 12-18 Monate vor dem Termin. Beliebte Daten sind schnell vergeben.",
  },
  {
    question: "Welche Städte bedienen Sie?",
    answer: "Ganz Deutschland, Schwerpunkt Bayern & Franken. Nürnberg, München, Frankfurt und mehr.",
  },
  {
    question: "Erfahrung mit multikulturellen Hochzeiten?",
    answer: "Ja! Deutsche, arabische, türkische Hochzeiten – wir kennen alle Traditionen.",
  },
  {
    question: "Wann erhalten wir die Fotos?",
    answer: "Sneak Peek in 48h, komplette Galerie in 4-6 Wochen, Video in 8-12 Wochen.",
  },
];

// Portfolio images - only 4
const portfolioImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=600",
  "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600",
];

// Form service options
const serviceOptions = [
  { id: "foto", label: "Fotografie", icon: Camera },
  { id: "video", label: "Video", icon: Video },
  { id: "drohne", label: "Drohne", icon: Plane },
  { id: "location", label: "Location", icon: Building2 },
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Smart Form State
  const [formStep, setFormStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, services: selectedServices });
    alert("Vielen Dank! Wir melden uns innerhalb von 24 Stunden.");
    setFormStep(1);
    setSelectedServices([]);
    setFormData({ name: "", email: "", phone: "", date: "", message: "" });
  };

  const nextStep = () => setFormStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setFormStep(prev => Math.max(prev - 1, 1));

  return (
    <main className="min-h-screen bg-[#FAF9F7] overflow-x-hidden">
      {/* WhatsApp Button - Better touch target */}
      <a
        href="https://wa.me/49123456789"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl active:scale-95 transition-all hover:scale-105"
        aria-label="WhatsApp kontaktieren"
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Navigation - Mobile Optimized */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#FAF9F7]/98 backdrop-blur-lg shadow-sm py-2" : "bg-transparent py-3 md:py-4"
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="text-xl md:text-2xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            <span className="text-[#2D2926]">Bella</span>
            <span className="text-[#6B6560]"> Films</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm text-[#2D2926] hover:text-[#6B6560] transition-colors">Leistungen</a>
            <a href="#portfolio" className="text-sm text-[#2D2926] hover:text-[#6B6560] transition-colors">Portfolio</a>
            <a href="#faq" className="text-sm text-[#2D2926] hover:text-[#6B6560] transition-colors">FAQ</a>
            <Button asChild size="sm">
              <a href="#kontakt">Jetzt Anfragen</a>
            </Button>
          </div>

          {/* Mobile Menu Button - Better touch target */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center -mr-2 rounded-lg active:bg-[#E8E6E3]/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#FAF9F7] border-t border-[#E8E6E3]"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
                <a href="#services" className="py-3 px-2 text-[#2D2926] rounded-lg active:bg-[#E8E6E3]" onClick={() => setIsMenuOpen(false)}>Leistungen</a>
                <a href="#portfolio" className="py-3 px-2 text-[#2D2926] rounded-lg active:bg-[#E8E6E3]" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                <a href="#faq" className="py-3 px-2 text-[#2D2926] rounded-lg active:bg-[#E8E6E3]" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                <Button asChild className="mt-3 h-12">
                  <a href="#kontakt" onClick={() => setIsMenuOpen(false)}>Jetzt anfragen</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section - Mobile First */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center pt-14">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F7]/60 via-[#FAF9F7]/75 to-[#FAF9F7]" />
        </div>

        <div className="relative z-10 container mx-auto px-5 text-center py-10 md:py-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] md:text-sm tracking-[0.25em] text-[#6B6560] uppercase mb-3 md:mb-4"
          >
            Hochzeitsfotografie & Video
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[2.5rem] md:text-6xl lg:text-7xl font-light text-[#2D2926] mb-4 leading-[1.1]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Unvergessliche
            <br />
            <span className="italic">Momente</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[15px] md:text-lg text-[#5C5854] max-w-sm md:max-w-md mx-auto mb-8 leading-relaxed"
          >
            Authentische Bilder und cineastische Filme für Ihre Traumhochzeit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center px-4 sm:px-0"
          >
            <Button asChild size="lg" className="h-12 text-[15px] w-full sm:w-auto">
              <a href="#kontakt">
                Kostenlos anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 text-[15px] w-full sm:w-auto">
              <a href="#portfolio">
                <Play className="mr-2 h-4 w-4" />
                Portfolio ansehen
              </a>
            </Button>
          </motion.div>

          {/* Quick Stats - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-4 gap-2 md:gap-6 mt-10 md:mt-14 max-w-md md:max-w-lg mx-auto"
          >
            {features.map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto bg-white/80 rounded-full flex items-center justify-center mb-1.5 shadow-sm">
                  <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-[#6B6560]" />
                </div>
                <p className="text-[10px] md:text-xs text-[#5C5854] leading-tight">{feature.text}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          >
            <ChevronDown className="w-6 h-6 text-[#6B6560]" />
          </motion.div>
        </div>
      </section>

      {/* Services Section - Cards Side by Side */}
      <section id="services" className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-5">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[10px] md:text-xs tracking-[0.25em] text-[#6B6560] uppercase mb-2">Leistungen</p>
            <h2 className="text-2xl md:text-4xl text-[#2D2926]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Was wir bieten
            </h2>
          </div>

          {/* 2x2 Grid on Mobile, 4 in a row on Desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#FAF9F7] p-5 md:p-6 text-center group hover:shadow-md transition-all duration-300 rounded-lg active:scale-[0.98]"
              >
                <div className="w-11 h-11 md:w-14 md:h-14 mx-auto bg-white rounded-full flex items-center justify-center mb-3 group-hover:bg-[#2D2926] transition-colors shadow-sm">
                  <service.icon className="w-5 h-5 md:w-6 md:h-6 text-[#6B6560] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm md:text-base font-medium text-[#2D2926] mb-1">{service.title}</h3>
                <p className="text-xs md:text-sm text-[#6B6560] leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section - Simplified */}
      <section id="portfolio" className="py-14 md:py-24 bg-[#FAF9F7]">
        <div className="container mx-auto px-5">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[10px] md:text-xs tracking-[0.25em] text-[#6B6560] uppercase mb-2">Portfolio</p>
            <h2 className="text-2xl md:text-4xl text-[#2D2926]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Unsere Arbeit
            </h2>
          </div>

          {/* 2x2 Grid with better spacing */}
          <div className="grid grid-cols-2 gap-2 md:gap-4 max-w-3xl mx-auto">
            {portfolioImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="aspect-[4/3] overflow-hidden rounded-lg group"
              >
                <img
                  src={src}
                  alt={`Hochzeitsfoto ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com/bella_films"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#6B6560] hover:text-[#2D2926] transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              Mehr auf Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials - Compact Cards Side by Side */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-[10px] md:text-xs tracking-[0.25em] text-[#6B6560] uppercase mb-2">Bewertungen</p>
              <h2 className="text-2xl md:text-3xl text-[#2D2926]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Was Paare sagen
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#FAF9F7] p-5 md:p-6 rounded-lg"
                >
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#C4A052] text-[#C4A052]" />
                    ))}
                  </div>
                  <p className="text-[13px] md:text-sm text-[#5C5854] italic mb-4 leading-relaxed">"{t.text}"</p>
                  <p className="text-sm font-medium text-[#2D2926]">{t.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Contact Form - Wizard Style */}
      <section id="kontakt" className="py-16 md:py-24 bg-[#F5F4F2]">
        <div className="container mx-auto px-5">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <p className="text-[10px] md:text-xs tracking-[0.25em] text-[#6B6560] uppercase mb-2">Kontakt</p>
              <h2 className="text-2xl md:text-3xl text-[#2D2926] mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Jetzt anfragen
              </h2>
              <p className="text-sm text-[#6B6560]">Kostenlos & unverbindlich</p>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center items-center gap-3 mb-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                      formStep >= step
                        ? "bg-[#2D2926] text-white"
                        : "bg-[#E8E6E3] text-[#6B6560]"
                    }`}
                  >
                    {formStep > step ? <Check className="w-4 h-4" /> : step}
                  </div>
                  {step < 3 && (
                    <div className={`w-8 h-0.5 ml-3 transition-colors ${
                      formStep > step ? "bg-[#2D2926]" : "bg-[#E8E6E3]"
                    }`} />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-xl shadow-sm">
              <AnimatePresence mode="wait">
                {/* Step 1: Select Services */}
                {formStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-base md:text-lg font-medium text-[#2D2926] mb-5 text-center">
                      Was interessiert Sie?
                    </h3>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {serviceOptions.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => toggleService(service.id)}
                          className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 active:scale-[0.98] ${
                            selectedServices.includes(service.id)
                              ? "border-[#2D2926] bg-[#FAF9F7]"
                              : "border-[#E8E6E3] hover:border-[#6B6560]"
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                            selectedServices.includes(service.id)
                              ? "bg-[#2D2926]"
                              : "bg-[#F0EFED]"
                          }`}>
                            <service.icon className={`w-5 h-5 transition-colors ${
                              selectedServices.includes(service.id) ? "text-white" : "text-[#6B6560]"
                            }`} />
                          </div>
                          <span className="text-sm font-medium text-[#2D2926]">{service.label}</span>
                          {selectedServices.includes(service.id) && (
                            <Check className="w-4 h-4 text-[#2D2926] absolute top-2 right-2" />
                          )}
                        </button>
                      ))}
                    </div>
                    <Button
                      type="button"
                      onClick={nextStep}
                      disabled={selectedServices.length === 0}
                      className="w-full h-12"
                    >
                      Weiter
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </motion.div>
                )}

                {/* Step 2: Date & Details */}
                {formStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-base md:text-lg font-medium text-[#2D2926] mb-5 text-center">
                      Wann ist Ihre Hochzeit?
                    </h3>
                    <div className="space-y-5 mb-6">
                      <div>
                        <Label htmlFor="date" className="text-sm text-[#2D2926] mb-2 block">Datum (optional)</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-sm text-[#2D2926] mb-2 block">Nachricht (optional)</Label>
                        <Textarea
                          id="message"
                          placeholder="Erzählen Sie uns von Ihrer Hochzeit..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          className="resize-none"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button type="button" variant="outline" onClick={prevStep} className="flex-1 h-12">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Zurück
                      </Button>
                      <Button type="button" onClick={nextStep} className="flex-1 h-12">
                        Weiter
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Contact Info */}
                {formStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-base md:text-lg font-medium text-[#2D2926] mb-5 text-center">
                      Wie erreichen wir Sie?
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <Label htmlFor="name" className="text-sm text-[#2D2926] mb-2 block">Name *</Label>
                        <Input
                          id="name"
                          placeholder="Ihr Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm text-[#2D2926] mb-2 block">E-Mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="ihre@email.de"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-12"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-sm text-[#2D2926] mb-2 block">Telefon (optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+49 123 456789"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12"
                        />
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button type="button" variant="outline" onClick={prevStep} className="flex-1 h-12">
                        <ChevronLeft className="mr-2 h-4 w-4" />
                        Zurück
                      </Button>
                      <Button type="submit" className="flex-1 h-12">
                        Absenden
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-center text-xs text-[#6B6560] mt-5">
                      Antwort innerhalb von 24 Stunden garantiert
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ - Compact */}
      <section id="faq" className="py-14 md:py-24 bg-white">
        <div className="container mx-auto px-5">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-[10px] md:text-xs tracking-[0.25em] text-[#6B6560] uppercase mb-2">FAQ</p>
              <h2 className="text-2xl md:text-3xl text-[#2D2926]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Häufige Fragen
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-[#E8E6E3] rounded-lg px-4 data-[state=open]:bg-[#FAF9F7]"
                >
                  <AccordionTrigger className="text-left text-sm md:text-base py-4 hover:no-underline font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-[#5C5854] pb-4 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="bg-[#2D2926] text-white py-10 md:py-12">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Brand */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Bella <span className="text-[#A39E99]">Films</span>
                </h3>
                <p className="text-sm text-[#A39E99] mb-4">
                  Premium Hochzeitsfotografie & Videografie in Deutschland.
                </p>
                <a
                  href="https://instagram.com/bella_films"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#A39E99] hover:text-white transition-colors"
                >
                  <InstagramIcon className="w-4 h-4" />
                  @bella_films
                </a>
              </div>

              {/* Contact */}
              <div className="text-center md:text-left">
                <h4 className="text-sm font-medium mb-4">Kontakt</h4>
                <ul className="space-y-3 text-sm text-[#A39E99]">
                  <li className="flex items-center justify-center md:justify-start gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    Nürnberg, Bayern
                  </li>
                  <li>
                    <a href="tel:+49123456789" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      +49 123 456789
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@bella-films.de" className="flex items-center justify-center md:justify-start gap-2 hover:text-white transition-colors">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      info@bella-films.de
                    </a>
                  </li>
                </ul>
              </div>

              {/* Cities */}
              <div className="text-center md:text-left">
                <h4 className="text-sm font-medium mb-4">Regionen</h4>
                <p className="text-sm text-[#A39E99] leading-relaxed">
                  Bayern, Franken, Baden-Württemberg, Hessen, NRW & ganz Deutschland
                </p>
              </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-[#3D3A37] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#A39E99]">
              <p>© 2024 Bella Films. Alle Rechte vorbehalten.</p>
              <div className="flex gap-6">
                <a href="/impressum" className="hover:text-white transition-colors">Impressum</a>
                <a href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Hidden SEO Content */}
      <div className="sr-only" aria-hidden="true">
        <h2>Hochzeitsfotograf Deutschland</h2>
        <p>
          Bella Films - Hochzeitsfotograf Nürnberg, München, Frankfurt, Stuttgart, Köln, Hamburg, Berlin.
          Arabische Hochzeit, Türkische Hochzeit, Hochzeitsvideo mit Drohne, Eventlocation Bayern.
        </p>
      </div>
    </main>
  );
}
