import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from '@emotion/styled';
import { SectionContainer } from '../sharedStyles';

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #212529;
  padding-bottom: 16px;
  margin-bottom: 24px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

const LimitBadge = styled.span`
  background-color: #f1f3f5;
  color: #868e96;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f1f3f5;
  }
`;

const ExperienceBlock = styled.div`
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 24px;
  margin-top: 24px;
`;

const BlockHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const BlockTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;

const FormRow = styled.div`
  margin-bottom: 20px;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #495057;
`;

const baseInputStyles = `
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 16px;
  box-sizing: border-box;
  background-color: #fff;

  &::placeholder {
    color: #adb5bd;
  }

  &:focus {
    outline: none;
    border-color: #339af0;
    box-shadow: 0 0 0 2px rgba(51, 154, 240, 0.2);
  }
  
  &:disabled {
    background-color: #f1f3f5;
    cursor: not-allowed;
  }
`;

const StyledInput = styled.input`${baseInputStyles}`;
const StyledTextarea = styled.textarea`${baseInputStyles}`;

const DateRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto; /* 오른쪽 끝으로 밀어내기 */
  
  label {
    font-size: 14px;
    color: #495057;
    cursor: pointer;
  }
`;

const InputWithIconWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const InputIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const StyledSelect = styled.select`
  ${baseInputStyles}
  appearance: none; // 기본 화살표 제거
  padding-right: 40px;
`;

const SelectIcon = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const AddIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5V19" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 12H19" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DeleteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 6H5H21" stroke="#868e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#868e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CalendarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="#495057" strokeWidth="2"/>
        <line x1="16" y1="2" x2="16" y2="6" stroke="#495057" strokeWidth="2" strokeLinecap="round"/>
        <line x1="8" y1="2" x2="8" y2="6" stroke="#495057" strokeWidth="2" strokeLinecap="round"/>
        <line x1="3" y1="10" x2="21" y2="10" stroke="#495057" strokeWidth="2"/>
    </svg>
);

const ChevronDownIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9L12 15L18 9" stroke="#343a40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const createNewExperience = () => ({
  id: Date.now(),
  company: '',
  startDate: '',
  endDate: '',
  isCurrent: false,
  position: '',
  department: '',
  employmentType: '',
  duties: '',
});

const WorkExperience = forwardRef((props, ref) => {
  const [experiences, setExperiences] = useState([createNewExperience()]);

  const addExperience = () => {
    if (experiences.length < 40) {
      setExperiences([...experiences, createNewExperience()]);
    } else {
      alert('경력은 최대 40개까지 등록할 수 있습니다.');
    }
  };

  const deleteExperience = (id) => {
    if (experiences.length > 1) {
        setExperiences(experiences.filter(exp => exp.id !== id));
    } else {
        alert('최소 1개의 경력 정보가 필요합니다.');
    }
  };
  
  const handleInputChange = (id, e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;

    setExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [name]: val } : exp
    ));
  };

  useImperativeHandle(ref, () => ({
    getComponentData: () => {
        return experiences;
    }
  }));

  return (
    <SectionContainer>
      <MainHeader>
        <TitleWrapper>
          <Title>경력</Title>
          <LimitBadge>최대 40개 등록 가능</LimitBadge>
        </TitleWrapper>
        <IconButton onClick={addExperience} aria-label="경력 추가">
          <AddIcon />
        </IconButton>
      </MainHeader>

      {experiences.map((exp, index) => (
        <ExperienceBlock key={exp.id}>
          <BlockHeader>
            <BlockTitle>경력 {index + 1}</BlockTitle>
            <IconButton onClick={() => deleteExperience(exp.id)} aria-label={`경력 ${index + 1} 삭제`}>
              <DeleteIcon />
            </IconButton>
          </BlockHeader>
          
          <FormRow>
            <FormLabel>회사명</FormLabel>
            <StyledInput name="company" value={exp.company} onChange={(e) => handleInputChange(exp.id, e)} placeholder="회사명을 입력해주세요" />
          </FormRow>

          <FormRow>
             <FormLabel>재직 기간</FormLabel>
             <DateRow>
                <InputWithIconWrapper>
                    <StyledInput name="startDate" value={exp.startDate} onChange={(e) => handleInputChange(exp.id, e)} placeholder="입사연월" />
                    <InputIcon><CalendarIcon /></InputIcon>
                </InputWithIconWrapper>
                <span>~</span>
                <InputWithIconWrapper>
                    <StyledInput name="endDate" value={exp.endDate} onChange={(e) => handleInputChange(exp.id, e)} placeholder="퇴사연월" disabled={exp.isCurrent}/>
                    <InputIcon><CalendarIcon /></InputIcon>
                </InputWithIconWrapper>
                <CheckboxWrapper>
                    <input type="checkbox" id={`isCurrent-${exp.id}`} name="isCurrent" checked={exp.isCurrent} onChange={(e) => handleInputChange(exp.id, e)} />
                    <label htmlFor={`isCurrent-${exp.id}`}>재직중</label>
                </CheckboxWrapper>
             </DateRow>
          </FormRow>
          
          <FormRow>
            <FormLabel>직책</FormLabel>
            <StyledInput name="position" value={exp.position} onChange={(e) => handleInputChange(exp.id, e)} placeholder="직책을 입력해주세요" />
          </FormRow>

          <FormRow>
            <FormLabel>부서명</FormLabel>
            <StyledInput name="department" value={exp.department} onChange={(e) => handleInputChange(exp.id, e)} placeholder="부서명을 입력해주세요" />
          </FormRow>
          
          <FormRow>
            <FormLabel>근무 유형</FormLabel>
            <SelectWrapper>
                <StyledSelect name="employmentType" value={exp.employmentType} onChange={(e) => handleInputChange(exp.id, e)}>
                    <option value="" disabled>근무 유형을 선택해주세요</option>
                    <option value="full-time">정규직</option>
                    <option value="contract">계약직</option>
                    <option value="intern">인턴</option>
                    <option value="freelancer">프리랜서</option>
                </StyledSelect>
                <SelectIcon><ChevronDownIcon /></SelectIcon>
            </SelectWrapper>
          </FormRow>

          <FormRow>
            <FormLabel>담당 업무</FormLabel>
            <StyledTextarea name="duties" value={exp.duties} onChange={(e) => handleInputChange(exp.id, e)} placeholder="성과 위주의 업무 내용을 작성해보세요" rows="6" />
          </FormRow>

        </ExperienceBlock>
      ))}
    </SectionContainer>
  );
});

export default WorkExperience;