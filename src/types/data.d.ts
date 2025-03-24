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
