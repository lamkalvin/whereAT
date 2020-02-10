import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import trash from '../assets/trash.png';
import Topbar from '../components/topbar'

const BufferDiv = styled.div`
    margin: 50px auto 50px auto;
    width: 85%;
`;

const Disclaimer = styled.div`
    margin: 20% auto 50px auto;
    text-align: center;
`;

const Settings = () => (
    <div>
        <Topbar title='Settings' hasBack={true} />
        <BufferDiv>
            <Button variant="danger" size="lg" block>
                <img src={trash} style={{ marginRight: '10%', width: '15%' }} />
                <p style={{ fontSize: '125%', display: 'inline' }}>Delete all local data</p>
            </Button>
            <Disclaimer>
                <p style={{color: '#2D9CDB'}}>
                    <b>where@</b> has been created by Andy Duong, Kalvin Lam, and Bella Le for COGS 120 / CSE 170!
                </p>
                <p>We hope you enjoy our work!</p>
                <p>All work is wholly original blah blah disclaimer blah blah blah</p>
            </Disclaimer>
        </BufferDiv>
    </div>
);

export default Settings;