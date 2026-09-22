"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, ShoppingCart, 
  Play, ArrowRight, MessageCircle, 
  CheckCircle2, ExternalLink, Image as ImageIcon,
  Zap, Code, TrendingUp, Search, Settings, Rocket, LayoutTemplate, X, ZoomIn
} from "lucide-react";

// ==========================================
// 1. DATA SECTION
// ==========================================

const PORTFOLIO_DATA = {
  header: {
    logo: "Ahmed Assaf.",
    tagline: "Top-Tier Performance Marketer & Shopify Dev"
  },
  hero: {
    photo: "/Ahmed.jpeg",
    titleStart: "E-Commerce ",
    titleEnd: "Dominance.",
    subtitle: "I build luxury, high-converting Shopify stores & deploy aggressive Meta Ads strategies to scale brands beyond 10M+ EGP. I don't just market, I dominate."
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
    { name: "Outlet 90", url: "https://outlet90.com" },
    { name: "Torath", url: "https://torath.co" },
    { name: "Emirates Perfumes", url: "https://emirates-perfumes.com" },
    { name: "Orvan Perfumes", url: "https://orvan-perfumes.com" },
    { name: "Perfume Palace", url: "https://perfume-palace.com" },
    { name: "Asia Dates", url: "https://asia-dates.org" },
    { name: "Oplus Coffee", url: "https://opluscoffee.com/" },
    { name: "New Rayan", url: "https://newrayanpharmacy.com" }
  ],
  stats: [
    { value: "10+", label: "Brands Scaled" },
    { value: "11M+", label: "Tracked Revenue (EGP)" },
    { value: "65x", label: "Peak ROAS Achieved" },
    { value: "100%", label: "Conversion Focused" }
  ],
  services: [
    {
      icon: <Code className="text-emerald-400" size={32} />,
      title: "Custom Shopify Dev",
      desc: "Building highly tailored stores using Custom Liquid, CSS, and JS. I don't just set up themes; I code seamless user journeys matched with your brand identity."
    },
    {
      icon: <Zap className="text-emerald-400" size={32} />,
      title: "Conversion (CRO)",
      desc: "Optimizing the full funnel from landing to checkout. Implementing Sticky ATCs, FBTs, Free Shipping Bars, and Trust Badges to push CVR."
    },
    {
      icon: <TrendingUp className="text-emerald-400" size={32} />,
      title: "Performance Marketing",
      desc: "Aggressive Meta Ads scaling with advanced CBO/ABO structures, dynamic creatives, and hyper-targeted audience testing."
    },
    {
      icon: <Settings className="text-emerald-400" size={32} />,
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
  caseStudies: {
    performance: [
      {
        id: "outlet90-perf",
        title: "Outlet 90",
        subtitle: "Massive E-Commerce Scaling",
        desc: "Revamped the digital marketing strategy focusing on high-converting product pages and aggressive Meta Ads scaling. Achieved over 10 Million EGP in revenue with record-breaking ROAS peaks while maintaining a strictly profitable acquisition cost.",
        url: "https://outlet90.com",
        metrics: [
          { value: "E£10M+", label: "Total Revenue" },
          { value: "21x - 65x", label: "Ads ROAS" },
          { value: "Max E£160", label: "Acquisition CPP" }
        ],
        tags: ["Meta Ads", "Catalog Sales", "Aggressive Scaling", "ROAS Optimization"],
        resultsGallery: [
          "/outlet90-1.jpg",
          "/outlet90-2.jpg"
        ]
      },
      {
        id: "torath-perf",
        title: "Torath",
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
        resultsGallery: [
          "/torath-ads.png",
          "/torath-adss.png"
        ]
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
        resultsGallery: [
          "/emirates-perfumes.png"
        ]
      },
      {
        id: "perfume-palace-perf",
        title: "Perfume Palace",
        subtitle: "Rapid Scaling for Emerging Fragrance Brand",
        desc: "Took over performance marketing and initiated rapid scaling for an emerging fragrance brand. Executed strategic UI/UX optimizations on the existing store to boost conversion rates. Deployed aggressive CBO campaigns and offer testing (e.g., Buy 2 Get 1 Free), achieving an impressive early average ROAS of 9.5x and peak campaign CTRs of 5.87%.",
        url: "https://perfume-palace.com",
        metrics: [
          { value: "9.5x", label: "Average ROAS" },
          { value: "5.87%", label: "Peak CTR" },
          { value: "~E£177", label: "Optimized CPP" }
        ],
        tags: ["CBO Campaigns", "Offer Testing", "UI/UX Optimization", "Scaling"],
        resultsGallery: [
          "/Perfume-Palace.png"
        ]
      },
      {
        id: "asia-perf",
        title: "Asia Dates (تمور آسية)",
        subtitle: "Premium Dates & Corporate Gifting",
        desc: "Scaled a premium dates and corporate gifting brand to E£1.86 Million. Designed custom Arabic UX flows with Free Shipping countdown timers, animated competitive pricing icons, and universal Sticky Add-To-Cart features. Managed highly efficient Meta Ads campaigns yielding 5.9x to 8.4x ROAS with an exceptional CPP ranging from E£113 to E£160.",
        url: "https://asia-dates.org",
        metrics: [
          { value: "E£1.86M", label: "Total Revenue" },
          { value: "5.9x - 8.4x", label: "Ads ROAS" },
          { value: "E£113 - E£160", label: "CPP" }
        ],
        tags: ["Meta Ads", "Arabic UX", "Corporate Gifting", "CRO"],
        resultsGallery: [
          "/asia-dates-1.png",
          "/asia-dates-2.png"
        ]
      }
    ],
    development: [
      {
        id: "rayan-dev",
        title: "New Rayan Pharmacy",
        subtitle: "Advanced Health & Care Architecture",
        desc: "A highly-categorized, robust pharmacy store built with complex custom liquid code. Fully integrated with standard CRO features like Sticky ATC, Timers, Free Shipping Bars, Trust Badges, and Testimonials.",
        url: "https://newrayanpharmacy.com",
        features: [
          { title: "Advanced Medical Search", desc: "Custom search & filters with Collections/Subcollections and 'Shop by Medical Condition'." },
          { title: "Dynamic Product Info Data", desc: "Custom Metaobjects to display: Description, Active Ingredients, Side Effects, Uses, and Contraindications per product." },
          { title: "Interactive Timed Bundles", desc: "Custom bundle blocks equipped with countdown timers and the ability for the user to change products inside the bundle." },
          { title: "Full CRO & Trust Stack", desc: "Sticky Add to Cart, Dynamic Free Shipping Bar, Trust Badges, and automated Testimonial sections." }
        ],
        imagePath: "/newrayanpharmacy.com.png"
      },
      {
        id: "torath-dev",
        title: "Torath",
        subtitle: "Premium Heritage Store",
        desc: "A fully custom, high-converting Arabic UX designed for seamless purchasing. Engineered with my standard CRO arsenal including Custom Code, Sticky ATC, and Testimonials.",
        url: "https://torath.co",
        features: [
          { title: "Frequently Bought Together (FBT)", desc: "Custom bundle recommendations dynamically generated to maximize AOV." },
          { title: "Urgency & Trust Mechanics", desc: "Countdown timers and Trust Badges perfectly integrated into the product page UX." },
          { title: "Free Shipping Bar", desc: "Dynamic cart progress bar motivating users to increase cart value." },
          { title: "Universal CRO Features", desc: "Frictionless Sticky Add to Cart (Mobile Optimized) and custom coded Testimonials." }
        ],
        imagePath: "/www.torath.co.png"
      },
      {
        id: "emirates-dev",
        title: "Emirates Perfumes",
        subtitle: "Fragrance & Luxury Gifting",
        desc: "Developed an elite interactive shopping experience utilizing advanced AJAX and Custom Code. Includes standard features: Sticky ATC, Timers, Trust Badges, and Free Shipping Bars.",
        url: "https://emirates-perfumes.com",
        features: [
          { title: "Optional Packaging Upsell", desc: "Custom checkbox toggle in Cart Drawer & Cart Page that dynamically adds +50 EGP to the total if selected." },
          { title: "Frequently Bought Together", desc: "Custom FBT sections matching fragrances to increase order value effortlessly." },
          { title: "Urgency Elements", desc: "Countdown timers and Trust Badges natively designed into the theme." },
          { title: "Frictionless Checkout", desc: "Sticky Add to Cart on mobile, custom Testimonials, and Free Shipping progress bars." }
        ],
        imagePath: "/emirates-perfumes.com.png"
      },
      {
        id: "orvan-dev",
        title: "Orvan Perfumes",
        subtitle: "Luxury Fragrances",
        desc: "A visually rich, fast-loading store prioritizing product aesthetics, built entirely with custom optimization techniques and mandatory CRO structures.",
        url: "https://orvan-perfumes.com",
        features: [
          { title: "Universal CRO Features", desc: "Always-visible Sticky ATC, Free Shipping Bars, Countdown Timers, and Trust Badges." },
          { title: "Interactive Sections", desc: "Smooth animations and custom product galleries without sacrificing load speed." },
          { title: "Social Proof", desc: "Custom Testimonial sliders perfectly matched to the luxury identity." }
        ],
        imagePath: "/orvan-perfumes.com.png"
      },
      {
        id: "freezy-dev",
        title: "Freezy Bites",
        subtitle: "FMCG / Snacks",
        desc: "A vibrant, engaging store designed for quick impulse buys. Implemented advanced interactive offers and standard high-conversion suite.",
        url: "https://freezybites.store",
        features: [
          { title: "Interactive Bundle Offers", desc: "Custom-coded sections allowing users to select specific bundles and instantly unlock an extra 3% discount." },
          { title: "Free Shipping Bar", desc: "Dynamic progress bar to encourage higher cart totals seamlessly integrated into the header." },
          { title: "Frictionless Purchasing", desc: "Sticky Add to Cart, prominent Trust Badges, and customized Testimonials." }
        ],
        imagePath: "/freezybites.store.png"
      },
      {
        id: "oplus-dev",
        title: "Oplus Coffee",
        subtitle: "Premium Coffee Roasters",
        desc: "An immersive e-commerce experience focusing on coffee origin stories, supported by my core Shopify development framework for maximum CVR.",
        url: "https://opluscoffee.com/",
        features: [
          { title: "Tailored UI/UX", desc: "Dark, premium aesthetic perfectly matched to the brand's identity." },
          { title: "Conversion Optimization", desc: "Streamlined navigation, quick-buy features, and Sticky Add to Cart." },
          { title: "Universal CRO Features", desc: "Free Shipping Bars, Countdown Timers, and integrated Trust Badges." }
        ],
        imagePath: "/opluscoffee.com.png"
      },
      {
        id: "asia-dev",
        title: "Asia Dates",
        subtitle: "Custom Arabic UX & Automation",
        desc: "Designed custom Arabic UX flows with fully integrated automation and standard conversion-boosting tools.",
        url: "https://asia-dates.org",
        features: [
          { title: "Custom Bundle Builder", desc: "Interactive selection layout for mixing Sukkary + Rutab dates." },
          { title: "Essential CRO Suite", desc: "Free Shipping Countdown Timers, Sticky Add to Cart, Trust Badges, and Testimonials." },
          { title: "Google Sheets Sync", desc: "Automated real-time order routing using zero-latency backend code." }
        ],
        imagePath: "/asia-dates.org.png"
      },
      {
        id: "artexpo-dev",
        title: "Art Expo",
        subtitle: "Art & Decor",
        desc: "A minimalist gallery-style store that lets the artwork stand out, built for lightning-fast speeds and optimal mobile conversions.",
        url: "https://artexpo.art",
        features: [
          { title: "Performance Optimization", desc: "Handling high-res imagery without sacrificing speed." },
          { title: "Standardized CRO", desc: "Sticky Add to Cart, Free Shipping Bar, Trust Badges, and custom Testimonial sections." },
          { title: "Interactive Sections", desc: "Custom grid layouts and hover effects built with pure CSS." }
        ],
        imagePath: "/artexpo.art.png"
      }
    ]
  }
};

// ==========================================
// 2. COMPONENTS (Mobile Mockup)
// ==========================================

const MobileMockup = ({ url, imagePath, onImageClick }: { url: string, imagePath?: string, onImageClick: (img: string) => void }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full">
      <motion.div 
        whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16,185,129,0.3)" }}
        className="relative w-[280px] h-[580px] bg-[#020604] border-[6px] border-[#0a1a10] rounded-[3rem] shadow-[0_20px_40px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden ring-1 ring-emerald-500/30 group transition-all"
      >
        <div className="absolute top-0 inset-x-0 h-6 bg-[#0a1a10] w-[40%] mx-auto rounded-b-2xl z-20 shadow-sm border-b border-x border-emerald-500/20"></div>

        {imagePath ? (
          <div className="w-full h-full relative cursor-zoom-in" onClick={() => onImageClick(imagePath)}>
            <img src={imagePath} alt="Store Preview" className="w-full h-full object-cover object-top z-10 hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center pointer-events-none">
               <ZoomIn size={48} className="text-white drop-shadow-2xl" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-emerald-500/40 p-6 z-10 text-center">
             <ImageIcon size={40} className="mb-4 opacity-50" />
             <span className="text-xs font-mono">Upload Image:<br/>{imagePath}</span>
          </div>
        )}
      </motion.div>

      <a href={url} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-[#020604] px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:from-emerald-300 hover:to-emerald-500 transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:-translate-y-1">
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  useEffect(() => {
    document.documentElement.style.backgroundColor = "#020604";
    document.body.style.backgroundColor = "#020604";
    document.body.style.color = "#cbd5e1";
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden font-sans text-slate-300 selection:bg-emerald-500/40 selection:text-white" style={{ backgroundColor: '#020604' }}>
      
      {/* 
        ====================================================
        🔥 PURE INLINE CSS BACKGROUND PATTERN (VERY VISIBLE) 🔥 
        تم رفع شفافية الشبكة لـ 45% عشان تظهر واضحة وقوية جداً
        ====================================================
      */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundColor: '#020604',
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.45) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      >
        <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-emerald-900/30 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-emerald-900/20 blur-[150px] rounded-full"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020604]/60 to-[#020604]"></div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');
        .custom-font { font-family: system-ui, -apple-system, sans-serif, 'Cairo'; }
        @keyframes customMarquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .animate-custom-marquee { animation: customMarquee 35s linear infinite; width: max-content; }
        .animate-custom-marquee:hover { animation-play-state: paused; }
        html { scroll-behavior: smooth; }
      `}} />

      {/* 👇 LIGHTBOX OVERLAY FOR IMAGES 👇 */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020604]/95 backdrop-blur-xl p-4 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-emerald-500 hover:text-white transition-colors bg-[#0a1a10] p-3 rounded-full border border-emerald-500/30 shadow-2xl z-[110]">
              <X size={24} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[90vh] rounded-2xl border border-emerald-500/30 shadow-[0_0_80px_rgba(16,185,129,0.2)] object-contain relative z-[105]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 👇 STICKY CONTACT ME BUTTON 👇 */}
      <motion.a
        href={PORTFOLIO_DATA.contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-emerald-500 text-[#020604] p-4 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)] flex items-center justify-center group"
        animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(16,185,129,0.4)", "0 0 40px rgba(16,185,129,0.7)", "0 0 20px rgba(16,185,129,0.4)"] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
      </motion.a>

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#020604]/80 backdrop-blur-xl border-b border-emerald-500/10 custom-font">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <span className="text-xl font-black text-white block tracking-tight">{PORTFOLIO_DATA.header.logo}</span>
            <span className="text-xs text-emerald-500/70 hidden md:block font-bold" dir="auto">{PORTFOLIO_DATA.header.tagline}</span>
          </div>
          <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 text-[#020604] hover:bg-emerald-400 px-6 py-2.5 rounded-full text-sm font-black transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] flex items-center gap-2 hover:-translate-y-0.5">
            Hire Me <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto relative z-10 custom-font">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* ANIMATED HERO PHOTO */}
            <div className="mb-10 relative inline-flex">
               <motion.div 
                 animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.15, 1] }} 
                 transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} 
                 className="absolute inset-0 bg-emerald-500 blur-[40px] rounded-full"
               ></motion.div>
               <motion.div 
                 animate={{ y: [-8, 8, -8] }} 
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                 className="p-1 rounded-full bg-gradient-to-tr from-emerald-400 to-emerald-900 relative z-10 shadow-[0_0_50px_rgba(16,185,129,0.2)]"
               >
                 <img 
                   src={PORTFOLIO_DATA.hero.photo} 
                   alt="Ahmed Assaf" 
                   className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-[#020604] object-cover" 
                   onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                 />
               </motion.div>
            </div>

            <div className="text-xs font-mono text-emerald-400 tracking-[0.2em] uppercase mb-6 flex gap-4 font-bold bg-emerald-500/10 w-fit px-4 py-1.5 rounded-full border border-emerald-500/20">
              <span>Performance</span> <span>×</span> <span>Code</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight" dir="auto">
              {PORTFOLIO_DATA.hero.titleStart} <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600">{PORTFOLIO_DATA.hero.titleEnd}</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg mb-10 leading-relaxed font-medium" dir="auto">
              {PORTFOLIO_DATA.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#work" className="bg-emerald-500 text-[#020604] px-8 py-4 rounded-full font-black hover:bg-emerald-400 transition-all flex items-center gap-2 shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1">
                View Proof <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className="grid grid-cols-2 gap-6 pt-10 md:pt-0 border-t md:border-t-0 md:border-l border-emerald-500/20 md:pl-12">
            {PORTFOLIO_DATA.stats.map((stat, idx) => (
              <div key={idx} className="bg-[#0a1a10]/50 backdrop-blur-md p-6 rounded-3xl border border-emerald-500/10 hover:border-emerald-500/30 group hover:-translate-y-1 transition-all shadow-xl">
                <div className="text-4xl font-black text-white mb-2 group-hover:text-emerald-400 transition-colors" dir="auto">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium" dir="auto">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAST MARQUEE */}
      <div className="border-y border-emerald-500/10 bg-[#020604]/80 backdrop-blur-md py-8 overflow-hidden relative flex z-10 custom-font">
        <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#020604] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#020604] to-transparent z-10 pointer-events-none"></div>
        
        <div className="animate-custom-marquee flex gap-20 items-center min-w-full">
          {[...PORTFOLIO_DATA.brands, ...PORTFOLIO_DATA.brands].map((brand, i) => (
            <a key={i} href={brand.url} target="_blank" rel="noopener noreferrer" className="text-3xl font-black text-emerald-400/80 hover:text-white hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(16,185,129,0.8)] transition-all duration-300 uppercase tracking-widest whitespace-nowrap drop-shadow-md">
              {brand.name}
            </a>
          ))}
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative z-10 custom-font">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" dir="auto">The Ecosystem</h2>
          <p className="text-emerald-500 font-bold tracking-widest uppercase text-sm" dir="auto">Luxury Tech & Elite Marketing</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.services.map((service, idx) => (
            <div key={idx} className="bg-[#0a1a10]/60 backdrop-blur-xl p-8 rounded-[2rem] border border-emerald-500/10 hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:-translate-y-2 transition-all group">
              <div className="mb-6 bg-emerald-500/10 w-fit p-4 rounded-2xl border border-emerald-500/20 group-hover:scale-110 transition-transform">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3" dir="auto">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed" dir="auto">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TABS SECTION */}
      <section id="work" className="py-24 px-6 max-w-7xl mx-auto relative z-10 custom-font">
        <div className="flex flex-col md:flex-row gap-4 mb-16 bg-[#0a1a10] p-2 rounded-2xl border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
          <button 
            onClick={() => setActiveTab('performance')}
            className={`flex-1 flex items-center justify-center gap-3 py-6 rounded-xl transition-all font-bold text-lg ${activeTab === 'performance' ? 'bg-emerald-500 text-[#020604] shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'text-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10'}`}
          >
            <BarChart3 /> Performance Marketing
          </button>
          <button 
            onClick={() => setActiveTab('development')}
            className={`flex-1 flex items-center justify-center gap-3 py-6 rounded-xl transition-all font-bold text-lg ${activeTab === 'development' ? 'bg-emerald-500 text-[#020604] shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'text-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/10'}`}
          >
            <ShoppingCart /> Shopify Development
          </button>
        </div>

        <div className="space-y-12">
          <AnimatePresence mode="wait">
            
            {/* 🔴 PERFORMANCE TAB 🔴 */}
            {activeTab === 'performance' && (
              <motion.div key="performance" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-12">
                {PORTFOLIO_DATA.caseStudies.performance.map((study) => (
                  <div key={study.id} className="bg-[#0a1a10]/40 backdrop-blur-xl border border-emerald-500/10 hover:border-emerald-500/30 rounded-[2rem] p-8 md:p-12 transition-all shadow-xl hover:shadow-[0_10px_40px_rgba(16,185,129,0.05)]">
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-4xl font-black text-white mb-2" dir="auto">{study.title}</h3>
                        <p className="text-emerald-400 font-bold text-sm uppercase tracking-wider" dir="auto">{study.subtitle}</p>
                      </div>
                      <a href={study.url} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white flex items-center gap-2 hover:text-[#020604] hover:bg-emerald-500 transition-all bg-[#020604] px-5 py-2.5 rounded-full border border-emerald-500/30 shadow-md">
                        View Store <ExternalLink size={16} />
                      </a>
                    </div>
                    
                    <p className="text-gray-300 mb-10 max-w-3xl leading-relaxed text-lg" dir="auto">{study.desc}</p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                      {study.metrics.map((m, i) => (
                        <div key={i} className="bg-[#020604]/80 p-6 rounded-3xl border border-emerald-500/10 group-hover:border-emerald-500/20 transition-colors">
                          <div className="text-3xl font-black text-white mb-1" dir="auto">{m.value}</div>
                          <div className="text-sm text-emerald-500/70 font-bold" dir="auto">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-10">
                      {study.tags.map((tag, i) => (
                        <span key={i} className="bg-emerald-500/10 text-emerald-400 px-5 py-2.5 rounded-full text-sm font-bold border border-emerald-500/20 flex items-center gap-2" dir="auto">
                          <CheckCircle2 size={14} className="text-emerald-500" /> {tag}
                        </span>
                      ))}
                    </div>

                    {/* 👇 LIGHTBOX FOR RESULTS 👇 */}
                    {study.resultsGallery && study.resultsGallery.length > 0 && (
                      <div className="mt-12">
                        <div className="text-sm font-bold text-white border-b border-emerald-500/20 pb-4 mb-6 flex items-center gap-2">
                          <TrendingUp className="text-emerald-500" size={16} /> Verified Results (Click to zoom)
                        </div>
                        <div className={`grid gap-6 ${study.resultsGallery.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                          {study.resultsGallery.map((img, idx) => (
                            <div 
                              key={idx} 
                              onClick={() => setSelectedImage(img)}
                              className="rounded-2xl overflow-hidden border border-emerald-500/20 bg-[#020604] shadow-xl group/img cursor-zoom-in relative"
                            >
                               <img 
                                 src={img} 
                                 alt={`${study.title} Verified Results ${idx + 1}`} 
                                 className="w-full h-auto object-cover transform group-hover/img:scale-[1.03] transition-transform duration-700 opacity-80 group-hover/img:opacity-100" 
                                 onError={(e) => { 
                                   e.currentTarget.style.display = 'none'; 
                                   e.currentTarget.parentElement!.innerHTML = `<div class="p-8 text-xs font-mono text-gray-500 text-center border border-dashed border-emerald-500/20 rounded-2xl">Image not found:<br/>${img}</div>`;
                                 }}
                               />
                               <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center pointer-events-none">
                                  <ZoomIn size={48} className="text-white drop-shadow-xl" />
                               </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {/* 🟢 DEVELOPMENT TAB 🟢 */}
            {activeTab === 'development' && (
              <motion.div key="development" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="space-y-12">
                
                <div className="bg-[#0a1a10]/60 backdrop-blur-xl border border-emerald-500/20 rounded-[2rem] p-8 md:p-10 mb-12 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3" dir="auto">
                    <Code className="text-emerald-400" size={28} /> Development Arsenal & CRO Features
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['Sticky Add to Cart', 'Frequently Bought Together (FBT)', 'Countdown Timers', 'Free Shipping Bar', 'Optional Products in Cart', 'Interactive Sections', 'Trust Badges', 'Custom UI/UX', 'Performance Optimization', 'Testimonials'].map((feat, i) => (
                      <span key={i} className="bg-[#020604] text-emerald-200 border border-emerald-500/30 px-5 py-2.5 rounded-full text-sm font-bold shadow-sm" dir="auto">
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {PORTFOLIO_DATA.caseStudies.development.map((study) => (
                  <div key={study.id} className="bg-[#0a1a10]/40 backdrop-blur-xl border border-emerald-500/10 hover:border-emerald-500/30 rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center transition-all shadow-xl hover:shadow-[0_10px_40px_rgba(16,185,129,0.05)]">
                    <div className="w-full lg:w-1/2">
                      <div className="flex justify-between items-center mb-8">
                        <div>
                          <h3 className="text-4xl font-black text-white mb-2" dir="auto">{study.title}</h3>
                          <p className="text-emerald-500 font-bold text-sm uppercase tracking-wider" dir="auto">{study.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-8 leading-relaxed text-lg" dir="auto">{study.desc}</p>
                      
                      <div className="space-y-6">
                        <div className="text-sm font-bold text-white border-b border-emerald-500/20 pb-4">Features Implemented</div>
                        {study.features.map((feature, i) => (
                          <div key={i} className="cursor-default">
                            <div className="text-white font-bold mb-1 flex items-center gap-2" dir="auto">
                              <span className="text-[#020604] text-xs font-black bg-emerald-500 px-2 py-1 rounded">0{i+1}</span> {feature.title}
                            </div>
                            <div className="text-sm text-gray-400 pl-9 mt-1" dir="auto">{feature.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 flex justify-center mt-10 lg:mt-0">
                       <MobileMockup url={study.url} imagePath={study.imagePath} onImageClick={setSelectedImage} />
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* THE PROCESS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-t border-emerald-500/10 relative z-10 custom-font">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4" dir="auto">Execution Matrix</h2>
          <p className="text-emerald-400 font-medium tracking-widest uppercase text-sm" dir="auto">A proven framework for consistent growth</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.process.map((step, idx) => (
            <div key={idx} className="bg-[#0a1a10]/60 backdrop-blur-xl p-8 rounded-[2rem] border border-emerald-500/10 relative overflow-hidden group hover:border-emerald-500/40 hover:-translate-y-2 transition-all shadow-xl">
              <div className="absolute -right-4 -top-4 opacity-5 text-emerald-500">
                {step.icon}
              </div>
              <div className="text-emerald-400 mb-6 bg-emerald-500/10 w-fit p-4 rounded-2xl border border-emerald-500/20 group-hover:scale-110 transition-transform">{step.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3" dir="auto">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed" dir="auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section id="contact" className="py-24 px-6 border-t border-emerald-500/10 relative z-10 custom-font">
        <div className="max-w-7xl mx-auto bg-[#0a1a10]/80 backdrop-blur-xl border border-emerald-500/20 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-[0_0_50px_rgba(16,185,129,0.1)]">
          <div>
            <div className="text-xs font-mono text-emerald-500 uppercase tracking-widest mb-4 font-black">Ready for 10M+ Revenue?</div>
            <h2 className="text-5xl font-black text-white leading-tight mb-4" dir="auto">Dominate Your <br/>Market. <span className="text-emerald-500">.</span></h2>
            <p className="text-gray-300 max-w-md text-lg font-medium" dir="auto">I only work with serious brands ready to scale. If you want high-converting code and aggressive Meta Ads, let's talk.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-[#020604] px-10 py-5 rounded-full font-black hover:from-emerald-300 hover:to-emerald-500 transition-all flex items-center justify-center gap-2 text-lg shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_50px_rgba(16,185,129,0.6)] hover:-translate-y-2">
              Start Scaling Now <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* MINI FOOTER */}
      <footer className="border-t border-emerald-500/10 bg-[#020604] py-8 relative z-10 mt-12 custom-font">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-black text-white block tracking-tight">{PORTFOLIO_DATA.header.logo}</span>
            <span className="text-xs text-emerald-500/50 font-bold">© {new Date().getFullYear()} Elite E-Commerce Solutions.</span>
          </div>
          <div className="flex gap-6">
            <a href={PORTFOLIO_DATA.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={PORTFOLIO_DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-emerald-500 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}