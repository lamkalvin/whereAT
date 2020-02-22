import React, { useState } from "react";
import {
  Link,
} from 'react-router-dom';
import {
  StudySpaceCard,
  Topbar
} from "../components";

const NoResults = () => (
  <div style={{ width: '100%', margin: 'auto', textAlign: 'center', marginTop: '350px' }}>
    <h2>add a favorite space to see it on this page!</h2>
  </div>
)

const Favorites = () => {
  let favoriteSpaces = JSON.parse(localStorage.getItem('favoriteSpaces'));
  const [ numSpaces, setNumSpaces ] = useState(favoriteSpaces.data.length);

  /**
   * Improvements:
   *  - update list as soon as it's clicked instead of having to refresh the page
   */
  function handleClickDelete(event) {
    // Prevents the Card's onClick/Link from being triggered
    event.preventDefault();

    // Delete from Local Storage
    var indexToDelete = event.target.getAttribute("index");
    favoriteSpaces.data.splice(indexToDelete, 1);
    localStorage.setItem('favoriteSpaces', JSON.stringify(favoriteSpaces));
    setNumSpaces(numSpaces - 1);
  }
  /* Sources of Help:
   *  - Interrupting the Link on the Card: https://stackoverflow.com/questions/39849108/disable-react-router-link-in-react
   **/

  function favoritesListToHtml() {
    return favoriteSpaces.data.map((space, i) => {
      return <Link key={i}
        to={{ state: { data: space }, pathname: "/view-space" }}
        style={{ textDecoration: "none", color: "#000000" }}
      >
        <StudySpaceCard
          data={space}
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

  return (
    <div id="favorites" style={{ overflow: "scroll" }}>
      <Topbar title="Favorites" hasBack={true} />
      {numSpaces > 0 ? favoritesListToHtml() : <NoResults />}
    </div>);
};

export default Favorites;
