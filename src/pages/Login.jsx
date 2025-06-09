/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from "@emotion/styled";
import Header from "../Layout/Header/Header";
import { validateLogin, loginApi, saveToken } from '../api/auth';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const LoginBox = styled.div`
  width: 520px;
  background: #fff;
  border-radius: 30px;
  border-width: 1px;
  border-style: solid;
  border-color: #D2D2D2;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
`;

const TitleContainer = styled.div`
  width: 520px;
  height: 118px;
  gap: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  width: 170px;
  height: 38px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: center;
`;

const InputsWrapper = styled.div`
  width: 439px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Spacer = styled.div`
  height: 20px;
  width: 100%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  width: 439px;
  height: 27px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0%;
  margin-bottom: 10px;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background: rgba(242, 242, 242, 1);
  border: ${({ error }) => (error ? '1px solid #FF0000' : 'none')};
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  padding: 16px 14px;
  box-sizing: border-box;

  &::placeholder {
    color: #909090;
    font-family: 'Pretendard Variable', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
`;

const ErrorMsg = styled.div`
  height: 21px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
  color: #FF0000;
  margin-top: 8px;
`;

const LoginErrorMsg = styled.div`
  margin-top: 8px;
  height: 21px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
  color: #FF0000;
`;

const Row = styled.div`
  width: 439px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  margin-top: 20px;
`;

const LeftGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const CheckboxLabel = styled.label`
  width: 111px;
  height: 24px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  display: flex;
  align-items: center;
  color: #909090;
`;

const FindLink = styled.a`
  width: 143px;
  height: 24px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: right;
  color: #909090;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  text-decoration: none;
`;

const LoginButton = styled.button`
  width: 439px;
  height: 68px;
  border-radius: 10px;
  padding: 20px 176px;
  gap: 8px;
  background: #111;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 600;
  font-size: 23px;
  line-height: 120%;
  letter-spacing: 0%;
  text-align: center;

  &:hover {
    background: #333;
  }
`;

const SocialText = styled.div`
  margin-top: 20px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  color: #909090;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 14px;
`;

const SocialIconButton = styled.button`
  width: 48px;
  height: 48px;
  background: none;
  border: none;
  padding: 0;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialIconImg = styled.img`
  width: 32px;
  height: 32px;
`;

function Login() {
  const [form, setForm] = useState({ loginId: '', password: '' });
  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setLoginError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateLogin(form);
    setErrors(errs);
    setLoginError('');
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    try {
      const data = await loginApi(form);
      if (data.token) saveToken(data.token);
      // 로그인 성공 후 이동
      // window.location.href = '/dashboard';
    } catch (err) {
      setLoginError(err.message);
    }
    setLoading(false);
  };

  // 소셜 로그인 버튼 클릭 핸들러 예시
  const handleKakaoLogin = () => {
    // window.location.href = KAKAO_AUTH_URL;
  };
  const handleGoogleLogin = () => {
    // window.location.href = GOOGLE_AUTH_URL;
  };

  return (
    <>
      <Header />
      <Wrapper>
        <LoginBox>
          <TitleContainer>
            <Title>PORTMATE</Title>
          </TitleContainer>
          <form onSubmit={handleSubmit} autoComplete="off">
            <InputsWrapper>
              <InputContainer>
                <Label htmlFor="loginId">아이디</Label>
                <Input
                  id="loginId"
                  name="loginId"
                  type="text"
                  placeholder="아이디 또는 이메일을 입력해주세요"
                  value={form.loginId}
                  onChange={handleChange}
                  error={!!errors.loginId || !!loginError}
                  disabled={loading}
                  autoComplete="username"
                />
                {errors.loginId && <ErrorMsg>{errors.loginId}</ErrorMsg>}
              </InputContainer>
              <Spacer />
              <InputContainer>
                <Label htmlFor="password">비밀번호</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                  value={form.password}
                  onChange={handleChange}
                  error={!!errors.password || !!loginError}
                  disabled={loading}
                  autoComplete="current-password"
                />
                {errors.password && <ErrorMsg>{errors.password}</ErrorMsg>}
                {loginError && (
                  <LoginErrorMsg>
                    {loginError}
                  </LoginErrorMsg>
                )}
              </InputContainer>
            </InputsWrapper>
            <Row>
              <LeftGroup>
                <Checkbox
                  id="keepLogin"
                  type="checkbox"
                  // 로그인 상태 유지 기능 필요시 구현
                  disabled={loading}
                />
                <CheckboxLabel htmlFor="keepLogin">로그인 상태 유지</CheckboxLabel>
              </LeftGroup>
              <FindLink>아이디/비밀번호 찾기</FindLink>
            </Row>
            <LoginButton type="submit" disabled={loading}>
              {loading ? '로그인 중...' : '로그인'}
            </LoginButton>
          </form>
          <SocialText>소셜 계정으로 로그인</SocialText>
          <SocialIcons>
            <SocialIconButton onClick={handleKakaoLogin} aria-label="카카오 로그인">
              <SocialIconImg src="/kakao-icon.png" alt="카카오" />
            </SocialIconButton>
            <SocialIconButton onClick={handleGoogleLogin} aria-label="구글 로그인">
              <SocialIconImg src="/google-icon.png" alt="구글" />
            </SocialIconButton>
          </SocialIcons>
        </LoginBox>
      </Wrapper>
    </>
  );
}

export default Login;