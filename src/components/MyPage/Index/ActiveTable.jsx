import styled from "@emotion/styled";
import WorkGrid from "./WorkGrid";
import CollectionGrid from "./CollectionGrid";
import ScrapGrid from "./ScrapGrid";

const TableLayout = styled.div`
  width: auto;
  height: auto;
  padding-top: 10px;
`;
const ActiveTable = ({ activeTab }) => {
  let content;
  switch (activeTab) {
    case "work":
      content = <WorkGrid />;
      break;
    case "collection":
      content = <CollectionGrid />;
      break;
    case "scrap":
      content = <ScrapGrid />;
      break;
    default:
      content = null;
  }
  return <TableLayout>{content}</TableLayout>;
};

export default ActiveTable;
