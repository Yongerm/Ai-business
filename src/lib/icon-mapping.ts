/**
 * Font Awesome to Lucide Icon Mapping
 * HTML에서 사용된 Font Awesome 아이콘을 Lucide React 아이콘으로 매핑
 */

import {
  Gamepad,
  Code,
  Trophy,
  Award,
  ThumbsUp,
  Users,
  Bell,
  RefreshCw,
  Heart,
  Dice1,
  Crown,
  type LucideIcon,
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  // Game related
  'fa-gamepad': Gamepad,
  gamepad: Gamepad,
  
  // Development
  'fa-code': Code,
  code: Code,
  
  // Achievement
  'fa-trophy': Trophy,
  trophy: Trophy,
  'fa-award': Award,
  award: Award,
  'fa-crown': Crown,
  crown: Crown,
  
  // Social
  'fa-thumbs-up': ThumbsUp,
  thumbsUp: ThumbsUp,
  'fa-users': Users,
  users: Users,
  
  // UI
  'fa-bell': Bell,
  bell: Bell,
  'fa-sync-alt': RefreshCw,
  refresh: RefreshCw,
  'fa-heart': Heart,
  heart: Heart,
  
  // Special
  'fa-dice': Dice1,
  dice: Dice1,
};

export const getIcon = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Gamepad;
};
