import { create } from 'zustand';

const dummyJobs = [
  { id: 1, categories: ['분야1', '분야2'], title: '제목 1', description: '이것은 상세설명입니다...', category: '개발' },
  { id: 2, categories: ['분야1'], title: '제목 2', description: '이것은 상세설명입니다...', category: '개발' },
  { id: 3, categories: ['분야1', '분야3'], title: '제목 3', description: '이것은 상세설명입니다...', category: '디자인' },
  { id: 4, categories: ['분야2'], title: '제목 4', description: '이것은 상세설명입니다...', category: '기획' },
  { id: 5, categories: ['분야3'], title: '제목 5', description: '이것은 상세설명입니다...', category: '마케팅' },
  { id: 6, categories: ['분야1'], title: '제목 6', description: '이것은 상세설명입니다...', category: '개발' },
  { id: 7, categories: ['분야2', '분야3'], title: '제목 7', description: '이것은 상세설명입니다...', category: '디자인' },
  { id: 8, categories: ['분야1'], title: '제목 8', description: '이것은 상세설명입니다...', category: '영업' },
  { id: 9, categories: ['분야2'], title: '제목 9', description: '이것은 상세설명입니다...', category: '개발' },
  { id: 10, categories: ['분야3'], title: '제목 10', description: '이것은 상세설명입니다...', category: '경영/인사' },
  { id: 11, categories: ['분야1', '분야2'], title: '제목 11', description: '이것은 상세설명입니다...', category: '개발' },
  { id: 12, categories: ['분야3'], title: '제목 12', description: '이것은 상세설명입니다...', category: '기획' },
];

const useJobsStore = create((set) => ({
  allJobs: dummyJobs,
  activeCategory: '전체', // 기본값을 '전체'로 변경하는 것을 추천
  currentPage: 1,

  setActiveCategory: (category) => set((state) => {
    if (state.activeCategory !== category) {
      return {
        activeCategory: category,
        currentPage: 1,
      };
    }
    return {};
  }),

  setCurrentPage: (page) => set({ currentPage: page }),
}));

export default useJobsStore;