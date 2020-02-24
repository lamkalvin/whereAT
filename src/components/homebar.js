import React from 'react';
import styled from 'styled-components';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import home from '../assets/homebar/home.png';
import settings from '../assets/homebar/settings.png';
import favorites from '../assets/homebar/star.png';
import {
    Link
} from "react-router-dom";

const Botnav = styled(ButtonGroup)`
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index: 500;
`;

const NavImg = styled.img`
    padding: 10px auto 10px auto;
    max-width: 40%;
    height: auto;
`;

const NavDiv = styled.div`
    padding: 0px;
    width:100%;
`;

const Homebar = () => (
    <Botnav>
        <Button variant="light">
            <Link to="/favorites">
                <NavDiv><NavImg src={favorites} /></NavDiv>
            </Link>
        </Button>
        <Button variant="light">
            <Link to="/">
                <NavDiv><NavImg src={home} /></NavDiv>
            </Link>
        </Button>
        <Button variant="light">
            <Link to="/settings">
                <NavDiv><NavImg src={settings} /></NavDiv>
            </Link>
        </Button>
    </Botnav>
);

export default Homebar;
