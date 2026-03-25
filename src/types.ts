export interface Player {
  id: string;
  name: string;
  avatar: string;
  score: number;
  location: string;
  matches: number;
  winRate: number;
  monthlyChange: number;
  consistency: number;
  opponentStrength: number;
}

export interface Match {
  id: string;
  team1: [string, string];
  team2: [string, string];
  score: string;
  venue: string;
  location: string;
  time: string;
  likes: number;
  comments: number;
  image: string;
  isConfirmed: boolean;
}

export interface Tournament {
  id: string;
  title: string;
  venue: string;
  location: string;
  date: string;
  capacity: [number, number];
  entryFee: number;
  minScore?: number;
  skillLevel?: string;
}

export interface League {
  id: string;
  title: string;
  activePlayers: number;
  rank: number;
  week: number;
  totalWeeks: number;
  progress: number;
}

export type PostType = 'match' | 'photo' | 'video';

export interface Post {
  id: string;
  type: PostType;
  author: {
    name: string;
    avatar: string;
  };
  time: string;
  likes: number;
  comments: number;
  content: string; // URL for image or video
  poster?: string; // Poster image for video
  caption?: string;
  matchData?: Match;
}
