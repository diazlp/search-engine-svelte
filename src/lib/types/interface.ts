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

export interface NewsResult {
  date: string;
  title: string;
  body: string;
  url: string;
  image: string;
  source: string;
}

export interface NewsBookmark {
  title: string;
  url: string;
  source: string;
}