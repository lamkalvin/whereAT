import React from 'react';
import styled from 'styled-components';
import Profile from '../components/profile'
import Ambience from '../components/ambience'
import Popularity from '../components/popularity';
import Survey from '../components/survey';
import Topbar from '../components/topbar';

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
        <p>{props.val}</p>
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
        <p>{props.val}</p>
    </div>
};

function OtherFeatures(props) {
    return (
        <div style={{ gridArea: '3 / 1 / 4 / 3'}}>
            <h3>Other features</h3>
            <ul>
                { <li>Suitable for a maximum group size of {props.count}</li> }
                { props.outlet && <li>✓ Has outlet</li> }
                { props.usb && <li>✓ Has USB charging</li> }
                { props.computer && <li>✓ Has computer</li> }
                { props.printer && <li>✓ Has printer</li> }
                { props.whiteboard && <li>✓ Has whiteboard</li> }
                { props.food && <li>✓ Allows food and drink</li> }
            </ul>
        </div>
    );
}

const ViewSpace = (props) => (
    <div style={{ marginBottom: '50px' }}>
        <Topbar title={props.data.title} hasBack={true} />
        <Profile img={props.data.imageFilePath} title={props.data.title} />
        <BufferDiv>
            <Parent>
                <Hours val={props.data.time} />
                <Seats val={props.data.seats} />
                <Description val={props.data.description} />
                <Ambience val={props.data.ambience} />
                <Popularity val={props.data.popularity} />
                <OtherFeatures
                    outlet={props.data.outlet}
                    usb={props.data.usb}
                    computer={props.data.computer}
                    printer={props.data.printer}
                    whiteboard={props.data.whiteboard}
                    food={props.data.food}
                    count={props.data.maxGroupSize}
                />
            </Parent>
        </BufferDiv>
        <Survey />
    </div>
);

export default ViewSpace;