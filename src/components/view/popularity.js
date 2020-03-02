import React from 'react';
import Figure from 'react-bootstrap/Figure';
import med from '../../assets/view-icons/popularity/med-popular.png';
import high from '../../assets/view-icons/popularity/high-popular.png';
import not from '../../assets/view-icons/popularity/not-popular.png';

const popularityLevels = ['not', 'med', 'high'];

function Popularity(props) {
    return (
        <div>
            <h4>Popularity</h4>
            <i>The relative amount of people in the space</i>
            {popularityLevels[props.val - 1] === 'med' &&
                <Figure style={{textAlign: 'center'}}>
                    <Figure.Image src={med} />
                    <Figure.Caption>
                        Medium
                </Figure.Caption>
                </Figure>
            }
            {popularityLevels[props.val - 1] === 'high' &&
                <Figure style={{textAlign: 'center'}}>
                    <Figure.Image src={high} />
                    <Figure.Caption>
                        High
                </Figure.Caption>
                </Figure>
            }
            {popularityLevels[props.val - 1] === 'not' &&
                <Figure style={{textAlign: 'center'}}>
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