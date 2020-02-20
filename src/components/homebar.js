import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import home from '../assets/homebar/home.png';
import settings from '../assets/homebar/settings.png';
import favorites from '../assets/homebar/star.png';
import {
    Link
} from "react-router-dom";

const Botnav = styled(Nav)`
    background-color: #e6e6e6;
    position: fixed;
    width: 100%;
    bottom: 0;
`;

const NavImg = styled.img`
    margin: 10px auto 10px auto;
`;

const Homebar = () => (
    <Botnav fill className="justify-content-center" activeKey="/home">
        <Nav.Item>
            <Link to="/favorites"><NavImg src={favorites} /></Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/home"><NavImg src={home} /></Link>
        </Nav.Item>
        <Nav.Item>
            <Link to="/settings"><NavImg src={settings} /></Link>
        </Nav.Item>
    </Botnav>
);

export default Homebar;