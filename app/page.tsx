"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, ShoppingCart, 
  Play, ArrowRight, Download, MessageCircle, 
  CheckCircle2, ExternalLink, Image as ImageIcon, Video,
  Quote, Zap, Code, TrendingUp, Search, Settings, Rocket, LayoutTemplate
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
    subtitle: "I build fast, high-converting Shopify stores using Custom Code & tailored UI/UX, combined with data-driven Meta Ads for maximum ROAS."
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
    { name: "TŌRATH", url: "https://torath.co" },
    { name: "Emirates Perfumes", url: "https://emirates-perfumes.com" },
    { name: "Orvan Perfumes", url: "https://orvan-perfumes.com" },
    { name: "Freezy Bites", url: "https://freezybites.store" },
    { name: "Oplus Coffee", url: "https://opluscoffee.com/" },
    { name: "Art Expo", url: "https://artexpo.art" },
    { name: "New Rayan", url: "https://newrayanpharmacy.com" }
  ],
  stats: [
    { value: "10+", label: "Brands Scaled" },
    { value: "11M+", label: "Tracked Revenue (EGP)" },
    { value: "Custom", label: "UI/UX & Code" },
    { value: "100%", label: "Conversion Focused" }
  ],
  services: [
    {
      icon: <Code className="text-blue-400" size={32} />,
      title: "Custom Shopify Dev",
      desc: "Building highly tailored stores using Custom Liquid, CSS, and JS. I don't just set up themes; I code seamless user journeys matched with your brand identity."
    },
    {
      icon: <Zap className="text-yellow-400" size={32} />,
      title: "Conversion (CRO)",
      desc: "Optimizing the full funnel from landing to checkout. Implementing Sticky ATCs, FBTs, Free Shipping Bars, and Trust Badges to push CVR."
    },
    {
      icon: <TrendingUp className="text-emerald-400" size={32} />,
      title: "Performance Marketing",
      desc: "Aggressive Meta Ads scaling with advanced CBO/ABO structures, dynamic creatives, and hyper-targeted audience testing."
    },
    {
      icon: <Settings className="text-purple-400" size={32} />,
      title: "Performance Optimization",
      desc: "Speed optimization and Zero-latency integrations connecting Shopify to backend workflows for a fast, friction-free experience."
    }
  ],
  process: [
    { icon: <Search size={24} />, title: "1. Deep Audit", desc: "We analyze your store's UX, current ad accounts, and backend data to find leaks." },
    { icon: <LayoutTemplate size={24} />, title: "2. Custom UI/UX", desc: "Designing and coding tailored sections that fit your brand and simplify the user journey." },
    { icon: <Zap size={24} />, title: "3. CRO Features", desc: "Deploying FBT, Sticky Buy Buttons, and urgency timers to maximize order value." },
    { icon: <Rocket size={24} />, title: "4. Ads & Scale", desc: "Driving qualified traffic through data-driven Meta Ads and scaling vertically." }
  ],
  testimonials: [
    {
      name: "Founder of Torath",
      role: "Premium Islamic Heritage",
      content: "أحمد نقل البراند في حتة تانية خالص. بفضل استراتيجيته في الإعلانات وتعديلاته البرمجية على المتجر، قدرنا نوصل لمبيعات تجاوزت 7 مليون جنيه وعائد إعلاني (ROAS) كسر الـ 20x. شخص محترف وفاهم شغله جداً.",
      isArabic: true,
      imagePath: "/review-torath.png" 
    },
    {
      name: "Marketing Director",
      role: "Emirates Perfumes",
      content: "Working with Ahmed was a game-changer. His custom bundle builder UX combined with aggressive Meta Ads scaling pushed our AOV to record highs. Highly recommended for any serious e-com brand.",
      isArabic: false,
      imagePath: "/review-emirates.png" 
    }
  ],
  caseStudies: {
    performance: [
      {
        id: "torath-perf",
        title: "TŌRATH",
        subtitle: "Performance Marketing Case Study",
        desc: "Scaling a premium Quran holder brand through Meta Ads. From zero to orders, we scaled Torath using strategic creatives, audience testing, and continuous optimization.",
        url: "https://torath.co",
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
        subtitle: "Premium Heritage Store",
        desc: "A fully custom, high-converting Arabic UX designed for seamless purchasing and premium branding.",
        url: "https://torath.co",
        features: [
          { title: "Custom UI/UX", desc: "Tailored brand identity matching." },
          { title: "Sticky Add to Cart", desc: "Always visible on mobile to drive conversions." },
          { title: "Conversion Optimization", desc: "Direct checkout flows with fewer steps." }
        ],
        videoUrl: "/torath-demo.mp4",
        imagePath: "/torath-mockup.png"
      },
      {
        id: "emirates-dev",
        title: "Emirates Perfumes",
        subtitle: "Fragrance & Gifting",
        desc: "Developed interactive bundle builders and dynamic variant selections to maximize AOV.",
        url: "https://emirates-perfumes.com",
        features: [
          { title: "Frequently Bought Together", desc: "Custom FBT sections to increase order value." },
          { title: "Countdown Timers", desc: "Urgency elements perfectly integrated into the UI." },
          { title: "Optional Products", desc: "Upsell items embedded directly inside the cart." }
        ],
        imagePath: "/emirates-mockup.png"
      },
      {
        id: "orvan-dev",
        title: "Orvan Perfumes",
        subtitle: "Luxury Fragrances",
        desc: "A visually rich, fast-loading store prioritizing product aesthetics and smooth mobile experience.",
        url: "https://orvan-perfumes.com",
        features: [
          { title: "Interactive Sections", desc: "Smooth animations and custom product galleries." },
          { title: "Trust Badges", desc: "Strategically placed to build instant credibility." },
          { title: "Performance Optimization", desc: "Lazy loading and script optimization for speed." }
        ],
        imagePath: "/orvan-mockup.png"
      },
      {
        id: "freezy-dev",
        title: "Freezy Bites",
        subtitle: "FMCG / Snacks",
        desc: "A vibrant, engaging store designed for quick impulse buys and bulk orders.",
        url: "https://freezybites.store",
        features: [
          { title: "Free Shipping Bar", desc: "Dynamic progress bar to encourage higher cart totals." },
          { title: "Sticky Add to Cart", desc: "Frictionless mobile purchasing." },
          { title: "Custom Cart Drawer", desc: "AJAX-powered cart with integrated upsells." }
        ],
        imagePath: "/freezy-mockup.png"
      },
      {
        id: "oplus-dev",
        title: "Oplus Coffee",
        subtitle: "Premium Coffee Roasters",
        desc: "An immersive e-commerce experience focusing on coffee origin stories and subscription-style bundles.",
        url: "https://opluscoffee.com/",
        features: [
          { title: "Tailored UI/UX", desc: "Dark, premium aesthetic perfectly matched to the brand." },
          { title: "Frequently Bought Together", desc: "Pairing coffee beans with equipment." },
          { title: "Conversion Optimization", desc: "Streamlined navigation and quick-buy features." }
        ],
        imagePath: "/oplus-mockup.png"
      },
      {
        id: "artexpo-dev",
        title: "Art Expo",
        subtitle: "Art & Decor",
        desc: "A minimalist gallery-style store that lets the artwork stand out, built for lightning-fast speeds.",
        url: "https://artexpo.art",
        features: [
          { title: "Performance Optimization", desc: "Handling high-res imagery without sacrificing speed." },
          { title: "Interactive Sections", desc: "Custom grid layouts and hover effects." },
          { title: "Trust Badges", desc: "Secure checkout indicators." }
        ],
        imagePath: "/artexpo-mockup.png"
      },
      {
        id: "rayan-dev",
        title: "New Rayan Pharmacy",
        subtitle: "Health & Care",
        desc: "A robust, highly-categorized pharmacy store focusing on searchability and massive product catalogs.",
        url: "https://newrayanpharmacy.com",
        features: [
          { title: "Advanced Search & Filters", desc: "Custom Liquid coding for fast product discovery." },
          { title: "Optional Products inside Cart", desc: "Relevant medical/cosmetic cross-sells." },
          { title: "Free Shipping Bar", desc: "Incentivizing larger pharmacy orders." }
        ],
        imagePath: "/rayan-mockup.png"
      }
    ]
  }
};

