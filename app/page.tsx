"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, ShoppingCart, Monitor, Smartphone, Tablet, 
  Play, ArrowRight, Download, MessageCircle, 
  CheckCircle2, ExternalLink
} from "lucide-react";

// ==========================================
// 1. DATA SECTION
// ==========================================

const PORTFOLIO_DATA = {
  header: {
    logo: "Ahmed Assaf.",
    tagline: "Shopify Developer & Performance Marketer"
  },
  contact: {
    whatsapp: "https://wa.me/201551441247",
    cvUrl: "/Ahmed_Assaf_CV.pdf" // حط مسار الـ CV بتاعك هنا
  },
  socials: {
    facebook: "https://facebook.com/a7md3ssaf",
    instagram: "https://instagram.com/a7md3ssaf",
    whatsapp: "https://wa.me/201551441247"
  },
  // بيانات شريط الماركات (تقدر تبدل النص بصور لوجوهات لو حابب)
  brands: [
    { name: "TŌRATH", url: "https://torath.xyz" },
    { name: "Asia Dates", url: "https://asia-dates.org" },
    { name: "Outlet 90", url: "#" },
    { name: "Emirates Perfumes", url: "https://emirates-perfumes.com" },
    { name: "Perfume Palace", url: "https://perfume-palace.com" },
    { name: "Freezy Bites", url: "#" }
  ],
  stats: [
    { value: "10+", label: "Brands Worked On" },
    { value: "11M+", label: "Tracked Revenue (EGP)" },
    { value: "30x", label: "Best ROAS Achieved" },
    { value: "100%", label: "Focus on Results" }
  ],
  caseStudies: {
    performance: [
      {
        id: "torath-perf",
        title: "TŌRATH",
        subtitle: "Performance Marketing Case Study",
        desc: "Scaling a premium Quran holder brand through Meta Ads. From zero to orders, we scaled Torath using strategic creatives, audience testing, and continuous optimization.",
        url: "https://torath.xyz",
        metrics: [
          { value: "10x - 30x", label: "ROAS" },
          { value: "EGP 7.2M+", label: "Revenue" },
          { value: "EGP 234", label: "CPP" },
          { value: "EGP 2,200", label: "AOV" }
        ],
        tags: ["Meta Ads", "CBO / ABO", "Creative Testing", "Audience Testing", "CRO"],
        chartMockup: "/chart-mockup.png" // لو عندك صورة لشارت حطها هنا، أو هنسيبها بشكل جمالي
      },
      {
        id: "emirates-perf",
        title: "Emirates Perfumes",
        subtitle: "Scaling FMCG & Premium Gifting",
        desc: "Engineered the media buying strategy to scale the brand to ~EGP 2 Million. Driven by aggressive Meta Ads campaigns achieving peak profitability.",
        url: "https://emirates-perfumes.com",
        metrics: [
          { value: "16.6x", label: "Peak ROAS" },
          { value: "EGP 2M", label: "Revenue" },
          { value: "EGP 4,200", label: "Peak AOV" }
        ],
        tags: ["Advanced CBO", "Offer Testing", "Bundle Strategy", "Scaling"],
      }
    ],
    development: [
      {
        id: "torath-dev",
        title: "TŌRATH",
        subtitle: "Shopify Development Case Study",
        desc: "A premium, high-converting store with custom Arabic UX features.",
        url: "https://torath.xyz",
        features: [
          { title: "Dynamic Variant Gallery", desc: "Variant-specific images (mobile & desktop)" },
          { title: "Sticky Buy Bar", desc: "Always visible, mobile optimized" },
          { title: "Direct Checkout", desc: "Buy Now -> Checkout (fewer steps)" },
          { title: "Zero-Latency Automation", desc: "Google Sheets & EasyOrders Sync" },
          { title: "Mobile-First Design", desc: "Fully responsive, fast, and smooth" }
        ]
      },
      {
        id: "asia-dev",
        title: "Asia Dates",
        subtitle: "Custom Arabic UX & Automation",
        desc: "Designed custom Arabic UX flows with Free Shipping countdown timers and animated UI.",
        url: "https://asia-dates.org",
        features: [
          { title: "Custom Bundle Builder", desc: "Interactive selection for Sukkary + Rutab" },
          { title: "Urgency Timers", desc: "Free Shipping countdown & Trust Badges" },
          { title: "Google Sheets Sync", desc: "Automated real-time order routing" }
        ]
      }
    ]
  }
};

