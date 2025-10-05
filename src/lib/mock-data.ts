/**
 * Mock Data for WhichGame Homepage
 */

import type { GameReview, MakerReview, GoatReview } from '@/types/game';
import type { Achievement } from '@/types/achievement';

export const mockGamerReview: GameReview = {
  id: '1',
  gameTitle: '엘든 링',
  gameImage: 'https://www.genspark.ai/image_placeholder.png',
  reviewText: '',
  likesCount: 20,
  author: {
    id: 'user1',
    username: '게이머123',
  },
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date('2024-01-15'),
};

export const mockMakerReview: MakerReview = {
  id: '2',
  gameTitle: '스타듀 밸리',
  gameImage: 'https://www.genspark.ai/image_placeholder.png',
  reviewText: '',
  likesCount: 5,
  author: {
    id: 'user2',
    username: '개발자456',
  },
  makerName: 'ConcernedApe',
  makerRole: 'Solo Developer',
  createdAt: new Date('2024-01-10'),
  updatedAt: new Date('2024-01-10'),
};

export const mockGoatReview: GoatReview = {
  id: '3',
  gameTitle: '발더스 게이트 3',
  gameImage: 'https://www.genspark.ai/image_placeholder.png',
  reviewText: '',
  rating: 10,
  likesCount: 95,
  author: {
    id: 'admin',
    username: 'WhichGame',
  },
  month: '12월',
  year: 2024,
  isGoat: true,
  createdAt: new Date('2024-12-01'),
  updatedAt: new Date('2024-12-01'),
};

export const mockAchievement: Achievement = {
  id: 'ach1',
  name: '777의 사나이',
  description: '777자로 리뷰를 작성하셨군요!',
  iconName: 'dice',
  isHidden: true,
  isFirstAchievement: true,
  achievedBy: {
    userId: 'user2123',
    username: '#2123',
    achievedAt: new Date('2024-01-20'),
  },
  criteria: {
    type: 'review_length',
    value: 777,
  },
};

export const mockLiveActivity = {
  activeUsers: 247,
  timestamp: new Date(),
};

export const mockNotifications = {
  count: 2,
  hasUnread: true,
};
