"use client";

import React from "react";
import { motion } from "framer-motion";
// ضفنا هنا أيقونات الفيس بوك والانستجرام والواتساب (MessageCircle)
import { BarChart3, Globe, Server, TrendingUp, Zap, Mail, Layers, Eye, MousePointerClick, Database, ExternalLink, Target, MessageCircle } from "lucide-react";

// ==========================================
// 1. DATA SECTION (حط لينكاتك وأرقامك هنا)
// ==========================================

const PORTFOLIO_DATA = {
  header: {
    logo: "Ahmed Assaf.",
    links: [
      { name: "About", href: "#about" },
      { name: "Work", href: "#work" },
      { name: "Contact", href: "#contact" }
    ]
  },
  // 👇 هنا هتحط رقم الواتساب بتاعك ولينكات السوشيال ميديا 👇
  contact: {
    whatsapp: "https://wa.me/201551441247", // غير الرقم ده لرقمك (بكود الدولة 20 لمصر)
    email: "mailto:ahmedassafofficial@gmail.com"
  },
  socials: {
    facebook: "https://facebook.com/a7md3ssaf", // لينك الفيس بوك
    instagram: "https://instagram.com/a7md3ssaf", // لينك الانستجرام
    whatsapp: "https://wa.me/201551441247" // نفس رقم الواتساب
  },
  hero: {
    photoPlaceholder: "/Ahmed Assaf.jpg",
    greeting: "Hi, I'm Ahmed Assaf 👋",
    headlineStart: "Architecting ",
    headlineHighlight: "Ecommerce Growth.",
    subheadline: "Performance Marketing & Custom Shopify Development. Scaling premium brands to E£11M+ through data-driven Meta Ads, workflow automation, and high-converting UX.",
  },
  metricsTicker: [
    "E£11.1M+ Tracked Revenue",
    "Sticky Add-To-Cart Architecture",
    "Real-time Google Sheets Sync",
    "Consistent 10x-30x ROAS",
    "Animated Trust Icons UI",
    "Urgency & Free Shipping Timers"
  ],
  bentoStats: [
    {
      id: 1,
      title: "Meta Ads Ecosystem",
      desc: "Scaling brands with advanced CBO. Achieving 5x-30x ROAS with highly optimized CPP across FMCG, Heritage, and Fashion sectors.",
      icon: <BarChart3 className="text-blue-600 mb-4" size={32} />,
      wide: true,
      bgGraphic: <TrendingUp size={200} className="text-blue-50" />
    },
    {
      id: 2,
      title: "Arabic UX & CRO",
      desc: "Sticky ATCs, animated trust icons, and shipping timers.",
      icon: <MousePointerClick className="text-blue-600 mb-4" size={32} />,
      stat: "5.8%",
      statLabel: "Peak Store CVR"
    },
    {
      id: 3,
      title: "Business Automation",
      desc: "Zero-latency order syncing via Google Sheets & Cloudflare.",
      icon: <Database className="text-blue-600 mb-4" size={32} />,
      stat: "100%",
      statLabel: "Automated Workflows"
    }
  ],
  caseStudies: [
    {
      id: "torath",
      category: "Premium Heritage Manufacturing",
      title: "Torath (تراث)",
      description: "Scaled a premium Islamic heritage brand to E£7.23 Million in combined tracked sales. Achieved exceptional ROAS ranging from 10x to 30x with a highly profitable CPP of ~E£234. Engineered a high-converting Arabic UX featuring Sticky Add-To-Cart, live sale tickers, and automated backend syncing to Google Sheets, achieving peak conversion rates up to 5.8%.",
      highlights: [
        { label: "Total Revenue", value: "E£7.2M+" },
        { label: "Average ROAS", value: "10x - 30x" },
        { label: "Optimized CPP", value: "E£234" }
      ],
      features: [
        { icon: <MousePointerClick size={16} className="text-blue-600"/>, text: "Sticky Add-To-Cart & Animated Trust Icons" },
        { icon: <Database size={16} className="text-blue-600"/>, text: "Automated Google Sheets Order Routing" },
        { icon: <Server size={16} className="text-blue-600"/>, text: "EasyOrders Fulfillment Integration" }
      ],
      imagePath: "/torath-mockup.png", 
      storeUrl: "https://torath.xyz", 
      reverseLayout: false,
    },
    {
      id: "emirates-perfumes",
      category: "FMCG & Premium Gifting",
      title: "Emirates Perfumes (عطور الإمارات)",
      description: "Engineered the digital infrastructure and media buying strategy to scale the brand to ~E£2 Million. Developed a custom Shopify UI featuring advanced bundle builders (AOV up to E£4,200), smart urgency countdowns, and sticky CTAs. Driven by aggressive Meta Ads campaigns achieving up to 16.6x ROAS.",
      highlights: [
        { label: "Total Revenue", value: "~E£2M" },
        { label: "Peak ROAS", value: "16.6x" },
        { label: "Peak AOV", value: "E£4,200" }
      ],
      features: [
        { icon: <Layers size={16} className="text-blue-600"/>, text: "Custom Bundle Builder & Variant Selectors UI" },
        { icon: <Eye size={16} className="text-blue-600"/>, text: "Urgency Timers & Trust-Driven CRO Elements" },
        { icon: <Database size={16} className="text-blue-600"/>, text: "Real-time Google Sheets Automation" }
      ],
      imagePath: "/perfumes-mockup.png",
      storeUrl: "https://emirates-perfumes.com", 
      reverseLayout: true,
    },
    {
      id: "asia-dates",
      category: "Premium Agro E-commerce",
      title: "Asia Dates (تمور آسية)",
      description: "Scaled a premium dates and corporate gifting brand to E£1.86 Million. Designed custom Arabic UX flows with Free Shipping countdown timers, animated competitive pricing icons, and universal Sticky Add-To-Cart features. Managed highly efficient Meta Ads campaigns yielding 5.9x to 8.4x ROAS with an exceptional CPP ranging from E£113 to E£160.",
      highlights: [
        { label: "Total Revenue", value: "E£1.86M" },
        { label: "Ads ROAS", value: "5.9x - 8.4x" },
        { label: "Acquisition", value: "E£113 CPP" }
      ],
      features: [
        { icon: <Globe size={16} className="text-blue-600"/>, text: "Custom Arabic Bundles (Sukkary + Rutab)" },
        { icon: <Zap size={16} className="text-blue-600"/>, text: "Free Shipping Timers & Animated Trust UI" },
        { icon: <Database size={16} className="text-blue-600"/>, text: "Zero-Latency Google Sheets Order Sync" }
      ],
      imagePath: "/asia-mockup.png",
      storeUrl: "https://asia-dates.org", 
      reverseLayout: false,
    },
    {
      id: "perfume-palace",
      category: "Performance Takeover & Scaling",
      title: "Perfume Palace",
      description: "Took over performance marketing and initiated rapid scaling for an emerging fragrance brand. Executed strategic UI/UX optimizations on the existing store to boost conversion rates. Deployed aggressive CBO campaigns and offer testing (e.g., Buy 2 Get 1 Free), achieving an impressive early average ROAS of 9.5x and peak campaign CTRs of 5.87%.",
      highlights: [
        { label: "Average ROAS", value: "9.5x" },
        { label: "Peak CTR", value: "5.87%" },
        { label: "Optimized CPP", value: "~E£177" }
      ],
      features: [
        { icon: <Target size={16} className="text-blue-600"/>, text: "Advanced CBO Structuring & Offer Testing" },
        { icon: <MousePointerClick size={16} className="text-blue-600"/>, text: "Targeted UI/UX Conversion Tweaks" },
        { icon: <TrendingUp size={16} className="text-blue-600"/>, text: "Rapid Early-Stage Account Scaling" }
      ],
      imagePath: "/palace-mockup.png",
      storeUrl: "https://perfume-palace.com", 
      reverseLayout: true,
    }
  ]
};

