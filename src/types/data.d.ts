type ProgramCardType = {
  id: number;
  title: string;
  image: string;
  semester: number;
  year: number;
  credit: number;
};
type PostProp = {
  props: PostType;
};
type PostType = {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  authorName: string;
  authorImage: string;
  published_date: string;
  likes: number;
  comments: {
    authorName: string;
    authorImage: string;
    comment: string;
  }[];
};

type ContactRequest = {
  name: string;
  email: string;
  phone: string;
  message: string;
};
type Contact = {
  message: string;
};


// Blogs
type BlogResponse = {
  total_data: number;
  next: null;
  previous: null;
  data: BlogNew[];
};

type BlogNew = {
  id: number;
  title: string;
  image: string;
  publish_date:string
  author:string;
  status:string;
  description:string;
}[];

interface BannerResponse {
  total_data: number;
  next: number | null;
  previous: number | null;
  data: Banner[];
}
