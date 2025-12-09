interface ImageSkeletonProps {
  className?: string;
}

export default function ImageSkeleton({ className = '' }: ImageSkeletonProps) {
  return (
    <div 
      className={`animate-pulse bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-700 bg-[length:200%_100%] ${className}`}
      style={{ animation: 'shimmer 1.5s infinite' }}
    />
  );
}
