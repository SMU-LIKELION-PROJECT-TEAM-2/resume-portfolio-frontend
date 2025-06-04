import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const FeaturedContainer = styled.div`
  margin-bottom: 30px;
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const FeaturedItem = styled.div`
  min-width: calc(100% / 3 - 20px);
  margin: 0 10px;
  height: 200px;
  background-color: #e9ecef;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #adb5bd;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);

  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 992px) {
    min-width: calc(100% / 2 - 10px);
    margin: 0 5px;
  }
  @media (max-width: 768px) {
    min-width: calc(100% - 10px);
  }
`;

const dummyFeaturedData = [
  { id: 1, title: '인기 포트폴리오 1' },
  { id: 2, title: '인기 포트폴리오 2' },
  { id: 3, title: '인기 포트폴리오 3' },
  { id: 4, title: '인기 포트폴리오 4' },
  { id: 5, title: '인기 포트폴리오 5' },
  { id: 6, title: '인기 포트폴리오 6' },
];

const FeaturedPortfolios = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const itemsPerPage = 3;

  useEffect(() => {
    const totalItems = dummyFeaturedData.length;
    if (totalItems <= itemsPerPage) return;

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % Math.ceil(totalItems / itemsPerPage));
    }, 5000);

    return () => clearInterval(interval);
  }, [itemsPerPage]);

  const itemWidth = carouselRef.current ? carouselRef.current.offsetWidth / itemsPerPage : 0;

  return (
    <FeaturedContainer>
      <CarouselWrapper
        ref={carouselRef}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {dummyFeaturedData.map(item => (
          <FeaturedItem key={item.id}>
            {item.title}
          </FeaturedItem>
        ))}
      </CarouselWrapper>
    </FeaturedContainer>
  );
};

export default FeaturedPortfolios;