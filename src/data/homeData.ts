import { HeroSlide, NewsItem, Partner, CompanyValue } from '../types/navigation';

export const heroSlidesData: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Grasindopro has received prestigious awards at Global Partner Connect 2026',
    subtitle: 'Recognized as Top Strategic IT System Integrator for Enterprise Digital Transformation',
    badge: 'EXCELLENCE AWARD 2026',
    ctaText: 'Discover Highlights',
    bgGradient: 'from-amber-950 via-amber-900 to-amber-950',
    image: '/why_us_banner_poster.png',
    darkOverlay: true,
  },
  {
    id: 'slide-2',
    title: 'LOSING CONTROL vs. LOSING GROWTH: Navigating Multi-Cloud Security',
    subtitle: 'Empowering Enterprise Systems with Robust Hybrid Multi-Cloud Architecture & Threat Intelligence',
    badge: 'CLOUD SECURITY',
    ctaText: 'Read Whitepaper',
    bgGradient: 'from-slate-950 via-slate-900 to-amber-950',
    image: '/about_technology_illustration.png',
    darkOverlay: true,
  },
  {
    id: 'slide-3',
    title: 'AI Driven Faster & Simpler Enterprise Storage Solutions',
    subtitle: 'Accelerate Core Data Performance and Quantum-Safe Encryption for Mission-Critical Infrastructure',
    badge: 'AI INFRASTRUCTURE',
    ctaText: 'Explore Storage Solutions',
    bgGradient: 'from-blue-950 via-slate-900 to-indigo-950',
    image: '/why_us_infrastructure_illustration.png',
    darkOverlay: true,
  },
  {
    id: 'slide-4',
    title: 'Turn AI Potential into Measurable Business Impact',
    subtitle: 'Powered by M365 Copilot & Azure AI - Transforming Workplaces Across Modern Enterprises',
    badge: 'DIGITAL INNOVATION',
    ctaText: 'Schedule Demo',
    bgGradient: 'from-emerald-950 via-teal-950 to-slate-950',
    image: '/CME/Electrical/cme_electrical.png',
    darkOverlay: true,
  },
];

export const newsArticlesData: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Grasindopro Bags Prestigious Awards at Partner Connect 2026 & Tech Summit 2026',
    category: 'News',
    date: '28 July 2026',
    image: '/EO/Event organizer/CorporateEvent1.png',
    summary: 'PT Integra Aneksa Kreasindo (Grasindopro) won multiple strategic partner awards in cybersecurity and hybrid infrastructure excellence.',
    content: 'PT Integra Aneksa Kreasindo (Grasindopro) has been honored with key partner awards at Partner Connect 2026. The recognition highlights the company\'s outstanding performance in delivering advanced multi-cloud security platforms, modern network architectures, and high-availability digital solutions to enterprise clients.'
  },
  {
    id: 'news-2',
    title: 'Executive Tech Forum 2026: Losing Control vs. Losing Growth in Multi-Cloud Security',
    category: 'Activities',
    date: '15 July 2026',
    image: '/it_solution/security/Screenshot 2026-08-08 024113.png',
    summary: 'Industry leaders gathered at the Executive Tech Forum to discuss hybrid multi-cloud governance and zero-trust security postures.',
    content: 'Grasindopro hosted its signature executive forum inviting over 100 CIOs and CISOs to discuss multi-cloud risk management, unified threat monitoring, and automated compliance frameworks.'
  },
  {
    id: 'news-3',
    title: 'CSR Education Program: Empowering Tech Talent in Remote Schools Across Indonesia',
    category: 'CSR',
    date: '02 June 2026',
    image: '/it_solution/network/Screenshot 2026-08-08 024038.png',
    summary: 'As part of our commitment to sustainable community development, Grasindopro donated digital lab kits and IT training modules.',
    content: 'Demonstrating corporate social responsibility, Grasindopro launched a nationwide digital literacy initiative, providing computer hardware, internet connectivity, and coding workshops for vocational high school students.'
  },
  {
    id: 'news-4',
    title: 'Press Release: PT Integra Aneksa Kreasindo Reports Strong Q1 2026 Financial Growth',
    category: 'Press Release',
    date: '18 May 2026',
    image: '/it_solution/ITsupport&maintanance/Screenshot 2026-08-08 024419.png',
    summary: 'Driven by surging demand for AI infrastructure, cloud integration, and security platforms, revenue expanded 14.8% YoY.',
    content: 'PT Integra Aneksa Kreasindo (Grasindopro) released its Q1 financial highlights showcasing double-digit growth driven by strong adoption of enterprise digital platforms and IT managed services.'
  }
];

export const strategicPartnersData: Partner[] = [
  { name: 'Pertamina', category: 'Energy & Industrial Client', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Pertamina_Logo.svg' },
  { name: 'Grab', category: 'Technology & Transportation', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Grab_Logo.svg' },
  { name: 'Herbalife', category: 'Global Wellness Brand', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Herbalife_Logo.svg' },
  { name: 'Nokia', category: 'Telecommunications', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Nokia_wordmark.svg' },
  { name: 'OCBC NISP', category: 'Banking & Financial Services', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/87/OCBC_Bank_logo.svg' },
  { name: 'Asian Paints', category: 'Manufacturing & Industrial', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Asian_Paints_logo.svg' },
  { name: 'Ciputra Group', category: 'Property & Infrastructure', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Ciputra_Group.svg' },
  { name: 'Ajaib', category: 'Fintech & Investment Platform', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Ajaib_Sekuritas_Logo.svg' },
];

export const companyValuesData: CompanyValue[] = [
  {
    key: 'C',
    title: 'Customer First & Quality',
    tagline: 'Mengutamakan konsistensi dan kualitas layanan prima.',
    description: 'Kami memberikan service terbaik secara prima, cepat, dan berkualitas tinggi sebagai wujud hubungan kemitraan jangka panjang yang berkelanjutan.',
    iconName: 'Users'
  },
  {
    key: 'A',
    title: 'Accountability & Integrity',
    tagline: 'Integritas tinggi dan tanggung jawab penuh.',
    description: 'Menjaga dan memelihara serta mengembangkan sikap dan etika bisnis secara profesional dengan tanggung jawab penuh di setiap eksekusi proyek.',
    iconName: 'ShieldCheck'
  },
  {
    key: 'R',
    title: 'Respect & Flexibility',
    tagline: 'Fleksibel dan responsif mengikuti perkembangan tren.',
    description: 'Senantiasa fleksibel mengikuti dinamika kebutuhan klien serta menghadirkan inovasi dan solusi terbaik bagi mitra usaha.',
    iconName: 'HeartHandshake'
  },
  {
    key: 'E',
    title: 'Excellence & Commitment',
    tagline: 'Komitmen pada hasil sempurna dan nilai tambah.',
    description: 'Mengintegrasikan solusi IT, Mechanical Electrical, dan Advertising / Event Organizer secara profesional berbasis estetika, efisiensi, dan keamanan.',
    iconName: 'Award'
  }
];

export const footerData = {
  address: 'Bintaro Trade Center Sektor 7, Jl. Jendral Sudirman Blok B2 No. 10, Kel. Pondok Jaya, Kec. Pondok Aren, Kota Tangerang Selatan, Banten 15220',
  phone: '(021) 7452804',
  subsidiaries: [
    'IT & Mechanical Electrical (M&E) Integration',
    'Media Advertising (Billboard, Neon Box, Signage)',
    'Event Organizer, MICE & Brand Activation',
    'Software Solutions & Security Systems'
  ]
};
