import { CirclePlus } from "lucide-react";
import { GridLayout, PlusItem } from "./GridStyle";
import styled from "@emotion/styled";

const GridItem = styled.div`
  width: 96%;
  height: 96%;
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

const CollectionGrid = () => {
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
      <PlusItem>
        <CirclePlus size={"36px"} />
      </PlusItem>
    </GridLayout>
  );
};

export default CollectionGrid;
