import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { Link } from "react-router-dom";

const SearchForm = () => (
    <Form>
        <Form.Group controlId="formGridAmb">
            <Form.Label><h5>Ambience</h5></Form.Label>
            <div>
                What is your preferred noise level?
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
                How popular would you like your location to be?
                <div>
                    <ToggleButtonGroup type="radio" name="options" >
                        <ToggleButton variant="secondary" value={1}>Not very popular</ToggleButton>
                        <ToggleButton variant="secondary" value={2}>Moderately popular</ToggleButton>
                        <ToggleButton variant="secondary" value={3}>Very popular</ToggleButton>
                    </ToggleButtonGroup>
                </div>
            </div>
        </Form.Group>

        <Form.Group controlId="formGridGroup">
            <Form.Label><h5>Group size</h5></Form.Label>
            <div>
                How large is your group?
                <div>
                    <DropdownButton id="dropdown-basic-button" title="Group size" variant="secondary">
                        <Dropdown.Item>1-2</Dropdown.Item>
                        <Dropdown.Item>3-4</Dropdown.Item>
                        <Dropdown.Item>5-6</Dropdown.Item>
                        <Dropdown.Item>7+</Dropdown.Item>
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
                <Col>Has outlet</Col><Col><Form.Check /></Col>
            </Form.Row>
            <Form.Row>
                <Col>Has USB charging port</Col><Col><Form.Check /></Col>
            </Form.Row>
            <Form.Row>
                <Col>Has public computer</Col><Col><Form.Check /></Col>
            </Form.Row>
            <Form.Row>
                <Col>Has printer</Col><Col><Form.Check /></Col>
            </Form.Row>
            <Form.Row>
                <Col>Has whiteboard</Col><Col><Form.Check /></Col>
            </Form.Row>
            <Form.Row>
                <Col>Allows food/drink</Col><Col><Form.Check /></Col>
            </Form.Row>
        </Form.Group>

        <Link to="/view-space">
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Link>
    </Form>
);

export default SearchForm;