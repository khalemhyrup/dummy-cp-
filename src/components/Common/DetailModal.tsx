import React from 'react';
import { X } from 'lucide-react';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category?: string;
  content?: string;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  isOpen,
  onClose,
  title,
  category,
  content,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10">
        
        {/* Header */}
        <div className="px-6 py-5 bg-slate-900 text-white flex items-start justify-between">
          <div>
            {category && (
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                {category}
              </span>
            )}
            <h3 className="text-lg font-bold tracking-tight text-white leading-snug">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-4"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 text-sm text-slate-600 leading-relaxed max-h-[60vh] overflow-y-auto space-y-4">
          {content ? (
            <p>{content}</p>
          ) : (
            <p>Informasi detail mengenai {title} dari PT Integra Aneksa Kreasindo.</p>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
          >
            Tutup
          </button>
        </div>

      </div>
    </div>
  );
};
