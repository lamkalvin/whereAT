import React from 'react';
import styled from 'styled-components';
import SurveyForm from '../components/survey-form';
import Topbar from '../components/topbar';

const BufferDiv = styled.div`
    margin: 50px auto 50px auto;
    width: 85%;
`;

const SurveyView = () => (
    <div>
        <Topbar title='Survey' hasBack={true} />
        <BufferDiv>
            <h5>Study room</h5>
            <p>Galbraith Hall - The Think Tank</p>
            <SurveyForm />
        </BufferDiv>
    </div>
);

export default SurveyView;