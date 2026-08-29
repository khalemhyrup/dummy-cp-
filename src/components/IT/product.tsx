import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, ChevronDown, Heart, Check, MessageSquare, ArrowRight, X, Shield, Phone, Mail } from 'lucide-react';

interface ProductPageProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

interface ProductItem {
  id: string;
  categoryGroup: string;
  subCategory: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor?: string;
  colorsText: string;
  price: number;
  formattedPrice: string;
  image: string;
  specs: string[];
  isBestSeller?: boolean;
  isNew?: boolean;
}

export const ProductPage: React.FC<ProductPageProps> = ({ onNavigate, onContactClick }) => {
  const [showFilters, setShowFilters] = useState<boolean>(true);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all');
  const [selectedGroup, setSelectedGroup] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'name'>('featured');
  const [sortDropdownOpen, setSortDropdownOpen] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState<boolean>(false);
  const [inquirySuccess, setInquirySuccess] = useState<boolean>(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    quantity: '1',
    notes: '',
  });

  const sidebarGroups = [
    {
      title: 'CCTV & SURVEILLANCE',
      groupId: 'cctv',
      items: [
        { id: 'all-cctv', label: 'All CCTV & IP Cam', subCategory: 'cctv-all' },
        { id: 'cctv-dome', label: 'IP Camera Dome 4K', subCategory: 'cctv-dome' },
        { id: 'cctv-bullet', label: 'IP Camera Bullet PTZ', subCategory: 'cctv-bullet' },
        { id: 'cctv-nvr', label: 'NVR Recording Server', subCategory: 'cctv-nvr' },
      ],
    },
    {
      title: 'ACCESS CONTROL & LOCKS',
      groupId: 'access',
      items: [
        { id: 'all-access', label: 'All Access Door', subCategory: 'access-all' },
        { id: 'access-emlock', label: 'Magnetic EM-Lock 600lbs', subCategory: 'access-emlock' },
        { id: 'access-dropbolt', label: 'Electric Dropbolt Lock', subCategory: 'access-dropbolt' },
        { id: 'access-smartlock', label: 'Smart Digital Door Lock', subCategory: 'access-smartlock' },
      ],
    },
    {
      title: 'BIOMETRICS & ATTENDANCE',
      groupId: 'biometric',
      items: [
        { id: 'all-bio', label: 'All Biometrics', subCategory: 'bio-all' },
        { id: 'bio-face', label: 'Face Recognition AI', subCategory: 'bio-face' },
        { id: 'bio-finger', label: 'Fingerprint & RFID', subCategory: 'bio-finger' },
      ],
    },
    {
      title: 'BARRIER GATE & TURNSTILE',
      groupId: 'barrier',
      items: [
        { id: 'all-barrier', label: 'All Barrier Gates', subCategory: 'barrier-all' },
        { id: 'barrier-boom', label: 'Palang Parkir Otomatis', subCategory: 'barrier-boom' },
        { id: 'barrier-turnstile', label: 'Tripod Turnstile SUS304', subCategory: 'barrier-turnstile' },
      ],
    },
    {
      title: 'SAFETY & NETWORKING',
      groupId: 'safety',
      items: [
        { id: 'all-safety', label: 'All Safety & Network', subCategory: 'safety-all' },
        { id: 'safety-fire', label: 'Fire Alarm System', subCategory: 'safety-fire' },
        { id: 'net-rack', label: 'Server Rack Cabinet 42U', subCategory: 'net-rack' },
        { id: 'net-fo', label: 'Fiber Optic Cable & Splicer', subCategory: 'net-fo' },
      ],
    },
  ];

  const allProducts: ProductItem[] = [
    {
      id: 'prod-1',
      categoryGroup: 'cctv',
      subCategory: 'cctv-dome',
      title: 'IP Camera Dome 4K AI Smart IR',
      subtitle: 'Indoor Ceiling Mount & Office Surveillance',
      badge: 'Best Seller',
      badgeColor: 'text-amber-800',
      colorsText: 'Garansi Resmi 2 Tahun',
      price: 1250000,
      formattedPrice: 'Rp 1.250.000',
      image: '/IT/Our Project/CCTV/1708909002900.jpg',
      specs: [
        'Resolusi Ultra HD 4K (8 Megapixel) lensa 2.8mm wide angle',
        'Smart AI Human & Vehicle Classification (anti alarm palsu)',
        'Smart IR Night Vision hingga 30 meter dalam gelap total',
        'Proteksi casing IK10 Vandal-Proof & IP67 weatherproof',
        'Mendukung PoE (Power over Ethernet) & audio built-in mic',
      ],
    },
    {
      id: 'prod-2',
      categoryGroup: 'cctv',
      subCategory: 'cctv-bullet',
      title: 'IP Camera Bullet Outdoor Starlight PTZ',
      subtitle: 'Outdoor Industrial & Perimeter Security',
      badge: 'Just In',
      badgeColor: 'text-orange-700',
      colorsText: 'ColorHunter 24/7 Full Color',
      price: 1850000,
      formattedPrice: 'Rp 1.850.000',
      image: '/IT/Our Project/CCTV/1708909027188.jpg',
      specs: [
        'Sensor Starlight ColorHunter menampilkan warna terang 24 jam',
        'Jangkauan Smart EXIR LED jarak jauh hingga 80 meter',
        'Analitik cerdas: Intrusion detection, line crossing & perimeter defense',
        'Casing metal aluminium anti-karat & sertifikasi petir 4kV',
      ],
    },
    {
      id: 'prod-3',
      categoryGroup: 'cctv',
      subCategory: 'cctv-nvr',
      title: 'Network Video Recorder 32-CH 4K AI Hub',
      subtitle: 'Enterprise Central Recording & Cloud Monitoring',
      badge: 'Enterprise Grade',
      badgeColor: 'text-blue-800',
      colorsText: '4 Slot HDD (Up to 40TB)',
      price: 4750000,
      formattedPrice: 'Rp 4.750.000',
      image: '/images/it_software_app_system.jpg',
      specs: [
        'Mendukung hingga 32 channel IP Camera 4K (8MP / 12MP)',
        '4 Slot SATA Hard Disk (kapasitas total penyimpanan hingga 40 TB)',
        'Dual HDMI & VGA output independen resolusi 4K',
        'Aplikasi monitoring smartphone gratis (iOS & Android)',
      ],
    },
    {
      id: 'prod-4',
      categoryGroup: 'access',
      subCategory: 'access-emlock',
      title: 'Magnetic Door Lock (EM-Lock) 600 lbs',
      subtitle: 'Pintu Kaca, Kayu, & Alumunium Kantor',
      badge: 'Best Seller',
      badgeColor: 'text-amber-800',
      colorsText: 'Paket Komplit: Lock + Bracket ZL',
      price: 850000,
      formattedPrice: 'Rp 850.000',
      image: '/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20230109_131600.jpg',
      specs: [
        'Kekuatan daya tahan magnetik 280 kg / 600 lbs anti-dobrak',
        'Mode Fail-Safe: Otomatis terbuka saat listrik padam/darurat kebakaran',
        'Dilengkapi LED status kunci (Merah: Terkunci, Hijau: Terbuka)',
        'Termasuk braket ZL & U untuk semua jenis pintu kantor & server',
      ],
    },
    {
      id: 'prod-5',
      categoryGroup: 'access',
      subCategory: 'access-dropbolt',
      title: 'Electric Dropbolt Lock with Time Delay',
      subtitle: 'Pintu Kaca Frameless / Double Glass System',
      badge: 'Heavy Duty',
      badgeColor: 'text-slate-800',
      colorsText: 'Stainless Steel SUS304',
      price: 950000,
      formattedPrice: 'Rp 950.000',
      image: '/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20230109_135949.jpg',
      specs: [
        'Batang silinder baja solid tahan potong (Stainless Steel SUS304)',
        'Pengaturan waktu penguncian otomatis (Time Delay: 0, 3, 6, 9 detik)',
        'Daya tahan siklus buka-tutup hingga 500.000 kali pemakaian',
      ],
    },
    {
      id: 'prod-6',
      categoryGroup: 'access',
      subCategory: 'access-smartlock',
      title: 'Smart Touchscreen Digital Door Lock',
      subtitle: 'Ruang Server, Ruang Direksi & Kantor Privat',
      badge: 'Smart Keyless',
      badgeColor: 'text-purple-800',
      colorsText: '5 Metode Akses (Fingerprint + PIN + RFID)',
      price: 2350000,
      formattedPrice: 'Rp 2.350.000',
      image: '/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20230109_150050.jpg',
      specs: [
        '5 Metode akses: Fingerprint, PIN Anti-Peeping, Kartu RFID, App, & Kunci',
        'Sensor sidik jari biometrik semikonduktor 360° kecepatan ≤ 0.3s',
        'Fitur Auto-Locking dan alarm anti-bobol / salah sandi 5 kali',
      ],
    },
    {
      id: 'prod-7',
      categoryGroup: 'biometric',
      subCategory: 'bio-face',
      title: 'Dynamic Face Recognition Access Terminal',
      subtitle: 'Akses Tanpa Sentuh (Touchless AI Verification)',
      badge: 'AI Anti-Spoofing',
      badgeColor: 'text-emerald-800',
      colorsText: 'Kapasitas 10.000 Wajah + Software',
      price: 3650000,
      formattedPrice: 'Rp 3.650.000',
      image: '/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20241123_124329.jpg',
      specs: [
        'Kamera ganda resolusi HD dengan algoritma pengenalan wajah 0.2 detik',
        'Teknologi Liveness Detection (tidak bisa dipalsukan foto / video)',
        'Kapasitas hingga 10.000 wajah, 10.000 kartu RFID, & 100.000 log',
        'Koneksi LAN TCP/IP, Wi-Fi, Wiegand & integrasi relay access door',
      ],
    },
    {
      id: 'prod-8',
      categoryGroup: 'biometric',
      subCategory: 'bio-finger',
      title: 'Biometric Fingerprint & RFID Standalone',
      subtitle: 'Akses Pintu & Mesin Absensi Karyawan',
      badge: 'Best Seller',
      badgeColor: 'text-amber-800',
      colorsText: 'Free Software Payroll & Excel Export',
      price: 1450000,
      formattedPrice: 'Rp 1.450.000',
      image: '/IT/Our Project/Access Control & Slidding  Door Automatic/IMG_20250306_103656.jpg',
      specs: [
        'Sensor optik anti-gores dengan pembacaan sidik jari basah & kering',
        'Kapasitas 3.000 sidik jari, 10.000 kartu Mifare/EM-ID, 100.000 transaksi',
        'Tampilan layar warna TFT 2.4 inci dengan menu bahasa Indonesia',
      ],
    },
    {
      id: 'prod-9',
      categoryGroup: 'barrier',
      subCategory: 'barrier-boom',
      title: 'Automatic Barrier Gate System (Palang Parkir)',
      subtitle: 'Gedung Perkantoran, Kawasan Industri & Hunian',
      badge: 'High Speed Servo',
      badgeColor: 'text-blue-800',
      colorsText: 'Panjang Palang 3 - 6 Meter LED',
      price: 9800000,
      formattedPrice: 'Rp 9.800.000',
      image: '/IT/Our Project/CCTV/IMG_20220729_093229.jpg',
      specs: [
        'Motor DC Brushless Servo dengan kecepatan buka fleksibel (0.8s - 3s)',
        'Panjang palang oktagonal aluminium dengan lampu LED strip (3 - 6 meter)',
        'Fitur Anti-Crash: Sensor Loop Detector & Infrared anti-timpa kendaraan',
        'Mendukung integrasi kartu RFID tap, UHF Long Range Reader & Tiket',
      ],
    },
    {
      id: 'prod-10',
      categoryGroup: 'barrier',
      subCategory: 'barrier-turnstile',
      title: 'Tripod Turnstile Stainless Steel SUS304',
      subtitle: 'Lobby Gedung Perkantoran & Area Masuk Karyawan',
      badge: 'Stainless SUS304',
      badgeColor: 'text-slate-800',
      colorsText: 'Integrasi Card Reader / Face Terminal',
      price: 11500000,
      formattedPrice: 'Rp 11.500.000',
      image: '/IT/Our Project/Access Control & Slidding  Door Automatic/1737266516775.jpg',
      specs: [
        'Material bodi Stainless Steel SUS304 berkualitas tinggi ketebalan 1.5mm',
        'Lampu indikator arah LED hijau/merah di bagian atas dan depan',
        'Fitur Auto-Drop Arm otomatis melipat saat kondisi darurat listrik/kebakaran',
      ],
    },
    {
      id: 'prod-11',
      categoryGroup: 'safety',
      subCategory: 'safety-fire',
      title: 'Addressable Fire Alarm Control Panel & Smoke Kit',
      subtitle: 'Proteksi Kebakaran Gedung, Ruang Server & Pabrik',
      badge: 'Standar K3 Damkar',
      badgeColor: 'text-red-700',
      colorsText: 'Panel LCD + Sirine Strobe 105dB',
      price: 6500000,
      formattedPrice: 'Rp 6.500.000',
      image: '/IT/Our Project/HVAC/IMG_20240605_102014.jpg',
      specs: [
        'Panel kontrol cerdas dengan layar LCD interaktif pemetaan zona gedung',
        'Detektor asap fotoelektrik presisi tinggi mendeteksi titik api seketika',
        'Sirine Strobe Alarm bersuara nyaring 105 dB dengan kilatan lampu darurat',
      ],
    },
    {
      id: 'prod-12',
      categoryGroup: 'safety',
      subCategory: 'net-rack',
      title: 'Server Rack Cabinet 42U Close Rack System',
      subtitle: 'Standard 19-inch Heavy Duty SPCC Steel',
      badge: 'Heavy Duty 42U',
      badgeColor: 'text-slate-900',
      colorsText: 'Termasuk 4 Fan Cooling + PDU Surge',
      price: 7800000,
      formattedPrice: 'Rp 7.800.000',
      image: '/images/it_telecom_pabx_system.jpg',
      specs: [
        'Kapasitas beban statis hingga 800 kg material baja SPCC tebal',
        'Dilengkapi 4 high-speed fan cooling dan PDU surge protector',
        'Pintu kaca tempered front & perforated back ventilasi maksimal',
      ],
    },
  ];

  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState<boolean>(false);
  const [quickFilter, setQuickFilter] = useState<'all' | 'best-seller' | 'enterprise'>('all');

  const subCategoryChips = [
    { id: 'all', label: 'All Products', group: 'all' },
    { id: 'cctv-all', label: 'CCTV & IP Cam', group: 'cctv' },
    { id: 'cctv-dome', label: 'Dome 4K', group: 'cctv' },
    { id: 'access-all', label: 'Access Control', group: 'access' },
    { id: 'access-emlock', label: 'EM-Lock 600lbs', group: 'access' },
    { id: 'bio-all', label: 'Biometrics', group: 'biometric' },
    { id: 'bio-face', label: 'Face AI', group: 'biometric' },
    { id: 'barrier-all', label: 'Barrier Gate', group: 'barrier' },
    { id: 'safety-fire', label: 'Fire Alarm', group: 'safety' },
    { id: 'net-rack', label: 'Server Rack 42U', group: 'safety' },
  ];

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (selectedGroup !== 'all' || selectedSubCategory !== 'all') count++;
    if (sortBy !== 'featured') count++;
    if (quickFilter !== 'all') count++;
    return count;
  }, [selectedGroup, selectedSubCategory, sortBy, quickFilter]);

  // Filtering products
  const filteredProducts = useMemo(() => {
    let list = allProducts.filter((p) => {
      if (selectedSubCategory !== 'all') {
        if (selectedSubCategory.endsWith('-all')) {
          const groupPrefix = selectedSubCategory.replace('-all', '');
          return p.categoryGroup === groupPrefix;
        }
        return p.subCategory === selectedSubCategory;
      }
      if (selectedGroup !== 'all') {
        return p.categoryGroup === selectedGroup;
      }
      return true;
    });

    if (quickFilter === 'best-seller') {
      list = list.filter((p) => p.badge.toLowerCase().includes('best'));
    } else if (quickFilter === 'enterprise') {
      list = list.filter((p) => p.badge.toLowerCase().includes('enterprise') || p.badge.toLowerCase().includes('heavy') || p.badge.toLowerCase().includes('speed'));
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    }
    return list;
  }, [allProducts, selectedSubCategory, selectedGroup, quickFilter, sortBy]);

  // Page Heading title
  const currentTitle = useMemo(() => {
    if (selectedSubCategory === 'all' && selectedGroup === 'all') {
      return 'IT Hardware & Systems';
    }
    for (const group of sidebarGroups) {
      for (const item of group.items) {
        if (item.subCategory === selectedSubCategory) {
          return item.label;
        }
      }
    }
    const foundGroup = sidebarGroups.find((g) => g.groupId === selectedGroup);
    if (foundGroup) return foundGroup.title;
    return 'IT Hardware & Systems';
  }, [selectedSubCategory, selectedGroup, sidebarGroups]);

  const handleSendWhatsApp = (product: ProductItem) => {
    const text = encodeURIComponent(
      `Halo Grasindo Pro,\nSaya tertarik untuk konsultasi dan penawaran harga produk:\n\n*${product.title}*\n${product.subtitle}\nHarga: ${product.formattedPrice}\n\nMohon info ketersediaan stok, harga, dan paket instalasinya. Terima kasih.`
    );
    window.open(`https://wa.me/6287777288810?text=${text}`, '_blank');
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySuccess(true);
  };

  const [activeGalleryIndex, setActiveGalleryIndex] = useState<number>(0);

  const getProductGallery = (prod: ProductItem) => {
    const defaultGallery = [
      prod.image,
      '/IT/Our Project/CCTV/1708909002900.jpg',
      '/IT/Our Project/CCTV/1708909027188.jpg',
    ];
    return defaultGallery;
  };

  const handleProductClick = (product: ProductItem) => {
    setSelectedProduct(product);
    setActiveGalleryIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCatalog = () => {
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If a product is selected, render the dedicated PDP view
  if (selectedProduct) {
    const gallery = getProductGallery(selectedProduct);

    return (
      <div className="w-full min-h-screen bg-white font-sans text-neutral-900 overflow-x-hidden selection:bg-black selection:text-white">
        
        {/* Top Breadcrumb: Back to Collections */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8 pb-4">
          <button
            onClick={handleBackToCatalog}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-neutral-600 hover:text-black transition-colors cursor-pointer group"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            <span>Back to Collections</span>
          </button>
        </div>

        {/* Main PDP Grid (2 Columns: Gallery Left, Details Right) */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Thumbnails + Hero Main Image */}
            <div className="lg:col-span-7 flex flex-col-reverse sm:flex-row gap-4 sm:gap-6 items-start sticky top-24">
              
              {/* Vertical Thumbnail List (Left) */}
              <div className="flex sm:flex-col gap-3 shrink-0 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0 w-full sm:w-auto">
                {gallery.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveGalleryIndex(idx)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-[#f4f4f4] transition-all cursor-pointer border-2 ${
                      activeGalleryIndex === idx
                        ? 'border-black ring-2 ring-black/10'
                        : 'border-transparent opacity-70 hover:opacity-100 hover:border-neutral-300'
                    }`}
                  >
                    <img
                      src={imgSrc}
                      alt={`${selectedProduct.title} - ${idx + 1}`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/service_it_support.png';
                      }}
                    />
                  </button>
                ))}
              </div>

              {/* Main Hero Photo Container (Right) */}
              <div className="flex-1 w-full aspect-square sm:aspect-[4/5] bg-[#f6f6f6] rounded-3xl overflow-hidden relative shadow-sm border border-neutral-100">
                <img
                  src={gallery[activeGalleryIndex] || selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/service_it_support.png';
                  }}
                />
              </div>

            </div>

            {/* RIGHT COLUMN: Product Details & Specifications */}
            <div className="lg:col-span-5 space-y-8 max-w-xl">
              
              {/* Badge, Title & Price */}
              <div className="space-y-2 border-b border-neutral-100 pb-6">
                <span className="text-xs font-extrabold tracking-wider text-red-600 uppercase block">
                  {selectedProduct.badge || 'OFFICIAL HARDWARE'}
                </span>
                
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                  {selectedProduct.title}
                </h1>
                
                <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                  {selectedProduct.subtitle}
                </p>

                <p className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight pt-2">
                  {selectedProduct.formattedPrice}
                </p>
                <p className="text-xs font-semibold text-neutral-500">
                  {selectedProduct.colorsText}
                </p>
              </div>

              {/* Deskripsi Produk */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 font-mono block">
                  DESKRIPSI PRODUK
                </span>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed text-justify">
                  Perangkat <strong className="text-neutral-900">{selectedProduct.title}</strong> dirancang khusus untuk kebutuhan infrastruktur enterprise dengan ketahanan tinggi dan performa presisi. Dilengkapi komponen standar industri dengan akurasi pengoperasian maksimal, sistem proteksi handal, serta integrasi mudah ke jaringan lokal maupun server pusat.
                </p>
              </div>

              {/* Spesifikasi Teknis */}
              <div className="space-y-3 border-t border-neutral-100 pt-6">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 font-mono block">
                  SPESIFIKASI TEKNIS
                </span>
                
                <div className="space-y-2.5">
                  {selectedProduct.specs.map((spec, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-start gap-3 bg-neutral-50 border border-neutral-100 p-3.5 rounded-xl text-xs text-neutral-800 leading-relaxed font-medium shadow-2xs"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0 mt-1.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button: Chat WhatsApp Langsung */}
              <div className="pt-2">
                <button
                  onClick={() => handleSendWhatsApp(selectedProduct)}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-2xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat WhatsApp Langsung untuk Konsultasi &amp; Nego</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white font-sans text-neutral-900 overflow-x-hidden selection:bg-black selection:text-white">
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-6 sm:py-10">
        
        {/* =========================================================================
            HEADER TITLE: Category Title (Count) + Desktop Controls (Hide Filters & Sort)
        ========================================================================== */}
        <div className="flex items-center justify-between pb-3 sm:pb-5">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            {currentTitle} ({filteredProducts.length})
          </h1>

          {/* Desktop Filter Toggle & Desktop Sort Dropdown (Visible on md+) */}
          <div className="hidden md:flex items-center gap-6 shrink-0">
            
            {/* Toggle Filters Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800 hover:text-neutral-500 transition-colors cursor-pointer"
            >
              <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
              <SlidersHorizontal className="w-4 h-4" />
            </button>

            {/* Desktop Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-800 hover:text-neutral-500 transition-colors cursor-pointer"
              >
                <span>
                  Sort By
                  {sortBy === 'price-low'
                    ? ': Price Low to High'
                    : sortBy === 'price-high'
                    ? ': Price High to Low'
                    : sortBy === 'name'
                    ? ': Name A-Z'
                    : ''}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {sortDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-neutral-200 rounded-xl shadow-lg z-30 py-2 animate-fadeIn">
                  <button
                    onClick={() => {
                      setSortBy('featured');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-neutral-50 cursor-pointer ${
                      sortBy === 'featured' ? 'font-bold text-neutral-900 bg-neutral-50' : 'text-neutral-600'
                    }`}
                  >
                    Featured / Default
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('price-low');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-neutral-50 cursor-pointer ${
                      sortBy === 'price-low' ? 'font-bold text-neutral-900 bg-neutral-50' : 'text-neutral-600'
                    }`}
                  >
                    Price: Low to High
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('price-high');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-neutral-50 cursor-pointer ${
                      sortBy === 'price-high' ? 'font-bold text-neutral-900 bg-neutral-50' : 'text-neutral-600'
                    }`}
                  >
                    Price: High to Low
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('name');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-neutral-50 cursor-pointer ${
                      sortBy === 'name' ? 'font-bold text-neutral-900 bg-neutral-50' : 'text-neutral-600'
                    }`}
                  >
                    Name: A to Z
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* =========================================================================
            HORIZONTAL SUBCATEGORY CHIPS BAR (ONLY VISIBLE ON MOBILE/HP: md:hidden)
        ========================================================================== */}
        <div className="flex md:hidden items-center gap-6 sm:gap-8 overflow-x-auto no-scrollbar pb-3.5 text-sm whitespace-nowrap border-b border-transparent">
          {subCategoryChips.map((chip) => {
            const isChipActive =
              chip.id === 'all'
                ? selectedSubCategory === 'all' && selectedGroup === 'all'
                : selectedSubCategory === chip.id;
            return (
              <button
                key={chip.id}
                onClick={() => {
                  if (chip.id === 'all') {
                    setSelectedSubCategory('all');
                    setSelectedGroup('all');
                  } else {
                    setSelectedSubCategory(chip.id);
                    setSelectedGroup(chip.group);
                  }
                }}
                className={`transition-all cursor-pointer font-medium text-xs sm:text-sm pb-1 ${
                  isChipActive
                    ? 'text-neutral-950 font-bold underline underline-offset-8 decoration-2'
                    : 'text-neutral-600 hover:text-neutral-950'
                }`}
              >
                {chip.label}
              </button>
            );
          })}
        </div>

        {/* =========================================================================
            FILTER PILLS ROW (Nike Style - ONLY VISIBLE ON MOBILE/HP: md:hidden)
        ========================================================================== */}
        <div className="flex md:hidden border-t border-neutral-200/80 pt-3.5 pb-6 items-center justify-between gap-3">
          
          {/* Scrollable Pills List */}
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1">
            
            {/* Pill 1: Master Filter Drawer Toggle (with active count badge) */}
            <button
              onClick={() => setIsMobileDrawerOpen(true)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold flex items-center gap-2 shrink-0 transition-all cursor-pointer border shadow-2xs ${
                activeFilterCount > 0
                  ? 'border-neutral-950 bg-neutral-950 text-white'
                  : 'border-neutral-300 hover:border-neutral-900 bg-white text-neutral-900'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filter {activeFilterCount > 0 ? `(${activeFilterCount})` : ''}</span>
            </button>

            {/* Pill 2: Quick Sort Dropdown for Mobile */}
            <div className="relative shrink-0">
              <button
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer border ${
                  sortBy !== 'featured'
                    ? 'border-neutral-950 bg-neutral-950 text-white'
                    : 'border-neutral-300 hover:border-neutral-900 bg-white text-neutral-900'
                }`}
              >
                <span>
                  {sortBy === 'price-low'
                    ? 'Price: Low to High'
                    : sortBy === 'price-high'
                    ? 'Price: High to Low'
                    : sortBy === 'name'
                    ? 'Name: A-Z'
                    : 'Shop By Price / Sort'}
                </span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {sortDropdownOpen && (
                <div className="absolute left-0 top-full mt-2 w-52 bg-white border border-neutral-200 rounded-2xl shadow-xl z-30 py-2 animate-fadeIn">
                  <button
                    onClick={() => {
                      setSortBy('featured');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-neutral-50 cursor-pointer ${
                      sortBy === 'featured' ? 'font-bold text-neutral-900 bg-neutral-100' : 'text-neutral-600'
                    }`}
                  >
                    Featured / Default
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('price-low');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-neutral-50 cursor-pointer ${
                      sortBy === 'price-low' ? 'font-bold text-neutral-900 bg-neutral-100' : 'text-neutral-600'
                    }`}
                  >
                    Price: Low to High
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('price-high');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-neutral-50 cursor-pointer ${
                      sortBy === 'price-high' ? 'font-bold text-neutral-900 bg-neutral-100' : 'text-neutral-600'
                    }`}
                  >
                    Price: High to Low
                  </button>
                  <button
                    onClick={() => {
                      setSortBy('name');
                      setSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2.5 text-xs font-semibold hover:bg-neutral-50 cursor-pointer ${
                      sortBy === 'name' ? 'font-bold text-neutral-900 bg-neutral-100' : 'text-neutral-600'
                    }`}
                  >
                    Product Name: A to Z
                  </button>
                </div>
              )}
            </div>

            {/* Pill 3: Best Seller Quick Filter */}
            <button
              onClick={() => setQuickFilter(quickFilter === 'best-seller' ? 'all' : 'best-seller')}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer border ${
                quickFilter === 'best-seller'
                  ? 'border-neutral-950 bg-neutral-950 text-white'
                  : 'border-neutral-300 hover:border-neutral-900 bg-white text-neutral-800'
              }`}
            >
              <span>Best Seller</span>
            </button>

            {/* Pill 4: Enterprise Grade Quick Filter */}
            <button
              onClick={() => setQuickFilter(quickFilter === 'enterprise' ? 'all' : 'enterprise')}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer border ${
                quickFilter === 'enterprise'
                  ? 'border-neutral-950 bg-neutral-950 text-white'
                  : 'border-neutral-300 hover:border-neutral-900 bg-white text-neutral-800'
              }`}
            >
              <span>Enterprise Grade</span>
            </button>

          </div>

        </div>

        {/* =========================================================================
            MAIN BODY: DESKTOP SIDEBAR + RESPONSIVE PRODUCT GRID (2 COLS ON MOBILE)
        ========================================================================== */}
        <div className="flex gap-8 lg:gap-12 items-start">
          
          {/* =======================
              DESKTOP LEFT SIDEBAR
          ======================== */}
          {showFilters && (
            <aside className="w-56 sm:w-64 shrink-0 space-y-8 pr-4 select-none animate-fadeIn hidden md:block">
              
              {/* All Items Master Filter */}
              <div>
                <button
                  onClick={() => {
                    setSelectedSubCategory('all');
                    setSelectedGroup('all');
                    setQuickFilter('all');
                  }}
                  className={`text-sm font-semibold tracking-tight cursor-pointer hover:text-neutral-500 transition-colors ${
                    selectedSubCategory === 'all' && selectedGroup === 'all' && quickFilter === 'all'
                      ? 'text-neutral-950 underline underline-offset-4 font-bold'
                      : 'text-neutral-700'
                  }`}
                >
                  All Products ({allProducts.length})
                </button>
              </div>

              {/* Category Groups */}
              {sidebarGroups.map((group, gIdx) => (
                <div key={gIdx} className="space-y-3">
                  <h3 className="text-xs font-extrabold tracking-wider uppercase text-neutral-950">
                    {group.title}
                  </h3>
                  <ul className="space-y-2">
                    {group.items.map((item) => {
                      const isActive = selectedSubCategory === item.subCategory;
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => {
                              setSelectedSubCategory(item.subCategory);
                              setSelectedGroup(group.groupId);
                            }}
                            className={`text-sm tracking-tight text-left block w-full transition-colors cursor-pointer ${
                              isActive
                                ? 'text-neutral-950 font-bold underline underline-offset-4'
                                : 'text-neutral-600 hover:text-neutral-950'
                            }`}
                          >
                            {item.label}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}

            </aside>
          )}

          {/* =======================================================================
              PRODUCT GRID (2 COLUMNS ON MOBILE, 3-4 COLUMNS ON TABLET/DESKTOP)
          ======================================================================== */}
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-24 bg-neutral-50 rounded-2xl p-8">
                <p className="text-base font-semibold text-neutral-800">
                  Tidak ada produk dalam filter ini.
                </p>
                <button
                  onClick={() => {
                    setSelectedSubCategory('all');
                    setSelectedGroup('all');
                    setQuickFilter('all');
                    setSortBy('featured');
                  }}
                  className="mt-3 text-xs font-bold text-neutral-900 underline cursor-pointer"
                >
                  Reset Semua Filter
                </button>
              </div>
            ) : (
              <div className={`grid grid-cols-2 ${showFilters ? 'md:grid-cols-3' : 'md:grid-cols-4'} gap-x-3 sm:gap-x-6 gap-y-8 sm:gap-y-12`}>
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleProductClick(product)}
                    className="group flex flex-col cursor-pointer"
                  >
                    {/* Image Container (Square 1:1 Aspect Ratio) */}
                    <div className="relative aspect-square w-full bg-[#f6f6f6] rounded-xl sm:rounded-none overflow-hidden mb-2.5 sm:mb-3">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/service_it_support.png';
                        }}
                      />
                    </div>

                    {/* Product Information Details */}
                    <div className="space-y-0.5 sm:space-y-1">
                      
                      {/* Badge Tag */}
                      <p className={`text-[11px] sm:text-xs font-semibold tracking-tight ${product.badgeColor || 'text-red-700'} line-clamp-1`}>
                        {product.badge}
                      </p>

                      {/* Product Title */}
                      <h2 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug group-hover:text-neutral-600 transition-colors line-clamp-2">
                        {product.title}
                      </h2>

                      {/* Subtitle */}
                      <p className="text-[11px] sm:text-xs text-neutral-500 leading-normal line-clamp-1">
                        {product.subtitle}
                      </p>

                      {/* Colors / Spec Text */}
                      <p className="text-[10px] sm:text-xs text-neutral-400 pt-0.5 line-clamp-1">
                        {product.colorsText}
                      </p>

                      {/* Price */}
                      <p className="text-xs sm:text-sm font-extrabold text-neutral-900 pt-1">
                        {product.formattedPrice}
                      </p>

                    </div>

                  </div>
                ))}
              </div>
            )}
          </main>

        </div>

      </div>

      {/* =========================================================================
          MOBILE FILTER & SORT DRAWER (SLIDE-OVER / BOTTOM SHEET)
      ========================================================================== */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white w-full sm:max-w-md max-h-[85vh] rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
            
            {/* Drawer Header */}
            <div className="p-4 sm:p-6 border-b border-neutral-100 flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-neutral-900">Filter &amp; Sort</h3>
                <p className="text-xs text-neutral-500">Sesuaikan kriteria produk IT yang diinginkan</p>
              </div>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center text-sm font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Drawer Body (Scrollable) */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
              
              {/* Sort Section */}
              <div className="space-y-3">
                <h4 className="font-bold uppercase tracking-wider text-xs text-neutral-400 font-mono">Urutkan Berdasarkan</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'featured', label: 'Featured / Default' },
                    { id: 'price-low', label: 'Price: Low to High' },
                    { id: 'price-high', label: 'Price: High to Low' },
                    { id: 'name', label: 'Name: A-Z' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSortBy(s.id as any)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold transition-all text-left ${
                        sortBy === s.id
                          ? 'border-black bg-black text-white'
                          : 'border-neutral-200 text-neutral-800 bg-neutral-50'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Tags Section */}
              <div className="space-y-3">
                <h4 className="font-bold uppercase tracking-wider text-xs text-neutral-400 font-mono">Kategori Unggulan</h4>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setQuickFilter(quickFilter === 'best-seller' ? 'all' : 'best-seller')}
                    className={`px-3.5 py-2 rounded-full border text-xs font-bold transition-all ${
                      quickFilter === 'best-seller'
                        ? 'border-black bg-black text-white'
                        : 'border-neutral-200 text-neutral-800 bg-white'
                    }`}
                  >
                    Best Seller
                  </button>
                  <button
                    onClick={() => setQuickFilter(quickFilter === 'enterprise' ? 'all' : 'enterprise')}
                    className={`px-3.5 py-2 rounded-full border text-xs font-bold transition-all ${
                      quickFilter === 'enterprise'
                        ? 'border-black bg-black text-white'
                        : 'border-neutral-200 text-neutral-800 bg-white'
                    }`}
                  >
                    Enterprise Grade
                  </button>
                </div>
              </div>

              {/* Categories Section */}
              <div className="space-y-4">
                <h4 className="font-bold uppercase tracking-wider text-xs text-neutral-400 font-mono">Kategori Produk</h4>
                
                <button
                  onClick={() => {
                    setSelectedGroup('all');
                    setSelectedSubCategory('all');
                  }}
                  className={`w-full text-left p-2.5 rounded-xl border text-xs font-bold ${
                    selectedGroup === 'all' && selectedSubCategory === 'all'
                      ? 'border-black bg-neutral-100 text-black'
                      : 'border-neutral-100 text-neutral-600'
                  }`}
                >
                  Semua Produk ({allProducts.length})
                </button>

                {sidebarGroups.map((group) => (
                  <div key={group.groupId} className="space-y-1.5">
                    <span className="text-xs font-extrabold text-neutral-900 block">{group.title}</span>
                    <div className="grid grid-cols-1 gap-1 pl-1">
                      {group.items.map((sub) => {
                        const isSubActive = selectedSubCategory === sub.subCategory;
                        return (
                          <button
                            key={sub.id}
                            onClick={() => {
                              setSelectedSubCategory(sub.subCategory);
                              setSelectedGroup(group.groupId);
                            }}
                            className={`text-left text-xs py-1.5 px-2 rounded-lg transition-colors ${
                              isSubActive
                                ? 'font-bold text-neutral-900 bg-neutral-100'
                                : 'text-neutral-600 hover:text-neutral-900'
                            }`}
                          >
                            • {sub.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-neutral-100 bg-neutral-50 flex items-center gap-3">
              <button
                onClick={() => {
                  setSelectedSubCategory('all');
                  setSelectedGroup('all');
                  setQuickFilter('all');
                  setSortBy('featured');
                }}
                className="py-3 px-4 rounded-xl border border-neutral-300 text-xs font-bold text-neutral-800 hover:bg-neutral-100 transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setIsMobileDrawerOpen(false)}
                className="flex-1 py-3 px-4 rounded-xl bg-black text-white text-xs font-bold hover:bg-neutral-800 transition-colors shadow-xs"
              >
                Tampilkan ({filteredProducts.length} Produk)
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProductPage;
