import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../components/profile';
import Ambience from '../components/ambience';
import Popularity from '../components/popularity';
import SurveyToast from '../components/survey-toast';
import Topbar from '../components/topbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Survey from './survey';

const Centered = styled(Container)`
    text-align: center;
`;

const BufferDiv = styled.div`
    margin: 50px auto 50px auto;
    width: 85%;
`;

const Parent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 10px;
    padding: 20px;
`;

function Hours(props) {
    return (<div>
        <h3>Hours</h3>
        <ul>
            {props.val.map((time, i) => {
                return <li key={i}>{time}</li>
            })}
        </ul>
    </div>)
};

function Seats(props) {
    return (<div>
        <h3>Seats</h3>
        <p>{props.val}</p>
    </div>)
};

function Description(props) {
    return <div style={{ gridArea: '2 / 1 / 3 / 3' }}>
        <h3>Description</h3>
        {props.val.map((item,i) => {return <p key={i}>{item}</p> })}
    </div>
};

function OtherFeatures(props) {
    return (
        <div style={{ gridArea: '3 / 1 / 4 / 3' }}>
            <h3>Other features</h3>
            <ul>
                {props.count && <li>Suitable for a maximum group size of {props.count}</li>}
                {props.outlet && <li>✓ Has outlet</li>}
                {props.usb && <li>✓ Has USB charging</li>}
                {props.computer && <li>✓ Has computer</li>}
                {props.printer && <li>✓ Has printer</li>}
                {props.whiteboard && <li>✓ Has whiteboard</li>}
                {props.food && <li>✓ Allows food and drink</li>}
            </ul>
        </div>
    );
}

const SurveyJumbo = (props) => (
    <Jumbotron fluid>
        <Centered>
            <h3>Been here before?</h3>
            <p>
                Improve our data by doing our survey!
            </p>
            <Button variant="primary" onClick={props.handleClick}>Survey</Button>
        </Centered>
    </Jumbotron>
);

/**
 * Improvements:
 *  - animated heart icon for the favorites button (see: https://codepen.io/mapk/pen/ZOQqaQ)
 *  - better background color
 *  - include a toast (maybe "Added to Favorites") once clicked
 *  - disable button as soon as it's clicked instead of having to refresh the page
 *  - favorites button on the main nav bar should automatically requery for the
 *    local storage data instead of having to do a manual refresh
 *  - user can unfavorite immediately after they favorite. or like, any unfavoriting capability on this page
 */
const FavoritesButton = (props) => {
    let favoriteSpacesJson = JSON.parse(localStorage.getItem('favoriteSpaces'));

    /* Add the currently viewed space to the favorites list */
    function handleClick() {
        favoriteSpacesJson.data.push(props.space);
        localStorage.setItem('favoriteSpaces', JSON.stringify(favoriteSpacesJson));
    }

    /* Disable button if a space has already been added to the favorites list */
    function shouldDisable() {
        return favoriteSpacesJson.data.map(space => space.title).includes(props.space.title);
    }

    return (<Button
      style={{ position: "absolute", top: "100px", right: "20px" }}
      variant="secondary"
      onClick={handleClick}
      disabled={shouldDisable()}
      >
      Add to Favorites
    </Button>);
};

const ViewSpace = (props) => {
    const { data } = props.location.state;
    const [showSurvey, toggleSurvey] = useState(false);
    const [showToast, toggleToast] = useState(false);

    return (
        <div style={{ marginBottom: '50px' }}>
            {showSurvey ?
                <Survey data={data}
                    handleClick={() => toggleSurvey(false)}
                    handleSubmit={() => toggleToast(true)} /> :
                <div>
                    <Topbar title={data.title} hasBack={true} />
                    <Profile img={data.imageFilePath} title={data.title} />
                    <FavoritesButton space={data}/>
                    <BufferDiv>
                        <Parent>
                            <Hours val={data.time} />
                            <Seats val={data.seats} />
                            <Description val={data.description} />
                            <Ambience val={data.ambience} />
                            <Popularity val={data.popularity} />
                            <OtherFeatures
                                outlet={data.outlet}
                                usb={data.usb}
                                computer={data.computer}
                                printer={data.printer}
                                whiteboard={data.whiteboard}
                                food={data.food}
                                count={data.maxGroupSize}
                            />
                        </Parent>
                    </BufferDiv>
                    <SurveyJumbo data={data} handleClick={() => toggleSurvey(true)} />
                </div>}
            <SurveyToast show={showToast} handleClick={() => toggleToast(false)} />
        </div>)
};

export default ViewSpace;
