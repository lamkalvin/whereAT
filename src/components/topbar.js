import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import back from '../assets/back.png';

const Title = styled.h3`
    width: 100%;
    text-wrap: normal;
    color: white;
    text-align: center;
    font-size: min(5vw, 28px);
    word-wrap: break-word;
    margin-top: 10px;
`;

const StyledNav = styled(Navbar)`
    background-color: #2D9CDB;
    box-shadow: 0px 2px 5px grey;
`;

const Topbar = (props) => (
    <StyledNav expand="lg" sticky="top">
        { props.hasBack &&
        <img
            alt={"back button"}
            src={back}
            onClick={props.handleClick ? (() => props.handleClick()) : (() => window.history.back())}
            style={{position: 'absolute', left: '20px', width: 'auto', height: '24px'}}
        />}
        <Title>
            {props.title}
        </Title>
    </StyledNav>
);

export default Topbar;
