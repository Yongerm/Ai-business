import { RefreshCw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RefreshIconProps {
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
}

export default function RefreshIcon({
  onClick,
  className,
  isLoading = false,
}: RefreshIconProps) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className={cn(
        'cursor-pointer wg-transition-normal text-gray-400 hover:text-white',
        'hover:rotate-180',
        isLoading && 'animate-spin',
        className
      )}
      aria-label="새로고침"
    >
      <RefreshCw className="w-4 h-4" />
    </button>
  );
}
