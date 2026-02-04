export interface ReviewItem {
  id: number;
  sourceIcon: string; // base64
  text: string;
  authorName: string;
  date: string;
  rating: number; // 1-5
  avatarUrl: string;
}

export type ReviewsResponse = ReviewItem[];
