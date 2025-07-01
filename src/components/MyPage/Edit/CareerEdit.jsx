import styled from "@emotion/styled";

const Layout = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 710px;
  background-color: #eeeeee;
  border-radius: 8px;
  padding: 40px;
  gap: 40px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
`;

const Period = styled.div`
  display: flex;
  gap: 10px;
`;

const Text = styled.input`
  height: 40px;
  border: none;
  border-radius: 10px;
  font-size: larger;
  padding-inline: 20px;
`;

const TextArea = styled.textarea`
  border: none;
  border-radius: 10px;
  resize: none;
  padding: 20px;
  font-size: larger;
  font-weight: bold;
`;

const InputDate = styled.input`
  height: 40px;
  width: 65%;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  background-color: white;
  cursor: pointer;
`;

const EditButton = styled.button`
  background-color: #d9d9d9;
  border-radius: 63px;
  height: 54px;
  width: 178px;
  border: none;
  align-self: flex-end;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
`;

const DateFrame = styled.div`
  flex: 1;
  height: 62px;
  background-color: white;
  border-radius: 10px;
  padding-inline: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CareerEdit = () => {
  return (
    <Layout>
      <p
        style={{
          position: "absolute",
          top: "-50px",
          left: "0px",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        나의 커리어
      </p>
      <Title>
        <h3>제목</h3>
        <Text placeholder="ex) ㅁㅁ사 디자인 인턴" />
      </Title>
      <Detail>
        <h3>업무 상세</h3>
        <TextArea rows={6} placeholder="업무 내용을 적는 칸" />
      </Detail>
      <h3>업무 기간</h3>
      <Period>
        <DateFrame>
          시작
          <InputDate type="date" />
        </DateFrame>
        <DateFrame>
          종료
          <InputDate type="date" />
        </DateFrame>
      </Period>
      <EditButton>수정 완료</EditButton>
    </Layout>
  );
};

export default CareerEdit;
