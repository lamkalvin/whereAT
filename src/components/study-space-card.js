import React from "react";
import LinesEllipsis from 'react-lines-ellipsis';
// TODO: Use styled components
import styled from "styled-components";
import {
  Button,
  Card,
  Container
} from 'react-bootstrap';

function showRemove(hasRemove, handleClickRemove, index) {
  if (hasRemove) {
    return <Button index={index} style={{ display: "flex", margin: "auto", marginRight: "20px" }} variant="outline-danger" onClick={handleClickRemove}>Remove</Button>
  }
}
/**
 * Props Expected:
 *  - title: name of the study space
 *  - description: brief description of the study space
 *  - imageFilePath: file path to locally stored image of the study space.
 *      File paths that start with "/" will be checked in the public/ directory.
 */
// TODO: Figure out how to create the ellipsis. Here is some sample code that I
//   tried but couldn't get to work exactly. When the string exceeds the numLine
//   attribute, only the ellipsis is displayed.
/*
      <LinesEllipsis
         text={"Audrey's Cafe serves coffee and tea drinks "}
         maxLine='2'
         ellipsis='...'
         trimRight
         basedOn='letters'
         component="p"
       />
*/
const StudySpaceCard = (props) => (
  <Card index={props.index} style={{ height: '10rem', width: '100%', flexDirection: 'row' }} onClick={props.handleClick}>
    <div style={{ height: '100%', width: '40%', overflow: 'hidden' }}>
      <Card.Img style={{ objectFit: 'cover', height: '10rem' }} variant="top" src={props.imageFilePath} />
    </div>
    <Card.Body style={{ height: '100%', width: '40%' }}>
      <Card.Title style={{ fontSize: '100%', overflow: 'hidden' }}>{props.title}</Card.Title>
      <Card.Text style={{ height: '25%', fontSize: '60%', overflow: 'hidden' }}>
        {props.description.join(' ')}
      </Card.Text>
      <Card.Text style={{ fontSize: '75%' }}>
        {props.distance}
      </Card.Text>
      <Card.Text style={{ fontSize: '60%' }}>
        Tags: {props.tags.join(', ')}
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
