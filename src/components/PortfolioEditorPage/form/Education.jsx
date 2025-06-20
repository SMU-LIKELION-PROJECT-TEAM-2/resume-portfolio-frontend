import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from '@emotion/styled';
import { SectionContainer } from '../sharedStyles';

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;
`;

const MainTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

const MainBadge = styled.span`
  background-color: #f1f3f5;
  color: #868e96;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
`;

const SectionWrapper = styled.section`
    margin-top: 24px;
`;

const SectionHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const SectionTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin: 0;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &:hover {
    background-color: #f1f3f5;
  }
`;

const EducationRow = styled.div`
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 20px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const RowHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const RowLabel = styled.span`
    font-size: 16px;
    font-weight: 600;
    color: #343a40;
`;

const baseInputStyles = `
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 14px;
  color: #343a40;
  background-color: #fff;
  &::placeholder { color: #adb5bd; }
  &:focus {
    outline: none;
    border-color: #333;
  }
`;

const StyledInput = styled.input`${baseInputStyles}`;

const StyledSelect = styled.select`
  ${baseInputStyles}
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  padding-right: 2.5rem;
`;

const FieldsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;

    .full-width {
        grid-column: 1 / -1;
    }
`;

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const FieldLabel = styled.label`
    font-size: 14px;
    font-weight: 500;
    color: #495057;
`;

const DateInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #868e96;
`;

const DateInputWrapper = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;

    input {
        padding-right: 36px;
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    right: 10px;
    pointer-events: none;
`;

const AddIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 12H19" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const DeleteIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H5H21" stroke="#868e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#868e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const CalendarIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 12H12V17H17V12ZM16 1V3H8V1H6V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3H18V1H16ZM19 19H5V8H19V19Z" fill="#868e96"/></svg>
);

const Education = forwardRef((props, ref) => {
    const [educations, setEducations] = useState([
        {
            id: 1, type: '', institution: '', major: '', 
            status: '', startDate: '', endDate: ''
        }
    ]);

    const addEducation = () => {
        if (educations.length < 20) {
            setEducations([...educations, { 
                id: Date.now(), type: '', institution: '', major: '', 
                status: '', startDate: '', endDate: '' 
            }]);
        } else {
            alert('최대 20개까지 등록 가능합니다.');
        }
    };

    const deleteEducation = (id) => {
        setEducations(educations.filter(edu => edu.id !== id));
    };

    const handleEducationChange = (id, e) => {
        const { name, value } = e.target;
        setEducations(educations.map(edu => 
            edu.id === id ? { ...edu, [name]: value } : edu
        ));
    };

    useImperativeHandle(ref, () => ({
        getComponentData: () => {
        return educations;
        }
    }));

    return (
        <SectionContainer>
            <MainHeader>
                <MainTitle>학력</MainTitle>
                <MainBadge>최대 20개 등록 가능</MainBadge>
            </MainHeader>

            <SectionWrapper>
                <SectionHeader>
                    <SectionTitle>학력 정보</SectionTitle>
                    <IconButton onClick={addEducation} aria-label="교육 정보 추가">
                        <AddIcon />
                    </IconButton>
                </SectionHeader>

                {educations.map((edu, index) => (
                    <EducationRow key={edu.id}>
                        <RowHeader>
                            <RowLabel>학력 {index + 1}</RowLabel>
                            <IconButton onClick={() => deleteEducation(edu.id)} aria-label={`교육 ${index + 1} 삭제`}>
                                <DeleteIcon />
                            </IconButton>
                        </RowHeader>
                        
                        <FieldsGrid>
                            <FieldWrapper>
                                <FieldLabel>유형</FieldLabel>
                                <StyledSelect name="type" value={edu.type} onChange={e => handleEducationChange(edu.id, e)}>
                                    <option value="" disabled>유형을 선택해주세요</option>
                                    <option value="highschool">고등학교</option>
                                    <option value="university">대학교</option>
                                    <option value="master">대학원(석사)</option>
                                    <option value="doctorate">대학원(박사)</option>
                                </StyledSelect>
                            </FieldWrapper>

                            <FieldWrapper>
                                <FieldLabel>재학 상태</FieldLabel>
                                <StyledSelect name="status" value={edu.status} onChange={e => handleEducationChange(edu.id, e)}>
                                    <option value="" disabled>상태를 선택해주세요</option>
                                    <option value="attending">재학중</option>
                                    <option value="leave">휴학</option>
                                    <option value="graduated">졸업</option>
                                    <option value="completed">수료</option>
                                </StyledSelect>
                            </FieldWrapper>

                            <FieldWrapper className="full-width">
                                <FieldLabel>소속/기관</FieldLabel>
                                <StyledInput
                                    type="text" name="institution" value={edu.institution}
                                    onChange={e => handleEducationChange(edu.id, e)}
                                    placeholder="소속/기관이 없을 경우 개인 또는 기타로 입력해주세요"
                                />
                            </FieldWrapper>

                             <FieldWrapper className="full-width">
                                <FieldLabel>전공명/전공 계열</FieldLabel>
                                <StyledInput
                                    type="text" name="major" value={edu.major}
                                    onChange={e => handleEducationChange(edu.id, e)}
                                    placeholder="전공을 입력해주세요"
                                />
                            </FieldWrapper>
                            
                            <FieldWrapper className="full-width">
                                <FieldLabel>재학 기간</FieldLabel>
                                <DateInputContainer>
                                    <DateInputWrapper>
                                        <StyledInput type="text" name="startDate" value={edu.startDate} onChange={e => handleEducationChange(edu.id, e)} placeholder="입학년월 (YYYY.MM)"/>
                                        <IconWrapper><CalendarIcon /></IconWrapper>
                                    </DateInputWrapper>
                                    <span>~</span>
                                    <DateInputWrapper>
                                        <StyledInput type="text" name="endDate" value={edu.endDate} onChange={e => handleEducationChange(edu.id, e)} placeholder="졸업년월 (YYYY.MM)"/>
                                        <IconWrapper><CalendarIcon /></IconWrapper>
                                    </DateInputWrapper>
                                </DateInputContainer>
                            </FieldWrapper>
                        </FieldsGrid>
                    </EducationRow>
                ))}
            </SectionWrapper>
        </SectionContainer>
    );
});

export default Education;