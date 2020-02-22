import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import trash from '../assets/trash.png';
import Topbar from '../components/topbar';
import SettingsToast from '../components/settings-toast';

const BufferDiv = styled.div`
    margin: 50px auto 50px auto;
    width: 85%;
`;

const Disclaimer = styled.div`
    margin: 20% auto 50px auto;
    text-align: center;
`;

const Settings = (props) => {
    const [showToast, setShowToast] = useState(false);

    return (
        <div>
            <SettingsToast handleClick={() => setShowToast(false)} show={showToast} />
            <Topbar title='Settings' hasBack={true} />
            <BufferDiv>
                <Button variant="danger" size="lg" block onClick={() => {props.handleClick(); setShowToast(true)}}>
                    <img src={trash} alt={"trash"} style={{ marginRight: '10%', width: '15%' }} />
                    <p style={{ fontSize: '125%', display: 'inline' }}>Clear all local data</p>
                </Button>
                <Button variant="danger" size="lg" block onClick={() => {props.logOut()}}>
                    <p style={{ fontSize: '125%', display: 'inline' }}>Log out</p>
                </Button>
                <Disclaimer>
                    <p style={{ color: '#2D9CDB' }}>
                        <b>where@</b> has been created by Andy Duong, Kalvin Lam, and Bella Le for COGS 120 / CSE 170!
                    </p>
                    <p>We hope you enjoy our work!</p>
                    <p>All work is wholly original blah blah disclaimer blah blah blah</p>
                </Disclaimer>
            </BufferDiv>
        </div>
    )
};

export default Settings;
