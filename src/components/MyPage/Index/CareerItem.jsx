import styled from "@emotion/styled";

const Item = styled.div`
  width: 90%;
  height: 42px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 12px;
  margin-top: 8px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: black;
  margin-right: 8px;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
`;

const Right = styled.p`
  font-size: 13px;
  color: #888;
  margin: 0;
`;

const CareerItem = ({ label = "ㅁㅁ사 디자인 인턴", duration = "6개월" }) => {
  return (
    <Item>
      <Left>
        <Dot />
        <p style={{ margin: 0 }}>{label}</p>
      </Left>
      <Right>{duration}</Right>
    </Item>
  );
};

export default CareerItem;
