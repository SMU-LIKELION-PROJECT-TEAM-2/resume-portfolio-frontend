import React from 'react';
import styled from '@emotion/styled';
import { FaCheck, FaEye, FaBars } from 'react-icons/fa';

const ItemContainer = styled.li`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
`;

const CheckboxIcon = styled.span`
  margin-right: 8px;
  color:rgb(0, 0, 0);
`;

const ItemText = styled.span`
  flex-grow: 1;
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #888;
  cursor: pointer;
`;

function GuideListItem({ text }) {
  return (
    <ItemContainer>
      <CheckboxIcon>
        <FaCheck />
      </CheckboxIcon>
      <ItemText>{text}</ItemText>
      <ItemActions>
        <FaEye />
        <FaBars />
      </ItemActions>
    </ItemContainer>
  );
}

export default GuideListItem;