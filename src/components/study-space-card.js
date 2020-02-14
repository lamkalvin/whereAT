import React from "react";
// TODO: Use styled components
import styled from "styled-components";
import {
  Button,
  Card,
  Container
} from 'react-bootstrap';

function showRemove(hasRemove, handleClickRemove, index) {
  if (hasRemove) {
    return <Button index={index} style={{ height: "25%", margin: "auto", marginRight: "20px" }} variant="outline-danger" onClick={handleClickRemove}>Remove</Button>
  }
}
/**
 * Props Expected:
 *  - title: name of the study space
 *  - description: brief description of the study space
 *  - imageFilePath: file path to locally stored image of the study space
 */
// TODO: Link the card to the corresponding detail page.
// TODO: The src of an image will look into public/ by default when provided with a portion of the absolute path.
const StudySpaceCard = (props) => (
  <Card index={props.index} style={{ height: '10rem', width: '100%', flexDirection: 'row', overflow: 'scroll' }} onClick={props.handleClick}>
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
    {showRemove(props.hasRemove, props.handleClickDelete, props.index)}
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
