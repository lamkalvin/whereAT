import React from 'react';
import styled from 'styled-components';
import {Form, Button} from 'react-bootstrap';
import { Homebar } from '../../components';

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LandingPage = () => (
    <StyledDiv style={{height: '100%'}}>
        <div style={{backgroundColor: "#2D9CDB", width: '100%', height: '50px', position:'absolute', top: 0}} />
        <h1>where @</h1>
        <Form>
            <Form.Group controlId='formUsername'>
                <Form.Control placeholder='Email' />
            </Form.Group>
            <Form.Group controlId='formPassword'>
                <Form.Control placeholder='Password' />
            </Form.Group>
        </Form>
        <Button variant='primary' type='submit' href='/view-space'>
            Login
        </Button>
    </StyledDiv>
);

export default LandingPage;