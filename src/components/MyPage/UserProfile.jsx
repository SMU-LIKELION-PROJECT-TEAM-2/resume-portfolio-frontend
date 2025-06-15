import { flush } from "@emotion/css";
import styled from "@emotion/styled";

const ProfileLayout = styled.div`
  background-color: #eeeeee;
  width: 281px;
  position: relative;
  z-index: 20;
  border-radius: 8px;
  margin-left: 140px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  gap: 32px;
`;

const ActiveInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const UserProfile = () => {
  return (
    <ProfileLayout>
      <img
        style={{
          width: "90px",
          height: "90px",
          borderRadius: "50%",
          backgroundColor: "#D9D9D9",
          margin: "0",
        }}
      />
      <p
        style={{
          fontWeight: "600",
          margin: "0",
          fontSize: "26px",
          lineHeight: "150%",
          color: "#363636",
        }}
      >
        NAME
      </p>
      <p
        style={{
          fontWeight: "400",
          fontSize: "17px",
          textDecoration: "underline solid",
          color: "#565656",
          lineHeight: "150%",
          margin: "0",
        }}
      >
        portfolio site//개인Link
      </p>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <p
          style={{
            width: "100%",
            textAlign: "center",
            paddingBlock: "16px",
            borderRadius: "34px",
            margin: "0",
            backgroundColor: "#D9D9D9",
          }}
        >
          프로필 편집
        </p>
        <p
          style={{
            width: "100%",
            textAlign: "center",
            paddingBlock: "16px",
            borderRadius: "34px",
            border: "0.5px solid #949494",
            margin: "0",
          }}
        >
          상태&구직 설정
        </p>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <p style={{ fontSize: "18px", fontWeight: "500" }}>활동 정보</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "80px",
          }}
        >
          <ActiveInfo>
            <p
              style={{
                margin: 0,
                fontSize: "31px",
                fontWeight: "600",
                color: "#363636",
              }}
            >
              55
            </p>
            <p style={{ margin: 0, fontSize: "13px", color: "#888888" }}>
              팔로잉
            </p>
          </ActiveInfo>
          <ActiveInfo>
            <p
              style={{
                margin: 0,
                fontSize: "31px",
                fontWeight: "600",
                color: "#363636",
              }}
            >
              58
            </p>
            <p style={{ margin: 0, fontSize: "13px", color: "#888888" }}>
              팔로워
            </p>
          </ActiveInfo>
          <ActiveInfo>
            <p
              style={{
                margin: 0,
                fontSize: "31px",
                fontWeight: "600",
                color: "#363636",
              }}
            >
              10
            </p>
            <p style={{ margin: 0, fontSize: "13px", color: "#888888" }}>
              좋아요
            </p>
          </ActiveInfo>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default UserProfile;
