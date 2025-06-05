import React from 'react';
import styled from '@emotion/styled';

const ItemContainer = styled.div`
  background-color: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.07);
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  padding-top: 56.25%;
  background-color: #e9ecef;
`;

const StarIcon = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 22px;
  color: #ccc;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #ffc107;
  }
`;

const Content = styled.div`
  padding: 16px;
  flex-grow: 1;
`;

const Categories = styled.p`
  font-size: 13px;
  color: #888;
  margin: 0 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.h3`
  font-size: 17px;
  font-weight: bold;
  margin: 0 0 8px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
  line-height: 1.5;
  height: 4.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const JobItem = ({ job }) => {
  return (
    <ItemContainer>
      <ImagePlaceholder />
      <Content>
        <Categories>{job.categories.join(' | ')}</Categories>
        <Title>{job.title}</Title>
        <Description>{job.description}</Description>
      </Content>
      <StarIcon>☆</StarIcon>
    </ItemContainer>
  );
};

export default JobItem;