// ==========================================
// 2. UI COMPONENTS 
// ==========================================

const BentoCard = ({ data }: { data: any }) => (
  <div className={`bg-white border border-slate-200 p-8 rounded-3xl relative overflow-hidden group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between ${data.wide ? 'md:col-span-2' : ''}`}>
    <div className="relative z-10">
      <div className="transform group-hover:scale-110 transition-transform duration-500 origin-left">
        {data.icon}
      </div>
      <h3 className={`${data.wide ? 'text-2xl' : 'text-xl'} font-bold mb-2 text-slate-900`}>{data.title}</h3>
      <p className={`text-slate-600 ${data.wide ? 'max-w-md' : 'text-sm'}`}>{data.desc}</p>
    </div>
    
    {data.stat && (
      <div className="mt-8 text-4xl font-extrabold text-slate-900">
        {data.stat}
        <span className="text-sm text-slate-500 block font-medium mt-1">{data.statLabel}</span>
      </div>
    )}

    {data.bgGraphic && (
      <div className="absolute right-0 bottom-0 opacity-40 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-700 translate-x-1/4 translate-y-1/4">
        {data.bgGraphic}
      </div>
    )}
  </div>
);

const CaseStudyRow = ({ study }: { study: any }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, ease: "easeOut" }}
    className={`mb-32 flex flex-col ${study.reverseLayout ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
  >
    <div className="w-full md:w-1/2 space-y-6">
      <span className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase bg-blue-50 px-4 py-1.5 rounded-full">{study.category}</span>
      <h3 className="text-4xl font-bold text-slate-900 tracking-tight">{study.title}</h3>
      <p className="text-slate-600 leading-relaxed text-lg">{study.description}</p>
      
      {study.highlights && (
        <div className="flex gap-4 pt-4 flex-wrap">
          {study.highlights.map((h: any, idx: number) => (
            <div key={idx} className="bg-slate-50 px-6 py-4 rounded-2xl border border-slate-200 hover:border-blue-200 hover:bg-blue-50/50 transition-colors duration-300">
              <span className="block text-2xl font-bold text-slate-900">{h.value}</span>
              <span className="text-sm font-medium text-slate-500">{h.label}</span>
            </div>
          ))}
        </div>
      )}

      {study.features && (
        <ul className="space-y-3 pt-4 text-slate-700 font-medium">
          {study.features.map((f: any, idx: number) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="bg-blue-50 p-1.5 rounded-full">{f.icon}</span> 
              {f.text}
            </li>
          ))}
        </ul>
      )}

      {study.storeUrl && (
        <div className="pt-6">
          <a 
            href={study.storeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
          >
            View Store <ExternalLink size={18} />
          </a>
        </div>
      )}

    </div>

    <div className="w-full md:w-1/2 bg-slate-100 aspect-[4/3] rounded-[2rem] border border-slate-200 flex items-center justify-center relative overflow-hidden group shadow-inner">
      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
      <img 
        src={study.imagePath} 
        alt={study.title} 
        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = `<span class="text-slate-400 font-mono text-sm text-center px-4">Drop picture here:<br/><b>public${study.imagePath}</b></span>`;
        }}
      />
    </div>
  </motion.div>
);

// ==========================================
// 3. MAIN PAGE ASSEMBLY
// ==========================================

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-900 selection:bg-blue-200 selection:text-blue-900 font-sans overflow-hidden">
      
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-extrabold tracking-tighter text-slate-900">{PORTFOLIO_DATA.header.logo}</span>
          
          <div className="hidden md:flex gap-10 items-center">
            {PORTFOLIO_DATA.header.links.map((link, idx) => (
              <a key={idx} href={link.href} className="text-slate-500 hover:text-slate-900 font-bold transition-colors text-xs tracking-[0.15em] uppercase relative group">
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* 👇 زرار البار العلوي (Book Audit) اتعدل عشان يفتح الواتس 👇 */}
          <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-blue-600 text-white px-7 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-blue-500/20 flex items-center gap-2">
            <MessageCircle size={16} /> Get a Free Audit
          </a>
        </div>
      </nav>

      <section id="about" className="pt-48 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 bg-blue-400 blur-2xl opacity-20 rounded-full scale-150"></div>
          <div className="w-32 h-32 rounded-full bg-slate-200 border-4 border-white shadow-xl overflow-hidden flex items-center justify-center relative z-10">
            <img 
              src={PORTFOLIO_DATA.hero.photoPlaceholder} 
              alt="Ahmed Assaf" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `<span class="text-slate-400 text-xs font-mono text-center leading-tight">Add<br/>profile.jpg</span>`;
              }}
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-50/80 text-blue-700 border border-blue-200 text-sm font-semibold mb-8 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span>{PORTFOLIO_DATA.hero.greeting}</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 leading-tight text-slate-900"
        >
          {PORTFOLIO_DATA.hero.headlineStart}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
            {PORTFOLIO_DATA.hero.headlineHighlight}
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-slate-500 max-w-3xl mb-10 leading-relaxed font-medium"
        >
          {PORTFOLIO_DATA.hero.subheadline}
        </motion.p>
      </section>

      <div className="border-y border-slate-200 bg-white py-5 overflow-hidden flex whitespace-nowrap relative shadow-sm">
        <div className="absolute left-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        <div className="animate-marquee flex gap-16 text-sm text-slate-400 font-bold tracking-[0.2em] uppercase items-center">
           {PORTFOLIO_DATA.metricsTicker.map((metric, i) => (
             <span key={i}>• {metric}</span>
           ))}
           {PORTFOLIO_DATA.metricsTicker.map((metric, i) => (
             <span key={`dup-${i}`}>• {metric}</span>
           ))}
        </div>
      </div>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.bentoStats.map((stat) => (
            <BentoCard key={stat.id} data={stat} />
          ))}
        </div>
      </section>

      <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">Selected Work</h2>
          <p className="text-slate-500 text-lg font-medium">Deep dives into performance scaling and technical infrastructure.</p>
        </div>
        
        {PORTFOLIO_DATA.caseStudies.map((study) => (
          <CaseStudyRow key={study.id} study={study} />
        ))}
      </section>

      <section id="contact" className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-16 md:p-24 text-center shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:20px_20px] group-hover:scale-105 transition-transform duration-1000"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white leading-tight">Systems built for scale. <br/> Let’s look at your data.</h2>
            <p className="text-slate-300 mb-10 max-w-xl mx-auto text-lg font-medium">Currently accepting select ecommerce partnerships for performance scaling and technical Shopify development.</p>
            
            {/* 👇 زرار التواصل (Get In Touch) اتعدل لزرار واتساب بيفتح مباشر 👇 */}
            <a href={PORTFOLIO_DATA.contact.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-white w-fit text-slate-900 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2 mx-auto hover:-translate-y-1">
              <MessageCircle size={20} /> Get In Touch
            </a>
          </div>
        </motion.div>
      </section>

      {/* 👇 قسم الـ Footer الجديد بأيقونات السوشيال ميديا 👇 */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-medium text-sm">© {new Date().getFullYear()} {PORTFOLIO_DATA.header.logo} All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href={PORTFOLIO_DATA.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href={PORTFOLIO_DATA.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href={PORTFOLIO_DATA.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-green-500 transition-colors" aria-label="WhatsApp">
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
          animation: marquee 35s linear infinite;
          min-width: 200%;
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}