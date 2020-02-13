import React from "react";
import {
  StudySpaceCard,
  Topbar
} from "../components";

var study_spaces = require("../study-spaces.json");

// TODO: Delete this. This is only a temporary solution to the handle click
//   callback.
function handleClick() {
  console.log("I've been clicked! Bless this day.")
}


// TODO: Read from the static database here to generate a list of study space
//   cards.
function renderFavoritesList() {
  var data = study_spaces.data

  var dataHtml = []
  for (var i = 0; i < data.length; i++) {
    var space = data[i];
    dataHtml.push(
      <StudySpaceCard
        title={space.title}
        description={space.description}
        imageFilePath={space.imageFilePath}
        distance={space.distance}
        tags={space.tags}
        handleClick={handleClick}
      />
    );
  }

  return dataHtml;
}
/*
 * Sources of Help:
 *  - Dynamically generating the list of study space cards: https://www.skptricks.com/2018/06/append-or-prepend-html-using-reactjs.html
 **/

const Favorites = () => (
  <div id="favorites" style={{ overflow: "scroll" }}>
    <Topbar title="Favorites" hasBack={true} />
    <div id="favorites-list">
      {renderFavoritesList()}
    </div>
  </div>
);

export default Favorites;
