import React from 'react';
// import styled from 'styled-components';
import Figure from 'react-bootstrap/Figure';
import med from '../assets/view-icons/ambience/med-ambience.png';
import loud from '../assets/view-icons/ambience/loud-ambience.png';
import quiet from '../assets/view-icons/ambience/quiet-ambience.png';
import silent from '../assets/view-icons/ambience/silent-ambience.png';

function Ambience(props) {

    return (
        <div>
            <h3>Ambience</h3>
            {props.val === 'loud' &&
                <Figure>
                    <Figure.Image src={loud} />
                    <Figure.Caption>
                        Loud
                    </Figure.Caption>
                </Figure>
            }
            {props.val === 'quiet' &&
                <Figure>
                    <Figure.Image src={quiet} />
                    <Figure.Caption>
                        Quiet
                    </Figure.Caption>
                </Figure>
            }
            {props.val === 'silent' &&
                <Figure>
                    <Figure.Image src={silent} />
                    <Figure.Caption>
                        Silent
                    </Figure.Caption>
                </Figure>
            }
            {props.val === 'med' &&
                <Figure>
                    <Figure.Image src={med} />
                    <Figure.Caption>
                        Medium
                    </Figure.Caption>
                </Figure>
            }
        </div>
    )
}
export default Ambience;