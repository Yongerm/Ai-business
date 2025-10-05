/**
 * User and Activity Types
 */

export interface LiveActivity {
  activeUsers: number;
  timestamp: Date;
}

export interface NotificationBadge {
  count: number;
  hasUnread: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PartnerInfo {
  title: string;
  description: string[];
  applyLink: string;
}

export interface DiscordInfo {
  serverName: string;
  description: string;
  inviteLink: string;
}
