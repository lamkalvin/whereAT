import React from "react";
import { useHistory } from 'react-router-dom';
import {
  StudySpaceCard,
  Topbar
} from "../components";

var dataHtml = [];

const Favorites = (props) => {
  const history = useHistory();

  // TODO: Delete this. This is only a temporary solution to the handle click
  //   callback.
  function handleClick() {
    console.log("I've been clicked! Bless this day.");
    // TODO: This is a workaround. Try to use the Link component in the future.
    // window.location.assign(window.location.href.replace("/favorites", "/view-space"));
    history.push("/view-space");
  }

  function handleClickDelete(event) {
    event.stopPropagation();
    console.log("I'm being deleted! NOOOO.");
    // TODO: Use this code when actually deleting from the static db.
    //var indexToDelete = event.target.getAttribute("index");
    //dataHtml.splice(indexToDelete, 1);
    // TODO: This is going to be dummy code for now.
    document.getElementById("favorites-list").style.display = "none";
  }

  function favoritesListToHtml(data) {
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

  return (
    <div id="favorites" style={{ overflow: "scroll" }}>
      <Topbar title="Favorites" hasBack={true} />
      <div id="favorites-list">
        {favoritesListToHtml(props.data)}
      </div>
    </div>);
};

export default Favorites;
