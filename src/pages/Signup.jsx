/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from "@emotion/styled";
import Header from "../Layout/Header/Header";
import { checkUsername, signup, validateSignUp } from '../api/user';
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fafafa;
`;

const SignUpBox = styled.div`
  width: 520px;
  background: #fff;
  border-radius: 24px;
  border: 1px solid #E0E0E0;
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
  color: #222;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
  flex: 1 1 0;
  min-width: 0;
`;

const Input = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background: #f2f2f2;
  border: ${({ error, valid }) =>
    error ? '1px solid #FF0000'
    : valid ? '1.5px solid #007AFF'
    : 'none'};
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: #222;
  padding: 16px 44px 16px 14px;
  box-sizing: border-box;
  outline: none;
  transition: border 0.2s;

  &::placeholder {
    color: #909090;
    font-family: 'Pretendard Variable', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #aaa;
  display: ${({ show }) => (show ? 'block' : 'none')};
  z-index: 2;
`;

const CheckButton = styled.button`
  width: 100px;
  height: 56px;
  margin-left: 10px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0%;
  text-align: center;
  background: ${({ disabled }) => (disabled ? '#ccc' : '#D2D2D2')};
  color: ${({ disabled }) => (disabled ? '#666' : '#909090')};
  border: none;
  border-radius: 8px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
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

const ValidMsg = styled.div`
  height: 21px;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0%;
  color: #007AFF;
  margin-top: 8px;
`;

const SubmitButton = styled.button`
  width: 100%;
  height: 68px;
  border-radius: 10px;
  background: #111;
  color: #fff;
  font-family: 'Pretendard Variable', sans-serif;
  font-weight: 600;
  font-size: 23px;
  border: none;
  margin-top: 30px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #222;
  }
