import { Outlet, useParams } from "react-router-dom";
import BoardHeader from "../../components/Community/BoardHeader";
import BoardTable from "../../components/Community/BoardTable";
import BoardTabs from "../../components/Community/BoardTabs";

const Feedback = () => {
  const { id } = useParams();
  return (
    <>
      {!id && (
        <>
          <BoardHeader title={"피드백"} />
          <BoardTabs />
          <BoardTable />
        </>
      )}
      <Outlet context={{ title: "피드백" }} />
    </>
  );
};

export default Feedback;
