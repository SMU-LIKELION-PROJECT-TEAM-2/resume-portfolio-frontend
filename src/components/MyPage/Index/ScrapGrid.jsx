import styled from "@emotion/styled";
import { GridLayout } from "./GridStyle";

const GridItem = styled.div`
  width: 96%;
  aspect-ratio: 5 / 4;
  border-radius: 8px;
  background-color: #eeeeee;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 6px;
  padding: 8px;
  overflow: hidden;
`;

const Preview = styled.div`
  background-color: #d9d9d9;
  border-radius: 4px;
`;

const ScrapGrid = () => {
  return (
    <GridLayout>
      <GridItem>
        <Preview />
        <Preview />
        <Preview />
      </GridItem>
      <GridItem>
        <Preview />
        <Preview />
        <Preview />
      </GridItem>
      <GridItem>
        <Preview />
        <Preview />
        <Preview />
      </GridItem>
      <GridItem>
        <Preview />
        <Preview />
        <Preview />
      </GridItem>
    </GridLayout>
  );
};

export default ScrapGrid;
