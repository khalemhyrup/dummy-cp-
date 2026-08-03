import { HeroSlide, NewsItem, Partner, CompanyValue } from '../types/navigation';

export const heroSlidesData: HeroSlide[] = [
  {
    id: 'slide-1',
    title: 'Dummy Technology has received prestigious awards at Global Partner Connect 2026',
    subtitle: 'Recognized as Top Strategic IT System Integrator for Enterprise Digital Transformation',
    badge: 'EXCELLENCE AWARD 2026',
    ctaText: 'Discover Highlights',
    bgGradient: 'from-amber-950 via-amber-900 to-amber-950',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
    darkOverlay: true,
  },
  {
    id: 'slide-2',
    title: 'LOSING CONTROL vs. LOSING GROWTH: Navigating Multi-Cloud Security',
    subtitle: 'Empowering Enterprise Systems with Robust Hybrid Multi-Cloud Architecture & Threat Intelligence',
    badge: 'CLOUD SECURITY',
    ctaText: 'Read Whitepaper',
    bgGradient: 'from-slate-950 via-slate-900 to-amber-950',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    darkOverlay: true,
  },
  {
    id: 'slide-3',
    title: 'AI Driven Faster & Simpler Enterprise Storage Solutions',
    subtitle: 'Accelerate Core Data Performance and Quantum-Safe Encryption for Mission-Critical Infrastructure',
    badge: 'AI INFRASTRUCTURE',
    ctaText: 'Explore Storage Solutions',
    bgGradient: 'from-blue-950 via-slate-900 to-indigo-950',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
    darkOverlay: true,
  },
  {
    id: 'slide-4',
    title: 'Turn AI Potential into Measurable Business Impact',
    subtitle: 'Powered by M365 Copilot & Azure AI - Transforming Workplaces Across Modern Enterprises',
    badge: 'DIGITAL INNOVATION',
    ctaText: 'Schedule Demo',
    bgGradient: 'from-emerald-950 via-teal-950 to-slate-950',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    darkOverlay: true,
  },
];

export const newsArticlesData: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Dummy Technology Bags Prestigious Awards at Partner Connect 2026 & Tech Summit 2026',
    category: 'News',
    date: '28 July 2026',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80',
    summary: 'PT Dummy Technology Tbk won multiple strategic partner awards in cybersecurity and hybrid infrastructure excellence.',
    content: 'PT Dummy Technology Tbk has been honored with key partner awards at Partner Connect 2026. The recognition highlights the company\'s outstanding performance in delivering advanced multi-cloud security platforms, modern network architectures, and high-availability digital solutions to enterprise clients.'
  },
  {
    id: 'news-2',
    title: 'Executive Tech Forum 2026: Losing Control vs. Losing Growth in Multi-Cloud Security',
    category: 'Activities',
    date: '15 July 2026',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    summary: 'Industry leaders gathered at the Executive Tech Forum to discuss hybrid multi-cloud governance and zero-trust security postures.',
    content: 'Dummy Technology hosted its signature executive forum inviting over 100 CIOs and CISOs to discuss multi-cloud risk management, unified threat monitoring, and automated compliance frameworks.'
  },
  {
    id: 'news-3',
    title: 'CSR Education Program: Empowering Tech Talent in Remote Schools Across Indonesia',
    category: 'CSR',
    date: '02 June 2026',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80',
    summary: 'As part of our commitment to sustainable community development, Dummy Technology donated digital lab kits and IT training modules.',
    content: 'Demonstrating corporate social responsibility, Dummy Technology launched a nationwide digital literacy initiative, providing computer hardware, internet connectivity, and coding workshops for vocational high school students.'
  },
  {
    id: 'news-4',
    title: 'Press Release: PT Dummy Technology Tbk Reports Strong Q1 2026 Financial Growth',
    category: 'Press Release',
    date: '18 May 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    summary: 'Driven by surging demand for AI infrastructure, cloud integration, and security platforms, revenue expanded 14.8% YoY.',
    content: 'PT Dummy Technology Tbk (IDX: DUMM) released its Q1 financial highlights showcasing double-digit growth driven by strong adoption of enterprise digital platforms and IT managed services.'
  }
];

export const strategicPartnersData: Partner[] = [
  { name: 'IBM', category: 'Strategic Cloud & AI Partner', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
  { name: 'Cisco Systems', category: 'Networking & Security', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { name: 'Microsoft', category: 'Cloud & Business Applications', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg' },
  { name: 'F5 Networks', category: 'Multi-Cloud App Security', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/F5_Networks_logo.svg' },
  { name: 'Huawei Enterprise', category: 'Hybrid Infrastructure', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Huawei-logo.svg' },
  { name: 'Oracle', category: 'Database & Cloud Solutions', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg' },
  { name: 'VMware by Broadcom', category: 'Virtualization & Hybrid Cloud', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg' },
  { name: 'Palo Alto Networks', category: 'Cybersecurity Platforms', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Palo_Alto_Networks_logo.svg' },
];

export const companyValuesData: CompanyValue[] = [
  {
    key: 'C',
    title: 'Customer First',
    tagline: 'Delivering exceptional value and building trust.',
    description: 'We prioritize our clients\' strategic business goals, delivering customized IT infrastructure and digital solutions with uncompromised quality and customer satisfaction.',
    iconName: 'Users'
  },
  {
    key: 'A',
    title: 'Accountability',
    tagline: 'Taking ownership of results and commitments.',
    description: 'We act with high integrity, taking full responsibility for implementation outcomes, SLA performance, corporate governance, and ethical business conduct.',
    iconName: 'ShieldCheck'
  },
  {
    key: 'R',
    title: 'Respect',
    tagline: 'Valuing diversity, teamwork, and human potential.',
    description: 'We foster an inclusive corporate environment built on mutual respect, continuous learning, collaboration, and empowering our team members to excel.',
    iconName: 'HeartHandshake'
  },
  {
    key: 'E',
    title: 'Excellence',
    tagline: 'Striving for innovation and operational mastery.',
    description: 'We continuously upgrade our technological expertise, adopting world-class frameworks and cutting-edge innovations to exceed expectations.',
    iconName: 'Award'
  }
];

export const footerData = {
  address: 'Gedung Dummy Cyber Park, Jl. Jendral Sudirman No. 88, Jakarta Selatan 12190 - Indonesia',
  phone: '+62 21 500 0000',
  fax: '+62 21 500 0001',
  email: 'corporate.secretary@dummytech.com',
  subsidiaries: [
    'PT Dummy Visionet Data',
    'PT Dummy Digital Distribusi',
    'PT Dummy System Integrator',
    'Dummy Global Services Corp.'
  ]
};
