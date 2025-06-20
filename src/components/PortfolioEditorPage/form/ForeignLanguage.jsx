import React, { useState, forwardRef, useImperativeHandle } from 'react';
import styled from '@emotion/styled';
import { SectionContainer } from '../sharedStyles';

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 24px;
    padding-bottom: 24px;
    border-bottom: 1px solid #dee2e6;
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

const LanguageRow = styled.div`
    border-bottom: 1px solid #f1f3f5;
    padding: 24px 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    &:first-of-type {
        border-top: 1px solid #f1f3f5;
    }
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

const AddButtonWrapper = styled.div`
    padding-top: 16px;
`;

const FullWidthAddButton = styled.button`
    width: 100%;
    padding: 12px;
    border: 1px dashed #ced4da;
    border-radius: 8px;
    background-color: #f8f9fa;
    color: #495057;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;

    &:hover {
        background-color: #f1f3f5;
        border-color: #adb5bd;
    }
`;

const AddIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 12H19" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const DeleteIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H5H21" stroke="#868e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#868e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const ForeignLanguage = forwardRef((props, ref) => {
    const [languages, setLanguages] = useState([
        { id: 1, name: '', level: '' }
    ]);

    const addLanguage = () => {
        if (languages.length >= 10) {
            alert('최대 10개까지 등록 가능합니다.');
            return;
        }
        setLanguages([
            ...languages,
            { id: Date.now(), name: '', level: '' }
        ]);
    };

    const deleteLanguage = (id) => {
        setLanguages(languages.filter(lang => lang.id !== id));
    };

    const handleLanguageChange = (id, e) => {
        const { name, value } = e.target;
        setLanguages(languages.map(lang => 
            lang.id === id ? { ...lang, [name]: value } : lang
        ));
    };

    useImperativeHandle(ref, () => ({
        getComponentData: () => {
            return languages;
        }
    }));

    return (
        <SectionContainer>
            <MainHeader>
                <MainTitle>외국어</MainTitle>
                <MainBadge>최대 10개 등록 가능</MainBadge>
            </MainHeader>

            <SectionWrapper>
                {languages.map((lang, index) => (
                    <LanguageRow key={lang.id}>
                        <RowHeader>
                            <RowLabel>외국어 {index + 1}</RowLabel>
                            <IconButton onClick={() => deleteLanguage(lang.id)} aria-label={`외국어 ${index + 1} 삭제`}>
                                <DeleteIcon />
                            </IconButton>
                        </RowHeader>
                        
                        <FieldsGrid>
                            <FieldWrapper>
                                <FieldLabel>언어명</FieldLabel>
                                <StyledSelect name="name" value={lang.name} onChange={e => handleLanguageChange(lang.id, e)}>
                                    <option value="" disabled>언어명을 선택해주세요</option>
                                    <option value="English">영어</option>
                                    <option value="Chinese">중국어</option>
                                    <option value="Japanese">일본어</option>
                                    <option value="German">독일어</option>
                                    <option value="French">프랑스어</option>
                                    <option value="Spanish">스페인어</option>
                                </StyledSelect>
                            </FieldWrapper>

                            <FieldWrapper>
                                <FieldLabel>수준</FieldLabel>
                                <StyledSelect name="level" value={lang.level} onChange={e => handleLanguageChange(lang.id, e)}>
                                    <option value="" disabled>수준을 선택해주세요</option>
                                    <option value="Beginner">기초</option>
                                    <option value="Conversational">회화 가능</option>
                                    <option value="Business">비즈니스</option>
                                    <option value="Native">원어민 수준</option>
                                </StyledSelect>
                            </FieldWrapper>
                        </FieldsGrid>
                    </LanguageRow>
                ))}
                 <AddButtonWrapper>
                    <FullWidthAddButton onClick={addLanguage}>
                        <AddIcon /> 외국어 추가
                    </FullWidthAddButton>
                </AddButtonWrapper>
            </SectionWrapper>
        </SectionContainer>
    );
});

export default ForeignLanguage;