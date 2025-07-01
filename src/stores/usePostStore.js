import { create } from "zustand";

export const usePostStore = create((set) => ({
  posts: [],
  selectedTag: null,
  selectedCategory: null,
  setPosts: (newPosts) => set({ posts: newPosts }),
  setSelectedTag: (tag) => set({ selectedTag: tag }),
  setSelectedBoard: (board) => set({ selectedBoard: board }),

  addPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),

  getPostById: (id) => get().posts.find((post) => post.id === id),
}));
