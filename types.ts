
export interface ICharacter {
  name: string;
  actor: string;
  imageUrl: string;
  description: string;
  quote: string;
  role?: string;
  affiliation?: 'hero' | 'adult' | 'villain';
}

export interface ISeason {
  title: string;
  year: number;
  imageUrl: string;
  summary: string;
  keyPoints: string[];
  episodes?: number;
  tagline?: string;
}

export interface IMonster {
  name: string;
  description: string;
  imageUrl: string;
  threatLevel?: number; // 1-5
}

export interface ITimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface IQuizQuestion {
  question: string;
  options: string[];
  answer: number; // index of correct option
  fact: string;
}
