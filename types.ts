
export interface ICharacter {
  name: string;
  actor: string;
  imageUrl: string;
  description: string;
  quote: string;
}

export interface ISeason {
  title: string;
  year: number;
  imageUrl: string;
  summary: string;
  keyPoints: string[];
}

export interface IMonster {
    name: string;
    description: string;
    imageUrl: string;
}
