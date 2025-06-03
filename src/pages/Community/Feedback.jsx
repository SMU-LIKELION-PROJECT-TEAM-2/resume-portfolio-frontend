import BoardHeader from "../../components/Community/BoardHeader";
import BoardTable from "../../components/Community/BoardTable";
import BoardTabs from "../../components/Community/BoardTabs";

const Feedback = () => {
  return (
    <>
      <BoardHeader title={"피드백"} />
      <BoardTabs />
      <BoardTable />
    </>
  );
};

export default Feedback;
