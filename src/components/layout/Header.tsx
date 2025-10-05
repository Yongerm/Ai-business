import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import LiveActivityBanner from '@/components/shared/LiveActivityBanner';
import NotificationIcon from '@/components/shared/NotificationIcon';
import type { NavItem } from '@/types/user';

interface HeaderProps {
  className?: string;
  activeUsers?: number;
  notificationCount?: number;
}

const navItems: NavItem[] = [
  { label: '내가 즐긴 게임', href: '/my-games' },
  { label: '우리 게임 펀딩해주세요', href: '/funding' },
  { label: '게임 메이트', href: '/mates' },
  { label: '게임 메이커', href: '/makers' },
  { label: 'About Us', href: '/about' },
];

export default function Header({
  className,
  activeUsers = 247,
  notificationCount = 2,
}: HeaderProps) {
  return (
    <header
      className={cn(
        'py-4 px-6 flex items-center justify-between border-b border-gray-800',
        className
      )}
    >
      {/* Left section */}
      <div className="flex items-center gap-4">
        <Link href="/" className="logo">
          <Image
            src="https://page.gensparksite.com/v1/base64_upload/5ea1ae9d265c7d632207adb00c9311c0"
            alt="WhichGame 로고"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        </Link>
        
        <Link href="/login">
          <button className="bg-wg-cyan hover:bg-wg-cyan-hover text-black py-1 px-4 rounded-full text-sm font-medium wg-transition-normal">
            로그인
          </button>
        </Link>
        
        <NotificationIcon count={notificationCount} />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-6">
        <LiveActivityBanner activeUsers={activeUsers} />
        
        <nav className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-wg-text hover:text-wg-cyan wg-transition-normal cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
