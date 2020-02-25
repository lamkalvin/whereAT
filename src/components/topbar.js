import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import back from '../assets/back.png';

const Title = styled(Navbar.Brand)`
    width: 100%;
    text-wrap: normal;
`;

const StyledNav = styled(Navbar)`
    background-color: #2D9CDB;
`;

const Topbar = (props) => (
    <StyledNav expand="lg" sticky="top">
        { props.hasBack &&
        <img
            alt={"back button"}
            src={back}
            onClick={props.handleClick ? (() => props.handleClick()) : (() => window.history.back())}
            style={{position: 'absolute', left: '20px', width: 'auto', height: '24px', paddingRight: '200px'}}
        />}
        <Title style={{ color: 'white', textAlign: 'center', fontSize: 'min(5vw, 28px)', wordWrap: 'break-word' }}>
            {props.title}
        </Title>
    </StyledNav>
);

export default Topbar;
