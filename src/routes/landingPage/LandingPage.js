import React from 'react';
import styled from 'styled-components';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LandingPage = (props) => (
    <StyledDiv style={{height: '100%'}}>
        <div style={{backgroundColor: "#2D9CDB", width: '100%', height: '80px', position:'absolute', top: 0}} />
        <h1>where @</h1>
        <p style={{textAlign: 'center'}}>Finding the right studying environment at UCSD</p>
        <p>Login below to get started!</p>
        <Form>
            <Form.Group controlId='formUsername'>
                <Form.Control placeholder='Email' />
            </Form.Group>
            <Form.Group controlId='formPassword'>
                <Form.Control placeholder='Password' />
            </Form.Group>
        </Form>
        <Link to="/home">
            <Button variant='primary' type='submit' onClick={props.login}>
                Login
            </Button>
        </Link>
    </StyledDiv>
);

export default LandingPage;