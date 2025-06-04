import { Outlet, useParams } from "react-router-dom";
import Banner from "../../components/Community/Banner";
import BoardHeader from "../../components/Community/BoardHeader";
import BoardTable from "../../components/Community/BoardTable";
import BoardTabs from "../../components/Community/BoardTabs";

const MatchProject = () => {
  const { id } = useParams();
  return (
    <>
      {!id && (
        <>
          <BoardHeader title={"팀매칭_프로젝트"} />
          <Banner />
          <BoardTabs />
          <BoardTable />
        </>
      )}
      <Outlet />
    </>
  );
};

export default MatchProject;
