import { useState, useEffect, useRef } from 'react';
import ImageSkeleton from './ImageSkeleton';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  skeletonClassName?: string;
  priority?: boolean;
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  skeletonClassName = '',
  priority = false 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} className="relative w-full h-full">
      {!isLoaded && (
        <ImageSkeleton className={`absolute inset-0 ${skeletonClassName}`} />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          onLoad={() => setIsLoaded(true)}
          loading={priority ? undefined : 'lazy'}
        />
      )}
    </div>
  );
}
