import Link from 'next/link';
import { Award, Crown, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AchievementCardProps {
  username: string;
  achievementName: string;
  achievementDescription: string;
  achievementIcon: LucideIcon;
  isFirstAchievement: boolean;
  viewAllLink?: string;
  className?: string;
}

export default function AchievementCard({
  username,
  achievementName,
  achievementDescription,
  achievementIcon: Icon,
  isFirstAchievement,
  viewAllLink = '/achievements',
  className,
}: AchievementCardProps) {
  return (
    <div
      className={cn(
        'relative bg-wg-card p-5 rounded-lg border-2 border-wg-gold overflow-hidden wg-card-hover',
        className
      )}
    >
      {/* Gold decoration in top-right corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-wg-gold transform rotate-45 translate-x-10 -translate-y-10 z-0" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold flex items-center">
          <Award className="mr-2 text-yellow-400" />
          <span className="text-wg-cyan font-bold">{username}</span>
          <span className="ml-1">님이 업적을 달성하셨습니다!</span>
        </h3>
      </div>

      {/* Achievement Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-40 text-center">
        <Icon className="text-wg-gold text-[2.5rem] mb-4" />
        <h4 className="font-bold text-xl text-white">{achievementName}</h4>
        <p className="text-sm text-gray-300 mt-2">{achievementDescription}</p>
        
        {isFirstAchievement && (
          <div className="mt-2 inline-flex items-center bg-wg-gold/20 border border-wg-gold text-wg-gold rounded-full px-3 py-1 font-bold text-sm">
            <Crown className="w-4 h-4 mr-1" />
            최초 달성
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-5 text-center">
        <p className="text-sm text-gray-400">
          최초 달성자 단 한 명만이 얻을 수 있는 업적입니다
        </p>
        <Link
          href={viewAllLink}
          className="block mt-2 text-blue-400 hover:underline text-sm wg-transition-fast"
        >
          현재까지 달성된 히든 업적 보기
        </Link>
      </div>
    </div>
  );
}
