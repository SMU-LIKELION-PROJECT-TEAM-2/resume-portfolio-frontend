import styled from "@emotion/styled";

const BannerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: medium;
`;

const BannerItem = styled.div`
  height: 165px;
  flex: 1;
  background-color: #d2d2d2;
  border-radius: 4px;
`;

const Banner = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginInline: "40px",
        borderBottom: "1px solid #D2D2D2",
        paddingBottom: "20px",
      }}
    >
      <BannerTitle>
        <p>내 관심사 맞춤 추천</p>
        <p>내 관심사 확인하기 &nbsp; &gt;</p>
      </BannerTitle>
      <section style={{ display: "flex", gap: "20px" }}>
        <BannerItem></BannerItem>
        <BannerItem></BannerItem>
        <BannerItem></BannerItem>
        <BannerItem></BannerItem>
      </section>
    </div>
  );
};

export default Banner;
