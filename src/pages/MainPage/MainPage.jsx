import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
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

const projectItemsData = Array.from({ length: 16 }, (_, i) => ({
  id: `project-${i + 1}`,
  type: 'project',
  categories: [`분야${i % 3 + 1}`, `분야${(i + 1) % 3 + 1}`],
  title: `포트폴리오 ${i + 1}`,
  description: '상세설명입니다.',
  imageUrl: '',
}));

const personItemsData = Array.from({ length: 8 }, (_, i) => ({
  id: `person-${i + 1}`,
  type: 'person',
  jobs: [`직무${i % 2 + 1}`, `직무${(i + 1) % 2 + 2}`],
  nickname: `전문가 ${String.fromCharCode(65 + i)}`,
  profileIntro: '작성자가 입력한 소개',
  following: Math.floor(Math.random() * 150) + 10,
  followers: Math.floor(Math.random() * 500) + 50,
  likes: Math.floor(Math.random() * 100) + 5,
  imageUrl: '',
}));


const MainPage = () => {
  const [activeMainTab, setActiveMainTab] = useState('프로젝트');

  const [projectFilterStates, setProjectFilterStates] = useState({
    activeProjectSubTab: '개발',
    activeProjectDetailTag: null,
  });
  const [personFilterStates, setPersonFilterStates] = useState({
    activePersonJobCategory: '전체',
    activePersonActivityCategory: '전체',
  });

  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = activeMainTab === '프로젝트' ? 16 : 8;

  const handleMainTabChange = (tabName) => {
    setActiveMainTab(tabName);
    setCurrentPage(1);
    if (tabName === '프로젝트') {
      setProjectFilterStates({ activeProjectSubTab: '개발', activeProjectDetailTag: null });
    } else if (tabName === '인물') {
      setPersonFilterStates({ activePersonJobCategory: '전체', activePersonActivityCategory: '전체' });
    }
  };
  
  useEffect(() => {
    let itemsToDisplay = [];
    if (activeMainTab === '프로젝트') {
      itemsToDisplay = projectItemsData;
    } else if (activeMainTab === '인물') {
      itemsToDisplay = personItemsData;
    }
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(itemsToDisplay.slice(indexOfFirstItem, indexOfLastItem));

  }, [activeMainTab, projectFilterStates, personFilterStates, currentPage, itemsPerPage]);
  
  const totalPages = Math.ceil((activeMainTab === '프로젝트' ? projectItemsData.length : personItemsData.length) / itemsPerPage);


  return (
    <PageContainer>
      <PortfolioSectionHeader />
      <FeaturedPortfolios />
      <FilterSection
        activeMainTab={activeMainTab}
        onMainTabChange={handleMainTabChange}
        projectFilterStates={projectFilterStates}
        onProjectFilterChange={setProjectFilterStates}
        personFilterStates={personFilterStates}
        onPersonFilterChange={setPersonFilterStates}
      />
      <PortfolioList
        items={currentItems}
        type={activeMainTab === '프로젝트' ? 'project' : 'person'}
      />
      {currentItems.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
      )}
    </PageContainer>
  );
};

export default MainPage;