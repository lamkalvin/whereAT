import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import galbraith from '../assets/study-spaces/galbraith.jpg';

// TODO: fix the alignment on overlay
const Overlay = styled(Card.ImgOverlay)`
    display: flex;
    justify-content: end;
    position: relative;
    bottom: 30px;
`;

const Profile = () => (
    <Card>
        <Card.Img src={galbraith} alt="Card image" />
        {/* <Overlay> */}
        <Card.Body>
            <Card.Title>Galbraith Hall - The Think Tank</Card.Title>
        </Card.Body>
        {/* </Overlay> */}
    </Card>
);

export default Profile;