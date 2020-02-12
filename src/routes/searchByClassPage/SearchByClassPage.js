import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import {Topbar} from '../../components';
import styled from 'styled-components';


const StyledText = styled.h3`
    margin-top: 20px;
    text-align: center;
`

const SearchByClassPage = () => {
    const [noResults, setNoResults] = useState(false);
    return (
        <div>
            <Topbar title="Search by class" hasBack={true} titleSize={'24pt'}/>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: '20px'}}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select the building where your class is located:</Form.Label>
                    <Form.Control as="select">
                    <option>Geisel Library East</option>
                    <option>Geisel Library West</option>
                    <option>Price Center East</option>
                    <option>Price Center West</option>
                    <option>Galbraith Hall</option>
                    </Form.Control>
                </Form.Group>
            </div>
            <hr style={{
                    color: '#2D9CDB',
                    backgroundColor: '#2D9CDB',
                    height: 1,
                    width: '80%'
                }}
            />
            {noResults ? null : <StyledText>No results...</StyledText>}
        </div>
    )
;}

export default SearchByClassPage;