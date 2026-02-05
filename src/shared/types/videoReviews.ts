export interface VideoReviewItem {
  id: string;
  badgeText: string;
  title: string;
  hashtags: string;
  shortsUrl: string;
  previewImageUrl: string;
}

export type VideoReviewsResponse = VideoReviewItem[];
