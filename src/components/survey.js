import React from 'react';
import styled from 'styled-components';
import Jumbotron from 'react-bootstrap/jumbotron';
import Container from 'react-bootstrap/container';
import Button from 'react-bootstrap/button';

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
        <Button variant="primary">Survey</Button>
    </Centered>
    </Jumbotron>
);

export default Survey;