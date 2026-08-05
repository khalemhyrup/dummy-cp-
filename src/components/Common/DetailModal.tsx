import React from 'react';
import { X, CheckCircle, Info } from 'lucide-react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-xl w-full overflow-hidden">

        {/* Header */}
        <div className="bg-slate-900 text-white p-6 flex items-start justify-between">
          <div className="space-y-1">
            {category && (
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest block">
                {category}
              </span>
            )}
            <h3 className="text-xl font-bold leading-tight">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4 text-sm text-slate-700 leading-relaxed max-h-[60vh] overflow-y-auto">
          {content ? (
            <p className="whitespace-pre-line">{content}</p>
          ) : (
            <div className="space-y-4">
              <p>
                Welcome to the <strong>{title}</strong> page section of PT Integra Aneksa Kreasindo (Grasindopro). Here you can explore comprehensive information regarding our enterprise IT services, financial reports, governance frameworks, and strategic initiatives.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-900 text-xs">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  <span>Key Highlights</span>
                </div>
                <ul className="list-disc list-inside text-xs text-amber-950 space-y-1 pl-1">
                  <li>Enterprise Multi-Cloud & Cyber Security Platforms</li>
                  <li>Digital Insights & Business Intelligence Systems</li>
                  <li>Hybrid Infrastructure & Financial Technology Services</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-4 border-t border-gray-100 flex items-center justify-between text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Grasindopro" className="h-8 w-auto object-contain" />
            <span className="font-semibold text-slate-700">PT Integra Aneksa Kreasindo</span>
          </span>
          <button
            onClick={onClose}
            className="bg-slate-900 hover:bg-amber-600 text-white font-bold px-4 py-2 rounded-lg transition-colors"
          >
            Close Preview
          </button>
        </div>

      </div>
    </div>
  );
};
