"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, ShoppingCart, Monitor, Smartphone, Tablet, 
  Play, ArrowRight, Download, MessageCircle, 
  CheckCircle2, ExternalLink, Image as ImageIcon,
  Star, Quote, Zap, Code, TrendingUp, Search, Settings, Rocket
} from "lucide-react";

// ==========================================
// 1. DATA SECTION
// ==========================================

const PORTFOLIO_DATA = {
  header: {
    logo: "Ahmed Assaf.",
    tagline: "Shopify Developer & Performance Marketer"
  },
  hero: {
    photo: "/Ahmed.jpeg",
    titleStart: "Shopify Stores ",
    titleEnd: "That Scale.",
    subtitle: "I design, develop, and grow Shopify brands through high-converting stores and data-driven Meta ads."
  },
  contact: {
    whatsapp: "https://wa.me/201551441247",
    cvUrl: "/Ahmed_Assaf_CV.pdf"
  },
  socials: {
    facebook: "https://facebook.com/a7md3ssaf",
    instagram: "https://instagram.com/a7md3ssaf",
    whatsapp: "https://wa.me/201551441247"
  },
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
  services: [
    {
      icon: <TrendingUp className="text-emerald-400" size={32} />,
      title: "Performance Marketing",
      desc: "Aggressive Meta Ads scaling with advanced CBO/ABO structures, dynamic creatives, and hyper-targeted audience testing."
    },
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: "Custom Shopify Dev",
      desc: "Writing clean Liquid, CSS, and JS to build custom bundle builders, sticky ATCs, and dynamic variant galleries."
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "Conversion (CRO)",
      desc: "Designing mobile-first Arabic UX flows, urgency timers, and trust-driven UI to push conversion rates up to 5.8%."
    },
    {
      icon: <Settings className="text-purple-400" size={32} />,
      title: "Workflow Automation",
      desc: "Zero-latency integrations connecting Shopify to Google Sheets and fulfillment centers via Cloudflare Workers."
    }
  ],
  process: [
    { icon: <Search size={24} />, title: "1. Deep Audit", desc: "We analyze your store's UX, current ad accounts, and backend data to find leaks." },
    { icon: <Settings size={24} />, title: "2. Strategy & UX", desc: "Implementing conversion tweaks, bundle offers, and fixing the Arabic user journey." },
    { icon: <TrendingUp size={24} />, title: "3. Media Buying", desc: "Deploying data-driven Meta Ads with aggressive creative testing to find winning angles." },
    { icon: <Rocket size={24} />, title: "4. Scale", desc: "Once profitable CPP is achieved, we scale budgets vertically and horizontally." }
  ],
  testimonials: [
    {
      name: "Founder of Torath",
      role: "Premium Islamic Heritage",
      content: "أحمد نقل البراند في حتة تانية خالص. بفضل استراتيجيته في الإعلانات وتعديلاته البرمجية على المتجر، قدرنا نوصل لمبيعات تجاوزت 7 مليون جنيه وعائد إعلاني (ROAS) كسر الـ 20x. شخص محترف وفاهم شغله جداً.",
      isArabic: true
    },
    {
      name: "Marketing Director",
      role: "Emirates Perfumes",
      content: "Working with Ahmed was a game-changer. His custom bundle builder UX combined with aggressive Meta Ads scaling pushed our AOV to record highs. Highly recommended for any serious e-com brand.",
      isArabic: false
    }
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
        imagePath: "/torath-ads.png" 
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
        imagePath: "/emirates-ads.png" 
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
        ],
        // 👇 تأكد إن صورة المتجر دي موجودة في فولدر public بنفس الاسم 👇
        imagePath: "/torath-mockup.png"
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
        ],
        // 👇 تأكد إن صورة المتجر دي موجودة في فولدر public بنفس الاسم 👇
        imagePath: "/asia-mockup.png"
      }
    ]
  }
};

// ==========================================
// 2. COMPONENTS
// ==========================================

