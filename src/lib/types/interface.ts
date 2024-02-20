export interface AllResult {
  position: number;
  url: string;
  title: string;
  description: string;
  domain?: string
}

export interface ImageResult {
  title: string;
  image: string;
  thumbnail: string;
  url: string;
  domain?: string;
}

export interface NewsResult {}