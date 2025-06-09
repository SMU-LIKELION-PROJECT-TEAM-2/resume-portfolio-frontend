/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header/Header";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: #fafafa;
`;

const Box = styled.div`
  width: 520px;
  height: 311px;
  border-radius: 30px;
  border: 1px solid #D2D2D2;
  background: #fff;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 600;
  font-size: 29px;
  line-height: 120%;
  letter-spacing: 0;
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Desc = styled.div`
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 600;
  font-size: 23px;
  letter-spacing: 0;
  text-align: center;
  color: #222;
  margin-bottom: 60px;
`;

const BtnRow = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const Btn = styled.button`
  width: 214px;
  height: 68px;
  border-radius: 10px;
  border: none;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 600;
  font-size: 23px;
  line-height: 120%;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
  background: ${({ black }) => (black ? "#111" : "#D2D2D2")};
  color: ${({ black }) => (black ? "#fff" : "#222")};
  transition: background 0.2s;
  &:hover {
    background: ${({ black }) => (black ? "#222" : "#D2D2D2")};
  }
`;

export default function SignUpSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("signupSuccess")) {
      navigate("/", { replace: true });
    } else {
      sessionStorage.removeItem("signupSuccess");
    }
  }, [navigate]);

  return (
    <>
      <Header />
      <Wrapper>
        <Box>
          <Title>회원가입</Title>
          <Desc>회원가입이 완료되었습니다</Desc>
          <BtnRow>
            <Btn onClick={() => navigate("/")}>메인 홈</Btn>
            <Btn black onClick={() => navigate("/login")}>로그인</Btn>
          </BtnRow>
        </Box>
      </Wrapper>
    </>
  );
}