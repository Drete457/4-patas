import { useEffect } from 'react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface LightboxProps {
  images: { id: number; src: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const currentImage = images[currentIndex];

  return (
    <div 
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition z-10"
        aria-label="Fechar"
      >
        <XMarkIcon className="w-8 h-8" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 text-white/80 text-sm">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous button */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 p-2 text-white/80 hover:text-white transition"
        aria-label="Anterior"
      >
        <ChevronLeftIcon className="w-10 h-10" />
      </button>

      {/* Image */}
      <div 
        className="max-w-[90vw] max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={`Testemunho ${currentImage.id}`}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </div>

      {/* Next button */}
      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 p-2 text-white/80 hover:text-white transition"
        aria-label="Próximo"
      >
        <ChevronRightIcon className="w-10 h-10" />
      </button>
    </div>
  );
}
