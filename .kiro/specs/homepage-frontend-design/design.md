# Design Document

## Overview

WhichGame (땃쥐) 홈페이지는 Next.js 15, React 19, TypeScript를 기반으로 구축되는 게임 커뮤니티 플랫폼입니다. 다크 테마의 현대적인 UI/UX를 제공하며, 게이머와 게임 제작자가 리뷰를 공유하고 소통할 수 있는 인터랙티브한 경험을 제공합니다.

### Design Principles

1. **Component-First Architecture**: 재사용 가능한 컴포넌트 중심 설계
2. **Type Safety**: TypeScript를 활용한 타입 안정성 확보
3. **Performance**: Next.js의 서버 컴포넌트와 클라이언트 컴포넌트 최적 활용
4. **Accessibility**: 키보드 네비게이션 및 스크린 리더 지원
5. **Responsive Design**: 모바일부터 데스크톱까지 일관된 경험

## Architecture

### Technology Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **Component Library**: Radix UI (headless components)
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **State Management**: Zustand (필요시)
- **Form Handling**: React Hook Form + Zod

### Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with providers
│   ├── page.tsx                # Homepage (client component)
│   └── globals.css             # Global styles with custom theme
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navigation header
│   │   └── Footer.tsx          # Footer (future)
│   ├── home/
│   │   ├── SalesSection.tsx    # 게이머 & 제작자 영업 섹션
│   │   ├── GameCard.tsx        # 게임 리뷰 카드
│   │   ├── AchievementCard.tsx # 히든 업적 카드
│   │   ├── RecommendSection.tsx # 게임 추천 섹션
│   │   └── PartnerSection.tsx  # 파트너스 & 디스코드
│   ├── ui/
│   │   ├── button.tsx          # Shadcn button
│   │   ├── card.tsx            # Shadcn card
│   │   └── ...                 # Other Shadcn components
│   └── shared/
│       ├── LiveActivityBanner.tsx # 실시간 활동 배너
│       ├── NotificationIcon.tsx   # 알림 아이콘
│       └── RefreshIcon.tsx        # 새로고침 아이콘
├── lib/
│   ├── utils.ts                # cn() utility
│   └── constants.ts            # Theme colors, etc.
├── types/
│   ├── game.ts                 # Game related types
│   ├── user.ts                 # User related types
│   └── achievement.ts          # Achievement types
└── hooks/
    ├── use-toast.ts            # Toast notifications
    └── use-live-activity.ts    # Live activity data
```

## Components and Interfaces

### 1. Header Component

**Purpose**: 상단 네비게이션 및 사용자 인터페이스 제공

**Component Structure**:
```typescript
// components/layout/Header.tsx
interface HeaderProps {
  className?: string;
}

interface NavItem {
  label: string;
  href: string;
}

interface LiveActivity {
  activeUsers: number;
}
```

**Key Features**:
- 로고 이미지 표시
- 로그인 버튼 (cyan accent color)
- 알림 아이콘 with badge
- 실시간 활동 배너 (펄스 애니메이션)
- 네비게이션 메뉴 (5개 항목)

**Styling**:
- Fixed height header with border-bottom
- Flex layout for alignment
- Hover effects on nav items (color: #00CEFF)

### 2. LiveActivityBanner Component

**Purpose**: 실시간 활동 중인 사용자 수 표시

**Component Structure**:
```typescript
// components/shared/LiveActivityBanner.tsx
interface LiveActivityBannerProps {
  activeUsers: number;
  className?: string;
}
```

**Key Features**:
- 빨간색 펄스 애니메이션 점
- 활동 중인 사용자 수 표시
- 흰색 배경의 pill 형태

**Animation**:
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.6; }
  80%, 100% { transform: scale(1.5); opacity: 0; }
}
```

### 3. SalesSection Component

**Purpose**: 게이머, 제작자, GOAT, 히든 업적 카드 그리드 표시

**Component Structure**:
```typescript
// components/home/SalesSection.tsx
interface SalesSectionProps {
  gamerReview?: GameReview;
  makerReview?: MakerReview;
  goatReview?: GoatReview;
  achievement?: Achievement;
}
```

**Layout**:
- 4-column grid (grid-cols-4)
- Gap between cards (gap-6)
- Responsive breakpoints

### 4. GameCard Component

**Purpose**: 게임 리뷰 카드 (게이머/제작자/GOAT)

**Component Structure**:
```typescript
// components/home/GameCard.tsx
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
}
```

**Key Features**:
- 헤더 (아이콘 + 제목 + 액션 버튼)
- 게임명 배지 (cyan border)
- 게임 이미지 (aspect ratio 16:9)
- 좋아요 카운터 (아이콘 + 숫자)
- 리뷰 작성 영역 (textarea)
- 호버 효과 (translateY -5px)

