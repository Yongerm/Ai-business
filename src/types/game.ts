/**
 * Game Review Types
 */

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

export interface GameRecommendation {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

export interface Advertisement {
  title: string;
  subtitle: string;
  image: string;
  inquiryText: string;
}