`;

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    nickname: '',
    loginId: '',
    password: '',
    password2: '',
    email: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [idChecked, setIdChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    if (name === 'loginId') setIdChecked(false);
  };

  const handleClear = (field) => {
    setForm((prev) => ({ ...prev, [field]: '' }));
    setErrors((prev) => ({ ...prev, [field]: '' }));
    setTouched((prev) => ({ ...prev, [field]: false }));
    if (field === 'loginId') setIdChecked(false);
  };

  const handleIdCheck = async () => {
    if (!form.loginId.trim()) {
      setErrors((prev) => ({ ...prev, loginId: '아이디를 입력하세요.' }));
      return;
    }
    setLoading(true);
    try {
      const result = await checkUsername(form.loginId);
      if (result.available) {
        setErrors((prev) => ({ ...prev, loginId: '' }));
        setIdChecked(true);
      } else {
        setErrors((prev) => ({ ...prev, loginId: '이미 사용중인 아이디입니다.' }));
        setIdChecked(false);
      }
    } catch (err) {
      setErrors((prev) => ({ ...prev, loginId: err.message }));
      setIdChecked(false);
    }
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateSignUp(form);
    setErrors(errs);
    setTouched({
      nickname: true,
      loginId: true,
      password: true,
      password2: true,
      email: true,
    });
    if (Object.keys(errs).length > 0) return;
    setLoading(true);
    try {
      await signup({
        nickname: form.nickname,
        loginId: form.loginId,
        password: form.password,
        email: form.email,
      });
      // 회원가입 성공 플래그 남기고 이동
      sessionStorage.setItem("signupSuccess", "true");
      navigate("/signup/success");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const isValid = (name) => {
    if (name === 'loginId') {
      return !errors.loginId && !!form.loginId && touched.loginId && idChecked;
    }
    if (name === 'nickname' || name === 'email') return false;
    return !errors[name] && !!form[name] && touched[name];
  };

  const isError = (name) => !!errors[name] && touched[name];

  return (
    <>
      <Header />
      <Wrapper>
        <SignUpBox>
          <TitleContainer>
            <Title>회원가입</Title>
          </TitleContainer>
          <InputsWrapper as="form" onSubmit={handleSubmit} autoComplete="off">
            {/* 닉네임 */}
            <InputContainer>
              <Label htmlFor="nickname">닉네임</Label>
              <InputRow>
                <InputWrapper>
                  <Input
                    id="nickname"
                    name="nickname"
                    type="text"
                    placeholder="닉네임"
                    value={form.nickname}
                    onChange={handleChange}
                    error={isError('nickname')}
                    valid={isValid('nickname')}
                    autoComplete="off"
                    disabled={loading}
                  />
                  <ClearButton
                    type="button"
                    show={!!form.nickname}
                    onClick={() => handleClear('nickname')}
                    aria-label="닉네임 지우기"
                    disabled={loading}
                  >×</ClearButton>
                </InputWrapper>
              </InputRow>
              {isError('nickname') && <ErrorMsg>{errors.nickname}</ErrorMsg>}
            </InputContainer>
            <Spacer />

            {/* 아이디 */}
            <InputContainer>
              <Label htmlFor="loginId">아이디</Label>
              <InputRow>
                <InputWrapper>
                  <Input
                    id="loginId"
                    name="loginId"
                    type="text"
                    placeholder="아이디"
                    value={form.loginId}
                    onChange={handleChange}
                    error={isError('loginId')}
                    valid={isValid('loginId')}
                    autoComplete="off"
                    disabled={loading}
                  />
                  <ClearButton
                    type="button"
                    show={!!form.loginId}
                    onClick={() => handleClear('loginId')}
                    aria-label="아이디 지우기"
                    disabled={loading}
                  >×</ClearButton>
                </InputWrapper>
                <CheckButton
                  type="button"
                  onClick={handleIdCheck}
                  disabled={isValid('loginId') || loading}
                >
                  중복 확인
                </CheckButton>
              </InputRow>
              {isError('loginId') && <ErrorMsg>{errors.loginId}</ErrorMsg>}
              {isValid('loginId') && <ValidMsg>사용가능</ValidMsg>}
            </InputContainer>
            <Spacer />

            {/* 비밀번호 */}
            <InputContainer>
              <Label htmlFor="password">비밀번호</Label>
              <InputRow>
                <InputWrapper>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="비밀번호"
                    value={form.password}
                    onChange={handleChange}
                    error={isError('password')}
                    valid={isValid('password')}
                    autoComplete="new-password"
                    disabled={loading}
                  />
                  <ClearButton
                    type="button"
                    show={!!form.password}
                    onClick={() => handleClear('password')}
                    aria-label="비밀번호 지우기"
                    disabled={loading}
                  >×</ClearButton>
                </InputWrapper>
              </InputRow>
              {isError('password') && <ErrorMsg>{errors.password}</ErrorMsg>}
              {isValid('password') && <ValidMsg>사용가능</ValidMsg>}
            </InputContainer>
            <Spacer />

            {/* 비밀번호 확인 */}
            <InputContainer>
              <Label htmlFor="password2">비밀번호 확인</Label>
              <InputRow>
                <InputWrapper>
                  <Input
                    id="password2"
                    name="password2"
                    type="password"
                    placeholder="비밀번호 확인"
                    value={form.password2}
                    onChange={handleChange}
                    error={isError('password2')}
                    valid={isValid('password2')}
                    autoComplete="new-password"
                    disabled={loading}
                  />
                  <ClearButton
                    type="button"
                    show={!!form.password2}
                    onClick={() => handleClear('password2')}
                    aria-label="비밀번호확인 지우기"
                    disabled={loading}
                  >×</ClearButton>
                </InputWrapper>
              </InputRow>
              {isError('password2') && <ErrorMsg>{errors.password2}</ErrorMsg>}
              {isValid('password2') && <ValidMsg>사용가능</ValidMsg>}
            </InputContainer>
            <Spacer />

            {/* 이메일 */}
            <InputContainer>
              <Label htmlFor="email">이메일</Label>
              <InputRow>
                <InputWrapper>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="이메일"
                    value={form.email}
                    onChange={handleChange}
                    error={isError('email')}
                    valid={isValid('email')}
                    autoComplete="off"
                    disabled={loading}
                  />
                  <ClearButton
                    type="button"
                    show={!!form.email}
                    onClick={() => handleClear('email')}
                    aria-label="이메일 지우기"
                    disabled={loading}
                  >×</ClearButton>
                </InputWrapper>
              </InputRow>
              {isError('email') && <ErrorMsg>{errors.email}</ErrorMsg>}
            </InputContainer>
            <SubmitButton type="submit" disabled={loading}>완료</SubmitButton>
          </InputsWrapper>
        </SignUpBox>
      </Wrapper>
    </>
  );
}

export default SignUp;