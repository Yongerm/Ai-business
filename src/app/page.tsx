'use client';

import Header from '@/components/layout/Header';
import SalesSection from '@/components/home/SalesSection';
import RecommendSection from '@/components/home/RecommendSection';
import PartnerSection from '@/components/home/PartnerSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-wg-bg text-wg-text">
      <Header />
      
      <main className="py-8 px-6 max-w-[1280px] mx-auto">
        <SalesSection />
        <RecommendSection />
        <PartnerSection />
      </main>
    </div>
  );
}
