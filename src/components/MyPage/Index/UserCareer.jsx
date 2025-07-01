import styled from "@emotion/styled";
import CareerItem from "./CareerItem";

const Layout = styled.div`
  width: 281px;
  background-color: #eeeeee;
  border-radius: 8px;
  margin-left: 140px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TagWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const Tag = styled.div`
  padding: 6px 14px;
  background-color: white;
  border-radius: 34px;
  font-size: 14px;
  color: #333;
`;

const PlusTag = styled(Tag)`
  border: 1px solid #aaa;
  color: #888;
`;

const UserCareer = () => {
  return (
    <Layout>
      <div>
        <p style={{ margin: 0, fontWeight: "500" }}>커리어</p>
        <CareerItem />
        <CareerItem />
      </div>

      <div>
        <p style={{ margin: 0, fontWeight: "500" }}>작업 분야</p>
        <TagWrap>
          <Tag>UXUI</Tag>
          <Tag>그래픽</Tag>
          <Tag>BX</Tag>
          <PlusTag>＋</PlusTag>
        </TagWrap>
      </div>
    </Layout>
  );
};

export default UserCareer;
