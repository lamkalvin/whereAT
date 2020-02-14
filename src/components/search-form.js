import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { Link } from "react-router-dom";

const SearchForm = () => {
    const [ambienceVal, setAmbience] = useState();
    const [popularityVal, setPopularity] = useState();
    const [groupSize, setGroupsize] = useState("Group size");

    const [outlet, toggleOutlet] = useState(false);
    const [usb, toggleUsb] = useState(false);
    const [computer, toggleComputer] = useState(false);
    const [printer, togglePrinter] = useState(false);
    const [whiteboard, toggleWhiteboard] = useState(false);
    const [food, toggleFood] = useState(false);

    function clearInput() {
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

    function focusPreset() {
        setAmbience(1);
        setPopularity(1);
        setGroupsize("1-2");
        toggleOutlet(true);
        toggleFood(false);
    }

    function activePreset() {
        setAmbience(3);
        setPopularity(3);
        setGroupsize("3-4");
        toggleFood(true);
        toggleOutlet(true);
    }

    function comfortablePreset() {
        setAmbience(2);
        setPopularity(2);
        setGroupsize("3-4");
        toggleOutlet(true);
        toggleFood(true);
    }

    return (
        <Form>
            <div>
                <h5>Preset search options</h5>
                <div>
                    <ToggleButtonGroup type="radio" name="options" value={0}>
                        <ToggleButton variant="secondary" value={1} onClick={() => focusPreset()}>Focus</ToggleButton>
                        <ToggleButton variant="secondary" value={2} onClick={() => comfortablePreset()}>Comfortable</ToggleButton>
                        <ToggleButton variant="secondary" value={3} onClick={() => activePreset()}>Active</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
            <div style={{ textAlign: 'right' }}>
                <Button variant="danger" onClick={() => clearInput()}>
                    Clear input
                </Button>
            </div>
            <Form.Group controlId="formGridAmb">
                <Form.Label><h5>Ambience</h5></Form.Label>
                <div>
                    What is your preferred noise level?
                    <div>
                        <ToggleButtonGroup type="radio" name="options" value={ambienceVal}>
                            <ToggleButton variant="secondary" value={1} onClick={() => setAmbience(1)}>Rather quiet</ToggleButton>
                            <ToggleButton variant="secondary" value={2} onClick={() => setAmbience(2)}>Moderately active</ToggleButton>
                            <ToggleButton variant="secondary" value={3} onClick={() => setAmbience(3)}>Very loud</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
            </Form.Group>

            <Form.Group controlId="formGridPop">
                <Form.Label><h5>Popularity</h5></Form.Label>
                <div>
                    How popular would you like your location to be?
                    <div>
                        <ToggleButtonGroup type="radio" name="options" value={popularityVal}>
                            <ToggleButton variant="secondary" value={1} onClick={() => setPopularity(1)}>Not very popular</ToggleButton>
                            <ToggleButton variant="secondary" value={2} onClick={() => setPopularity(2)}>Moderately popular</ToggleButton>
                            <ToggleButton variant="secondary" value={3} onClick={() => setPopularity(3)}>Very popular</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
            </Form.Group>

            <Form.Group controlId="formGridGroup">
                <Form.Label><h5>Group size</h5></Form.Label>
                <div>
                    How large is your group?
                <div>
                        <DropdownButton id="dropdown-basic-button"
                            title={groupSize}
                            variant="secondary">
                            <Dropdown.Item onClick={() => setGroupsize("1-2")}>1-2</Dropdown.Item>
                            <Dropdown.Item onClick={() => setGroupsize("3-4")}>3-4</Dropdown.Item>
                            <Dropdown.Item onClick={() => setGroupsize("5-6")}>5-6</Dropdown.Item>
                            <Dropdown.Item onClick={() => setGroupsize("7+")}>7+</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
            </Form.Group>

            <Form.Group controlId="formGridOther">
                <Form.Label><h5>Other</h5></Form.Label>
                <Form.Row>
                    <Col><b>Feature</b></Col><Col><b>Search</b></Col>
                </Form.Row>
                <Form.Row>
                    <Col>Has outlet</Col>
                    <Col><Form.Check checked={outlet} onClick={() => toggleOutlet(!outlet)} /></Col>
                </Form.Row>
                <Form.Row>
                    <Col>Has USB charging port</Col>
                    <Col><Form.Check checked={usb} onClick={() => toggleUsb(!usb)} /></Col>
                </Form.Row>
                <Form.Row>
                    <Col>Has public computer</Col>
                    <Col><Form.Check checked={computer} onClick={() => toggleComputer(!computer)} /></Col>
                </Form.Row>
                <Form.Row>
                    <Col>Has printer</Col>
                    <Col><Form.Check checked={printer} onClick={() => togglePrinter(!printer)} /></Col>
                </Form.Row>
                <Form.Row>
                    <Col>Has whiteboard</Col>
                    <Col><Form.Check checked={whiteboard} onClick={() => toggleWhiteboard(!whiteboard)} /></Col>
                </Form.Row>
                <Form.Row>
                    <Col>Allows food/drink</Col>
                    <Col><Form.Check checked={food} onClick={() => toggleFood(!food)} /></Col>
                </Form.Row>
            </Form.Group>

            <div style={{ textAlign: 'right', marginBottom: '100px' }}>
                <Link to="/view-space">
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Link>
            </div>
        </Form>)
};

export default SearchForm;