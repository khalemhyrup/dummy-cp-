import React, { useState } from 'react';
import { Search, X } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectResult: (title: string, detail: string) => void;
}

const SEARCH_DATABASE = [
  { title: 'IT Support & Maintenance', category: 'IT Solutions', detail: 'Layanan pemeliharaan sistem IT, server, hardware, dan penanganan gangguan teknis on-site oleh tim Grasindo Pro.' },
  { title: 'Fiber Optics & Network Installer', category: 'IT Solutions', detail: 'Instalasi jaringan kabel Fiber Optik, kabel FO indoor/outdoor, penyambungan Splicing, dan tes OTDR.' },
  { title: 'Security Systems (CCTV & Access Door)', category: 'IT Solutions', detail: 'Pemasangan kamera CCTV IP/Analog, sistem kontrol akses pintu RFID/Biometrik, dan pemantauan keamanan.' },
  { title: 'Telecommunications & Network Tower', category: 'IT Solutions', detail: 'Konstruksi dan pemeliharaan menara telekomunikasi (BST), instalasi perangkat transmisi radio, dan BTS.' },
  { title: 'Mekanikal (HVAC, Plumbing & Hydrant)', category: 'CME', detail: 'Perancangan dan instalasi sistem pendingin udara HVAC, pemipaan air, dan instalasi sistem pemadam kebakaran hydrant.' },
  { title: 'Elektrikal (Instalasi Listrik & Tenaga)', category: 'CME', detail: 'Instalasi jaringan listrik tegangan rendah/menengah, panel distribusi, genset, dan integrasi sistem otomatisasi.' },
  { title: 'EO (Event Organizer & MICE Solutions)', category: 'Event Organizer', detail: 'Penyelenggaraan acara korporat, pameran MICE, seminar, launching produk, dan manajemen event profesional.' },
  { title: 'Media Advertising & Billboard', category: 'Advertising', detail: 'Produksi dan pemasangan media iklan luar ruang, billboard, neon box, LED videotron, dan papan penunjuk arah.' },
];

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectResult,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? SEARCH_DATABASE.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.detail.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10">
        
        {/* Search Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-100 gap-3">
          <Search className="w-5 h-5 text-amber-500 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari layanan, solusi IT, CME, atau Event Organizer..."
            className="w-full text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none bg-transparent"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1 bg-slate-100 rounded-md"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-2">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-slate-400 space-y-2">
              <p className="font-semibold text-slate-500">Ketik kata kunci untuk mencari</p>
              <p>Contoh: "Fiber Optic", "IT Support", "CCTV", "MICE"</p>
            </div>
          ) : results.length > 0 ? (
            results.map((item) => (
              <button
                key={item.title}
                onClick={() => {
                  onSelectResult(item.title, item.detail);
                  onClose();
                }}
                className="w-full text-left p-3.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200/80 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-slate-400 group-hover:text-amber-600 transition-colors">
                    Lihat Detail →
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-800 mt-1">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.detail}</p>
              </button>
            ))
          ) : (
            <div className="py-12 text-center text-slate-400 text-xs">
              Tidak ditemukan hasil untuk "{query}"
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
          <span>Grasindo Pro Search</span>
          <span>Tekan ESC atau klik luar untuk menutup</span>
        </div>

      </div>
    </div>
  );
};
