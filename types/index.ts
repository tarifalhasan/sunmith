export interface IBlogCardType {
  mainImage: any;
  title: string;
  category: any;
  publishedAt: string;
  currentSlug: string;
  categorie?: string;
}

export interface PostType {
  _id: string;
  _type: string;
  title: string;
  slug: string;
  author: any;
  mainImage: any;
  body: any;
  category: any;
  publishedAt: string;
}
