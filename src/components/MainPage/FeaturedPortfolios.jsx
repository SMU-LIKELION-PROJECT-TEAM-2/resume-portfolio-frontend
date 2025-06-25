import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

const FeaturedContainer = styled.div`
  margin-bottom: 40px;
  overflow: hidden; /* 이 컨테이너가 '뷰포트' 역할을 합니다. */
  position: relative;
`;

const CarouselWrapper = styled.div`
  display: flex;
  /* transition과 transform은 style 속성으로 직접 제어합니다. */
`;

const FeaturedItem = styled.div`
  flex-shrink: 0; // 아이템 크기가 줄어들지 않도록 설정
  width: 100%; // 너비는 부모(FeaturedContainer)에 꽉 차게 설정
  padding: 0 10px; // 아이템 간 간격
  box-sizing: border-box;
`;

const Card = styled.div`
  height: 200px;
  background-color: #e9ecef;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #adb5bd;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

const dummyFeaturedData = [
  { id: 1, title: '인기 포트폴리오 1' }, { id: 2, title: '인기 포트폴리오 2' },
  { id: 3, title: '인기 포트폴리오 3' }, { id: 4, title: '인기 포트폴리오 4' },
  { id: 5, title: '인기 포트폴리오 5' }, { id: 6, title: '인기 포트폴리오 6' },
];

const SLIDE_TRANSITION_MS = 500;

const FeaturedPortfolios = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [slideWidth, setSlideWidth] = useState(0); // 1. 슬라이드 너비를 state로 관리
  const [currentIndex, setCurrentIndex] = useState(itemsPerPage); // 2. 초기 인덱스를 복제된 아이템 수만큼으로 설정
  const [isTransitioning, setTransitioning] = useState(true);
  
  const containerRef = useRef(null); // 3. 너비를 측정할 컨테이너의 ref

  // 무한 캐러셀을 위해 앞/뒤에 아이템 복제
  // 화면에 3개가 보일 경우, 앞/뒤로 3개씩 복제해야 자연스럽습니다.
  const slides = [
    ...dummyFeaturedData.slice(-itemsPerPage), 
    ...dummyFeaturedData, 
    ...dummyFeaturedData.slice(0, itemsPerPage)
  ];

  // 4. 화면 크기가 변경될 때마다 슬라이드 너비와 아이템 개수를 다시 계산
  useEffect(() => {
    const calculateLayout = () => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            let newItemsPerPage = 3;
            if (window.innerWidth <= 768) newItemsPerPage = 1;
            else if (window.innerWidth <= 992) newItemsPerPage = 2;
            
            setItemsPerPage(newItemsPerPage);
            setSlideWidth(containerWidth / newItemsPerPage);
        }
    };

    calculateLayout(); // 처음 마운트될 때 실행
    window.addEventListener('resize', calculateLayout); // 화면 크기 변경 시 실행
    return () => window.removeEventListener('resize', calculateLayout); // 언마운트 시 이벤트 제거
  }, []);

  // 자동 슬라이드 로직
  useEffect(() => {
    if (slideWidth === 0) return; // 너비가 계산되기 전에는 실행하지 않음
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideWidth]);


  // 맨 끝 슬라이드에서 처음으로/처음에서 맨 끝으로 점프하는 로직
  useEffect(() => {
    if (currentIndex === dummyFeaturedData.length + itemsPerPage) { // 맨 끝에 도달하면
      const timer = setTimeout(() => {
        setTransitioning(false);
        setCurrentIndex(itemsPerPage);
      }, SLIDE_TRANSITION_MS);
      return () => clearTimeout(timer);
    }
    if (currentIndex === itemsPerPage - 1) { // 맨 앞에 도달하면
        const timer = setTimeout(() => {
            setTransitioning(false);
            setCurrentIndex(dummyFeaturedData.length + itemsPerPage - 1);
        }, SLIDE_TRANSITION_MS);
        return () => clearTimeout(timer);
    }
  }, [currentIndex, itemsPerPage]);

  useEffect(() => {
      if(!isTransitioning) {
          requestAnimationFrame(() => setTransitioning(true));
      }
  }, [isTransitioning]);


  return (
    <FeaturedContainer ref={containerRef}>
      <CarouselWrapper
        style={{
          // 5. 픽셀 기반으로 정확하게 이동
          transform: `translateX(-${currentIndex * slideWidth}px)`,
          transition: isTransitioning ? `transform ${SLIDE_TRANSITION_MS}ms ease-in-out` : 'none',
        }}
      >
        {slides.map((item, index) => (
          // 6. 각 아이템의 너비를 픽셀로 직접 설정
          <FeaturedItem key={`${item.id}-${index}`} style={{ width: slideWidth }}>
            <Card>{item.title}</Card>
          </FeaturedItem>
        ))}
      </CarouselWrapper>
    </FeaturedContainer>
  );
};

export default FeaturedPortfolios;