import React from 'react';
import styled from 'styled-components';
import { Topbar, AddForm } from '../../components';

const BufferDiv = styled.div`
    margin: 50px auto 50px auto;
    width: 85%;
`;

const NewSpacePage = () => (
    <div>
        <Topbar title='Add New Study Space' hasBack />
        <BufferDiv>
            <AddForm />
        </BufferDiv>
    </div>
)

export default NewSpacePage;