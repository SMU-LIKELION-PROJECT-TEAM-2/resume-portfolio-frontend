import React from 'react';
import styled from '@emotion/styled';
import { SectionContainer } from '../sharedStyles';
import useEditorStore from '../../../stores/editorStore';

const MainHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-bottom: 24px;
    border-bottom: 1px solid #dee2e6;
`;

const MainTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
`;

const SectionWrapper = styled.section`
    margin-top: 8px;
`;

const baseInputStyles = `
  width: 100%;
  padding: 14px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 15px;
  line-height: 1.6;
  color: #343a40;
  background-color: #fff;
  &::placeholder { color: #adb5bd; }
  &:focus {
    outline: none;
    border-color: #333;
  }
`;

const StyledTextarea = styled.textarea`
    ${baseInputStyles}
    resize: vertical;
    font-family: inherit;
`;

const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const FieldLabel = styled.label`
    font-size: 16px;
    font-weight: 600;
    color: #343a40;
`;

const SelfIntroduction = () => {
    const content = useEditorStore((state) => state.selfIntroduction);
    const setSectionData = useEditorStore((state) => state.setSectionData);

    const handleContentChange = (e) => {
        setSectionData('selfIntroduction', e.target.value);
    };

    return (
        <SectionContainer>
            <MainHeader>
                <MainTitle>자기소개</MainTitle>
            </MainHeader>

            <SectionWrapper>
                <FieldWrapper>
                    <FieldLabel>자기소개</FieldLabel>
                    <StyledTextarea 
                        name="content" 
                        value={content}
                        onChange={handleContentChange}
                        placeholder="본인의 강점과 업무 경험, 핵심 역량 등 구체적인 내용을 작성해주세요"
                        rows="15"
                    />
                </FieldWrapper>
            </SectionWrapper>
        </SectionContainer>
    );
};

export default SelfIntroduction;