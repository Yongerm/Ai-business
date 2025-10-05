# Implementation Plan

- [x] 1. 프로젝트 설정 및 테마 시스템 구축



  - Tailwind config에 커스텀 색상 및 애니메이션 추가
  - globals.css에 다크 테마 CSS 변수 설정
  - lib/constants.ts에 테마 상수 정의 (색상, 타이포그래피, 스페이싱)
  - Noto Sans KR 폰트 추가 (next/font/google)
  - _Requirements: 6.1, 6.2, 6.3, 6.5_

- [x] 2. 타입 정의 및 유틸리티 작성


  - types/game.ts 생성 (GameReview, MakerReview, GoatReview 인터페이스)
  - types/achievement.ts 생성 (Achievement 인터페이스)
  - types/user.ts 생성 (LiveActivity, NotificationBadge 인터페이스)
  - lib/icon-mapping.ts 생성 (Font Awesome → Lucide 아이콘 매핑)
  - _Requirements: 8.1, 8.2_

- [x] 3. 공유 컴포넌트 구현

- [x] 3.1 LiveActivityBanner 컴포넌트 생성


  - components/shared/LiveActivityBanner.tsx 생성
  - 펄스 애니메이션 구현 (Framer Motion 또는 Tailwind animate)
  - 실시간 사용자 수 표시
  - _Requirements: 1.4, 7.1_

- [x] 3.2 NotificationIcon 컴포넌트 생성


  - components/shared/NotificationIcon.tsx 생성
  - 알림 배지 표시 (읽지 않은 알림 개수)
  - 호버 효과 (scale 1.1)
  - _Requirements: 1.3, 7.3_

- [x] 3.3 RefreshIcon 컴포넌트 생성


  - components/shared/RefreshIcon.tsx 생성
  - 회전 애니메이션 (180도)
  - onClick 핸들러 prop
  - _Requirements: 2.3, 7.2_

- [x] 4. Header 컴포넌트 구현


  - components/layout/Header.tsx 생성
  - 로고 이미지 표시 (Next.js Image 컴포넌트)
  - 로그인 버튼 구현 (cyan 배경, 호버 효과)
  - NotificationIcon 통합
  - LiveActivityBanner 통합
  - 네비게이션 메뉴 구현 (5개 항목, 호버 효과)
  - _Requirements: 1.1, 1.2, 1.5_

- [x] 5. GameCard 컴포넌트 구현

- [x] 5.1 GameCard 기본 구조 생성


  - components/home/GameCard.tsx 생성
  - Props 인터페이스 정의 (type, title, gameTitle, gameImage, likesCount 등)
  - 카드 레이아웃 구현 (배경, 패딩, 둥근 모서리)
  - _Requirements: 2.4, 8.2_

- [x] 5.2 GameCard 헤더 영역 구현

  - 아이콘 + 제목 표시
  - RefreshIcon 통합 (조건부 렌더링)
  - "작성하러 가기" 링크 (조건부 렌더링)
  - _Requirements: 2.5_

- [x] 5.3 GameCard 콘텐츠 영역 구현

  - 게임명 배지 (cyan border, 아이콘 포함)
  - 게임 이미지 (Next.js Image, aspect ratio 16:9)
  - 좋아요 카운터 (아이콘 + 숫자)
  - 리뷰 작성 영역 (textarea)
  - _Requirements: 2.4_

- [x] 5.4 GameCard 호버 효과 구현

  - translateY -5px 애니메이션
  - 0.2초 트랜지션
  - _Requirements: 2.2, 7.4_

- [x] 6. AchievementCard 컴포넌트 구현

