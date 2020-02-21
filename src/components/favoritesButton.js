import React, { useState } from 'react';
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
    const [favorited, setFavorited] = useState(favoriteSpacesJson.data.map(space => space.title).includes(props.space.title));

    /* Add the currently viewed space to the favorites list */
    function handleClick() {
        if (!favoriteSpacesJson.data.map(space => space.title).includes(props.space.title)) {
            favoriteSpacesJson.data.push(props.space);
            localStorage.setItem('favoriteSpaces', JSON.stringify(favoriteSpacesJson));
            setFavorited(true);
        } else {
            let indexToDelete = favoriteSpacesJson.data.findIndex(space => space.title === props.space.title);
            favoriteSpacesJson.data.splice(indexToDelete, 1);
            localStorage.setItem('favoriteSpaces', JSON.stringify(favoriteSpacesJson));
            setFavorited(false);
            if (props.delete) {
                props.delete();
            }
        }
    }

    return (<Button
        style={{ position: "absolute", top: "75px", right: "20px", fontSize: "7vw", color: favorited ? 'white' : 'black' }}
        variant={ favorited ? "warning" : "light" }
        onClick={handleClick}
    >
        { favorited ? "★" : "☆" }
    </Button>);
};

export default FavoritesButton;
