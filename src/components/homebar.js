import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import home from '../assets/homebar/home.png';
import settings from '../assets/homebar/settings.png';
import favorites from '../assets/homebar/star.png';

const Botnav = styled(Nav)`
    background-color: #e6e6e6;
    position: fixed;
    width: 100%;
    bottom: 0;
`;

const Homebar = () => (
    <Botnav fill className="justify-content-center" activeKey="/home">
        <Nav.Item>
            <Nav.Link eventKey="link-1">
                <img src={favorites} />
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/home">
                <img src={home} />
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">
                <img src={settings} />
            </Nav.Link>
        </Nav.Item>
    </Botnav>
);

export default Homebar;