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
  // TODO: Figure out how to iterate through the list and dynamically create the
  //   HTML. Following the labs' example, handlebars allows you to use the #each
  //   helper.
  return <div>
    <StudySpaceCard
      title={study_spaces.data[0].title}
      description={study_spaces.data[0].description}
      imageFilePath={study_spaces.data[0].imageFilePath}
      distance={study_spaces.data[0].distance}
      tags={study_spaces.data[0].tags}
      handleClick={handleClick}
    />
    <StudySpaceCard
      title={study_spaces.data[0].title}
      description={study_spaces.data[0].description}
      imageFilePath={study_spaces.data[0].imageFilePath}
      distance={study_spaces.data[0].distance}
      tags={study_spaces.data[0].tags}
      handleClick={study_spaces.data[0].handleClick}
    />
  </div>;
}

const Favorites = () => (
  <div>
    <Topbar title="Favorites" hasBack={true} />
    {renderFavoritesList()}
  </div>
);

export default Favorites;
