import { Outlet, useParams } from "react-router-dom";
import Banner from "../../components/Community/Index/Banner";
import BoardHeader from "../../components/Community/Index/BoardHeader";
import BoardTable from "../../components/Community/Index/BoardTable";
import BoardTabs from "../../components/Community/Index/BoardTabs";

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
      <Outlet context={{ title: "팀매칭_프로젝트" }} />
    </>
  );
};

export default MatchProject;
