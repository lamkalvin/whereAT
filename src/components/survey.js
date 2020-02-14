import React from 'react';
import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {
    Link
} from "react-router-dom";

const Centered = styled(Container)`
    text-align: center;
`;
const Survey = () => (
    <Jumbotron fluid>
    <Centered>
        <h3>Been here before?</h3>
        <p>
            Improve our data by doing our survey!
        </p>
        <Link to="/survey">
            <Button variant="primary">Survey</Button>
        </Link>
    </Centered>
    </Jumbotron>
);

export default Survey;