import Image from 'next/image';
import Link from 'next/link';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import RefreshIcon from '@/components/shared/RefreshIcon';

interface GameCardProps {
  type: 'gamer' | 'maker' | 'goat';
  title: string;
  gameTitle: string;
  gameImage: string;
  likesCount: number;
  icon: LucideIcon;
  iconColor: string;
  showRefresh?: boolean;
  showWriteLink?: boolean;
  onRefresh?: () => void;
  onWriteClick?: () => void;
  className?: string;
}

export default function GameCard({
  type,
  title,
  gameTitle,
  gameImage,
  likesCount,
  icon: Icon,
  iconColor,
  showRefresh = true,
  showWriteLink = true,
  onRefresh,
  onWriteClick,
  className,
}: GameCardProps) {
  return (
    <div
      className={cn(
        'bg-wg-card p-5 rounded-lg wg-card-hover',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold flex items-center">
          <Icon className={cn('mr-2', iconColor)} />
          {title}
        </h3>
        <div className="flex items-center gap-3">
          {showWriteLink && (
            <Link
              href={`/write/${type}`}
              onClick={onWriteClick}
              className="text-xs text-wg-cyan hover:text-wg-cyan-hover hover:underline wg-transition-fast"
            >
              작성하러 가기
            </Link>
          )}
          {showRefresh && <RefreshIcon onClick={onRefresh} />}
        </div>
      </div>

      {/* Game Title Badge */}
      <div className="inline-flex items-center bg-wg-cyan/15 border border-wg-cyan rounded px-2 py-1 mb-3">
        <Icon className="w-4 h-4 mr-2 text-wg-cyan" />
        <span className="text-sm font-semibold text-wg-cyan">{gameTitle}</span>
      </div>

      {/* Game Image */}
      <div className="relative w-full h-40 bg-gray-700 rounded-md overflow-hidden mb-4">
        <Image
          src={gameImage}
          alt={`${gameTitle} 이미지`}
          fill
          className="object-cover"
        />
      </div>

      {/* Likes Counter */}
      <div className="flex items-center bg-white/10 rounded-lg px-2.5 py-1.5 mb-2.5 w-fit">
        <Image
          src="https://page.gensparksite.com/v1/base64_upload/b5efc86f844f77b4b1966b1cef3103a1"
          alt="좋아요"
          width={24}
          height={24}
          className="mr-2"
        />
        <span className="text-sm font-bold text-white">{likesCount}개</span>
      </div>

      {/* Review Area */}
      <div className="bg-white/5 border border-white/10 rounded-md p-3">
        <p className="text-sm text-gray-400 mb-2">
          {type === 'gamer' && '여기에 게임 리뷰를 작성하세요'}
          {type === 'maker' && '게임 개발자/제작자 리뷰'}
          {type === 'goat' && 'GOAT 게임 리뷰'}
        </p>
        <textarea
          className="w-full bg-transparent border border-gray-700 rounded-md p-2 text-sm text-wg-text focus:outline-none focus:border-wg-cyan wg-transition-normal resize-none"
          placeholder={
            type === 'gamer'
              ? '이 게임에 대한 리뷰와 점수를 남겨주세요...'
              : type === 'maker'
              ? '이 게임 제작자에 대한 평가를 남겨주세요...'
              : '지난달 최고의 게임에 대한 리뷰를 남겨주세요...'
          }
          rows={3}
        />
      </div>
    </div>
  );
}
