import { Outlet, useParams } from "react-router-dom";
import Banner from "../../components/Community/Index/Banner";
import BoardHeader from "../../components/Community/Index/BoardHeader";
import BoardTable from "../../components/Community/Index/BoardTable";
import BoardTabs from "../../components/Community/Index/BoardTabs";

const MatchStudy = () => {
  const { id } = useParams();
  return (
    <>
      {!id && (
        <>
          <BoardHeader title={"팀매칭_스터디"} />
          <Banner />
          <BoardTabs />
          <BoardTable />
        </>
      )}
      <Outlet context={{ title: "팀매칭_스터디" }} />
    </>
  );
};

export default MatchStudy;
