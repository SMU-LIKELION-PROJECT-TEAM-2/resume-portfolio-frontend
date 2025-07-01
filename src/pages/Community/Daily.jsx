import { Outlet, useParams } from "react-router-dom";
import BoardHeader from "../../components/Community/Index/BoardHeader";
import BoardTable from "../../components/Community/Index/BoardTable";
import BoardTabs from "../../components/Community/Index/BoardTabs";

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
      <Outlet context={{ title: "일상" }} />
    </>
  );
};

export default Daily;
