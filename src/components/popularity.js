import React from 'react';
// import styled from 'styled-components';
import Figure from 'react-bootstrap/Figure';
import med from '../assets/view-icons/popularity/med-popular.png';

function Popularity (val) {
    return (
        <div>
            <h3>Popularity</h3>
            <Figure>
                <Figure.Image src={med} />
                <Figure.Caption>
                    Medium
                </Figure.Caption>
            </Figure>
        </div>
    )
}
export default Popularity;