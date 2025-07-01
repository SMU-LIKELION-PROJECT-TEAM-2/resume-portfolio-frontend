import React, { useMemo } from 'react'; // useState, useEffect 제거
import styled from '@emotion/styled';
import useMainPageStore from '../../stores/mainPageStore'; // Zustand store 임포트

// 컴포넌트 임포트
import PortfolioSectionHeader from '../../components/MainPage/PortfolioSectionHeader';
import FeaturedPortfolios from '../../components/MainPage/FeaturedPortfolios';
import FilterSection from '../../components/MainPage/FilterSection';
import PortfolioList from '../../components/MainPage/PortfolioList';
import Pagination from '../../components/MainPage/Pagination';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// 데이터는 store로 이동했으므로 여기서 삭제합니다.

const MainPage = () => {
  // 1. store에서 필요한 모든 상태와 액션을 가져옵니다.
  const {
    allProjects,
    allPersons,
    activeMainTab,
    projectFilterStates,
    personFilterStates,
    currentPage,
    setActiveMainTab,
    setProjectFilters,
    setPersonFilters,
    setCurrentPage,
  } = useMainPageStore();

  const itemsPerPage = activeMainTab === '프로젝트' ? 16 : 8;

  // useMemo를 사용한 필터링 로직은 그대로 유지합니다.
  const filteredItems = useMemo(() => {
    if (activeMainTab === '프로젝트') {
      let filtered = allProjects;

      // 1. 서브 카테고리 필터링
      if (projectFilterStates.activeProjectSubTab !== '전체') {
        filtered = filtered.filter(item => item.subCategory === projectFilterStates.activeProjectSubTab);
      }

      // 2. 상세 태그 필터링
      if (projectFilterStates.activeProjectDetailTag) {
        filtered = filtered.filter(item => item.detailTags.includes(projectFilterStates.activeProjectDetailTag));
      }
      
      return filtered;

    } else if (activeMainTab === '인물') {
      let filtered = allPersons;

      // 1. 직군 필터링
      if (personFilterStates.activePersonJobCategory !== '전체') {
        filtered = filtered.filter(item => item.jobCategory === personFilterStates.activePersonJobCategory);
      }
      
      // 2. 활동 분야 필터링
      if (personFilterStates.activePersonActivityCategory !== '전체') {
        filtered = filtered.filter(item => item.activityCategory === personFilterStates.activePersonActivityCategory);
      }
      
      return filtered;
    }
    return [];
  }, [activeMainTab, projectFilterStates, personFilterStates, allProjects, allPersons]);

  // 페이지 리셋 로직은 store의 액션 안으로 이동했으므로 useEffect는 필요 없습니다.

  // 렌더링에 필요한 현재 페이지 아이템들 계산
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <PageContainer>
      <PortfolioSectionHeader />
      <FeaturedPortfolios />
      
      {/* 2. 자식 컴포넌트에 store의 상태와 액션을 직접 전달합니다. */}
      <FilterSection
        activeMainTab={activeMainTab}
        onMainTabChange={setActiveMainTab}
        projectFilterStates={projectFilterStates}
        onProjectFilterChange={setProjectFilters}
        personFilterStates={personFilterStates}
        onPersonFilterChange={setPersonFilters}
      />
      <PortfolioList
        items={currentItems}
        type={activeMainTab === '프로젝트' ? 'project' : 'person'}
      />
      {filteredItems.length > 0 && (
          <Pagination
            totalItems={filteredItems.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
      )}
    </PageContainer>
  );
};

export default MainPage;