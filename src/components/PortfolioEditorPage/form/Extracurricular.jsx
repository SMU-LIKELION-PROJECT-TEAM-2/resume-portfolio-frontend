import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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

const ActivityRow = styled.div`
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

const StyledTextarea = styled.textarea`
    ${baseInputStyles}
    resize: vertical;
    font-family: inherit;
`;

const DatePickerInput = styled(StyledInput)`
  cursor: pointer;
`;

const FieldsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
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

const CustomDateInput = forwardRef(({ value, onClick, placeholder }, ref) => (
  <DateInputWrapper ref={ref} onClick={onClick}>
    <DatePickerInput 
      value={value} 
      placeholder={placeholder} 
      readOnly
    />
    <IconWrapper>
      <CalendarIcon />
    </IconWrapper>
  </DateInputWrapper>
));

const Extracurricular = () => {
    const activities = useEditorStore((state) => state.extracurricular);
    const setSectionData = useEditorStore((state) => state.setSectionData);

    const addActivity = () => {
        if (activities.length >= 30) {
            alert('최대 30개까지 등록 가능합니다.');
            return;
        }
        const newActivities = [
            ...activities,
            { id: Date.now(), name: '', organization: '', startDate: null, endDate: null, description: '' }
        ];
        setSectionData('extracurricular', newActivities);
    };

    const deleteActivity = (id) => {
        const newActivities = activities.filter(act => act.id !== id);
        setSectionData('extracurricular', newActivities);
    };

    const handleInputChange = (id, e) => {
        const { name, value } = e.target;
        const newActivities = activities.map(act => 
            act.id === id ? { ...act, [name]: value } : act
        );
        setSectionData('extracurricular', newActivities);
    };

    const handleDateChange = (id, fieldName, date) => {
        const newActivities = activities.map(act =>
            act.id === id ? { ...act, [fieldName]: date } : act
        );
        setSectionData('extracurricular', newActivities);
    };

    return (
        <SectionContainer>
            <MainHeader>
                <MainTitle>대외활동</MainTitle>
                <MainBadge>최대 30개 등록 가능</MainBadge>
            </MainHeader>

            <SectionWrapper>
                <SectionHeader>
                    <SectionTitle>대외활동 정보</SectionTitle>
                    <IconButton onClick={addActivity} aria-label="대외활동 정보 추가">
                        <AddIcon />
                    </IconButton>
                </SectionHeader>
                
                {activities.map((activity, index) => (
                    <ActivityRow key={activity.id}>
                        <RowHeader>
                            <RowLabel>대외활동 {index + 1}</RowLabel>
                            <IconButton onClick={() => deleteActivity(activity.id)} aria-label={`대외활동 ${index + 1} 삭제`}>
                                <DeleteIcon />
                            </IconButton>
                        </RowHeader>
                        
                        <FieldsGrid>
                            <FieldWrapper className="full-width">
                                <FieldLabel>활동명</FieldLabel>
                                <StyledInput
                                    type="text" name="name" value={activity.name}
                                    onChange={e => handleInputChange(activity.id, e)}
                                    placeholder="활동명을 입력해주세요"
                                />
                            </FieldWrapper>

                            <FieldWrapper className="full-width">
                                <FieldLabel>소속/기관</FieldLabel>
                                <StyledInput
                                    type="text" name="organization" value={activity.organization}
                                    onChange={e => handleInputChange(activity.id, e)}
                                    placeholder="소속/기관이 없을 경우 개인 또는 기타로 입력해주세요"
                                />
                            </FieldWrapper>

                            <FieldWrapper className="full-width">
                                <FieldLabel>활동 기간</FieldLabel>
                                <DateInputContainer>
                                    <DatePicker
                                        selected={activity.startDate}
                                        onChange={(date) => handleDateChange(activity.id, 'startDate', date)}
                                        selectsStart
                                        startDate={activity.startDate}
                                        endDate={activity.endDate}
                                        dateFormat="yyyy.MM"
                                        showMonthYearPicker
                                        placeholderText="시작년월 (YYYY.MM)"
                                        customInput={<CustomDateInput />}
                                    />
                                    <span>~</span>
                                    <DatePicker
                                        selected={activity.endDate}
                                        onChange={(date) => handleDateChange(activity.id, 'endDate', date)}
                                        selectsEnd
                                        startDate={activity.startDate}
                                        endDate={activity.endDate}
                                        minDate={activity.startDate}
                                        dateFormat="yyyy.MM"
                                        showMonthYearPicker
                                        placeholderText="종료년월 (YYYY.MM)"
                                        customInput={<CustomDateInput />}
                                    />
                                </DateInputContainer>
                            </FieldWrapper>

                            <FieldWrapper className="full-width">
                                <FieldLabel>활동 설명</FieldLabel>
                                <StyledTextarea
                                    name="description" value={activity.description}
                                    onChange={e => handleInputChange(activity.id, e)}
                                    placeholder="활동 내용과 역할, 상세 기여도를 작성해주세요"
                                    rows="5"
                                />
                            </FieldWrapper>
                        </FieldsGrid>
                    </ActivityRow>
                ))}
            </SectionWrapper>
        </SectionContainer>
    );
};

export default Extracurricular;