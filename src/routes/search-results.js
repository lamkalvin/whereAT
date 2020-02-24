import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  StudySpaceCard,
  Topbar
} from '../components';
import Spinner from 'react-bootstrap/Spinner';

const Spin = (props) => {
  setTimeout(() => props.toggle(), 1600);
  console.log(props.toggle)

  return (
    <Spinner animation="border" role="status" style={{position: 'absolute', top: '45%', left: '45%'}}>
      <span className="sr-only">Loading...</span>
    </Spinner>
  )
}

const NoResults = () => (
  <div style={{ width: '100%', margin: 'auto', textAlign: 'center', marginTop: '350px' }}><h5>No results found.</h5></div>
)

function searchResultsListToHtml(data, timeout) {
  if (data.length === 0) {
    return <NoResults />
  }

  return data.map((space, i) => {
    return <Link key={i}
      to={{ state: { data: space }, pathname: "/view-space" }}
      style={{ textDecoration: "none", color: "#000000" }}
      onClick={() => {console.log("fk"); setTimeout(() => timeout, 300)}}
    >
      <StudySpaceCard
        index={i}
        data={space}
        hasRemove={false}
      />
    </Link>;
  });
}

/**
 * Improvements:
 *  - Remove all hard-coded junk code.
 */
const SearchResults = (props) => {
  const { data, preferences } = props.location.state;
  const [ spin, setSpin ] = useState(false);

  var minGroupSize = 0;
  if (preferences.groupSize === "1-2") {
    minGroupSize = 1;
  } else if (preferences.groupSize === "3-4") {
    minGroupSize = 3;
  } else if (preferences.groupSize === "5-6") {
    minGroupSize = 5;
  } else {
    minGroupSize = 7;
  }

  var results = data.filter(space =>
    space.ambience === preferences.ambience
    && space.popularity === preferences.popularity
    && space.maxGroupSize >= minGroupSize
    && (space.outlet === preferences.outlet
      || space.usb === preferences.usb
      || space.printer === preferences.printer
      || space.computer === preferences.computer
      || space.whiteboard === preferences.whiteboard
      || space.food === preferences.food));

  console.log(spin);
  return (
    <div>
      <Topbar title='Search Results' hasBack />
      {spin ?  searchResultsListToHtml(results, (() => setSpin(false))) :
        <Spin toggle={() => setSpin(true)} />}
    </div>
  );
}

export default SearchResults;
