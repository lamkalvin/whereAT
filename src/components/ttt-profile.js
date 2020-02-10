import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import galbraith from '../assets/study-spaces/galbraith.jpg';

const Overlay = styled(Card.ImgOverlay)`
    padding-top: 0px;
    margin-top: 70%;
    margin-bottom: 0px;
`;

const Title = styled(Card.Title)`
    color: white;
    font-size: 150%;
`;

const Profile = () => (
    <Card>
        <Card.Img src={galbraith} alt="Card image" />
        <Overlay>
        {/* <Card.Body> */}
            <Title>Galbraith Hall - The Think Tank</Title>
        {/* </Card.Body> */}
        </Overlay>
    </Card>
);

export default Profile;