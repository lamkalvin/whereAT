import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { Link } from "react-router-dom";

const SurveyForm = () => {
    const [ambienceVal, setAmbience] = useState();
    const [popularityVal, setPopularity] = useState();
    const [hours, toggleHours] = useState(true);
    const [seats, toggleSeats] = useState(true);

    function clearInput() {
        setAmbience(0);
        setPopularity(0);
        toggleHours(true);
        toggleSeats(true);
    }

    return (
        <Form>
            <div style={{ textAlign: 'right' }}>
                <Button variant="danger" onClick={() => clearInput()}>
                    Clear input
                </Button>
            </div>
            <Form.Group controlId="formGridHours">
                <Form.Label><h5>Hours</h5></Form.Label>
                <Form.Row>
                    <Col>
                        Are the hours correct for this location?
                </Col>
                    <Col>
                        <Form.Check inline label="Yes" type='radio' checked={hours} onClick={() => toggleHours(true)} />
                        <Form.Check inline label="No" type='radio' checked={!hours} onClick={() => toggleHours(false)} />
                    </Col>
                </Form.Row>
            </Form.Group>

            <Form.Group controlId="formGridSeats">
                <Form.Label><h5>Seats</h5></Form.Label>
                <Form.Row>
                    <Col>
                        Is the number of seats about correct?
                </Col>
                    <Col>
                        <Form.Check inline label="Yes" type='radio' checked={seats} onClick={() => toggleSeats(true)} />
                        <Form.Check inline label="No" type='radio' checked={!seats} onClick={() => toggleSeats(false)} />
                    </Col>
                </Form.Row>
            </Form.Group>

            <Form.Group controlId="formGridAmb">
                <Form.Label><h5>Ambience</h5></Form.Label>
                <div>
                    What is the ambience of this location?
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
                    How popular is this location?
                    <div>
                        <ToggleButtonGroup type="radio" name="options" value={popularityVal}>
                            <ToggleButton variant="secondary" value={1} onClick={() => setPopularity(1)}>Not very popular</ToggleButton>
                            <ToggleButton variant="secondary" value={2} onClick={() => setPopularity(2)}>Moderately popular</ToggleButton>
                            <ToggleButton variant="secondary" value={3} onClick={() => setPopularity(3)}>Very popular</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
            </Form.Group>

            <div style={{ textAlign: 'center', marginTop: '10%', marginBottom: '100px' }}>
                <p>
                    Once submitted, we will review your survey and adjust statistics
                    for a study space on a case-by-case basis!
            </p>
                <Link to="/view-space">
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Link>
            </div>
        </Form>
    )
};

export default SurveyForm;