const SmartMockup = ({ url, imagePath }: { url: string, imagePath?: string }) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const getWidth = () => {
    if (device === 'mobile') return 'max-w-[375px]';
    if (device === 'tablet') return 'max-w-[768px]';
    return 'max-w-full';
  };

  return (
    <div className="bg-[#1A1A24] border border-white/10 rounded-2xl p-4 flex flex-col h-full overflow-hidden shadow-2xl relative z-10">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/40 border border-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/40 border border-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/40 border border-green-500/50" />
        </div>
        <div className="flex gap-2 bg-black/40 p-1 rounded-lg border border-white/5">
          <button onClick={() => setDevice('desktop')} className={`p-1.5 rounded-md transition-colors ${device === 'desktop' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}><Monitor size={16} /></button>
          <button onClick={() => setDevice('tablet')} className={`p-1.5 rounded-md transition-colors ${device === 'tablet' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}><Tablet size={16} /></button>
          <button onClick={() => setDevice('mobile')} className={`p-1.5 rounded-md transition-colors ${device === 'mobile' ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-white'}`}><Smartphone size={16} /></button>
        </div>
      </div>

      <div className="flex-1 bg-[#0A0A0F] flex justify-center items-start overflow-hidden rounded-xl border border-white/5 relative group cursor-pointer" onClick={() => window.open(url, '_blank')}>
        <div className={`relative w-full h-[500px] transition-all duration-500 ease-in-out ${getWidth()}`}>
          {imagePath ? (
             <img src={imagePath} alt="Store Preview" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-40 transition-opacity duration-300" />
          ) : (
             <div className="w-full h-full flex flex-col items-center justify-center text-white/20 bg-[#14141A]">
                <ImageIcon size={48} className="mb-4 opacity-50" />
                <span className="text-sm font-mono tracking-widest text-center px-4">Upload {imagePath || 'Screenshot'} to public folder</span>
             </div>
          )}
          
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
             <div className="bg-emerald-500 text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-[0_0_40px_rgba(16,185,129,0.4)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                Visit Live Store <ExternalLink size={18} />
             </div>
             <span className="text-white/60 text-xs mt-4 font-mono">Shopify security blocks embedded views</span>
          </div>
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
    <div className="min-h-screen bg-[#0A0A0F] text-slate-300 selection:bg-emerald-500/30 selection:text-emerald-200 custom-font relative overflow-x-hidden">
      
      {/* 👇 LIGHTWEIGHT FAST BACKGROUND (CSS ONLY - NO LAG) 👇 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-emerald-900/10 via-[#0A0A0F]/50 to-transparent"></div>
      </div>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-white block">{PORTFOLIO_DATA.header.logo}</span>
            <span className="text-xs text-gray-500 hidden md:block" dir="auto">{PORTFOLIO_DATA.header.tagline}</span>
          </div>
          <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded-full text-sm font-bold transition-colors flex items-center gap-2">
            Let's Work <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* 👇 تكبير الصورة الشخصية جداً مع تأثير الإضاءة 👇 */}
            <motion.div initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}} className="mb-10 relative inline-flex">
               <div className="absolute inset-0 bg-emerald-500 blur-[50px] opacity-20 rounded-full scale-125"></div>
               <img 
                 src={PORTFOLIO_DATA.hero.photo} 
                 alt="Ahmed Assaf" 
                 className="w-40 h-40 md:w-48 md:h-48 rounded-full border border-white/10 object-cover relative z-10 shadow-[0_0_40px_rgba(0,0,0,0.5)]" 
                 onError={(e) => { e.currentTarget.style.display = 'none'; }} 
               />
            </motion.div>

            <div className="text-xs font-mono text-emerald-500 tracking-[0.2em] uppercase mb-6 flex gap-4 font-bold">
              <span>E-Commerce</span> <span>×</span> <span>Growth</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight" dir="auto">
              {PORTFOLIO_DATA.hero.titleStart} <br/><span className="text-gray-500">{PORTFOLIO_DATA.hero.titleEnd}</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-md mb-10 leading-relaxed" dir="auto">
              {PORTFOLIO_DATA.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="bg-white text-black px-8 py-3.5 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                View My Work <ArrowRight size={18} />
              </a>
              <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-8 py-3.5 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2 backdrop-blur-md">
                <Play size={18} /> Contact Me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-10 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-12">
            {PORTFOLIO_DATA.stats.map((stat, idx) => (
              <div key={idx} className="bg-white/[0.02] p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                <div className="text-4xl font-bold text-white mb-2" dir="auto">{stat.value}</div>
                <div className="text-sm text-gray-500" dir="auto">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLICKABLE MARQUEE */}
      <div className="border-y border-white/5 bg-[#101016]/80 backdrop-blur-md py-8 overflow-hidden relative flex z-10">
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#0A0A0F] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#0A0A0F] to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-marquee flex gap-20 items-center min-w-full">
          {[...PORTFOLIO_DATA.brands, ...PORTFOLIO_DATA.brands].map((brand, i) => (
            <a key={i} href={brand.url} target="_blank" rel="noopener noreferrer" className="text-2xl font-black text-gray-600 hover:text-emerald-400 transition-colors uppercase tracking-widest whitespace-nowrap">
              {brand.name}
            </a>
          ))}
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-white/5 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4" dir="auto">Core Expertise</h2>
          <p className="text-gray-400 text-lg" dir="auto">The technical and marketing stack used to scale brands.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.services.map((service, idx) => (
            <div key={idx} className="bg-white/[0.02] backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 hover:bg-white/[0.04]">
              <div className="mb-6 bg-white/5 w-fit p-4 rounded-2xl shadow-inner">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3" dir="auto">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed" dir="auto">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TABS SECTION */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-4 mb-16 bg-[#14141A]/80 backdrop-blur-md p-2 rounded-2xl border border-white/5 shadow-2xl">
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

        <div className="space-y-12">
          <AnimatePresence mode="wait">
            
            {activeTab === 'performance' && (
              <motion.div key="performance" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-8">
                {PORTFOLIO_DATA.caseStudies.performance.map((study) => (
                  <div key={study.id} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 group hover:border-white/20 transition-colors shadow-2xl">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-3xl font-black text-white mb-2" dir="auto">{study.title}</h3>
                        <p className="text-gray-400 font-medium" dir="auto">{study.subtitle}</p>
                      </div>
                      <a href={study.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white flex items-center gap-2 hover:text-emerald-400 transition-colors bg-white/5 px-4 py-2 rounded-full">
                        View Store <ExternalLink size={16} />
                      </a>
                    </div>
                    
                    <p className="text-gray-400 mb-10 max-w-3xl leading-relaxed" dir="auto">{study.desc}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                      {study.metrics.map((m, i) => (
                        <div key={i} className="bg-[#0A0A0F]/80 p-6 rounded-2xl border border-white/5 shadow-inner">
                          <div className="text-3xl font-black text-white mb-1" dir="auto">{m.value}</div>
                          <div className="text-sm text-gray-500" dir="auto">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="bg-white/5 text-gray-300 px-4 py-2 rounded-full text-sm font-medium border border-white/10 flex items-center gap-2" dir="auto">
                          <CheckCircle2 size={14} className="text-emerald-500" /> {tag}
                        </span>
                      ))}
                    </div>

                    {study.imagePath && (
                      <div className="mt-10 rounded-2xl overflow-hidden border border-white/10 relative group/img shadow-2xl">
                         <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover/img:opacity-100 transition-opacity z-10 pointer-events-none"></div>
                         <img 
                           src={study.imagePath} 
                           alt={`${study.title} Results`} 
                           className="w-full h-auto object-cover transform group-hover/img:scale-[1.02] transition-transform duration-700" 
                           onError={(e) => { e.currentTarget.style.display = 'none'; }}
                         />
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'development' && (
              <motion.div key="development" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }} className="space-y-8">
                {PORTFOLIO_DATA.caseStudies.development.map((study) => (
                  <div key={study.id} className="bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 shadow-2xl">
                    <div className="w-full lg:w-1/3">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <h3 className="text-3xl font-black text-white mb-2" dir="auto">{study.title}</h3>
                          <p className="text-gray-400 font-medium text-sm" dir="auto">{study.subtitle}</p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <div className="text-sm font-bold text-white border-b border-white/10 pb-4">What I Built</div>
                        {study.features.map((feature, i) => (
                          <div key={i} className="group cursor-default">
                            <div className="text-white font-bold mb-1 flex items-center gap-2" dir="auto">
                              <span className="text-gray-600 text-xs font-mono">0{i+1}</span> {feature.title}
                            </div>
                            <div className="text-sm text-gray-500 pl-6 group-hover:text-gray-400 transition-colors" dir="auto">{feature.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="w-full lg:w-2/3 min-h-[500px]">
                       <SmartMockup url={study.url} imagePath={study.imagePath} />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* THE PROCESS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4" dir="auto">How We Scale</h2>
          <p className="text-gray-400 text-lg" dir="auto">A proven framework for consistent growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.process.map((step, idx) => (
            <div key={idx} className="bg-white/[0.02] backdrop-blur-md p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:bg-white/[0.05] transition-colors">
              <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-150 duration-500">
                {step.icon}
              </div>
              <div className="text-emerald-500 mb-6">{step.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2" dir="auto">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed" dir="auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-transparent to-transparent relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4" dir="auto">Client Success</h2>
          <p className="text-gray-400 text-lg" dir="auto">Real results for real brands.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.testimonials.map((test, idx) => (
            <div key={idx} className="bg-white/[0.02] backdrop-blur-md p-10 rounded-3xl border border-white/5 flex flex-col justify-between shadow-xl">
              <div>
                <Quote className="text-white/10 mb-6" size={40} />
                <p className={`text-lg text-gray-300 mb-8 leading-relaxed ${test.isArabic ? 'font-medium' : ''}`} dir="auto">
                  "{test.content}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 font-bold border border-emerald-500/20">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold" dir="auto">{test.name}</h4>
                  <p className="text-emerald-500 text-sm" dir="auto">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section id="contact" className="py-24 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-4">Let's build something great</div>
            <h2 className="text-5xl font-black text-white leading-tight mb-4" dir="auto">Ready to Scale <br/>Your Brand? <span className="text-emerald-500">.</span></h2>
            <p className="text-gray-400 max-w-md" dir="auto">Whether you need a high-converting Shopify store, a performance marketing strategy, or both — let's make it happen.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 text-lg shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 transform duration-300">
              Let's Work Together <ArrowRight size={20} />
            </a>
            <a href={PORTFOLIO_DATA.contact.cvUrl} download className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-lg backdrop-blur-md">
              <Download size={20} /> View My CV
            </a>
          </div>
        </div>
      </section>

      {/* MINI FOOTER */}
      <footer className="border-t border-white/5 bg-[#0A0A0F] py-8 relative z-10">
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
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;800&display=swap');
        
        .custom-font {
          font-family: system-ui, -apple-system, sans-serif, 'Cairo';
        }
        
        [dir="auto"] {
          text-align: start;
        }

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