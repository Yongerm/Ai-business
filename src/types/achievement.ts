/**
 * Achievement Types
 */

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
