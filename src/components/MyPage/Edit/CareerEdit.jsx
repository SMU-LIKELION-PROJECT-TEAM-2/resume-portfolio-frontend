import styled from "@emotion/styled";

const Layout = styled.section`
  position: relative;
  width: 790px;
  height: 630px;
  background-color: #eeeeee;
  border-radius: 8px;
`;

const CareerEdit = () => {
  return (
    <Layout>
      <p
        style={{
          position: "absolute",
          top: "-50px",
          fontSize: "18px",
          fontWeight: "500",
        }}
      >
        나의 커리어
      </p>
    </Layout>
  );
};

export default CareerEdit;
