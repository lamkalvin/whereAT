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
    width: 100%;
    height: 30vh;
    background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,156,219,1) 100%);;
    border: none;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-size: min(5vw, 24px);
    text-align: center;
`;

const TileImg = styled(Image)`
    max-width: min(10vw, 100%);
    height: auto;
    margin-bottom: 4vh;
`;

const BufferDiv = styled.div`
    margin: 50px auto 100px auto;
    width: 90%;
`;

const ButtonDiv = styled.div`
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    display: grid;
    grid-gap: 10px;
    margin-top: 7vh;
`;

const HomePage = (props) => {
    let titles = props.data.map(({ title }) => title)

    return (
        <div>
            <Topbar title='where @' />
            <BufferDiv>

                <Autocomplete suggestions={titles} data={props.data} history={props.history} />
                <ButtonDiv>
                    <div>
                        <Link to="/search" style={{ textDecoration: 'none' }}>
                            <TileButton type="submit">
                                <TileImg src={pencilIcon} />
                                Specify preferences
                            </TileButton>
                        </Link>
                    </div>

                    <div>
                        <Link to="/location-search" style={{ textDecoration: 'none' }}>
                            <TileButton type="submit">
                                <TileImg src={pinIcon}/>
                                Search by location
                            </TileButton>
                        </Link>
                    </div>

                    <div>
                        <Link to="/recently-viewed" style={{ textDecoration: 'none' }}>
                            <TileButton type="submit">
                                <TileImg src={stackIcon} />
                                Recently viewed spaces
                            </TileButton>
                        </Link>
                    </div>

                    <div>
                        <Link to="/new-space" style={{ textDecoration: 'none' }}>
                            <TileButton type="submit">
                                <TileImg src={addIcon}/>
                                Add new study space
                            </TileButton>
                        </Link>
                    </div>

                </ButtonDiv>
            </BufferDiv>
        </div>
    );
}

export default withRouter(HomePage);
