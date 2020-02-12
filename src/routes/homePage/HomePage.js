import React from 'react';
import {
    InputGroup,
    FormControl,
    Image,
    Button
} from 'react-bootstrap';
import {Topbar} from '../../components';
import styled from 'styled-components';

const searchIcon = require('../../assets/search.png');
const pencilIcon = require('../../assets/icons/pencil.png');
const pinIcon = require('../../assets/icons/pin.png');
const routeIcon = require('../../assets/icons/route.png')
const stackIcon = require('../../assets/icons/stack.png');

const TileButton = styled(Button)`
    display: flex;
    width: 85%;
    height: 150px;
    margin: 20px auto 20px;
    background-color: #2D9CDB;
    border: none;
    border-radius: 20px;
    align-items: center;

    font-size: 24px;
    text-align: left;
    padding-left: 20px;
`

const HomePage = () => (
    <div>
        <Topbar title='where @' />
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px'}}>
            <InputGroup style={{width: '85%', margin: '0px auto 20px'}}>
                <InputGroup.Prepend>
                    <InputGroup.Text>
                        <Image src={searchIcon} />
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl placeholder="Search"/>
            </InputGroup>

            <TileButton href='/search'>
                <Image src={pencilIcon} style={{paddingRight: '20px'}}/>
                Search for study spaces by preferences
            </TileButton>

            <TileButton href='/near-you-results'>
                <Image src={pinIcon} style={{paddingRight: '20px'}}/>
                Study spaces near you
            </TileButton>

            <TileButton href='/class-search'>
                <Image src={routeIcon} style={{paddingRight: '20px'}}/>
                Where is your next class?
            </TileButton>

            <TileButton>
                <Image src={stackIcon} style={{paddingRight: '20px'}}/>
                Recently viewed
            </TileButton>
        </div>
        <div>
            
        </div>
    </div>
);

export default HomePage;