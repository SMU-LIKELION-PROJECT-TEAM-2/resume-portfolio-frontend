import { Outlet, useParams } from "react-router-dom";
import BoardHeader from "../../components/Community/BoardHeader";
import BoardTable from "../../components/Community/BoardTable";
import BoardTabs from "../../components/Community/BoardTabs";

const Daily = () => {
  const { id } = useParams();

  return (
    <>
      {!id && (
        <>
          <BoardHeader title={"일상"} />
          <BoardTabs />
          <BoardTable />
        </>
      )}
      <Outlet />
    </>
  );
};

export default Daily;
