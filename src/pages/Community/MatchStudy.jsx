import { Outlet, useParams } from "react-router-dom";
import Banner from "../../components/Community/Banner";
import BoardHeader from "../../components/Community/BoardHeader";
import BoardTable from "../../components/Community/BoardTable";
import BoardTabs from "../../components/Community/BoardTabs";

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
      <Outlet />
    </>
  );
};

export default MatchStudy;
