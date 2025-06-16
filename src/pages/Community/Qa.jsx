import { Outlet, useParams } from "react-router-dom";
import BoardHeader from "../../components/Community/Index/BoardHeader";
import BoardTable from "../../components/Community/Index/BoardTable";
import BoardTabs from "../../components/Community/Index/BoardTabs";

const Qa = () => {
  const { id } = useParams();
  return (
    <>
      {!id && (
        <>
          <BoardHeader title={"Q&A"} />
          <BoardTabs />
          <BoardTable />
        </>
      )}

      <Outlet context={{ title: "Q&A" }} />
    </>
  );
};

export default Qa;
