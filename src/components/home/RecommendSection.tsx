import Image from 'next/image';
import { ThumbsUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import RefreshIcon from '@/components/shared/RefreshIcon';

interface RecommendSectionProps {
  className?: string;
}

export default function RecommendSection({ className }: RecommendSectionProps) {
  return (
    <section className={cn('mb-12 p-6 bg-wg-card rounded-lg', className)}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold flex items-center">
          <ThumbsUp className="mr-3 text-yellow-500" />
          선호하실 만한 게임을 추천드릴게요!
        </h2>
        <RefreshIcon className="text-lg" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Game Recommendation 1 */}
        <div className="p-3 bg-gray-800 rounded-md">
          <div className="relative h-32 bg-gray-700 rounded-md overflow-hidden mb-2">
            <Image
              src="https://www.genspark.ai/image_placeholder.png"
              alt="추천 게임"
              fill
              className="object-cover"
            />
          </div>
          <h4 className="font-medium text-white">준비중입니다</h4>
          <p className="text-xs text-gray-400">준비중입니다</p>
        </div>

        {/* Game Recommendation 2 */}
        <div className="p-3 bg-gray-800 rounded-md">
          <div className="relative h-32 bg-gray-700 rounded-md overflow-hidden mb-2">
            <Image
              src="https://www.genspark.ai/image_placeholder.png"
              alt="추천 게임"
              fill
              className="object-cover"
            />
          </div>
          <h4 className="font-medium text-white">준비중입니다</h4>
          <p className="text-xs text-gray-400">준비중입니다</p>
        </div>

        {/* Advertisement Section */}
        <div className="col-span-1 md:col-span-2 p-3 bg-[#262626] rounded-md border-l-4 border-wg-ad-border">
          <div className="relative h-32 bg-gray-700 rounded-md overflow-hidden mb-2">
            <Image
              src="https://www.genspark.ai/image_placeholder.png"
              alt="광고"
              fill
              className="object-cover"
            />
          </div>
          <h4 className="font-medium text-white">광고주(신) 제목</h4>
          <p className="text-xs text-gray-400 mb-3">광고주(신) 부제목</p>
          <p className="text-xs text-wg-ad-border font-medium">광고 문의</p>
        </div>
      </div>
    </section>
  );
}
