import React from "react";
import {
  StudySpaceCard,
  Topbar
} from "../components";

var study_spaces = require("../study-spaces.json");
var dataHtml = [];

// TODO: Delete this. This is only a temporary solution to the handle click
//   callback.
function handleClick() {
  console.log("I've been clicked! Bless this day.");
}

function handleClickDelete(event) {
  console.log("I'm being deleted! NOOOO.");
  // TODO: Use this code when actually deleting from the static db.
  //var indexToDelete = event.target.getAttribute("index");
  //dataHtml.splice(indexToDelete, 1);
  // TODO: This is going to be dummy code for now.
  document.getElementById("favorites-list").style.display = "none";
}

function renderFavoritesList() {
  var data = study_spaces.data;

  dataHtml = [];
  for (var i = 0; i < data.length; i++) {
    var space = data[i];
    dataHtml.push(
      <StudySpaceCard
        index={i}
        title={space.title}
        description={space.description}
        imageFilePath={space.imageFilePath}
        distance={space.distance}
        tags={space.tags}
        handleClick={handleClick}
        hasRemove={true}
        handleClickDelete={handleClickDelete}
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
    <Topbar title="Favorites" hasBack={true}/>

    <div id="favorites-list">
      {renderFavoritesList()}
    </div>
  </div>
);

export default Favorites;
