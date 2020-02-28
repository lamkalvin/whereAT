import React from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';

const Overlay = styled(Card.ImgOverlay)`
    padding-top: 0px;
    margin-top: 70%;
    margin-bottom: 0px;
`;

const Title = styled(Card.Title)`
    color: white;
    font-size: 150%;
`;

const Profile = (props) => (
    
    <Card>
        <Card.Img src={props.img.slice(0,5) === 'https' ? props.img : window.location.origin + props.img} alt="Card image" />
        {/* <Overlay>
            <Title>{props.title}</Title>
        </Overlay> */}
    </Card>
);

export default Profile;