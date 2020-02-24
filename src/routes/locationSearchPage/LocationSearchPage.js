import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {
  StudySpaceCard,
  Topbar
} from '../../components';
import '../../assets/css/fade.css';

let locations = [
  '',
  'General Campus Locations',
  'Marshall College',
  'Muir College',
  'Revelle College',
  'Roosevelt College',
  'Sixth College',
  'Sports Facilities',
  'Warren College'
]

const LocationSearchPage = (props) => {
  const [searchLocation, setSearchLocation] = useState(0);
  const filteredData = props.data.filter(d => d.location === locations[searchLocation]);
  const [showLoc, setShowloc] = useState("");

  function toggleShowloc(val) {
    setShowloc("fade-goodbye");
    setTimeout(() => setShowloc("fade-hello"), 600);
    setTimeout(() => setSearchLocation(val), 300);
  }
  return (
    <div style={{ marginBottom: '100px' }}>
      <Topbar title="Location Search" hasBack={true} titleSize={'24pt'} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Form.Group style={{ width: '80%', margin: '20px auto 10px' }}>
          <Form.Label>Select the location that you would like to search:</Form.Label>
          <Form.Control as="select" onChange={e => {toggleShowloc(e.target.value);}}
              value={searchLocation}>
            <option value={0}>Select a location...</option>
            <option value={1}>General Campus Locations</option>
            <option value={2}>Marshall College</option>
            <option value={3}>Muir College</option>
            <option value={4}>Revelle College</option>
            <option value={5}>Roosevelt College</option>
            <option value={6}>Sixth College</option>
            <option value={7}>Sports Facilities</option>
            <option value={8}>Warren College</option>
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
      <div className={showLoc}>
        {filteredData.map((d, i) => {
          return (
            <Link to={{ state: { data: d }, pathname: "/view-space" }} style={{ textDecoration: "none", color: "#000000" }} key={i}>
              <StudySpaceCard
                data={d}
                hasRemove={false}
              />
            </Link>
          )
        })}
      </div>
    </div>
  )
    ;
}

export default LocationSearchPage;
