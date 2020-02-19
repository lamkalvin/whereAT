import React from 'react';
import Figure from 'react-bootstrap/Figure';
import med from '../assets/view-icons/popularity/med-popular.png';
import high from '../assets/view-icons/popularity/high-popular.png';
import not from '../assets/view-icons/popularity/not-popular.png';

function Popularity(props) {
    return (
        <div>
            <h3>Popularity</h3>
            {props.val === 'med' &&
                < Figure >
                    <Figure.Image src={med} />
                    <Figure.Caption>
                        Medium
                </Figure.Caption>
                </Figure>
            }
            {props.val === 'high' &&
                < Figure >
                    <Figure.Image src={high} />
                    <Figure.Caption>
                        High
                </Figure.Caption>
                </Figure>
            }
            {props.val === 'not' &&
                < Figure >
                    <Figure.Image src={not} />
                    <Figure.Caption>
                        Not very popular
                </Figure.Caption>
                </Figure>
            }
        </div >
    )
}
export default Popularity;