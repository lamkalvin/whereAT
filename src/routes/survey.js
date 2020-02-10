import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import back from '../assets/back.png';
import SurveyForm from '../components/survey-form';
import { Link } from "react-router-dom";

const Topbar = styled(Navbar)`
    background-color: #2D9CDB;
`;

const Title = styled(Navbar.Brand)`
    text-align: center;
    width: 75%;
    color: white;
`;

const BufferDiv = styled.div`
    margin: 50px auto 50px auto;
    width: 85%;
`;

const SurveyView = () => (
    <div>
        <Topbar expand="lg" sticky="top">
            <Link to="/view-space"><img src={back} /></Link>
            <Title href="#">
                <h1 style={{ color: 'white' }}>Survey</h1>
            </Title>
        </Topbar>
        <BufferDiv>
            <h5>Study room</h5>
            <p>Galbraith Hall - The Think Tank</p>
            <SurveyForm />
        </BufferDiv>
    </div>
);

export default SurveyView;