export interface Comment {
    postId: number;
    body: string;
    id: number;
}

export interface Post {
    id: number;
    title: string;
    body: string;
}

export interface PostInner {
    title: string;
    body: string;
    comments: Comment[];
}

export interface PostsState {
    items: Post[] | [];
    item: PostInner | null;
    error: string | null;
    isModalShown: boolean;
}
