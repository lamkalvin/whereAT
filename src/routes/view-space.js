import React, { useState } from 'react';
import styled from 'styled-components';
import Profile from '../components/view/profile';
import Ambience from '../components/view/ambience';
import FavoritesButton from '../components/favoritesButton';
import Popularity from '../components/view/popularity';
import HoverToast from '../components/hovertoast';
import Topbar from '../components/topbar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Survey from './survey';

const Centered = styled(Container)`
    text-align: center;
`;

const BufferDiv = styled.div`
    margin: auto;
    width: 100%;
`;

const Parent = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 15px;
`;

function Hours(props) {
    return (<div>
        <h4>Hours</h4>
        <ul>
            {props.val.map((time, i) => {
                return <li key={i}>{time}</li>
            })}
        </ul>
    </div>)
};

function Seats(props) {
    return (<div>
        <h4>Seats</h4>
        <p>{props.val}</p>
    </div>)
};

function Description(props) {
    return <div style={{ gridArea: '2 / 1 / 3 / 3' }}>
        <h4>Description</h4>
        {props.val.map((item, i) => { return <p key={i}>{item}</p> })}
    </div>
};

function OtherFeatures(props) {
    return (
        <div style={{ gridArea: '3 / 1 / 4 / 3' }}>
            <h4>Other features</h4>
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
            <h4>Been here before?</h4>
            <p>
                Improve our data by doing our survey!
            </p>
            <Button variant="primary" onClick={props.handleClick}>Survey</Button>
        </Centered>
    </Jumbotron>
);

function setRecentlyViewed(data) {
    let recentlyViewedSpacesJson = JSON.parse(localStorage.getItem('recentlyViewedSpaces'));
    let dupeIdx = recentlyViewedSpacesJson.data.findIndex(studySpace => studySpace.title === data.title);
    if (dupeIdx !== -1) {
        recentlyViewedSpacesJson.data.splice(dupeIdx, 1);
    }
    recentlyViewedSpacesJson.data.push(data);
    localStorage.setItem('recentlyViewedSpaces', JSON.stringify(recentlyViewedSpacesJson));
}

const ViewSpace = (props) => {
    const { data } = props.location.state;
    const [showSurvey, toggleSurvey] = useState(false);
    const [showToast, toggleToast] = useState(false);

    setRecentlyViewed(data);

    return (
        <div style={{ marginBottom: '50px' }}>
            {showSurvey ?
                <Survey data={data}
                    handleClick={() => toggleSurvey(false)}
                    handleSubmit={() => toggleToast(true)} /> :
                <div>
                    <Topbar title={data.title} hasBack={true} />
                    <Profile img={data.imageFilePath} title={data.title} />
                    <FavoritesButton space={data} />
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
            <HoverToast show={showToast} handleClick={() => toggleToast(false)}
                text={"Thanks for submitting the survey! We'll get back to you soon :)"} />
        </div>)
};

export default ViewSpace;
