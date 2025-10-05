import { cn } from '@/lib/utils';

interface LiveActivityBannerProps {
  activeUsers: number;
  className?: string;
}

export default function LiveActivityBanner({
  activeUsers,
  className,
}: LiveActivityBannerProps) {
  return (
    <div
      className={cn(
        'flex items-center bg-white text-black rounded-full px-3 py-1.5 shadow-md',
        className
      )}
    >
      <div className="relative mr-2">
        {/* Pulse dot */}
        <div className="w-2.5 h-2.5 bg-wg-status-red rounded-full animate-pulse" />
        {/* Pulse ring */}
        <div className="absolute top-0 left-0 w-2.5 h-2.5 bg-wg-status-red rounded-full animate-pulse-ring" />
      </div>
      <span className="text-sm font-semibold whitespace-nowrap">
        지금 {activeUsers}명의 게이머가 활동 중
      </span>
    </div>
  );
}
