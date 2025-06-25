import { create } from 'zustand';

const RESUME_SECTIONS_CONFIG = [
  { id: 'basicInfo', name: '기본 정보', isRequired: true },
  { id: 'techStack', name: '기술 스택', isRequired: false },
  { id: 'workExperience', name: '경력', isRequired: false },
  { id: 'projectExperience', name: '프로젝트', isRequired: false },
  { id: 'portfolio', name: '포트폴리오', isRequired: false },
  { id: 'education', name: '학력', isRequired: false },
  { id: 'extracurricular', name: '대외활동', isRequired: false },
  { id: 'certification', name: '자격증', isRequired: false },
  { id: 'foreignLanguage', name: '외국어', isRequired: false },
  { id: 'selfIntroduction', name: '자기소개', isRequired: false },
];

const initialState = {
  title: '',
  visibleSections: RESUME_SECTIONS_CONFIG.reduce((acc, section) => {
    acc[section.id] = true;
    return acc;
  }, {}),

  basicInfo: { email: '', phone: '', address: '', profileImage: null },
  techStack: [],
  workExperience: [{ id: Date.now(), company: '', startDate: null, endDate: null, isCurrent: false, position: '', department: '', employmentType: '', duties: '' }],
  projectExperience: [{ id: Date.now(), projectName: '', organization: '', startDate: null, endDate: null, inProgress: false, description: '' }],
  portfolio: { urls: [{ id: 1, name: '', link: '' }], files: [{ id: 1, fileObject: '' }] },
  education: [{ id: 1, type: '', institution: '', major: '', status: '', startDate: null, endDate: null }],
  extracurricular: [{ id: 1, name: '', organization: '', startDate: null, endDate: null, description: '' }],
  certification: [{ id: 1, name: '', score: '', issuingOrg: '', acquisitionDate: null }],
  foreignLanguage: [{ id: 1, name: '', level: '' }],
  selfIntroduction: '',
};

const useEditorStore = create((set) => ({
  ...initialState,
  
  setTitle: (title) => set({ title: title }),

  toggleSectionVisibility: (sectionId) => set((state) => {

    const sectionConf = RESUME_SECTIONS_CONFIG.find(s => s.id === sectionId);
    if (sectionConf && sectionConf.isRequired) return {};

    return {
      visibleSections: {
        ...state.visibleSections,
        [sectionId]: !state.visibleSections[sectionId],
      },
    };
  }),

  setSectionData: (sectionId, data) => set({ [sectionId]: data }),

  reset: () => set(initialState),
  loadData: (data) => set(data),
}));

export default useEditorStore;