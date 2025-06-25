import React, { useRef } from 'react';
import PortfolioEditorPageLayout from '../../Layout/PortfolioEditorPageLayout';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import useEditorStore from '../../stores/editorStore';

import ActionBar from '../../components/PortfolioEditorPage/ActionBar';
import ResumeTitleInput from '../../components/PortfolioEditorPage/ResumeTitleInput';
import BasicInfo from '../../components/PortfolioEditorPage/form/BasicInfo';
import TechStack from '../../components/PortfolioEditorPage/form/TechStack';
import WorkExperience from '../../components/PortfolioEditorPage/form/WorkExperience';
import ProjectExperience from '../../components/PortfolioEditorPage/form/ProjectExperience';
import Portfolio from '../../components/PortfolioEditorPage/form/Portfolio';
import Education from '../../components/PortfolioEditorPage/form/Education';
import Extracurricular from '../../components/PortfolioEditorPage/form/Extracurricular';
import Certification from '../../components/PortfolioEditorPage/form/Certification';
import ForeignLanguage from '../../components/PortfolioEditorPage/form/ForeignLanguage';
import SelfIntroduction from '../../components/PortfolioEditorPage/form/SelfIntroduction';

import Guide from '../../components/PortfolioEditorPage/Guide';

const PortfolioEditorPage = () => {
  const {
    title,
    visibleSections,
    setTitle,
    toggleSectionVisibility,
    ...allSectionData // 나머지 모든 섹션 데이터 (basicInfo, education 등)
  } = useEditorStore();

  // sectionRefs는 데이터 수집용이 아니므로 제거
  const resumeContentRef = useRef(null); // PDF 생성용 ref는 유지

  // 2. 데이터 수집 함수가 매우 간단해짐
  const gatherAllData = () => {
    // 이미 store에 모든 데이터가 있으므로, 필요한 것만 골라서 반환
    const { title, ...sections } = useEditorStore.getState();
    return { title, ...sections };
  };

  const handleTempSave = () => {
    const resumeData = gatherAllData();
    localStorage.setItem('resumeDraft', JSON.stringify(resumeData));
    alert('이력서가 임시저장되었습니다.');
    console.log('임시저장 데이터:', resumeData);
  };

  const handleSave = () => {
    const resumeData = gatherAllData();
    console.log('최종 저장 데이터:', resumeData);
    alert('이력서가 저장되었습니다! (콘솔 확인)');
  };

  const handlePdfDownload = async () => {
    const contentToCapture = resumeContentRef.current;
    if (!contentToCapture) {
      console.error("PDF 생성 오류: 캡처할 DOM 요소를 찾을 수 없습니다.");
      return;
    }

    try {
      const canvas = await html2canvas(contentToCapture, { scale: 2 });
      const imageData = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;

      const ratio = canvasWidth / pageWidth;
      const totalImageHeight = canvasHeight / ratio;

      let position = 0;
      let heightLeft = totalImageHeight;

      pdf.addImage(imageData, 'PNG', 0, position, pageWidth, totalImageHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imageData, 'PNG', 0, position, pageWidth, totalImageHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${title || '새로운 이력서'}.pdf`);

    } catch (error) {
      console.error("PDF 생성 중 오류 발생:", error);
      alert("PDF 생성에 실패했습니다.");
    }
  };

  const RESUME_SECTIONS_CONFIG = [
    { id: 'basicInfo', name: '기본 정보', isRequired: true, component: <BasicInfo /> },
    { id: 'techStack', name: '기술 스택', isRequired: false, component: <TechStack /> },
    { id: 'workExperience', name: '경력', isRequired: false, component: <WorkExperience /> },
    { id: 'projectExperience', name: '프로젝트', isRequired: false, component: <ProjectExperience /> },
    { id: 'portfolio', name: '포트폴리오', isRequired: false, component: <Portfolio /> },
    { id: 'education', name: '학력', isRequired: false, component: <Education /> },
    { id: 'extracurricular', name: '대외활동', isRequired: false, component: <Extracurricular /> },
    { id: 'certification', name: '자격증', isRequired: false, component: <Certification /> },
    { id: 'foreignLanguage', name: '외국어', isRequired: false, component: <ForeignLanguage /> },
    { id: 'selfIntroduction', name: '자기소개', isRequired: false, component: <SelfIntroduction /> }
  ];

  const sectionsToRender = RESUME_SECTIONS_CONFIG
    .filter(section => visibleSections[section.id])
    .map(section => React.cloneElement(section.component, { key: section.id }));
    
    
  return (
    <PortfolioEditorPageLayout
      ref={resumeContentRef}
      actionBar={
        <ActionBar 
          onTempSave={handleTempSave}
          onSave={handleSave}
          onPdfDownload={handlePdfDownload}
        />
      }
      headerContent={
        // setTitle 액션을 직접 전달
        <ResumeTitleInput 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      }
      resumeSections={sectionsToRender}
      guide={
        <Guide
          // config와 상태, 액션을 Guide 컴포넌트에 전달
          sections={RESUME_SECTIONS_CONFIG}
          visibleSections={visibleSections}
          onToggle={toggleSectionVisibility}
        />
      }
    />
  );
};

export default PortfolioEditorPage;