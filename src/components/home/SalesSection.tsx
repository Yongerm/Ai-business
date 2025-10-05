import { Gamepad, Code, Trophy, Dice1 } from 'lucide-react';
import GameCard from './GameCard';
import AchievementCard from './AchievementCard';
import { cn } from '@/lib/utils';

interface SalesSectionProps {
  className?: string;
}

export default function SalesSection({ className }: SalesSectionProps) {
  return (
    <section className={cn('mb-12', className)}>
      <h2 className="text-2xl font-bold mb-6">
        게이머 & 제작자 & 지난달의 GOAT
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 게이머의 영업 */}
        <GameCard
          type="gamer"
          title="게이머의 영업"
          gameTitle="엘든 링"
          gameImage="https://www.genspark.ai/image_placeholder.png"
          likesCount={20}
          icon={Gamepad}
          iconColor="text-purple-500"
          showRefresh
          showWriteLink
        />

        {/* 제작자의 영업 */}
        <GameCard
          type="maker"
          title="제작자의 영업"
          gameTitle="스타듀 밸리"
          gameImage="https://www.genspark.ai/image_placeholder.png"
          likesCount={5}
          icon={Code}
          iconColor="text-blue-500"
          showRefresh
          showWriteLink
        />

        {/* 지난달의 GOAT 리뷰 */}
        <GameCard
          type="goat"
          title="지난달의 GOAT 리뷰"
          gameTitle="발더스 게이트 3"
          gameImage="https://www.genspark.ai/image_placeholder.png"
          likesCount={95}
          icon={Trophy}
          iconColor="text-yellow-500"
          showRefresh={false}
          showWriteLink={false}
        />

        {/* 히든 업적 */}
        <AchievementCard
          username="#2123"
          achievementName="777의 사나이"
          achievementDescription="777자로 리뷰를 작성하셨군요!"
          achievementIcon={Dice1}
          isFirstAchievement
        />
      </div>
    </section>
  );
}