// ==========================================
// 2. COMPONENTS
// ==========================================

const LiveDemo = ({ url }: { url: string }) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getWidth = () => {
    if (device === 'mobile') return 'max-w-[375px]';
    if (device === 'tablet') return 'max-w-[768px]';
    return 'max-w-full';
  };

  return (
    <div className="bg-[#1A1A24] border border-white/10 rounded-2xl p-4 flex flex-col h-full overflow-hidden">
      {/* Browser Header & Controls */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        
        {/* Device Toggles */}
        <div className="flex gap-2 bg-black/40 p-1 rounded-lg border border-white/5">
          <button onClick={() => setDevice('desktop')} className={`p-1.5 rounded-md transition-colors ${device === 'desktop' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}><Monitor size={16} /></button>
          <button onClick={() => setDevice('tablet')} className={`p-1.5 rounded-md transition-colors ${device === 'tablet' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}><Tablet size={16} /></button>
          <button onClick={() => setDevice('mobile')} className={`p-1.5 rounded-md transition-colors ${device === 'mobile' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}><Smartphone size={16} /></button>
        </div>

        <div className="text-xs text-gray-500 flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full border border-white/5 truncate max-w-[200px]">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          {url}
        </div>
      </div>

      {/* Iframe Container */}
      <div className="flex-1 bg-black flex justify-center items-start overflow-hidden rounded-xl border border-white/5">
        <div className={`w-full h-[500px] transition-all duration-500 ease-in-out ${getWidth()}`}>
          <iframe 
            src={url} 
            title="Live Demo" 
            className="w-full h-full bg-white"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. MAIN PAGE
// ==========================================

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'performance' | 'development'>('performance');

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-slate-300 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">
      
      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-white block">{PORTFOLIO_DATA.header.logo}</span>
            <span className="text-xs text-gray-500">{PORTFOLIO_DATA.header.tagline}</span>
          </div>
          <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded-full text-sm font-bold transition-colors flex items-center gap-2">
            Let's Work <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-mono text-gray-400 tracking-[0.2em] uppercase mb-6 flex gap-4">
              <span>E-Commerce</span> <span>×</span> <span>Growth</span> <span>×</span> <span>Real Results</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
              Shopify Stores <br/><span className="text-gray-500">That Scale.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed">
              I design, develop, and grow Shopify brands through high-converting stores and data-driven Meta ads.
            </p>
            <div className="flex gap-4">
              <a href="#work" className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </a>
              <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                <Play size={18} /> Contact Me
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 pt-10 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-12">
            {PORTFOLIO_DATA.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLICKABLE MARQUEE */}
      <div className="border-y border-white/5 bg-[#101016] py-8 overflow-hidden relative flex">
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#101016] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#101016] to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-marquee flex gap-20 items-center min-w-full">
          {[...PORTFOLIO_DATA.brands, ...PORTFOLIO_DATA.brands].map((brand, i) => (
            <a key={i} href={brand.url} target="_blank" rel="noopener noreferrer" className="text-2xl font-black text-gray-500 hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">
              {brand.name}
            </a>
          ))}
        </div>
      </div>

      {/* TABS SECTION */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        
        {/* Tab Switcher */}
        <div className="flex flex-col md:flex-row gap-4 mb-16 bg-[#14141A] p-2 rounded-2xl border border-white/5">
          <button 
            onClick={() => setActiveTab('performance')}
            className={`flex-1 flex items-center justify-center gap-3 py-6 rounded-xl transition-all duration-300 font-bold text-lg ${activeTab === 'performance' ? 'bg-[#1D1D27] text-white shadow-lg border border-white/10' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
          >
            <BarChart3 className={activeTab === 'performance' ? 'text-emerald-400' : ''} /> Performance Marketing
          </button>
          <button 
            onClick={() => setActiveTab('development')}
            className={`flex-1 flex items-center justify-center gap-3 py-6 rounded-xl transition-all duration-300 font-bold text-lg ${activeTab === 'development' ? 'bg-[#1D1D27] text-white shadow-lg border border-white/10' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'}`}
          >
            <ShoppingCart className={activeTab === 'development' ? 'text-blue-400' : ''} /> Shopify Development
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            
            {/* PERFORMANCE MARKETING TAB */}
            {activeTab === 'performance' && (
              <motion.div key="performance" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-8">
                {PORTFOLIO_DATA.caseStudies.performance.map((study) => (
                  <div key={study.id} className="bg-[#14141A] border border-white/10 rounded-[2rem] p-8 md:p-12 group hover:border-white/20 transition-colors">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-3xl font-black text-white mb-2">{study.title}</h3>
                        <p className="text-gray-400 font-medium">{study.subtitle}</p>
                      </div>
                      <a href={study.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white flex items-center gap-2 hover:text-emerald-400 transition-colors">
                        View Store <ExternalLink size={16} />
                      </a>
                    </div>
                    
                    <p className="text-gray-400 mb-10 max-w-3xl leading-relaxed">{study.desc}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                      {study.metrics.map((m, i) => (
                        <div key={i} className="bg-[#1A1A24] p-6 rounded-2xl border border-white/5">
                          <div className="text-3xl font-black text-white mb-1">{m.value}</div>
                          <div className="text-sm text-gray-500">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="bg-white/5 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-white/10 flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-emerald-500" /> {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* SHOPIFY DEVELOPMENT TAB */}
            {activeTab === 'development' && (
              <motion.div key="development" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-8">
                {PORTFOLIO_DATA.caseStudies.development.map((study) => (
                  <div key={study.id} className="bg-[#14141A] border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12">
                    
                    <div className="w-full lg:w-1/3">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <h3 className="text-3xl font-black text-white mb-2">{study.title}</h3>
                          <p className="text-gray-400 font-medium text-sm">{study.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="text-sm font-bold text-white border-b border-white/10 pb-4">What I Built</div>
                        {study.features.map((feature, i) => (
                          <div key={i} className="group cursor-default">
                            <div className="text-white font-bold mb-1 flex items-center gap-2">
                              <span className="text-gray-600 text-xs font-mono">0{i+1}</span> {feature.title}
                            </div>
                            <div className="text-sm text-gray-500 pl-6 group-hover:text-gray-400 transition-colors">{feature.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full lg:w-2/3 min-h-[500px]">
                       <LiveDemo url={study.url} />
                    </div>

                  </div>
                ))}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Let's build something great</div>
            <h2 className="text-5xl font-black text-white leading-tight mb-4">Ready to Scale <br/>Your Brand? <span className="text-emerald-500">.</span></h2>
            <p className="text-gray-400 max-w-md">Whether you need a high-converting Shopify store, a performance marketing strategy, or both — let's make it happen.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 text-lg">
              Let's Work Together <ArrowRight size={20} />
            </a>
            <a href={PORTFOLIO_DATA.contact.cvUrl} download className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-lg">
              <Download size={20} /> View My CV
            </a>
          </div>
        </div>
      </section>

      {/* MINI FOOTER */}
      <footer className="border-t border-white/5 bg-black py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-bold text-white block">{PORTFOLIO_DATA.header.logo}</span>
            <span className="text-xs text-gray-600">© {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href={PORTFOLIO_DATA.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={PORTFOLIO_DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href={PORTFOLIO_DATA.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}