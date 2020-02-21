import React from 'react';
import Button from 'react-bootstrap/Button';

/**
 * Improvements:
 *  - animated heart icon for the favorites button (see: https://codepen.io/mapk/pen/ZOQqaQ)
 *  - better background color
 *  - include a toast (maybe "Added to Favorites") once clicked
 *  - disable button as soon as it's clicked instead of having to refresh the page
 *  - favorites button on the main nav bar should automatically requery for the
 *    local storage data instead of having to do a manual refresh
 *  - user can unfavorite immediately after they favorite. or like, any unfavoriting capability on this page
 *  - relative positioning of button
 */

 // state for button
const FavoritesButton = (props) => {
    let favoriteSpacesJson = JSON.parse(localStorage.getItem('favoriteSpaces'));

    console.log(typeof favoriteSpacesJson.data.map(space => space.title).includes(props.space.title))

    /* Add the currently viewed space to the favorites list */
    function handleClick() {
        favoriteSpacesJson.data.push(props.space);
        console.log(favoriteSpacesJson);
        localStorage.setItem('favoriteSpaces', JSON.stringify(favoriteSpacesJson));
    }

    /* Disable button if a space has already been added to the favorites list */
    function shouldDisable() {
        return favoriteSpacesJson.data.map(space => space.title).includes(props.space.title);
    }

    return (<Button
      style={{ position: "absolute", top: "100px", right: "20px" }}
      variant="secondary"
      onClick={handleClick}
      disabled={shouldDisable()}
      >
      Add to Favorites
    </Button>);
};

export default FavoritesButton;
