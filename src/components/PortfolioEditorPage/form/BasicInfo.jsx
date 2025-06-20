import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from '@emotion/styled';
import { SectionContainer } from '../sharedStyles';

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

const RequiredBadge = styled.span`
  background-color: #fff0f0;
  color: #ff6b6b;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 8px 0 0;
  color: #868e96;
  font-size: 14px;
`;

const ProfileSection = styled.section`
  display: flex;
  gap: 24px;
  margin-top: 40px;
  padding-bottom: 40px;
`;

const ProfileImagePlaceholder = styled.div`
  width: 160px;
  height: 160px;
  background-color: #f1f3f5;
  border-radius: 8px;
  flex-shrink: 0;
`;

const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const InfoLabel = styled.span`
  font-size: 14px;
  color: #868e96;
  width: 70px; // 레이블 너비 고정으로 정렬 맞춤
`;

const InfoValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #343a40;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: #495057;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
`;

const FormSection = styled.div`
  margin-bottom: 24px;
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #dee2e6;
  background-color: #f8f9fa;
  border-radius: 8px;
  font-size: 16px;
  box-sizing: border-box;

  &::placeholder {
    color: #adb5bd;
  }

  &:focus {
    outline: none;
    border-color: #845ef7;
    box-shadow: 0 0 0 2px rgba(132, 94, 247, 0.2);
  }
`;

const AddressInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; // 아이콘이 클릭되지 않도록 설정
`;

const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
      stroke="#333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 21L16.65 16.65"
      stroke="#333"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BasicInfo = forwardRef((props, ref) => {
  const [basicInfo, setBasicInfo] = useState({
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBasicInfo(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  useImperativeHandle(ref, () => ({
    getComponentData: () => {
      return basicInfo;
    }
  }));

  return (
    <SectionContainer>
      <Header>
        <Title>기본 정보</Title>
        <RequiredBadge>필수</RequiredBadge>
      </Header>
      <Description>
        취업 방향 설정에서 입력한 정보를 바탕으로 기본 정보가 생성됩니다.
      </Description>

      <ProfileSection>
        <ProfileImagePlaceholder />
        <ProfileDetails>
          <InfoRow>
            <InfoLabel>이름</InfoLabel>
            <InfoValue>김포트</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>직군·직무</InfoLabel>
            <InfoValue>디자인·그래픽디자이너</InfoValue>
          </InfoRow>
          <InfoRow>
            <InfoLabel>관심 분야</InfoLabel>
            <TagContainer>
              <Tag>앨범 아트</Tag>
              <Tag>그래픽 포스터</Tag>
              <Tag>북 커버 아트</Tag>
            </TagContainer>
          </InfoRow>
        </ProfileDetails>
      </ProfileSection>

      <FormSection>
        <LabelWrapper>
          <FormLabel>이메일</FormLabel>
          <RequiredBadge>필수</RequiredBadge>
        </LabelWrapper>
        <Input
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={basicInfo.email}
          onChange={handleChange}
        />
      </FormSection>

      <FormSection>
        <LabelWrapper>
          <FormLabel>전화번호</FormLabel>
          <RequiredBadge>필수</RequiredBadge>
        </LabelWrapper>
        <Input
          type="tel"
          name="phone"
          placeholder="-없이 입력해주세요"
          value={basicInfo.phone}
          onChange={handleChange}
        />
      </FormSection>

      <FormSection>
        <FormLabel>주소</FormLabel>
        <AddressInputWrapper>
          <Input
            name="address"
            placeholder="주소 검색"
            value={basicInfo.address}
            onChange={handleChange}
          />
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
        </AddressInputWrapper>
      </FormSection>
    </SectionContainer>
  );
});

export default BasicInfo;