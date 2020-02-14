import React from 'react';
import styled from 'styled-components';
import Profile from '../../components/ttt-profile'
import Ambience from '../../components/ambience'
import Popularity from '../../components/popularity';
import Survey from '../../components/survey';
import Topbar from '../../components/topbar';

const BufferDiv = styled.div`
    margin: 50px auto 50px auto;
    width: 85%;
`;

const Parent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 10px;
    padding: 20px;
`;

function Hours(hr) {
    return (<div>
        <h3>Hours</h3>
        <p>8 a.m. to 11 p.m. daily</p>
    </div>)
};

function Seats(seats) {
    return (<div>
        <h3>Seats</h3>
        <p>48</p>
    </div>)
};

function Description(desc) {
    return <div style={{ gridArea: '2 / 1 / 3 / 3' }}>
        <h3>Description</h3>
        <p>Active study spaces inside Galbraith Hall</p>
    </div>
};

const ViewSpace = () => (
    <div>
        <Topbar title='The Think Tank' hasBack={true} />
        <Profile />
        <BufferDiv>
            <Parent>
                <Hours />
                <Seats />
                <Description />
                <Ambience val='med' />
                <Popularity val='med' />
            </Parent>
        </BufferDiv>
        <Survey />
    </div>
);

export default ViewSpace;
