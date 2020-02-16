import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {
  StudySpaceCard,
  Topbar
} from '../../components';
import styled from 'styled-components';


const StyledText = styled.h3`
    margin-top: 20px;
    text-align: center;
`

// TODO: Delete this. This is only a temporary solution to the handle click
//   callback.
function handleClick() {
  console.log("I've been clicked! Bless this day.");
}

const LocationSearchPage = (props) => {
    const [noResults, setNoResults] = useState(false);
    return (
        <div>
            <Topbar title="Location Search" hasBack={true} titleSize={'24pt'}/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <Form.Group style={{width: '80%', margin: '20px auto 10px'}}>
                    <Form.Label>Select the location that you would like to search:</Form.Label>
                    <Form.Control as="select">
                        <option>General Campus Locations</option>
                        <option>Marshall College</option>
                        <option>Muir College</option>
                        <option>Revelle College</option>
                        <option>Roosevelt College</option>
                        <option>Sixth College</option>
                        <option>Sports Facilities</option>
                        <option>Warren College</option>
                    </Form.Control>
                </Form.Group>
            </div>
            <hr style={{
                    color: '#2D9CDB',
                    backgroundColor: '#2D9CDB',
                    height: 1,
                    width: '80%'
                }}
            />
            <Link to={{ state: {data : props.data}, pathname: "/view-space" }}
              style={{ textDecoration: "none" }}>
              <StudySpaceCard
                title={props.data.title}
                description={props.data.description}
                imageFilePath={props.data.imageFilePath}
                distance={props.data.distance}
                tags={props.data.tags}
                handleClick={handleClick}
                hasRemove={false}
              />
            </Link>
        </div>
    )
;}

export default LocationSearchPage;