**Styling**:
- Background: #1E1E1E
- Border radius: 8px
- Padding: 20px
- Transition: 0.2s

### 5. AchievementCard Component

**Purpose**: 히든 업적 달성 표시

**Component Structure**:
```typescript
// components/home/AchievementCard.tsx
interface AchievementCardProps {
  username: string;
  achievementName: string;
  achievementDescription: string;
  achievementIcon: LucideIcon;
  isFirstAchievement: boolean;
  viewAllLink: string;
}
```

**Key Features**:
- 골드 테두리 (2px solid #FFD700)
- 우측 상단 골드 장식 (::after pseudo-element)
- 사용자명 강조 (cyan color)
- 업적 아이콘 (2.5rem, gold color)
- 최초 달성 배지
- 호버 효과

**Styling**:
```css
.achievement-card {
  background-color: #1E1E1E;
  border: 2px solid #FFD700;
  position: relative;
  overflow: hidden;
}

.achievement-card::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 80px;
  height: 80px;
  background-color: #FFD700;
  transform: rotate(45deg) translate(20px, -40px);
}
```

### 6. RecommendSection Component

**Purpose**: 게임 추천 및 광고주 섹션

**Component Structure**:
```typescript
// components/home/RecommendSection.tsx
interface RecommendSectionProps {
  recommendations: GameRecommendation[];
  advertisement?: Advertisement;
  onRefresh?: () => void;
}

interface GameRecommendation {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

interface Advertisement {
  title: string;
  subtitle: string;
  image: string;
  inquiryText: string;
}
```

**Layout**:
- 4-column grid
- 2 game cards + 1 ad section (col-span-2)
- Card background: #1E1E1E
- Ad section: left border 4px solid #FF3B30

### 7. PartnerSection Component

**Purpose**: 파트너스 모집 및 디스코드 서버 홍보

**Component Structure**:
```typescript
// components/home/PartnerSection.tsx
interface PartnerSectionProps {
  partnerInfo: {
    title: string;
    description: string[];
    applyLink: string;
  };
  discordInfo: {
    serverName: string;
    description: string;
    inviteLink: string;
  };
}
```

**Layout**:
- 2-column flex layout
- Left: Partner recruitment (icon + text + button)
- Right: Discord button (centered)

**Styling**:
- Background: #1E1E1E
- Discord button: #5865F2 (hover: #4752C4)
- Partner button: #3B82F6

## Data Models

### Game Review

```typescript
// types/game.ts
export interface GameReview {
  id: string;
  gameTitle: string;
  gameImage: string;
  reviewText: string;
  rating?: number;
  likesCount: number;
  author: {
    id: string;
    username: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface MakerReview extends GameReview {
  makerName: string;
  makerRole: string;
}

export interface GoatReview extends GameReview {
  month: string;
  year: number;
  isGoat: true;
}
```

### Achievement

```typescript
// types/achievement.ts
export interface Achievement {
  id: string;
  name: string;
  description: string;
  iconName: string;
  isHidden: boolean;
  isFirstAchievement: boolean;
  achievedBy: {
    userId: string;
    username: string;
    achievedAt: Date;
  };
  criteria: {
    type: string;
    value: number | string;
  };
}
```

### Live Activity

```typescript
// types/user.ts
export interface LiveActivity {
  activeUsers: number;
  timestamp: Date;
}

export interface NotificationBadge {
  count: number;
  hasUnread: boolean;
}
```

## Error Handling

### Client-Side Errors

1. **Image Loading Failures**
   - Fallback to placeholder image
   - Display error message in card

2. **API Request Failures**
   - Show toast notification
   - Retry mechanism for critical data
   - Graceful degradation

3. **Form Validation Errors**
   - Inline error messages
   - Zod schema validation
   - Clear error states

### Error Boundary

```typescript
// components/ErrorBoundary.tsx
interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

// Catches React rendering errors
// Logs to error tracking service
// Shows user-friendly error message
```

## Testing Strategy

### Unit Testing

1. **Component Tests**
   - Test component rendering
   - Test prop variations
   - Test user interactions
   - Test accessibility

2. **Utility Function Tests**
   - Test cn() utility
   - Test data transformation functions
   - Test validation schemas

### Integration Testing

1. **Page Tests**
   - Test full page rendering
   - Test navigation flows
   - Test data fetching
   - Test error states

2. **User Flow Tests**
   - Test login flow
   - Test review submission
   - Test refresh actions
   - Test navigation

### Visual Regression Testing

- Snapshot tests for components
- Visual diff testing for design changes
- Cross-browser compatibility

## Performance Optimization

### Code Splitting

- Dynamic imports for heavy components
- Route-based code splitting (Next.js default)
- Lazy loading for below-fold content

### Image Optimization

- Next.js Image component
- WebP format with fallbacks
- Responsive images
- Lazy loading

### CSS Optimization

- Tailwind CSS purging
- Critical CSS inlining
- CSS modules for component styles

### Caching Strategy

- Static page generation where possible
- ISR (Incremental Static Regeneration) for dynamic content
- Client-side caching with React Query

## Accessibility

### Keyboard Navigation

- Tab order for all interactive elements
- Focus indicators (ring utility)
- Skip to content link

### Screen Reader Support

- Semantic HTML elements
- ARIA labels where needed
- Alt text for images
- Live regions for dynamic content

### Color Contrast

- WCAG AA compliance
- Sufficient contrast ratios
- Color-blind friendly palette

## Theme System

### Color Palette

```typescript
// lib/constants.ts
export const THEME_COLORS = {
  // Background
  background: '#0a0a0a',
  cardBackground: '#1E1E1E',
  
  // Text
  text: '#e0e0e0',
  textMuted: '#9ca3af',
  
  // Accent
  primary: '#00CEFF',      // Cyan
  primaryHover: '#0099cc',
  
  // Status
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  
  // Special
  gold: '#FFD700',
  discord: '#5865F2',
  discordHover: '#4752C4',
  adBorder: '#FF3B30',
} as const;
```

### Typography

```typescript
export const TYPOGRAPHY = {
  fontFamily: "'Noto Sans KR', sans-serif",
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    bold: 700,
    black: 900,
  },
} as const;
```

### Spacing

```typescript
export const SPACING = {
  cardPadding: '1.25rem',  // 20px
  sectionGap: '1.5rem',    // 24px
  gridGap: '1.5rem',       // 24px
} as const;
```

### Animation Timings

```typescript
export const ANIMATIONS = {
  fast: '0.2s',
  normal: '0.3s',
  slow: '0.5s',
  pulse: '1.5s',
} as const;
```

## Design Decisions and Rationales

### 1. Client vs Server Components

**Decision**: Homepage는 client component로 구현
**Rationale**: 
- 많은 인터랙티브 요소 (hover, click, refresh)
- 실시간 데이터 업데이트 필요
- 애니메이션 및 상태 관리 필요

### 2. Tailwind CSS over CSS-in-JS

**Decision**: Tailwind CSS 사용
**Rationale**:
- 빠른 개발 속도
- 일관된 디자인 시스템
- 작은 번들 크기
- 프로젝트에 이미 설정됨

### 3. Radix UI for Complex Components

**Decision**: Radix UI 사용 (필요시)
**Rationale**:
- Headless components로 커스터마이징 용이
- 접근성 기본 제공
- 프로젝트에 이미 설치됨

### 4. Lucide React for Icons

**Decision**: Lucide React 사용
**Rationale**:
- Font Awesome 대신 React 컴포넌트
- Tree-shaking 지원
- TypeScript 지원
- 프로젝트에 이미 설치됨

### 5. Framer Motion for Animations

**Decision**: Framer Motion 사용
**Rationale**:
- 선언적 애니메이션 API
- 복잡한 애니메이션 쉽게 구현
- 성능 최적화
- 프로젝트에 이미 설치됨

## Migration from HTML to React

### Key Changes

1. **Inline Styles → Tailwind Classes**
   - CSS-in-JS 스타일을 Tailwind utility classes로 변환
   - Custom animations는 Tailwind config에 추가

2. **Font Awesome → Lucide React**
   - `<i class="fas fa-gamepad">` → `<Gamepad className="..." />`
   - 아이콘 매핑 테이블 작성

3. **Static HTML → Dynamic Components**
   - 반복되는 카드를 컴포넌트로 추상화
   - Props를 통한 데이터 주입

4. **Inline Event Handlers → React Event Handlers**
   - `onclick` → `onClick`
   - 이벤트 핸들러 함수 작성

5. **CSS Animations → Framer Motion**
   - Keyframe animations를 Framer Motion으로 변환
   - 더 나은 제어와 성능

## Next Steps

1. **Phase 1**: 기본 컴포넌트 구조 및 레이아웃 구현
2. **Phase 2**: 스타일링 및 테마 적용
3. **Phase 3**: 인터랙션 및 애니메이션 구현
4. **Phase 4**: 데이터 연동 및 상태 관리
5. **Phase 5**: 반응형 디자인 및 최적화
6. **Phase 6**: 접근성 및 테스트
