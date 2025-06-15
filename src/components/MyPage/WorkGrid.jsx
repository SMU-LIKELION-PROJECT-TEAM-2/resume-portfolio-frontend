import styled from "@emotion/styled";
import { GridLayout, PlusItem } from "./GridStyle";
import { CirclePlus } from "lucide-react";

const GridItem = styled.div`
  width: 100%;
  aspect-ratio: 5 / 4;
  border-radius: 8px;
  background-color: #eeeeee;
`;

const WorkGrid = () => {
  return (
    <GridLayout>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <GridItem></GridItem>
      <PlusItem>
        <CirclePlus size={"36px"} />
      </PlusItem>
    </GridLayout>
  );
};

export default WorkGrid;
