import React from "react";
import {Card} from "react-bootstrap";
import {
  StudySpaceCard,
  Topbar
} from "../components";
import styled from "styled-components";

// TODO: Read from the static database here to generate a list of study space
//   cards.
function renderFavoritesList() {
  return <StudySpaceCard
    title="The Think Tank"
    description="Active study spaces located inside Galbraith Hall"
    imageFilePath="../assets/study-spaces/galbraith.jpg"
    distance="2 miles away"
    tags="Active, Quiet, Crowded"
  />;
}

const Favorites = () => (
  <div>
    <Topbar title="Favorites" hasBack={true} />
    {renderFavoritesList()}
  </div>
);

export default Favorites;
