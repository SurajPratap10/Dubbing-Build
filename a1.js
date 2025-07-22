import { X } from 'lucide-react';
import { FunctionalComponent } from 'preact';
import { useEffect, useState } from 'preact/hooks';

interface FileTooLargeModalProps {
  open: boolean;
  onClose: () => void;
}

const FileTooLargeModal: FunctionalComponent<FileTooLargeModalProps> = ({ open, onClose }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (open) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div
        style={{
          display: 'inline-flex',
          minWidth: isMobile ? 0 : 480,
          maxWidth: isMobile ? '95vw' : 540,
          width: isMobile ? '100%' : undefined,
          padding: isMobile ? '16px' : '32px 24px',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0,
          borderRadius: 24,
          border: '2px solid #483B5A',
          background: '#1D1136',
          position: 'relative',
          boxShadow: '0 8px 32px 0 rgba(0,0,0,0.25)',
          marginTop: 0,
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 16, right: 16, color: 'rgba(255,255,255,0.7)' }}
          className="hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-7 h-7" />
        </button>
        {/* Error Icon */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, borderRadius: '50%', background: '#2A183D', margin: '0 auto 16px auto' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="#FF5E3B" fillOpacity="0.15" />
            <path d="M20 12V22" stroke="#FF5E3B" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="20" cy="28" r="1.5" fill="#FF5E3B" />
          </svg>
        </div>
        {/* Title */}
        <h2 style={{ color: 'white', fontSize: isMobile ? 22 : 28, fontWeight: 700, margin: '0 0 8px 0', textAlign: 'center', lineHeight: 1.2 }}>⚠️ File Too Long!</h2>
        {/* Subtitle */}
        <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: isMobile ? 15 : 17, fontWeight: 400, margin: '0 0 24px 0', textAlign: 'center', lineHeight: 1.4 }}>Max limit: 2 minutes on this tool.</div>
        {/* Description Box */}
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(255,255,255,0.08)', borderRadius: 16, padding: isMobile ? '16px 8px' : '24px 24px', marginBottom: 0 }}>
          <div style={{ color: 'rgba(255,255,255,0.92)', fontSize: isMobile ? 15 : 17, textAlign: 'left', fontWeight: 400, lineHeight: 1.5, marginBottom: 12, width: '100%', maxWidth: 340, margin: '0 auto 12px auto' }}>
            Want to translate full audio/video file?
          </div>
          <div style={{ color: 'rgba(255,255,255,0.92)', fontSize: isMobile ? 15 : 17, textAlign: 'left', fontWeight: 400, lineHeight: 1.7, width: '100%', maxWidth: 340, margin: '0 auto 20px auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}><span style={{ fontSize: 22 }}>✅</span><span>Unlimited duration</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}><span style={{ fontSize: 22 }}>✅</span><span>100 free dub minutes</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><span style={{ fontSize: 22 }}>✅</span><span>200+ voices & languages</span></div>
          </div>
          <a
            href="https://murf.ai/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: isMobile ? '10px 20px' : '12px 32px', borderRadius: 12, fontWeight: 600, color: 'white', fontSize: isMobile ? 15 : 18, boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)', background: 'linear-gradient(90deg, #FF5E3B 0%, #C516E1 100%)', textAlign: 'center', lineHeight: 1.2 }}
          >
            Try Murf
          </a>
        </div>
      </div>
    </div>
  );
};
export default FileTooLargeModal; 
