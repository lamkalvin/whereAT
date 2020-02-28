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
    <h5>Add a favorite space<br/>to see it here! <span role="img" aria-label="star">⭐</span></h5>
  </div>
)

const Favorites = () => {
  let favoriteSpaces = JSON.parse(localStorage.getItem('favoriteSpaces'));
  const [ numSpaces, setNumSpaces ] = useState(favoriteSpaces.data.length);

  function handleClickDelete(title) {
    let index = favoriteSpaces.data.findIndex(x => x.title === title);
    favoriteSpaces.data.splice((index), 1);
    localStorage.setItem('favoriteSpaces', JSON.stringify(favoriteSpaces));
    setNumSpaces(numSpaces - 1);
  }

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

  return (
    <div id="favorites" style={{ marginBottom: '50px' }}>
      <Topbar title="Favorites" hasBack={true} />
      {numSpaces > 0 ? favoritesListToHtml() : <NoResults />}
    </div>);
};

export default Favorites;
