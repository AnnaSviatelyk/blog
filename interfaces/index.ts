// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import Post from 'path/to/interfaces';

export type Post = {
    id: number;
    title: string;
    body: string;
};

export type State = {
    items: [];
    item: {};
    error: string | null;
};
