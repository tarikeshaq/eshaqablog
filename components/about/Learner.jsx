import React from 'react';
import styled from 'styled-components';

const LearnerContainer = styled.div`

    color: white;
`;


export default () => (
  <LearnerContainer>
    <h3><strong>Learner</strong></h3>
    <div>
      <h5><i>University of British Columbia</i></h5>
      <ul>
        <p>Combined Major in Business and Computer Science</p>
        <p>Deans Honor List</p>
      </ul>
    </div>
  </LearnerContainer>
);
