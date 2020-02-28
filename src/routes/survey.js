import React from 'react';
import styled from 'styled-components';
import SurveyForm from '../components/forms/survey-form';
import Topbar from '../components/topbar';

const BufferDiv = styled.div`
    margin: 50px auto 50px auto;
    width: 85%;
`;

const Survey = (props) => {
    const data = props.data;

    return (
        <div>
            <Topbar title='Survey' hasBack handleClick={props.handleClick} />
            <BufferDiv>
                <h5>Study room</h5>
                <p>{data.title}</p>
                <SurveyForm data={data}
                    handleClick={props.handleClick}
                    handleSubmit={props.handleSubmit} />
            </BufferDiv>
        </div>
    );
};

export default Survey;