import React from 'react';
import styled from '@emotion/styled';
import { Editor } from 'draft-js';

const CanvasOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
  padding: 20px;
`;

const CanvasStyled = styled.div`
  width: 80%;
  max-width: 900px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  border: 1px solid #ccc;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const EditorContainer = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  cursor: text;
  overflow-wrap: break-word;

  .public-DraftEditorPlaceholder-root {
    color: #adb5bd;
    position: absolute;
    pointer-events: none;
  }
  .public-DraftEditor-content {
    min-height: 300px;
  }
`;

function EditorCanvas({
  aspectRatio, editorState, onChange, handleKeyCommand, editorForwardedRef, onFocus, blockRendererFn
}) {
  return (
    <CanvasOuterWrapper onClick={onFocus}>
      <CanvasStyled aspectRatio={aspectRatio}>
        <EditorContainer>
          <Editor
            ref={editorForwardedRef}
            editorState={editorState}
            onChange={onChange}
            handleKeyCommand={handleKeyCommand}
            placeholder="여기에 내용을 입력하세요..."
            blockRendererFn={blockRendererFn}
          />
        </EditorContainer>
      </CanvasStyled>
    </CanvasOuterWrapper>
  );
}

export default EditorCanvas;