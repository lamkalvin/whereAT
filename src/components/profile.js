import React from 'react';
import Card from 'react-bootstrap/Card';

const Profile = (props) => (
    
    <Card>
        <Card.Img src={props.img.slice(0,5) === 'https' ? props.img : window.location.origin + props.img} alt="Card image" />
    </Card>
);

export default Profile;