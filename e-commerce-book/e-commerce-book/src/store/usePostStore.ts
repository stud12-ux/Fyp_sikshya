import { create } from 'zustand';

type Post = Record<string, any>; // Adjust this type according to your post shape

interface PostState {
  posts: Post;
  setPosts: (post: Post) => void;
}

const usePostStore = create<PostState>((set) => ({
  posts: {},
  setPosts: (post) => set({ posts: post }),
}));

export default usePostStore;
