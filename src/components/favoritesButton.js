import React, { useState } from 'react';
import '../assets/css/star.css';

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
    const clickClasses = ['active', 'active-2', 'active-3'];
    const [currClick, setCurrClick] = useState(favorited ? "active active-2 active-3" : "");

    function starClick() {
        if (favorited) {
            setCurrClick(clickClasses[1] + " " + clickClasses[2]);
            setTimeout(() => {setCurrClick(clickClasses[2]); setCurrClick("");}, 30);
        } else {
            setCurrClick(clickClasses[0] + " " + clickClasses[1]);
            setTimeout(() => setCurrClick(clickClasses[0] + " " + clickClasses[1] + " " + clickClasses[2]), 150);
        }
    }

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

    return (
        <div className={"click " + currClick}
            style={{ position: "absolute", top: "55px", right: "20px"}}
            onClick={() => {starClick(); handleClick()}}>
                <span className={"fa fa-star"}></span>
                <div className="ring"></div>
                <div className="ring2"></div>
        </div>
    );
};

export default FavoritesButton;
