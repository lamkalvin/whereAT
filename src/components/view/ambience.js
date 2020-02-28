import React from 'react';
// import styled from 'styled-components';
import Figure from 'react-bootstrap/Figure';
import med from '../../assets/view-icons/ambience/med-ambience.png';
import loud from '../../assets/view-icons/ambience/loud-ambience.png';
import quiet from '../../assets/view-icons/ambience/quiet-ambience.png';

const ambienceLevels = ['quiet','med','loud'];

function Ambience(props) {

    return (
        <div>
            <h4>Ambience</h4>
            {ambienceLevels[props.val-1] === 'loud' &&
                <Figure style={{textAlign: 'center'}}>
                    <Figure.Image src={loud} />
                    <Figure.Caption>
                        Loud
                    </Figure.Caption>
                </Figure>
            }
            {ambienceLevels[props.val-1] === 'quiet' &&
                <Figure style={{textAlign: 'center'}}>
                    <Figure.Image src={quiet} />
                    <Figure.Caption>
                        Quiet
                    </Figure.Caption>
                </Figure>
            }
            {ambienceLevels[props.val-1] === 'med' &&
                <Figure style={{textAlign: 'center'}}>
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