import React from 'react';
import Autocomplete from '../../components/autocomplete';
import { Topbar } from '../../components';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Link, withRouter } from "react-router-dom";

const pencilIcon = require('../../assets/icons/pencil.png');
const pinIcon = require('../../assets/icons/pin.png');
const stackIcon = require('../../assets/icons/stack.png');
const addIcon = require('../../assets/icons/bookmark-add.png');

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
const BufferDiv = styled.div`
    margin: 50px auto 100px auto;
    width: 85%;
`;

const HomePage = (props) => {
    let titles = props.data.map(({ title }) => title)

    return (
        <div>
            <Topbar title='where @' />
            <BufferDiv style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px' }}>
                <Autocomplete suggestions={titles} data={props.data} history={props.history} />


                <Link to="/search">
                    <TileButton type="submit">
                        <Image src={pencilIcon} style={{ paddingRight: '20px' }} />
                        Specify preferences
                </TileButton>
                </Link>

                <Link to="/location-search">
                    <TileButton type="submit">
                        <Image src={pinIcon} style={{ paddingRight: '20px' }} />
                        Search by location
                </TileButton>
                </Link>

                <Link to="/recently-viewed">
                    <TileButton type="submit">
                        <Image src={stackIcon} style={{ paddingRight: '20px' }} />
                        Recently viewed
                    </TileButton>
                </Link>
                <Link to="/new-space">
                    <TileButton type="submit">
                        <Image src={addIcon} style={{paddingRight: '20px'}}/>
                        Add study space
                    </TileButton>
                </Link>
            </BufferDiv>
    </div>
    )
};

export default withRouter(HomePage);