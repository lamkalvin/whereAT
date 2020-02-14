import React from "react";
// TODO: Use styled components
import styled from "styled-components";
import {
  Card
} from 'react-bootstrap';

/**
 * Props Expected:
 *  - title: name of the study space
 *  - description: brief description of the study space
 *  - imageFilePath: file path to locally stored image of the study space
 */
// TODO: Link the card to the corresponding detail page.
const StudySpaceCard = (props) => (
  <Card style={{ height: '10rem', width: '100%', flexDirection: 'row', overflow: 'scroll' }} onClick={props.handleClick}>
    <div style={{ height: '100%', width: '40%', overflow: 'hidden' }}>
      <Card.Img style={{ objectFit: 'cover', height: '10rem' }} variant="top" src={props.imageFilePath} />
    </div>
    <Card.Body>
      <Card.Title style={{ fontSize: '100%' }}>{props.title}</Card.Title>
      <Card.Text style={{ fontSize: '60%' }}>
        {props.description}
      </Card.Text>
      <Card.Text style={{ fontSize: '75%' }}>
        {props.distance}
      </Card.Text>
      <Card.Text style={{ fontSize: '60%' }}>
        Tags: {props.tags}
      </Card.Text>
    </Card.Body>
  </Card>
);
/*
 * Sources of Help:
 *  - Card: https://react-bootstrap.github.io/components/cards/#basic-example
 *  - Card.Img orientation: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 *  - Card.Img cropping:
 *      https://react-bootstrap.github.io/layout/grid/#container-props,
 *      https://alligator.io/css/cropping-images-object-fit/
 *  - Card clickable: https://stackoverflow.com/questions/49554070/using-bootstrap-cards-as-a-hyperlink
 **/

export default StudySpaceCard;
