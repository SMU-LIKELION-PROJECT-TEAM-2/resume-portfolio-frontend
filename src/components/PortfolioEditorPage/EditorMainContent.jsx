import React, { useState, useRef, useCallback } from 'react';
import styled from '@emotion/styled';
import { EditorState, RichUtils, CompositeDecorator, AtomicBlockUtils } from 'draft-js'; 
import EditorHeader from './EditorHeader';
import EditorCanvas from './EditorCanvas';
import EditorFooter from './EditorFooter';

const Media = (props) => {
  const entity = props.contentState.getEntity(props.block.getEntityAt(0));
  const { src } = entity.getData();
  const type = entity.getType();

  if (type === 'IMAGE') {
    return (
      <img 
        src={src} 
        alt="" 
        style={{ 
            maxWidth: '100%',
            display: 'block',
        }} 
      />
    );
  }

  return null;
};

function mediaBlockRenderer(block) {
  if (block.getType() === 'atomic') {
    return {
      component: Media,
      editable: false,
    };
  }
  return null;
}

const Link = (props) => {
  const { url } = props.contentState.getEntity(props.entityKey).getData();

  const handleLinkClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };
  
  return (
    <a
      href={url}
      onClick={handleLinkClick}
      title={url}
      style={{
        color: '#007bff',
        textDecoration: 'underline',
        cursor: 'pointer',
      }}
    >
      {props.children}
    </a>
  );
};

const findLinkEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(
    (character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === 'LINK'
      );
    },
    callback
  );
};

const decorator = new CompositeDecorator([
  {
    strategy: findLinkEntities,
    component: Link,
  },
]);

const MainContentContainer = styled.div`
  flex: 1;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-height: 0;
`;

const getLinkEntityKey = (editorState) => {
  const selection = editorState.getSelection();
  if (selection.isCollapsed()) return null;
  const contentState = editorState.getCurrentContent();
  const startKey = selection.getStartKey();
  const startOffset = selection.getStartOffset();
  const block = contentState.getBlockForKey(startKey);
  return block.getEntityAt(startOffset);
};

function EditorMainContent() {
  const [aspectRatio, setAspectRatio] = useState('16:9');

  const [editorState, setEditorState] = useState(() => 
    EditorState.createEmpty(decorator)
  );

  const editorRef = useRef(null);

  const handleInsertImage = () => {
    const url = prompt('삽입할 이미지의 URL을 입력하세요:');
    if (!url) {
      return;
    }
    
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      'IMAGE',
      'IMMUTABLE',
      { src: url }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    
    const newEditorState = AtomicBlockUtils.insertAtomicBlock(
      editorState,
      entityKey,
      ' '
    );
    
    handleEditorChange(EditorState.forceSelection(newEditorState, newEditorState.getCurrentContent().getSelectionAfter()));
    focusEditor();
  };
  const focusEditor = useCallback(() => {
    editorRef.current?.focus();
  }, []);

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleKeyCommand = (command, es) => {
    const newState = RichUtils.handleKeyCommand(es, command);
    if (newState) {
      handleEditorChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const toggleInlineStyle = (inlineStyle) => {
    handleEditorChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
    focusEditor();
  };

  const toggleBlockType = (blockType) => {
    handleEditorChange(RichUtils.toggleBlockType(editorState, blockType));
    focusEditor();
  };
  
  const handleAddLink = useCallback(() => {
    focusEditor();
    const selection = editorState.getSelection();
    if (selection.isCollapsed()) {
      alert('링크를 적용할 텍스트를 먼저 선택해주세요.');
      return;
    }

    const contentState = editorState.getCurrentContent();
    const linkKey = getLinkEntityKey(editorState);

    if (linkKey && contentState.getEntity(linkKey).getType() === 'LINK') {
      const newEditorState = RichUtils.toggleLink(editorState, selection, null);
      handleEditorChange(newEditorState);
      alert('링크가 제거되었습니다.');
    } else {
      const url = prompt('적용할 링크 URL을 입력하세요:');
      if (!url) return;
      
      const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', { url });
      const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
      let newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
      newEditorState = RichUtils.toggleLink(newEditorState, newEditorState.getSelection(), entityKey);
      handleEditorChange(newEditorState);
    }
  }, [editorState, focusEditor]);

  return (
    <MainContentContainer>
      <EditorHeader
        currentAspectRatio={aspectRatio}
        onSetAspectRatio={setAspectRatio}
        editorState={editorState}
        onToggleInlineStyle={toggleInlineStyle}
        onToggleBlockType={toggleBlockType}
        onAddLink={handleAddLink}
        onInsertImage={handleInsertImage}
      />
      <EditorCanvas
        aspectRatio={aspectRatio}
        editorState={editorState}
        onChange={handleEditorChange}
        handleKeyCommand={handleKeyCommand}
        editorForwardedRef={editorRef}
        onFocus={focusEditor}
        blockRendererFn={mediaBlockRenderer}
      />
      <EditorFooter />
    </MainContentContainer>
  );
}

export default EditorMainContent;