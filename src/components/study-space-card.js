import React from "react";
import styled from "styled-components";
import {Card} from 'react-bootstrap';

/**
 * Props Expected:
 *  - title: name of the study space
 *  - description: brief description of the study space
 *  - imageFilePath: file path to locally stored image of the study space
 *
 * Sources of Help:
 *  - Card: https://react-bootstrap.github.io/components/cards/#basic-example
 *  - Card.Img orientation: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
const StudySpaceCard = (props) => (
  <Card style={{ width: '100%', flexDirection: 'row' }}>
    <Card.Img style={{ width: '250px' }} variant="top" src={require("../assets/study-spaces/galbraith.jpg")} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.description}
      </Card.Text>
      <Card.Text>
        {props.distance}
      </Card.Text>
      <Card.Text>
        Tags: {props.tags}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default StudySpaceCard;
