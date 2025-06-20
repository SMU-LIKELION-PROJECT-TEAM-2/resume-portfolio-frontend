import React, { useState, useRef } from 'react';
import PortfolioEditorPageLayout from '../../Layout/PortfolioEditorPageLayout';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

const PortfolioEditorPage = () => {
  const [resumeTitle, setResumeTitle] = useState('');

  const [visibleSections, setVisibleSections] = useState(
    RESUME_SECTIONS_CONFIG.reduce((acc, section) => {
      acc[section.id] = true;
      return acc;
    }, {})
  );

  const sectionRefs = useRef({});
  const resumeContentRef = useRef(null);

  const gatherAllData = () => {
    const allData = {};
    for (const sectionId in sectionRefs.current) {
      const sectionRef = sectionRefs.current[sectionId];
      if (sectionRef && typeof sectionRef.getComponentData === 'function') {
        allData[sectionId] = sectionRef.getComponentData();
      }
    }
    return {
        title: resumeTitle,
        ...allData
    };
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
    const content = resumeContentRef.current;
    if (!content) return;

    try {
        const canvas = await html2canvas(content, { scale: 2 });
        const imageData = canvas.toDataURL('image/png');
        
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const ratio = canvasWidth / pageWidth;
        const calculatedHeight = canvasHeight / ratio;

        pdf.addImage(imageData, 'PNG', 0, 0, pageWidth, calculatedHeight);
        pdf.save(`${resumeTitle || '새로운 이력서'}.pdf`);
    } catch (error) {
        console.error("PDF 생성 중 오류 발생:", error);
        alert("PDF 생성에 실패했습니다.");
    }
  };

  const toggleSectionVisibility = (sectionId) => {
    const sectionConf = RESUME_SECTIONS_CONFIG.find(s => s.id === sectionId);
    if (sectionConf && sectionConf.isRequired) return;

    setVisibleSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const sectionsToRender = RESUME_SECTIONS_CONFIG
    .filter(section => section.isRequired || visibleSections[section.id])
    .map(section => React.cloneElement(section.component, { key: section.id }));
    
  return (
    <PortfolioEditorPageLayout
      actionBar={
        <ActionBar 
          onTempSave={handleTempSave}
          onSave={handleSave}
          onPdfDownload={handlePdfDownload}
        />
      }
      headerContent={
        <ResumeTitleInput 
          value={resumeTitle} 
          onChange={(e) => setResumeTitle(e.target.value)} 
        />
      }
      resumeSections={sectionsToRender}
      guide={
        <Guide
          sections={RESUME_SECTIONS_CONFIG}
          visibleSections={visibleSections}
          onToggle={toggleSectionVisibility}
        />
      }
    />
  );
};

export default PortfolioEditorPage;