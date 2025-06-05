import React from 'react';
import styled from '@emotion/styled';

const FilterContainer = styled.div`
  margin-bottom: 30px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const MainTabsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid #e0e0e0;
`;

const MainTabButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? '#333' : '#888')};
  position: relative;
  border-bottom: ${({ isActive }) => (isActive ? '2px solid #333' : '2px solid transparent')};
  margin-bottom: -1px;

  &:hover {
    color: #333;
  }
`;

const CategorySection = styled.div`
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 6px;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h4`
  font-size: 16px;
  color: #333;
  margin: 0 0 15px;
  font-weight: bold;
`;

const CategoryButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CategoryButton = styled.button`
  padding: 8px 18px;
  font-size: 15px;
  border: 1px solid transparent;
  border-radius: 20px;
  background-color: ${({ isActive }) => (isActive ? '#333' : '#e9ecef')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#555')};
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#333' : '#dee2e6')};
  }
`;

const DetailTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #e9ecef;
`;

const DetailTagButton = styled.button`
  padding: 6px 12px;
  font-size: 13px;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  background-color: ${({ isActive }) => (isActive ? '#555' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#666')};
  cursor: pointer;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? '#555' : '#f0f0f0')};
    border-color: ${({ isActive }) => (isActive ? '#555' : '#ccc')};
  }
`;

const projectCategoriesData = {
  개발: ["프론트엔드", "백엔드", "DB 설계 및 최적화", "성능 최적화", "보안", "DevOps", "최신 기술 트렌드", "협업 도구"],
  디자인: ["UI 디자인", "UX 디자인", "그래픽 디자인", "모션 디자인", "BX 디자인"],
  기획: ["서비스 기획", "프로덕트 관리", "데이터 분석", "사업 개발"],
  마케팅: ["디지털 마케팅", "콘텐츠 마케팅", "SEO/SEM", "퍼포먼스 마케팅"],
  "경영/인사": ["인사(HR)", "조직 문화", "경영 컨설팅", "재무/회계"],
  영업: ["B2B 영업", "B2C 영업", "기술 영업", "해외 영업"]
};

const personJobCategories = [
  "전체", "개발", "디자인", "기획", "마케팅", "경영/인사", "영업"
];

const personActivityCategories = [
  "전체", "리더", "스타트업", "대기업", "프리랜서", "신입", "경력", "파트타임"
];

const FilterSection = ({
  activeMainTab,
  onMainTabChange,
  projectFilterStates,
  onProjectFilterChange,
  personFilterStates,
  onPersonFilterChange
}) => {

  const handleProjectSubTabClick = (subTabName) => {
    onProjectFilterChange({
      activeProjectSubTab: subTabName,
      activeProjectDetailTag: null
    });
  };

  const handleProjectDetailTagClick = (tagName) => {
    onProjectFilterChange({
      ...projectFilterStates,
      activeProjectDetailTag: projectFilterStates.activeProjectDetailTag === tagName ? null : tagName
    });
  };

  const handlePersonJobCategoryClick = (category) => {
    onPersonFilterChange({ ...personFilterStates, activePersonJobCategory: category });
  };

  const handlePersonActivityCategoryClick = (category) => {
    onPersonFilterChange({ ...personFilterStates, activePersonActivityCategory: category });
  };

  return (
    <FilterContainer>
      <MainTabsContainer>
        <MainTabButton
          isActive={activeMainTab === '프로젝트'}
          onClick={() => onMainTabChange('프로젝트')}
        >
          프로젝트
        </MainTabButton>
        <MainTabButton
          isActive={activeMainTab === '인물'}
          onClick={() => onMainTabChange('인물')}
        >
          인물
        </MainTabButton>
      </MainTabsContainer>

      {activeMainTab === '프로젝트' && (
        <>
          <CategorySection>
            <CategoryButtonsContainer>
              {Object.keys(projectCategoriesData).map(subCategory => (
                <CategoryButton
                  key={subCategory}
                  isActive={projectFilterStates.activeProjectSubTab === subCategory}
                  onClick={() => handleProjectSubTabClick(subCategory)}
                >
                  {subCategory}
                </CategoryButton>
              ))}
            </CategoryButtonsContainer>
          </CategorySection>

          {projectFilterStates.activeProjectSubTab && projectCategoriesData[projectFilterStates.activeProjectSubTab] && (
            <DetailTagsContainer>
              {projectCategoriesData[projectFilterStates.activeProjectSubTab].map(tag => (
                <DetailTagButton
                  key={tag}
                  isActive={projectFilterStates.activeProjectDetailTag === tag}
                  onClick={() => handleProjectDetailTagClick(tag)}
                >
                  {tag}
                </DetailTagButton>
              ))}
            </DetailTagsContainer>
          )}
        </>
      )}

      {activeMainTab === '인물' && (
        <>
          <CategorySection>
            <CategoryTitle>직군</CategoryTitle>
            <CategoryButtonsContainer>
              {personJobCategories.map(job => (
                <CategoryButton
                  key={job}
                  isActive={personFilterStates.activePersonJobCategory === job}
                  onClick={() => handlePersonJobCategoryClick(job)}
                >
                  {job}
                </CategoryButton>
              ))}
            </CategoryButtonsContainer>
          </CategorySection>

          <CategorySection>
            <CategoryTitle>활동 분야</CategoryTitle>
            <CategoryButtonsContainer>
              {personActivityCategories.map(activity => (
                <CategoryButton
                  key={activity}
                  isActive={personFilterStates.activePersonActivityCategory === activity}
                  onClick={() => handlePersonActivityCategoryClick(activity)}
                >
                  {activity}
                </CategoryButton>
              ))}
            </CategoryButtonsContainer>
          </CategorySection>
        </>
      )}
    </FilterContainer>
  );
};

export default FilterSection;