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
            src={back} 
            onClick={() => window.history.back()}
            style={{position: 'absolute', float: 'left', width: '24px', height: '24px'}}
        />}
        <Title href="#">
            <h1 style={{ color: 'white', textAlign: 'center', fontSize: props.titleSize }}>{props.title}</h1>
        </Title>
    </StyledNav>
);

export default Topbar;