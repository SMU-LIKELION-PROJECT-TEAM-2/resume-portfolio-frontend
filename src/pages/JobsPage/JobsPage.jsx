import React, { useMemo } from 'react'; // useState, useEffect 대신 useMemo 사용
import styled from '@emotion/styled';
import useJobsStore from '../../stores/jobsStore'; // 1. Zustand store 임포트

// 컴포넌트 임포트
import JobCategoryTabs from '../../components/JobsPage/JobCategoryTabs';
import JobList from '../../components/JobsPage/JobList';
import Pagination from '../../components/MainPage/Pagination';

const PageContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 40px auto;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

// dummyJobs 데이터는 store로 이동했으므로 여기서 삭제합니다.

const JobsPage = () => {
  // 2. store에서 필요한 상태와 함수들을 가져옵니다.
  const { 
    allJobs,
    activeCategory,
    currentPage,
    setActiveCategory,
    setCurrentPage 
  } = useJobsStore();
  
  const JOBS_PER_PAGE = 8; // 페이지 당 보여줄 공고 수

  // 3. useMemo를 사용하여 카테고리가 변경될 때만 필터링을 다시 실행합니다.
  const filteredJobs = useMemo(() => {
    if (activeCategory === '전체') {
      return allJobs;
    }
    return allJobs.filter(job => job.category === activeCategory);
  }, [allJobs, activeCategory]); // activeCategory가 바뀔 때만 재계산

  // 4. 페이지네이션 계산 로직
  const indexOfLastJob = currentPage * JOBS_PER_PAGE;
  const indexOfFirstJob = indexOfLastJob - JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // 5. 페이지 변경 핸들러 함수
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  return (
    <PageContainer>
      <Title>채용정보 모아보기</Title>
      
      {/* 6. store의 상태와 액션을 props로 전달합니다. */}
      <JobCategoryTabs 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory}
      />
      
      <JobList jobs={currentJobs} />
      
      <Pagination
        totalItems={filteredJobs.length}
        itemsPerPage={JOBS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </PageContainer>
  );
};

export default JobsPage;