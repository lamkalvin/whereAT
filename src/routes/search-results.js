import React, {useState} from 'react';
import { Link } from "react-router-dom";
import {
  StudySpaceCard,
  Topbar
} from '../components';

function handleClick() {
  console.log("Search Results card clicked.");
}

/**
 * Improvements:
 *  - Put this function in a shared file b/c it's copied from Favorites screen.
 */
function searchResultsListToHtml(data) {
  return data.map((space, i) => {
    return <Link to={{ state: { data : space }, pathname: "/view-space" }} style={{ textDecoration: "none", color: "#000000" }}>
      <StudySpaceCard
        index={i}
        data={space}
        handleClick={handleClick}
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

    console.log(preferences);

    var ambience = 0;
    if (preferences.ambience == 1) {
      ambience = "quiet";
    } else if (preferences.ambience == 2) {
      ambience = "med";
    } else {
      ambience = "loud";
    }

    var popularity = 0;
    if (preferences.popularity == 1) {
      popularity = "not";
    } else if (preferences.popularity == 2) {
      popularity = "med";
    } else {
      popularity = "high";
    }

    var minGroupSize = 0;
    if (preferences.groupSize == "1-2") {
      minGroupSize = 1;
    } else if (preferences.groupSize == "3-4") {
      minGroupSize = 3;
    } else if (preferences.groupSize == "5-6") {
      minGroupSize = 5;
    } else {
      minGroupSize = 7;
    }

    var results = data.filter(space =>
      space.ambience === ambience
      && space.popularity === popularity
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
