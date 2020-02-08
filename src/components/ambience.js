import React from 'react';
// import styled from 'styled-components';
import Figure from 'react-bootstrap/Figure';
import med from '../assets/view-icons/ambience/med-ambience.png';

function Ambience (val) {
    return (
        <div>
            <h3>Ambience</h3>
            <Figure>
                <Figure.Image src={med} />
                <Figure.Caption>
                    Medium
                </Figure.Caption>
            </Figure>
        </div>
    )
}
export default Ambience;