import React from "react";
import {
  Link,
  useHistory
} from 'react-router-dom';
import {
  StudySpaceCard,
  Topbar
} from "../components";

function handleClick() {
  console.log("Favorites card clicked.");

  // TODO: Commented this out because it was breaking the back button.
  // history.push("/view-space");
}

/**
 * Improvements:
 *  - update list as soon as it's clicked instead of having to refresh the page
 */
function handleClickDelete(event) {
  console.log("Favorites card deleted.");

  // Prevents the Card's onClick/Link from being triggered
  event.preventDefault();

  // Delete from Local Storage
  var favoriteSpacesJson = JSON.parse(localStorage.getItem('favoriteSpaces'));
  var indexToDelete = event.target.getAttribute("index");
  favoriteSpacesJson.data.splice(indexToDelete, 1);
  localStorage.setItem('favoriteSpaces', JSON.stringify(favoriteSpacesJson));
}
/* Sources of Help:
 *  - Interrupting the Link on the Card: https://stackoverflow.com/questions/39849108/disable-react-router-link-in-react
 **/

/**
 * Improvements:
 *  - Put this function in a shared file b/c it's copied to Recently Viewed screen.
 */
function favoritesListToHtml(data) {
  return data.map((space, i) => {
    return <Link to={{ state: { data : space }, pathname: "/view-space" }} style={{ textDecoration: "none", color: "#000000" }}>
      <StudySpaceCard
        index={i}
        data={space}
        handleClick={handleClick}
        hasRemove={true}
        handleClickDelete={handleClickDelete}
      />
    </Link>;
  });
}
/*
 * Sources of Help:
 *  - Dynamically generating the list of study space cards: https://www.skptricks.com/2018/06/append-or-prepend-html-using-reactjs.html
 **/

const Favorites = (props) => {
  // TODO: Figure out how to use this correctly with the handleClick().
  const history = useHistory();

  return (
    <div id="favorites" style={{ overflow: "scroll" }}>
      <Topbar title="Favorites" hasBack={true} />
      {favoritesListToHtml(props.data)}
    </div>);
};

export default Favorites;
