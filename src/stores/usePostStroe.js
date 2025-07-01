import { create } from 'zustand';

export const usePostStore = create((set) => ({
  posts: [],

  setPosts: (newPosts) => set({ posts: newPosts }),

  addPost: (post) => set((state) => ({
    posts: [post, ...state.posts],
  })),

  getPostById: (id) =>
    get().posts.find((post) => post.id === id),

}));
