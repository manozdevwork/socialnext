
export interface Bookmark {
  id: string;
  title: string;
  url: string;
  description?: string;
  tags: string[];
  category: string;
  createdAt: Date;
  isStarred: boolean;
}

export interface BookmarkCategory {
  id: string;
  name: string;
  bookmarks: Bookmark[];
}
