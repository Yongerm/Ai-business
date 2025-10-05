import Link from 'next/link';
import { Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PartnerSectionProps {
  className?: string;
}

export default function PartnerSection({ className }: PartnerSectionProps) {
  return (
    <section className={cn('bg-wg-card p-6 rounded-lg', className)}>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left - Partner Recruitment */}
        <div className="flex-1 flex items-center gap-6">
          <div className="flex-shrink-0">
            <Users className="text-blue-400 w-24 h-24" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2 text-wg-cyan">
              땃쥐 파트너스를 모집합니다!
            </h2>
            <p className="mb-2 text-wg-text">
              7인 이상의 디코방을 운영하고 있는 당신!
            </p>
            <p className="mb-4 text-wg-text">우리가 찾고 있는 인재입니다!</p>
            <Link href="/partners/apply">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full font-medium wg-transition-normal">
                지금 신청하기
              </button>
            </Link>
          </div>
        </div>

        {/* Right - Discord Server Button */}
        <div className="flex-1 flex justify-center items-center">
          <Link
            href="https://discord.gg/whichgame"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-wg-discord hover:bg-wg-discord-hover hover:shadow-lg transform hover:-translate-y-1 wg-transition-normal py-4 px-8 rounded-lg flex items-center justify-center text-white font-bold text-xl"
          >
            <svg
              className="w-8 h-8 mr-3"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
            <div className="text-left">
              <div>땃쥐 디스코드 서버</div>
              <div className="text-sm font-normal">함께 게임을 즐겨보세요!</div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
