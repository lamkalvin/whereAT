import React, { useState } from "react";
import {
  Card,
} from 'react-bootstrap';
import '../assets/css/star.css';
import '../assets/css/fade.css';

function showRemove(hasRemove, handleClickRemove, goodbye, title) {
  if (hasRemove) {
    return (
      <div className={"click active active-2 active-3"}
        style={{ zIndex: "2", top: '-15px', right: '0px', position: 'absolute'}}
        onClick={(e) => { e.preventDefault(); goodbye();
          setTimeout(handleClickRemove, 600, title);  }}>
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
    setDivclass("fade-shrink");
    setTimeout(() => setDivclass(""), 600);
  }

  return (
    <div className={divClass}
      style={{width: '85%', margin: '10px auto 10px auto'}}>
      <Card className="bg-dark text-white" border="secondary" style={{borderRadius: '10px', boxShadow: '0px 2px 5px grey'}} >
        {/* <div style={{ height: '100%', width: '40%', overflow: 'hidden' }}> */}
          <Card.Img style={{ objectFit: 'cover', height: '10rem', borderRadius: '10px', filter: "brightness(50%)"}}
            variant="top" src={props.data.imageFilePath} />
        {/* </div> */}
        <Card.ImgOverlay
          style={{textShadow: '0px 0px 9px rgba(0, 0, 0, 1)'}}>
          <Card.Title style={{ fontSize: '100%', width: '85%' }}>{props.data.title}</Card.Title>
          <Card.Text style={{ whiteSpace: 'nowrap', fontSize: '75%', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {props.data.description.join(' ')}
          </Card.Text>
          <Card.Text style={{ fontSize: '75%' }}>
            Tags: {props.data.tags.join(', ')}
          </Card.Text>
        </Card.ImgOverlay>
        {showRemove(props.hasRemove, props.handleClickDelete, goodbye, props.data.title)}
      </Card>
    </div>
  )
};

export default StudySpaceCard;
