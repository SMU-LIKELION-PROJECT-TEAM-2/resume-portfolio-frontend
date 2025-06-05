import React from 'react';
import styled from '@emotion/styled';

const ItemContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ProjectImagePlaceholder = styled.div`
  width: 100%;
  padding-top: 75%;
  background-color: #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #aaa;
`;

const StarIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color: #ccc;
  cursor: pointer;
  &:hover {
    color: #ffc107;
  }
`;

const PersonImagePlaceholder = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #e0e0e0;
  margin: 20px auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #aaa;
`;

const PersonInfoContainer = styled.div`
  text-align: center;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px 15px 15px;
  border-top: 1px solid #f0f0f0;
  margin-top: 15px;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 12px;
  color: #888;
  span {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    margin-bottom: 2px;
  }
`;

const Content = styled.div`
  padding: 15px;
  flex-grow: 1;
`;

const CategoriesOrJobs = styled.p`
  font-size: 12px;
  color: #888;
  margin: 0 0 5px;
  text-align: ${props => props.type === 'person' ? 'center' : 'left'};
`;

const TitleOrNickname = styled.h3`
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 8px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: ${props => props.type === 'person' ? 'center' : 'left'};
`;

const Description = styled.p`
  font-size: 13px;
  color: #666;
  margin: 0;
  line-height: 1.4;
  height: ${props => props.type === 'person' ? 'auto' : '3.9em'};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: ${props => props.type === 'person' ? 'none' : '3'};
  -webkit-box-orient: vertical;
  text-align: ${props => props.type === 'person' ? 'center' : 'left'};
  padding: ${props => props.type === 'person' ? '0 10px' : '0'};
`;


const PortfolioItem = ({ item, type = "project" }) => {
  if (type === "person") {
    return (
      <ItemContainer>
        <PersonImagePlaceholder>image</PersonImagePlaceholder>
        <PersonInfoContainer>
          <CategoriesOrJobs type="person">
            {item.jobs?.join(' | ') || '직무 정보 없음'}
          </CategoriesOrJobs>
          <TitleOrNickname type="person">{item.nickname || '닉네임'}</TitleOrNickname>
          <Description type="person">{item.profileIntro || '소개 없음'}</Description>
        </PersonInfoContainer>
        <StatsContainer>
          <StatItem>
            <span>{item.following || 0}</span>팔로잉
          </StatItem>
          <StatItem>
            <span>{item.followers || 0}</span>팔로워
          </StatItem>
          <StatItem>
            <span>{item.likes || 0}</span>좋아요
          </StatItem>
        </StatsContainer>
      </ItemContainer>
    );
  }

  return (
    <ItemContainer>
      <ProjectImagePlaceholder>image</ProjectImagePlaceholder>
      <Content>
        <CategoriesOrJobs type="project">
          {item.categories?.join(' | ') || '카테고리 없음'}
        </CategoriesOrJobs>
        <TitleOrNickname type="project">{item.title || '제목 없음'}</TitleOrNickname>
        <Description type="project">{item.description || '설명 없음'}</Description>
      </Content>
      <StarIcon>☆</StarIcon>
    </ItemContainer>
  );
};

export default PortfolioItem;