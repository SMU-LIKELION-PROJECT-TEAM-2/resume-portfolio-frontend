import React from 'react';
import styled from '@emotion/styled';
import { SectionContainer } from '../sharedStyles';
import useEditorStore from '../../../stores/editorStore';

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    gap: 12px;
    margin-bottom: 24px;
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
    padding-bottom: 16px;
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
`;

const Description = styled.p`
    font-size: 14px;
    color: #868e96;
    margin: -8px 0 16px 0;
`;

const Divider = styled.hr`
    border: 0;
    height: 1px;
    background-color: #e9ecef;
    margin: 40px 0;
`;

const UrlRow = styled.div`
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 16px;
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const RowHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const RowLabel = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #495057;
    white-space: nowrap;
`;

const baseInputStyles = `
  padding: 10px 14px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  font-size: 14px;
  background-color: #fff;
  &::placeholder { color: #adb5bd; }
  &:focus {
    outline: none;
    border-color: #339af0;
  }
`;

const StyledInput = styled.input`${baseInputStyles}; width: 100%;`;
const InputSmall = styled.input`${baseInputStyles}; flex-grow: 1;`;

const FileRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 12px 16px;
    margin-top: 12px;
`;

const HiddenFileInput = styled.input`
    display: none;
`;

const FileInputLabel = styled.label`
    flex-grow: 1;
    cursor: pointer;
    color: #adb5bd;
    font-size: 14px;
`;

const FileName = styled.span`
    color: #212529;
    font-size: 14px;
    // 긴 파일명 자르기
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
`;

const AddIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 12H19" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const DeleteIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6H5H21" stroke="#868e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" stroke="#868e96" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const Portfolio = () => {
    const portfolioData = useEditorStore((state) => state.portfolio);
    const setSectionData = useEditorStore((state) => state.setSectionData);
    
    const addUrl = () => {
        if (portfolioData.urls.length < 10) {
            const newUrls = [...portfolioData.urls, { id: Date.now(), name: '', link: '' }];
            setSectionData('portfolio', { ...portfolioData, urls: newUrls });
        }
    };
    const deleteUrl = (id) => {
        const newUrls = portfolioData.urls.filter(u => u.id !== id);
        setSectionData('portfolio', { ...portfolioData, urls: newUrls });
    };
    const handleUrlChange = (id, e) => {
        const { name, value } = e.target;
        const newUrls = portfolioData.urls.map(u => u.id === id ? { ...u, [name]: value } : u);
        setSectionData('portfolio', { ...portfolioData, urls: newUrls });
    };

    const addFile = () => {
        if (portfolioData.files.length < 10) {
            const newFiles = [...portfolioData.files, { id: Date.now(), fileObject: null }];
            setSectionData('portfolio', { ...portfolioData, files: newFiles });
        }
    };
    const deleteFile = (id) => {
        const newFiles = portfolioData.files.filter(f => f.id !== id);
        setSectionData('portfolio', { ...portfolioData, files: newFiles });
    };
    const handleFileChange = (id, e) => {
        const file = e.target.files[0];
        if (file) {
            const newFiles = portfolioData.files.map(f => f.id === id ? { ...f, fileObject: file } : f);
            setSectionData('portfolio', { ...portfolioData, files: newFiles });
        }
    };

    return (
        <SectionContainer>
            <MainHeader>
                <MainTitle>포트폴리오</MainTitle>
                <MainBadge>각각 최대 10개 등록 가능</MainBadge>
            </MainHeader>

            <SectionWrapper>
                <SectionHeader>
                    <SectionTitle>URL</SectionTitle>
                    <IconButton onClick={addUrl} aria-label="URL 추가"><AddIcon /></IconButton>
                </SectionHeader>

                {portfolioData.urls.map((url, index) => (
                    <UrlRow key={url.id}>
                        <RowHeader>
                            <RowLabel>URL {index + 1}</RowLabel>
                            <InputSmall type="text" name="name" value={url.name} onChange={e => handleUrlChange(url.id, e)} placeholder="URL 이름을 입력해주세요" />
                            <IconButton onClick={() => deleteUrl(url.id)} aria-label={`URL ${index + 1} 삭제`}><DeleteIcon /></IconButton>
                        </RowHeader>
                        <StyledInput type="text" name="link" value={url.link} onChange={e => handleUrlChange(url.id, e)} placeholder="링크를 입력해주세요" />
                    </UrlRow>
                ))}
            </SectionWrapper>
            
            <Divider />

            <SectionWrapper>
                <SectionHeader>
                    <SectionTitle>첨부 파일</SectionTitle>
                    <IconButton onClick={addFile} aria-label="첨부 파일 추가"><AddIcon /></IconButton>
                </SectionHeader>
                <Description>파일별 최대 10MB까지 업로드 가능 (확장자 : PDF, JPG, PNG)</Description>
                
                {portfolioData.files.map((file, index) => (
                    <FileRow key={file.id}>
                        <RowLabel>파일 {index + 1}</RowLabel>
                        <FileInputLabel htmlFor={`file-upload-${file.id}`}>
                            {file.fileObject ? <FileName>{file.fileObject.name}</FileName> : '파일을 선택해주세요'}
                        </FileInputLabel>
                        <HiddenFileInput id={`file-upload-${file.id}`} type="file" onChange={e => handleFileChange(file.id, e)} accept=".pdf,.jpg,.jpeg,.png"/>
                        <IconButton onClick={() => deleteFile(file.id)} aria-label={`파일 ${index + 1} 삭제`}><DeleteIcon /></IconButton>
                    </FileRow>
                ))}
            </SectionWrapper>
        </SectionContainer>
    );
};

export default Portfolio;