import BoardHeader from "../../components/Community/BoardHeader";
import BoardTable from "../../components/Community/BoardTable";
import BoardTabs from "../../components/Community/BoardTabs";

const Daily = () => {
  return (
    <>
      <BoardHeader title={"일상"} />
      <BoardTabs />
      <BoardTable />
    </>
  );
};

export default Daily;
