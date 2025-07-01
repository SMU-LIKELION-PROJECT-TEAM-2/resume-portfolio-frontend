import { create } from 'zustand';

// 가상 데이터
const projectItemsData = Array.from({ length: 26 }, (_, i) => {
  const subCategories = ['개발', '디자인', '기획', '마케팅', '경영/인사', '영업'];
  const subCategory = subCategories[i % subCategories.length];
  
  const detailTags = {
    개발: ["프론트엔드", "백엔드", "DB 설계 및 최적화", "성능 최적화", "보안", "DevOps", "최신 기술 트렌드", "협업 도구"],
    디자인: ["UI 디자인", "UX 디자인", "그래픽 디자인", "모션 디자인", "BX 디자인"],
    기획: ["서비스 기획", "프로덕트 관리", "데이터 분석", "사업 개발"],
    마케팅: ["디지털 마케팅", "콘텐츠 마케팅", "SEO/SEM", "퍼포먼스 마케팅"],
    "경영/인사": ["인사(HR)", "조직 문화", "경영 컨설팅", "재무/회계"],
    영업: ["B2B 영업", "B2C 영업", "기술 영업", "해외 영업"]
  };

  return {
    id: `project-${i + 1}`,
    type: 'project',
    subCategory: subCategory, // 필터링을 위한 소속 카테고리
    detailTags: [detailTags[subCategory][i % detailTags[subCategory].length]], // 필터링을 위한 상세 태그
    title: `${subCategory} 포트폴리오 ${i + 1}`,
    description: '상세설명입니다.',
    imageUrl: '',
  };
});

const personItemsData = Array.from({ length: 18 }, (_, i) => {
    const jobCategories = ["개발", "디자인", "기획", "마케팅", "경영/인사", "영업"];
    const activityCategories = ["리더", "스타트업", "대기업", "프리랜서", "신입", "경력", "파트타임"];

    return {
        id: `person-${i + 1}`,
        type: 'person',
        jobCategory: jobCategories[i % jobCategories.length], // 필터링을 위한 직군
        activityCategory: activityCategories[i % activityCategories.length], // 필터링을 위한 활동 분야
        nickname: `전문가 ${String.fromCharCode(65 + i)}`,
        profileIntro: '작성자가 입력한 소개',
        following: Math.floor(Math.random() * 150) + 10,
        followers: Math.floor(Math.random() * 500) + 50,
        likes: Math.floor(Math.random() * 100) + 5,
        imageUrl: '',
        // ... (나머지 속성)
    };
});

const useMainPageStore = create((set) => ({
  // 1. State: 관리할 모든 상태
  allProjects: projectItemsData,
  allPersons: personItemsData,
  activeMainTab: '프로젝트',
  projectFilterStates: {
    activeProjectSubTab: '전체', // '개발'에서 '전체'로 변경
    activeProjectDetailTag: null,
  },
  personFilterStates: {
    activePersonJobCategory: '전체',
    activePersonActivityCategory: '전체',
  },
  currentPage: 1,

  // 2. Actions: 상태를 변경하는 함수들
  
  // 메인 탭 변경 액션
  setActiveMainTab: (tabName) => set((state) => {
    if (state.activeMainTab !== tabName) {
      return {
        activeMainTab: tabName,
        currentPage: 1, // 탭 변경 시 페이지를 1로 초기화
        // 탭에 맞는 필터 초기화 로직
        projectFilterStates: tabName === '프로젝트' ? { activeProjectSubTab: '개발', activeProjectDetailTag: null } : state.projectFilterStates,
        personFilterStates: tabName === '인물' ? { activePersonJobCategory: '전체', activePersonActivityCategory: '전체' } : state.personFilterStates,
      };
    }
    return {};
  }),

  // 프로젝트 필터 변경 액션
  setProjectFilters: (filters) => set({
    projectFilterStates: filters,
    currentPage: 1, // 필터 변경 시 페이지를 1로 초기화
  }),
  
  // 인물 필터 변경 액션
  setPersonFilters: (filters) => set({
    personFilterStates: filters,
    currentPage: 1, // 필터 변경 시 페이지를 1로 초기화
  }),

  // 페이지 변경 액션
  setCurrentPage: (page) => set({ currentPage: page }),

}));

export default useMainPageStore;