- [x] 6.1 AchievementCard 기본 구조 생성


  - components/home/AchievementCard.tsx 생성
  - Props 인터페이스 정의
  - 골드 테두리 (2px solid #FFD700)
  - 우측 상단 골드 장식 (::after pseudo-element, Tailwind arbitrary values)
  - _Requirements: 3.1_

- [x] 6.2 AchievementCard 콘텐츠 구현

  - 헤더 (달성자 닉네임 강조 - cyan)
  - 업적 아이콘 (2.5rem, gold)
  - 업적 이름 및 설명
  - 최초 달성 배지 (조건부 렌더링)
  - "현재까지 달성된 히든 업적 보기" 링크
  - _Requirements: 3.2, 3.3, 3.5_

- [x] 6.3 AchievementCard 호버 효과 구현

  - translateY -5px 애니메이션
  - _Requirements: 3.4_

- [x] 7. SalesSection 컴포넌트 구현


  - components/home/SalesSection.tsx 생성
  - 4-column 그리드 레이아웃 (grid-cols-4, gap-6)
  - GameCard 3개 통합 (게이머, 제작자, GOAT)
  - AchievementCard 1개 통합
  - Props로 데이터 전달
  - _Requirements: 2.1_

- [x] 8. RecommendSection 컴포넌트 구현

- [x] 8.1 RecommendSection 기본 구조 생성


  - components/home/RecommendSection.tsx 생성
  - 섹션 헤더 (제목 + RefreshIcon)
  - 4-column 그리드 레이아웃
  - _Requirements: 4.1, 4.2_

- [x] 8.2 게임 추천 카드 구현

  - 게임 이미지 (placeholder)
  - 게임 제목 및 부제목
  - 2개 카드 렌더링
  - _Requirements: 4.4_

- [x] 8.3 광고주 섹션 구현

  - col-span-2로 2칸 차지
  - 좌측 빨간색 테두리 (4px solid #FF3B30)
  - 광고 이미지, 제목, 부제목
  - "광고 문의" 텍스트 (빨간색 강조)
  - _Requirements: 4.3, 4.5_

- [x] 9. PartnerSection 컴포넌트 구현

- [x] 9.1 PartnerSection 기본 구조 생성


  - components/home/PartnerSection.tsx 생성
  - 2-column flex 레이아웃
  - 배경색 #1E1E1E
  - _Requirements: 5.1_

- [x] 9.2 파트너스 모집 영역 구현

  - 좌측 아이콘 (Users, 큰 사이즈)
  - 제목 (cyan 강조)
  - 설명 텍스트 (2줄)
  - "지금 신청하기" 버튼
  - _Requirements: 5.2, 5.4_

- [x] 9.3 디스코드 서버 버튼 구현

  - 중앙 정렬
  - Discord 아이콘 + 텍스트
  - 배경색 #5865F2 (호버: #4752C4)
  - 호버 효과 (shadow, translateY)
  - _Requirements: 5.3, 5.5_

- [x] 10. 홈페이지 통합 및 레이아웃 구성


  - src/app/page.tsx 수정
  - Header 컴포넌트 통합
  - SalesSection 통합
  - RecommendSection 통합
  - PartnerSection 통합
  - 섹션 간 간격 조정 (mb-12)
  - _Requirements: 6.4_

- [x] 11. 반응형 디자인 구현

  - 브레이크포인트 정의 (mobile, tablet, desktop)
  - 그리드 레이아웃 반응형 조정 (grid-cols-1, md:grid-cols-2, lg:grid-cols-4)
  - 헤더 반응형 조정 (모바일 메뉴)
  - 텍스트 크기 반응형 조정
  - _Requirements: 6.4_

- [x] 12. 애니메이션 및 인터랙션 최적화

  - Framer Motion variants 정의
  - 페이지 로드 애니메이션 (stagger children)
  - 스크롤 애니메이션 (선택사항)
  - 트랜지션 타이밍 최적화
  - _Requirements: 7.5_

- [x] 13. 접근성 개선

  - 키보드 네비게이션 테스트
  - ARIA 레이블 추가
  - 포커스 인디케이터 스타일링
  - 이미지 alt 텍스트 추가
  - 색상 대비 검증
  - _Requirements: 8.1_

- [x] 14. 더미 데이터 및 상태 관리


  - lib/mock-data.ts 생성 (더미 데이터)
  - useState로 로컬 상태 관리
  - 새로고침 핸들러 구현
  - 좋아요 카운터 증가 로직 (선택사항)
  - _Requirements: 8.5_

- [x] 15. 최종 스타일링 및 폴리싱



  - 모든 컴포넌트 스타일 검증
  - 호버 효과 일관성 확인
  - 간격 및 정렬 미세 조정
  - 로딩 상태 UI (선택사항)
  - 에러 상태 UI (선택사항)
  - _Requirements: 6.5_
