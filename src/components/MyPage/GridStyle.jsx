import styled from "@emotion/styled";

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const PlusItem = styled.div`
  width: 100%;
  aspect-ratio: 5/4;
  border-radius: 8px;
  border: 2px dashed #7b7b7b;
  display: flex;
  justify-content: center;
  align-items: center;
`;
