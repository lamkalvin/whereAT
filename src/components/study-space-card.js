import React, { useState } from "react";
import {
  Card,
} from 'react-bootstrap';
import '../assets/css/star.css';
import '../assets/css/fade.css';

function showRemove(hasRemove, handleClickRemove, goodbye, index) {
  if (hasRemove) {
    return (
      <div className={"click active active-2 active-3"}
        style={{ marginTop: "20px", marginRight: "20px" }}
        onClick={(e) => { e.preventDefault(); goodbye();
          setTimeout(() => {handleClickRemove(index)}, 600);  }}>
        <span className={"fa fa-star"}></span>
        <div className="ring"></div>
        <div className="ring2"></div>
      </div>
    )
  }
}

const StudySpaceCard = (props) => {
  const [divClass, setDivclass] = useState("");

  function goodbye() {
    setDivclass("fade-goodbye");
    setTimeout(() => setDivclass(""), 600);
  }

  return (
    <div index={props.data.index} className={divClass}>
      <Card style={{ height: '10rem', width: '100%', flexDirection: 'row' }}>
        <div style={{ height: '100%', width: '40%', overflow: 'hidden' }}>
          <Card.Img style={{ objectFit: 'cover', height: '10rem' }} variant="top" src={props.data.imageFilePath} />
        </div>
        <Card.Body style={{ height: '100%', width: '40%' }}>
          <Card.Title style={{ fontSize: '100%', overflow: 'hidden' }}>{props.data.title}</Card.Title>
          <Card.Text style={{ height: '25%', fontSize: '60%', overflow: 'hidden' }}>
            {props.data.description.join(' ')}
          </Card.Text>
          <Card.Text style={{ fontSize: '75%' }}>
            {props.data.distance}
          </Card.Text>
          <Card.Text style={{ fontSize: '60%' }}>
            Tags: {props.data.tags.join(', ')}
          </Card.Text>
        </Card.Body>
        {showRemove(props.hasRemove, props.handleClickDelete, goodbye, props.data.index)}
      </Card>
    </div>
  )
};

export default StudySpaceCard;
