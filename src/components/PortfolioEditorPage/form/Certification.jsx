import React from 'react';
import styled from '@emotion/styled';
import { SectionContainer } from '../sharedStyles';
import useEditorStore from '../../../stores/editorStore';

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

const CertificationRow = styled.div`
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

const DateInputWrapper = styled.div`
    position: relative;
    width: 100%;
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

const Certification = () => {
    // 4. useState 대신 store에서 상태와 액션을 가져옵니다.
    const certifications = useEditorStore((state) => state.certification);
    const setSectionData = useEditorStore((state) => state.setSectionData);

    const addCertification = () => {
        if (certifications.length >= 30) {
            alert('최대 30개까지 등록 가능합니다.');
            return;
        }
        // 새로운 배열을 만들어 store에 업데이트 요청
        const newCertifications = [
            ...certifications,
            // DatePicker를 사용한다면 acquisitionDate는 null로 초기화해야 합니다.
            { id: Date.now(), name: '', score: '', issuingOrg: '', acquisitionDate: null }
        ];
        setSectionData('certification', newCertifications);
    };

    const deleteCertification = (id) => {
        const newCertifications = certifications.filter(cert => cert.id !== id);
        setSectionData('certification', newCertifications);
    };

    const handleCertificationChange = (id, e) => {
        const { name, value } = e.target;
        const newCertifications = certifications.map(cert => 
            cert.id === id ? { ...cert, [name]: value } : cert
        );
        setSectionData('certification', newCertifications);
    };

    return (
        <SectionContainer>
            <MainHeader>
                <MainTitle>자격증</MainTitle>
                <MainBadge>최대 30개 등록 가능</MainBadge>
            </MainHeader>

            <SectionWrapper>
                <SectionHeader>
                    <SectionTitle>자격증 정보</SectionTitle>
                    <IconButton onClick={addCertification} aria-label="자격증 정보 추가">
                        <AddIcon />
                    </IconButton>
                </SectionHeader>

                {certifications.map((cert, index) => (
                    <CertificationRow key={cert.id}>
                        <RowHeader>
                            <RowLabel>자격증 {index + 1}</RowLabel>
                            <IconButton onClick={() => deleteCertification(cert.id)} aria-label={`자격증 ${index + 1} 삭제`}>
                                <DeleteIcon />
                            </IconButton>
                        </RowHeader>
                        
                        <FieldsGrid>
                            <FieldWrapper className="full-width">
                                <FieldLabel>자격증명</FieldLabel>
                                <StyledInput
                                    type="text" name="name" value={cert.name}
                                    onChange={e => handleCertificationChange(cert.id, e)}
                                    placeholder="자격증명을 입력해주세요"
                                />
                            </FieldWrapper>

                            <FieldWrapper>
                                <FieldLabel>점수/급</FieldLabel>
                                <StyledInput
                                    type="text" name="score" value={cert.score}
                                    onChange={e => handleCertificationChange(cert.id, e)}
                                    placeholder="자격증의 점수 또는 급을 입력해주세요"
                                />
                            </FieldWrapper>

                            <FieldWrapper>
                                <FieldLabel>발급 기관</FieldLabel>
                                <StyledInput
                                    type="text" name="issuingOrg" value={cert.issuingOrg}
                                    onChange={e => handleCertificationChange(cert.id, e)}
                                    placeholder="발급 기관명을 입력해주세요"
                                />
                            </FieldWrapper>

                            {/* 만약 DatePicker를 사용한다면 이 부분을 DatePicker 컴포넌트로 교체해야 합니다. */}
                            <FieldWrapper className="full-width">
                                <FieldLabel>취득월</FieldLabel>
                                <DateInputWrapper>
                                    <StyledInput 
                                        type="text" 
                                        name="acquisitionDate" 
                                        value={cert.acquisitionDate} 
                                        onChange={e => handleCertificationChange(cert.id, e)} 
                                        placeholder="YYYY.MM"
                                    />
                                    <IconWrapper><CalendarIcon /></IconWrapper>
                                </DateInputWrapper>
                            </FieldWrapper>
                        </FieldsGrid>
                    </CertificationRow>
                ))}
            </SectionWrapper>
        </SectionContainer>
    );
};

export default Certification;