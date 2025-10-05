import { Bell } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NotificationIconProps {
  count: number;
  className?: string;
  onClick?: () => void;
}

export default function NotificationIcon({
  count,
  className,
  onClick,
}: NotificationIconProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'relative wg-transition-normal hover:scale-110 cursor-pointer',
        className
      )}
      aria-label={`${count}개의 읽지 않은 알림`}
    >
      <Bell className="w-5 h-5 text-gray-300 hover:text-white" />
      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </button>
  );
}
