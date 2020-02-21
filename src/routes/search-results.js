import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {
  StudySpaceCard,
  Topbar
} from '../components';

/**
 * Improvements:
 *  - Put this function in a shared file b/c it's copied from Favorites screen.
 *  - Create a No Results Found display if no results.
 */
function searchResultsListToHtml(data) {
  if (data.length == 0) {
    return <h1 style={{ textAlign: "center" }}>No results found.</h1>;
  }

  return data.map((space, i) => {
    return <Link to={{ state: { data : space }, pathname: "/view-space" }} style={{ textDecoration: "none", color: "#000000" }}>
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
    const [noResults, setNoResults] = useState(false);
    // NOTE: Requires that component attribute is set in App Container to access
    //   this variable
    const { data, preferences } = props.location.state;

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

    return (
        <div>
            <Topbar title='Search Results' hasBack/>
            {searchResultsListToHtml(results)}
        </div>
    );
}

export default SearchResults;
