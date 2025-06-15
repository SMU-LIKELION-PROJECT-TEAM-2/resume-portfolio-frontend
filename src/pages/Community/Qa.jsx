import { Outlet, useParams } from "react-router-dom";
import BoardHeader from "../../components/Community/BoardHeader";
import BoardTable from "../../components/Community/BoardTable";
import BoardTabs from "../../components/Community/BoardTabs";

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
