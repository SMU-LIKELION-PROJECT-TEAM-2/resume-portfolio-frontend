import React from 'react';
import styled from '@emotion/styled';
import JobItem from './JobItem';

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const JobList = ({ jobs }) => {
  if (!jobs || jobs.length === 0) {
    return <p style={{ textAlign: 'center', minHeight: '300px', paddingTop: '100px' }}>해당 카테고리의 채용 공고가 없습니다.</p>;
  }

  return (
    <ListContainer>
      {jobs.map(job => (
        <JobItem key={job.id} job={job} />
      ))}
    </ListContainer>
  );
};

export default JobList;