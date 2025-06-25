import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { SectionContainer } from '../sharedStyles';
import useEditorStore from '../../../stores/editorStore';

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

const ProfileImageContainer = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  background-color: #f1f3f5;
  border: 1px dashed #ced4da;
  border-radius: 8px;
  flex-shrink: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.2s ease;

  &:hover {
    border-color: #845ef7;
    background-color: #f8f9fa;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  opacity: 0;
  transition: opacity 0.2s ease;

  ${ProfileImageContainer}:hover & {
    opacity: 1;
  }
`;

const ImageActionButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px;

  &:hover {
    text-decoration: underline;
  }
`;

const PlaceholderIcon = styled.div`
    color: #adb5bd;
    margin-bottom: 8px;
`;

const PlaceholderText = styled.p`
    font-size: 14px;
    color: #868e96;
    margin: 0;
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
  width: 70px;
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
  pointer-events: none;
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

const BasicInfo = () => {
  const basicInfo = useEditorStore((state) => state.basicInfo);
  const setSectionData = useEditorStore((state) => state.setSectionData);

  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    const newBasicInfo = { ...basicInfo, [name]: value };
    setSectionData('basicInfo', newBasicInfo);
  };

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function(data) {
        const roadAddr = data.roadAddress; 
        const newBasicInfo = { ...basicInfo, address: roadAddr };
        setSectionData('basicInfo', newBasicInfo);
      }
    }).open();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newBasicInfo = { ...basicInfo, profileImage: file };
      setSectionData('basicInfo', newBasicInfo);
      if (imagePreview) URL.revokeObjectURL(imagePreview);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = (e) => {
    e.stopPropagation();
    const newBasicInfo = { ...basicInfo, profileImage: null };
    setSectionData('basicInfo', newBasicInfo);
    
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImagePreview(null);
  };
  
  useEffect(() => {
    if (basicInfo.profileImage && typeof basicInfo.profileImage !== 'string') {
        const newPreview = URL.createObjectURL(basicInfo.profileImage);
        setImagePreview(newPreview);

        return () => URL.revokeObjectURL(newPreview);
    }
  }, [basicInfo.profileImage]);

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
        <ProfileImageContainer onClick={() => fileInputRef.current.click()}>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/jpg, image/jpeg, image/png"
            style={{ display: 'none' }}
          />

          {imagePreview ? (
            <>
              <ProfileImage src={imagePreview} alt="프로필 미리보기" />
              <ImageOverlay>
                <ImageActionButton>변경</ImageActionButton>
                <ImageActionButton onClick={handleRemoveImage}>삭제</ImageActionButton>
              </ImageOverlay>
            </>
          ) : (
            <>
              <PlaceholderIcon><CameraIcon/></PlaceholderIcon>
              <PlaceholderText>사진 추가</PlaceholderText>
            </>
          )}

        </ProfileImageContainer>
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
            onClick={handleAddressSearch}
            readOnly
          />
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
        </AddressInputWrapper>
      </FormSection>
    </SectionContainer>
  );
};

const CameraIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 21H4C3.44772 21 3 20.5523 3 20V8C3 7.44772 3.44772 7 4 7H7.15792C7.5955 7 8.01353 6.78644 8.28688 6.42502L9.71312 4.57498C9.98647 4.21356 10.4045 4 10.8421 4H13.1579C13.5955 4 14.0135 4.21356 14.2869 4.57498L15.7131 6.42502C15.9865 6.78644 16.4045 7 16.8421 7H20C20.5523 7 21 7.44772 21 8V20C21 20.5523 20.5523 21 20 21Z" stroke="#adb5bd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#adb5bd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export default BasicInfo;