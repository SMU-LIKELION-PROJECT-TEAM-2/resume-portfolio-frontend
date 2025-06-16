import styled from "@emotion/styled";
import { CirclePlus } from "lucide-react";
const BannerImg = styled.img`
  position: absolute;
`;
const BannerInit = styled.div`
  position: absolute;
  background-color: #afafaf;
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
const MyPageBanner = () => {
  const img = null;
  return img ? (
    <BannerImg alt="배너 이미지 업로드" />
  ) : (
    <BannerInit>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CirclePlus color="#777777" style={{ cursor: "pointer" }} />
        <p style={{ margin: "0px", color: "#777777" }}>배너 이미지 업로드</p>
      </div>
    </BannerInit>
  );
};

export default MyPageBanner;
