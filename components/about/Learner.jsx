import React, { Component } from 'react';
import styled from 'styled-components';

const LearnerContainer = styled.div`

    color: white;
`;


export default class Learner extends Component {
    render() {
        return (
            <LearnerContainer>
                <h3>Learner</h3>
                <div>
                    <h5>University of British Columbia</h5>
                    <ul>
                        <li>Combined Major in Business and Computer Science</li>
                        <li>Deans Honor List</li>
                    </ul>
                </div>
            </LearnerContainer>
        )
    }
}
