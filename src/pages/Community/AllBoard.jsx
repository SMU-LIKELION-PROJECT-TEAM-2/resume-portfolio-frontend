import { Outlet, useParams } from "react-router-dom";
import BoardHeader from "../../components/Community/BoardHeader";
import BoardTable from "../../components/Community/BoardTable";
import BoardTabs from "../../components/Community/BoardTabs";

const AllBoard = () => {
  const { id } = useParams();
  return (
    <>
      {!id && (
        <>
          <BoardHeader title={"전체"} />
          <BoardTabs />
          <BoardTable />
        </>
      )}
      <Outlet context={{ title: "전체" }} />
    </>
  );
};

export default AllBoard;
