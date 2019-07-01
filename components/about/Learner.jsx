import React, { Component } from 'react';
import styled from 'styled-components';

const FigherContainer = styled.div`
    position: absolute;
    left: 75%;
    top: 60%;
    width: 20%;
    height: 20%;
    color: white;
`;


export default class Learner extends Component {
    render() {
        return (
            <FigherContainer>
                <h3>Learner</h3>
                <div>
                    <h5>University of British Columbia</h5>
                    <ul>
                        <li>Combined Major in Business and Computer Science</li>
                        <li>Deans Honor List</li>
                    </ul>
                </div>
            </FigherContainer>
        )
    }
}
