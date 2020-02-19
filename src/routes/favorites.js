import React from "react";
import {
  Link,
  useHistory
} from 'react-router-dom';
import {
  StudySpaceCard,
  Topbar
} from "../components";

var dataHtml = [];

const Favorites = (props) => {
  const history = useHistory();

  function handleClick() {
    console.log("Favorites card clicked.");

    // TODO: Commented this out because it was breaking the back button.
    // history.push("/view-space");
  }

  function handleClickDelete(event) {
    console.log("Favorites card deleted.");

    event.preventDefault();
    // TODO: Use this code when actually deleting from the static db.
    //var indexToDelete = event.target.getAttribute("index");
    //dataHtml.splice(indexToDelete, 1);
    // TODO: This is going to be dummy code for now.
    document.getElementById("favorites-list").style.display = "none";
  }
  /* Sources of Help:
   *  - Interrupting the Link on the Card: https://stackoverflow.com/questions/39849108/disable-react-router-link-in-react
   **/

  // TODO: Change the data attribute of this.
  function favoritesListToHtml(data) {
    return data.map((space, i) => {
      return <Link to={{ state: { data : space }, pathname: "/view-space" }}
        style={{ textDecoration: "none", color: "#000000" }}>
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
      <div id="favorites-list">
        {favoritesListToHtml(props.data)}
      </div>
    </div>);
};

export default Favorites;
