import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { Link } from "react-router-dom";

const SurveyForm = () => (
    <Form>
        <Form.Group controlId="formGridHours">
            <Form.Label><h5>Hours</h5></Form.Label>
            <Form.Row>
                <Col>
                    Are the hours correct for this location?
                </Col>
                <Col>
                    <Form.Check inline label="Yes" type='radio' />
                    <Form.Check inline label="No" type='radio' />
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
                    <Form.Check inline label="Yes" type='radio' />
                    <Form.Check inline label="No" type='radio' />
                </Col>
            </Form.Row>
        </Form.Group>

        <Form.Group controlId="formGridAmb">
            <Form.Label><h5>Ambience</h5></Form.Label>
            <div>
                What is the ambience of this location?
                <div>
                    <ToggleButtonGroup type="radio" name="options" variant="secondary">
                        <ToggleButton variant="secondary" value={1}>Rather quiet</ToggleButton>
                        <ToggleButton variant="secondary" value={2}>Moderately active</ToggleButton>
                        <ToggleButton variant="secondary" value={3}>Very loud</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
        </Form.Group>

        <Form.Group controlId="formGridPop">
            <Form.Label><h5>Popularity</h5></Form.Label>
            <div>
                How popular is this location?
                <div>
                    <ToggleButtonGroup type="radio" name="options" >
                        <ToggleButton variant="secondary" value={1}>Not very popular</ToggleButton>
                        <ToggleButton variant="secondary" value={2}>Moderately popular</ToggleButton>
                        <ToggleButton variant="secondary" value={3}>Very popular</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
        </Form.Group>

        <div style={{textAlign: 'center', marginTop: '10%'}}>
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
);

export default SurveyForm;