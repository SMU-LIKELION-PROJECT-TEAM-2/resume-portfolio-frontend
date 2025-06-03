import BoardHeader from "../../components/Community/BoardHeader";
import BoardTable from "../../components/Community/BoardTable";
import BoardTabs from "../../components/Community/BoardTabs";

const AllBoard = () => {
  return (
    <>
      <BoardHeader title={"전체"} />
      <BoardTabs />
      <BoardTable />
    </>
  );
};

export default AllBoard;
