import { Outlet, useParams } from "react-router-dom";
import BoardHeader from "../../components/Community/Index/BoardHeader";
import BoardTable from "../../components/Community/Index/BoardTable";
import BoardTabs from "../../components/Community/Index/BoardTabs";

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
