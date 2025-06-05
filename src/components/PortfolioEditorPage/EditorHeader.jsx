import React, { useState } from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  padding: 15px 20px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const TitleInputContainer = styled.div`
  flex-grow: 1;
`;

const DocumentTitle = styled.h2`
  font-size: 16px;
  color: #555;
  margin: 0 0 3px 0;
  font-weight: normal;
`;

const MainTitleInput = styled.input`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  border: none;
  outline: none;
  width: 100%;
  padding: 3px 0;
  &::placeholder {
    color: #adb5bd;
  }
`;

const TopActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ViewOptionsContainer = styled.div`
  position: relative;
`;

const ViewOptionsButton = styled.button`
  padding: 6px 10px;
  font-size: 12px;
  color: #333;
  background-color: #fff;
  border: 1px solid ${props => props.isOrangeBorder ? 'orange' : '#ccc'};
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    background-color: #f8f8f8;
  }
`;

const RatioDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 10;
  margin-top: 5px;
  padding: 5px 0;
  min-width: 100px;
`;

const RatioOptionButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px 15px;
  font-size: 13px;
  text-align: left;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ActionButton = styled.button`
  padding: 7px 14px;
  font-size: 13px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: #f8f9fa;
  cursor: pointer;
  color: #333;
  &:hover {
    background-color: #e9ecef;
  }
`;

const PrimaryButton = styled(ActionButton)`
  background-color:rgb(50, 50, 50);
  color: white;
  border-color:rgb(50, 50, 50);
  &:hover {
    background-color:rgb(0, 0, 0);
  }
`;

const EditingToolbar = styled.div`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  padding-top: 5px;
`;

const StyleButton = styled.button`
  padding: 6px 8px;
  font-size: 12px;
  border: 1px solid #ccc;
  background-color: ${props => props.active ? '#e0e0e0' : '#fff'};
  border-radius: 3px;
  cursor: pointer;
  min-width: 30px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ratioOptions = [
  { label: '1:1', value: '1/1' }, { label: '3:4', value: '3/4' },
  { label: '16:9', value: '16/9' }, { label: '자유', value: 'auto' },
];
const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD', icon: 'B' }, { label: 'Italic', style: 'ITALIC', icon: 'I' },
  { label: 'Underline', style: 'UNDERLINE', icon: 'U' }, { label: 'Monospace', style: 'CODE', icon: 'Mono' },
];
const BLOCK_TYPES = [
  { label: 'UL', style: 'unordered-list-item', icon: '기호 목록' }, { label: 'OL', style: 'ordered-list-item', icon: '번호 목록' },
];

function EditorHeader({
  currentAspectRatio, onSetAspectRatio, editorState, onToggleInlineStyle,
  onToggleBlockType, onAddLink, onInsertImage,
}) {
  const [isRatioDropdownOpen, setIsRatioDropdownOpen] = useState(false);

  const currentInlineStyle = editorState.getCurrentInlineStyle();
  const selection = editorState.getSelection();
  const currentBlockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <HeaderContainer>
      <TopRow>
        <TitleInputContainer>
          <DocumentTitle>새로운 이력서</DocumentTitle>
          <MainTitleInput type="text" placeholder="제목을 입력해주세요" />
        </TitleInputContainer>
        <TopActionsContainer>
          <ViewOptionsContainer>
            <ViewOptionsButton 
                isOrangeBorder={true}
                onClick={() => setIsRatioDropdownOpen(p => !p)}>
              비율 변경 {ratioOptions.find(r => r.value === currentAspectRatio)?.label || ''}
            </ViewOptionsButton>
            {isRatioDropdownOpen && (
              <RatioDropdown>
                {ratioOptions.map(option => (
                  <RatioOptionButton key={option.value} onClick={() => { onSetAspectRatio(option.value); setIsRatioDropdownOpen(false); }}>
                    {option.label}
                  </RatioOptionButton>
                ))}
              </RatioDropdown>
            )}
          </ViewOptionsContainer>
          <ActionButton>임시저장</ActionButton>
          <ActionButton>저장</ActionButton>
          <PrimaryButton>PDF 다운로드</PrimaryButton>
        </TopActionsContainer>
      </TopRow>
      <EditingToolbar>
        {INLINE_STYLES.map(type => (
          <StyleButton key={type.label} active={currentInlineStyle.has(type.style)} onMouseDown={e => { e.preventDefault(); onToggleInlineStyle(type.style); }} title={type.label}>
            {type.icon || type.label}
          </StyleButton>
        ))}
        {BLOCK_TYPES.map(type => (
          <StyleButton key={type.label} active={type.style === currentBlockType} onMouseDown={e => { e.preventDefault(); onToggleBlockType(type.style);}} title={type.label}>
            {type.icon || type.label}
          </StyleButton>
        ))}
        <StyleButton onMouseDown={e => { e.preventDefault(); onAddLink(); }} title="Add Link">🔗</StyleButton>
        <StyleButton onMouseDown={e => { e.preventDefault(); onInsertImage(); }} title="Insert Image">🖼️</StyleButton>
      </EditingToolbar>
    </HeaderContainer>
  );
}

export default EditorHeader;