// ==========================================
// 2. COMPONENTS (Fast Mobile Mockup)
// ==========================================

const MobileMockup = ({ url, imagePath, videoUrl }: { url: string, imagePath?: string, videoUrl?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full">
      <div className="relative w-[280px] h-[580px] bg-[#05050A] border-[8px] border-[#1A1A24] rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden ring-1 ring-white/10 group">
        <div className="absolute top-0 inset-x-0 h-6 bg-[#1A1A24] w-[40%] mx-auto rounded-b-2xl z-20 shadow-sm"></div>

        {videoUrl ? (
          <video 
            src={videoUrl} 
            controls
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover z-10" 
          />
        ) : imagePath ? (
          <img 
            src={imagePath} 
            alt="Store Preview" 
            className="w-full h-full object-cover object-top z-10" 
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-white/20 p-6 z-10 text-center">
             <ImageIcon size={40} className="mb-4 opacity-50" />
             <span className="text-xs font-mono">Upload Image:<br/>{imagePath}</span>
          </div>
        )}
      </div>

      <a href={url} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-black px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:from-emerald-400 hover:to-emerald-500 transition-colors shadow-lg hover:-translate-y-1">
        View Live Store <ExternalLink size={18} />
      </a>
    </div>
  );
};

// ==========================================
// 3. MAIN PAGE
// ==========================================

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'performance' | 'development'>('performance');

  return (
    <div className="min-h-screen bg-[#05050A] text-slate-300 selection:bg-emerald-500/30 selection:text-emerald-200 custom-font relative overflow-x-hidden">
      
      {/* 👇 LIGHTWEIGHT FAST BACKGROUND (CSS ONLY - NO LAG) 👇 */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#05050A]">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-emerald-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-900/10 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>
      </div>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#05050A]/90 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <span className="text-xl font-black text-white block tracking-tight">{PORTFOLIO_DATA.header.logo}</span>
            <span className="text-xs text-gray-400 hidden md:block font-medium" dir="auto">{PORTFOLIO_DATA.header.tagline}</span>
          </div>
          <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white text-black hover:bg-gray-200 px-6 py-2.5 rounded-full text-sm font-bold transition-colors flex items-center gap-2">
            Let's Work <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-10 relative inline-flex">
               <div className="p-1 rounded-full bg-gradient-to-tr from-emerald-500/50 to-cyan-500/50 relative z-10 shadow-xl">
                 <img 
                   src={PORTFOLIO_DATA.hero.photo} 
                   alt="Ahmed Assaf" 
                   className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#05050A] object-cover" 
                   onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                 />
               </div>
            </div>

            <div className="text-xs font-mono text-emerald-400 tracking-[0.2em] uppercase mb-6 flex gap-4 font-bold">
              <span>E-Commerce</span> <span>×</span> <span>Growth</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight" dir="auto">
              {PORTFOLIO_DATA.hero.titleStart} <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">{PORTFOLIO_DATA.hero.titleEnd}</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-md mb-10 leading-relaxed font-medium" dir="auto">
              {PORTFOLIO_DATA.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors flex items-center gap-2">
                View My Work <ArrowRight size={18} />
              </a>
              <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-[#10101A] border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-[#1A1A24] transition-colors flex items-center gap-2">
                <Play size={18} /> Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="grid grid-cols-2 gap-6 pt-10 md:pt-0 border-t md:border-t-0 md:border-l border-white/10 md:pl-12">
            {PORTFOLIO_DATA.stats.map((stat, idx) => (
              <div key={idx} className="bg-[#0A0A0F] p-6 rounded-3xl border border-white/5">
                <div className="text-4xl font-black text-white mb-2" dir="auto">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium" dir="auto">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAST MARQUEE */}
      <div className="border-y border-white/5 bg-[#0A0A0F] py-8 overflow-hidden relative flex z-10">
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#05050A] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#05050A] to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-marquee flex gap-20 items-center min-w-full">
          {[...PORTFOLIO_DATA.brands, ...PORTFOLIO_DATA.brands].map((brand, i) => (
            <a key={i} href={brand.url} target="_blank" rel="noopener noreferrer" className="text-2xl font-black text-gray-600 hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap">
              {brand.name}
            </a>
          ))}
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" dir="auto">Core Expertise</h2>
          <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm" dir="auto">The tech & marketing stack</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.services.map((service, idx) => (
            <div key={idx} className="bg-[#0A0A0F] p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-colors shadow-lg">
              <div className="mb-6 bg-white/5 w-fit p-4 rounded-2xl border border-white/5">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3" dir="auto">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed" dir="auto">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TABS SECTION */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-4 mb-16 bg-[#0A0A0F] p-2 rounded-2xl border border-white/5 shadow-xl">
          <button 
            onClick={() => setActiveTab('performance')}
            className={`flex-1 flex items-center justify-center gap-3 py-6 rounded-xl transition-colors font-bold text-lg ${activeTab === 'performance' ? 'bg-[#14141A] text-white border border-white/10' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
          >
            <BarChart3 className={activeTab === 'performance' ? 'text-emerald-400' : ''} /> Performance Marketing
          </button>
          <button 
            onClick={() => setActiveTab('development')}
            className={`flex-1 flex items-center justify-center gap-3 py-6 rounded-xl transition-colors font-bold text-lg ${activeTab === 'development' ? 'bg-[#14141A] text-white border border-white/10' : 'text-gray-500 hover:text-white hover:bg-white/5'}`}
          >
            <ShoppingCart className={activeTab === 'development' ? 'text-emerald-400' : ''} /> Shopify Development
          </button>
        </div>

        <div className="space-y-12">
          <AnimatePresence mode="wait">
            
            {/* 🔴 PERFORMANCE TAB 🔴 */}
            {activeTab === 'performance' && (
              <motion.div key="performance" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-8">
                {PORTFOLIO_DATA.caseStudies.performance.map((study) => (
                  <div key={study.id} className="bg-[#0A0A0F] border border-white/5 rounded-[2rem] p-8 md:p-12 transition-colors shadow-lg">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-4xl font-black text-white mb-2" dir="auto">{study.title}</h3>
                        <p className="text-emerald-400 font-bold text-sm uppercase tracking-wider" dir="auto">{study.subtitle}</p>
                      </div>
                      <a href={study.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white flex items-center gap-2 hover:text-emerald-400 transition-colors bg-[#1A1A24] px-5 py-2.5 rounded-full border border-white/5">
                        View Store <ExternalLink size={16} />
                      </a>
                    </div>
                    
                    <p className="text-gray-300 mb-10 max-w-3xl leading-relaxed text-lg" dir="auto">{study.desc}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                      {study.metrics.map((m, i) => (
                        <div key={i} className="bg-[#101016] p-6 rounded-3xl border border-white/5">
                          <div className="text-3xl font-black text-white mb-1" dir="auto">{m.value}</div>
                          <div className="text-sm text-gray-500 font-medium" dir="auto">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="bg-emerald-500/10 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-bold border border-emerald-500/20 flex items-center gap-2" dir="auto">
                          <CheckCircle2 size={14} className="text-emerald-500" /> {tag}
                        </span>
                      ))}
                    </div>

                    {study.imagePath && (
                      <div className="mt-10 rounded-3xl overflow-hidden border border-white/10">
                         <img 
                           src={study.imagePath} 
                           alt={`${study.title} Results`} 
                           className="w-full h-auto object-cover" 
                           onError={(e) => { e.currentTarget.style.display = 'none'; }}
                         />
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {/* 🟢 DEVELOPMENT TAB 🟢 */}
            {activeTab === 'development' && (
              <motion.div key="development" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-8">
                
                <div className="bg-[#0A0A0F] border border-white/5 rounded-[2rem] p-8 md:p-10 mb-12 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3" dir="auto">
                    <Code className="text-cyan-400" size={28} /> Development Arsenal & CRO Features
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['Sticky Add to Cart', 'Frequently Bought Together (FBT)', 'Countdown Timers', 'Free Shipping Bar', 'Optional Products in Cart', 'Interactive Sections', 'Trust Badges', 'Custom UI/UX', 'Performance Optimization'].map((feat, i) => (
                      <span key={i} className="bg-[#14141A] text-gray-300 border border-white/5 px-5 py-2.5 rounded-full text-sm font-medium" dir="auto">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {PORTFOLIO_DATA.caseStudies.development.map((study) => (
                  <div key={study.id} className="bg-[#0A0A0F] border border-white/5 rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center shadow-lg">
                    <div className="w-full lg:w-1/2">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <h3 className="text-4xl font-black text-white mb-2" dir="auto">{study.title}</h3>
                          <p className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 font-bold text-sm uppercase tracking-wider" dir="auto">{study.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-8 leading-relaxed text-lg" dir="auto">{study.desc}</p>
                      
                      <div className="space-y-6">
                        <div className="text-sm font-bold text-white border-b border-white/5 pb-4">Features Implemented</div>
                        {study.features.map((feature, i) => (
                          <div key={i} className="cursor-default">
                            <div className="text-white font-bold mb-1 flex items-center gap-2" dir="auto">
                              <span className="text-emerald-500 text-xs font-mono bg-emerald-500/10 px-2 py-1 rounded">0{i+1}</span> {feature.title}
                            </div>
                            <div className="text-sm text-gray-400 pl-9" dir="auto">{feature.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
                       <MobileMockup url={study.url} imagePath={study.imagePath} videoUrl={study.videoUrl} />
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" dir="auto">How We Scale</h2>
          <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm" dir="auto">A proven framework for consistent growth</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.process.map((step, idx) => (
            <div key={idx} className="bg-[#0A0A0F] p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group hover:border-white/10 transition-colors shadow-lg">
              <div className="absolute -right-4 -top-4 opacity-5 text-emerald-500">
                {step.icon}
              </div>
              <div className="text-emerald-400 mb-6 bg-emerald-500/10 w-fit p-4 rounded-2xl border border-emerald-500/20">{step.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3" dir="auto">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed" dir="auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 bg-[#05050A] relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" dir="auto">Client Success</h2>
          <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm" dir="auto">Real results for real brands</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.testimonials.map((test, idx) => (
            <div key={idx} className="bg-[#0A0A0F] p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between shadow-lg hover:border-white/10 transition-colors">
              
              {test.imagePath ? (
                <div className="w-full h-64 md:h-72 mb-8 rounded-2xl overflow-hidden bg-[#101016] flex items-center justify-center border border-white/5 ring-1 ring-white/5">
                  <img 
                    src={test.imagePath} 
                    alt={`Review from ${test.name}`} 
                    className="w-full h-full object-contain p-2" 
                    onError={(e) => { 
                      e.currentTarget.style.display = 'none'; 
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-sm font-mono text-gray-500">Image not found: ${test.imagePath}</span>`;
                    }} 
                  />
                </div>
              ) : (
                <div className="mb-8">
                  <Quote className="text-white/10 mb-6" size={40} />
                  <p className={`text-lg text-gray-300 leading-relaxed ${test.isArabic ? 'font-medium' : ''}`} dir="auto">
                    "{test.content}"
                  </p>
                </div>
              )}

              <div className="flex items-center gap-4 mt-auto border-t border-white/5 pt-6">
                <div className="w-12 h-12 bg-[#1A1A24] rounded-full flex items-center justify-center text-emerald-400 font-bold border border-white/5">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold" dir="auto">{test.name}</h4>
                  <p className="text-emerald-400 text-sm font-medium" dir="auto">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section id="contact" className="py-24 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto bg-[#0A0A0F] border border-white/5 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-4 font-bold">Let's build something great</div>
            <h2 className="text-5xl font-black text-white leading-tight mb-4" dir="auto">Ready to Scale <br/>Your Brand? <span className="text-emerald-500">.</span></h2>
            <p className="text-gray-400 max-w-md text-lg" dir="auto">Whether you need a high-converting Shopify store, a performance marketing strategy, or both — let's make it happen.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-black px-10 py-5 rounded-full font-black hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2 text-lg shadow-lg">
              Let's Work Together <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* MINI FOOTER */}
      <footer className="border-t border-white/5 bg-[#05050A] py-8 relative z-10 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-black text-white block tracking-tight">{PORTFOLIO_DATA.header.logo}</span>
            <span className="text-xs text-gray-500 font-medium">© {new Date().getFullYear()} All rights reserved.</span>
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
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');
        
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
          animation: marquee 35s linear infinite;
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
