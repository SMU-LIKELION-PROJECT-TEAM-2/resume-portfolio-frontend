import { Outlet, useParams } from "react-router-dom";
import BoardHeader from "../../components/Community/Index/BoardHeader";
import BoardTable from "../../components/Community/Index/BoardTable";
import BoardTabs from "../../components/Community/Index/BoardTabs";

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
