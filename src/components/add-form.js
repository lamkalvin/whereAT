import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import InputGroup from 'react-bootstrap/InputGroup';
import { useHistory } from "react-router-dom";

let locations = [
    '',
    'General Campus Locations',
    'Marshall College',
    'Muir College',
    'Revelle College',
    'Roosevelt College',
    'Sixth College',
    'Sports Facilities',
    'Warren College',
  ]

const AddForm = () => {
    const [titleValue, setTitleValue] = useState('');
    const [locationValue, setLocationValue] = useState(0);

    const [monTime, setMonTime] = useState('');
    const [tuesTime, setTuesTime] = useState('');
    const [wedTime, setWedTime] = useState('');
    const [thursTime, setThursTime] = useState('');
    const [friTime, setFriTime] = useState('');
    const [satTime, setSatTime] = useState('');
    const [sunTime, setSunTime] = useState('');

    const [descriptionValue, setDescriptionValue] = useState('');
    const [imageValue, setImageValue] = useState('');
    const [tagValue, setTagValue] = useState('');
    const [seatNum, setSeatNumber] = useState(0);
    const [ambienceVal, setAmbience] = useState(0);
    const [popularityVal, setPopularity] = useState(0);
    const [groupSize, setGroupsize] = useState('');

    const [outlet, toggleOutlet] = useState(false);
    const [usb, toggleUsb] = useState(false);
    const [computer, toggleComputer] = useState(false);
    const [printer, togglePrinter] = useState(false);
    const [whiteboard, toggleWhiteboard] = useState(false);
    const [food, toggleFood] = useState(false);

    let customSpaces = JSON.parse(localStorage.getItem('customSpaces'));
    const history = useHistory();

    function clearInput() {
        setTitleValue('');
        setLocationValue(0);
        setMonTime('');
        setTuesTime('');
        setWedTime('');
        setThursTime('');
        setFriTime('');
        setSatTime('');
        setSunTime('');
        setDescriptionValue('');
        setImageValue('');
        setTagValue('');
        setSeatNumber(0);
        setAmbience(0);
        setPopularity(0);
        setGroupsize("Group size");
        toggleOutlet(false);
        toggleUsb(false);
        togglePrinter(false);
        toggleComputer(false);
        toggleWhiteboard(false);
        toggleFood(false);
    }

    function createNewSpace() {
        let times = [];
        if (monTime) {times.push(monTime)};
        if (tuesTime) {times.push(tuesTime)};
        if (wedTime) {times.push(wedTime)};
        if (thursTime) {times.push(thursTime)};
        if (friTime) {times.push(friTime)};
        if (satTime) {times.push(satTime)};
        if (sunTime) {times.push(sunTime)};
        console.log(times);
        let space = {
            "location": locationValue ? locations[locationValue] : locations[1],
            "title": titleValue,
            "description": (descriptionValue ? descriptionValue.split('\n') : ["No description."]),
            "imageFilePath": imageValue ? imageValue : "/study-spaces/ucsd.jpg",
            "distance": "",
            "tags": tagValue.split(','),
            "time": times,
            "seats": seatNum,
            "ambience": ambienceVal,
            "popularity": popularityVal,
            "maxGroupSize": groupSize,
            "outlet": outlet,
            "computer": computer,
            "food": food,
            "printer": printer,
            "usb": usb,
            "whiteboard": whiteboard
        };
        
        customSpaces.data.push(space);
        localStorage.setItem('customSpaces', JSON.stringify(customSpaces));
    }

    function getNewSpace() {
        let space = JSON.parse(localStorage.getItem('customSpaces'));
        return space.data[space.data.length - 1];
    }

    return (
        <Form>

            <div style={{ display: 'grid', gridGap: '10px 10px', gridTemplateColumns: 'repeat(2, 1fr)', marginBottom: '10px' }}>
                <Button variant="danger" onClick={() => clearInput()}>
                    Clear input
                </Button>
            </div>

            <Form.Group>
                <Form.Label>Enter a name for this study space.</Form.Label>
                <Form.Control
                    placeholder="Study space name..."
                    onChange={e => setTitleValue(e.target.value)}
                    value={titleValue}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Select the location of this study space.</Form.Label>
                <Form.Control
                    as="select"
                    onChange={e => setLocationValue(e.target.value)}
                    value={locationValue}
                >
                    <option value={0}>Select a location...</option>
                    <option value={1}>General Campus Locations</option>
                    <option value={2}>Marshall College</option>
                    <option value={3}>Muir College</option>
                    <option value={4}>Revelle College</option>
                    <option value={5}>Roosevelt College</option>
                    <option value={6}>Sixth College</option>
                    <option value={7}>Sports Facilities</option>
                    <option value={8}>Warren College</option>
                </Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>What are the open times for this study space? Enter it below.</Form.Label>
                <Form.Text>Example: Mon: 8 a.m to 10 p.m.</Form.Text>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{width: '70px'}}>Mon:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Open Time - Close Time"
                        onChange={e => setMonTime(e.target.value)}
                        value={monTime}
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{width: '70px'}}>Tues:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Open Time - Close Time"
                        onChange={e => setTuesTime(e.target.value)}
                        value={tuesTime}
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{width: '70px'}}>Wed:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Open Time - Close Time"
                        onChange={e => setWedTime(e.target.value)}
                        value={wedTime}
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{width: '70px'}}>Thurs:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Open Time - Close Time"
                        onChange={e => setThursTime(e.target.value)}
                        value={thursTime}
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{width: '70px'}}>Fri:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Open Time - Close Time"
                        onChange={e => setFriTime(e.target.value)}
                        value={friTime}
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{width: '70px'}}>Sat:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Open Time - Close Time"
                        onChange={e => setSatTime(e.target.value)}
                        value={satTime}
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text style={{width: '70px'}}>Sun:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                        placeholder="Open Time - Close Time"
                        onChange={e => setSunTime(e.target.value)}
                        value={sunTime}
                    />
                </InputGroup>
            </Form.Group>

            <Form.Group>
                <Form.Label>Write a description for this study space.</Form.Label>
                <Form.Control
                    placeholder='Enter description...'
                    onChange={e => setDescriptionValue(e.target.value)}
                    value={descriptionValue}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Have an image for this study space? Provide a URL below.</Form.Label>
                <Form.Control
                    placeholder='Image URL...'
                    onChange={e => setImageValue(e.target.value)}
                    value={imageValue}
                />
            </Form.Group>
            
            <Form.Group>
                <Form.Label>Enter any tags below for this study space.</Form.Label>
                <Form.Text>Seperate the tags with commas. Example: Active, Quiet, Crowded... </Form.Text>
                <Form.Control
                    placeholder='Tags...'
                    onChange={e => setTagValue(e.target.value)}
                    value={tagValue}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>How many seats are available at this study space?</Form.Label>
                <Form.Control
                    type='number'
                    placeholder='0'
                    onChange={e => setSeatNumber(e.target.value)}
                    value={seatNum}
                />
            </Form.Group>

            <Form.Group controlId="formGridAmb">
                <Form.Label>Ambience</Form.Label>
                <Form.Text>What would you say is the noise level at this study space?</Form.Text>
                <ToggleButtonGroup type="radio" name="options" value={ambienceVal} style={{ width: '100%' }}>
                    <ToggleButton variant="secondary" value={1} onClick={() => setAmbience(1)}>Rather quiet</ToggleButton>
                    <ToggleButton variant="secondary" value={2} onClick={() => setAmbience(2)}>Moderately active</ToggleButton>
                    <ToggleButton variant="secondary" value={3} onClick={() => setAmbience(3)}>Very loud</ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>

            <Form.Group controlId="formGridPop">
                <Form.Label>Popularity</Form.Label>
                <Form.Text>How popular would you say this study space is?</Form.Text>
                <ToggleButtonGroup type="radio" name="options" value={popularityVal} style={{ width: '100%' }}>
                    <ToggleButton variant="secondary" value={1} onClick={() => setPopularity(1)}>Not very popular</ToggleButton>
                    <ToggleButton variant="secondary" value={2} onClick={() => setPopularity(2)}>Moderately popular</ToggleButton>
                    <ToggleButton variant="secondary" value={3} onClick={() => setPopularity(3)}>Very popular</ToggleButton>
                </ToggleButtonGroup>
            </Form.Group>

            <Form.Group controlId="formGridGroup">
                <Form.Label>Group size</Form.Label>
                <Form.Text>What would you say is the max group size this study space can accommodate?</Form.Text>
                <DropdownButton id="dropdown-basic-button"
                    title={groupSize}
                    variant="secondary"
                >
                    <Dropdown.Item onClick={() => setGroupsize("1-2")}>1-2</Dropdown.Item>
                    <Dropdown.Item onClick={() => setGroupsize("3-4")}>3-4</Dropdown.Item>
                    <Dropdown.Item onClick={() => setGroupsize("5-6")}>5-6</Dropdown.Item>
                    <Dropdown.Item onClick={() => setGroupsize("7+")}>7+</Dropdown.Item>
                </DropdownButton>
            </Form.Group>

            <Form.Group controlId="formGridOther">
                <Form.Label>Other</Form.Label>e
                <Form.Text>What other ammenties are located at this study space?</Form.Text>
                <div style={{ marginLeft: '25px' }}>
                    <Form.Row>
                        <Form.Check checked={outlet} onClick={() => toggleOutlet(!outlet)} />
                        Has outlet
                    </Form.Row>
                    <Form.Row>
                        <Form.Check checked={usb} onClick={() => toggleUsb(!usb)} />
                        Has USB charging port
                    </Form.Row>
                    <Form.Row>
                        <Form.Check checked={computer} onClick={() => toggleComputer(!computer)} />
                        Has public computer
                    </Form.Row>
                    <Form.Row>
                        <Form.Check checked={printer} onClick={() => togglePrinter(!printer)} />
                        Has printer
                    </Form.Row>
                    <Form.Row>
                        <Form.Check checked={whiteboard} onClick={() => toggleWhiteboard(!whiteboard)} />
                        Has whiteboard
                    </Form.Row>
                    <Form.Row>
                        <Form.Check checked={food} onClick={() => toggleFood(!food)} />
                        Allows food/drink
                    </Form.Row>
                </div>
            </Form.Group>

            <div style={{ textAlign: 'right', marginBottom: '100px' }}>
                <Button variant="primary" onClick={() => {
                    createNewSpace();
                    // let space = getNewSpace();
                    history.push("/view-space", {data: getNewSpace()})}}
                >
                    Submit
                </Button>
            </div>
        </Form>)
};

export default AddForm;
