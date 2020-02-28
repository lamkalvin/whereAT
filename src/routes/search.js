import React from 'react';
import styled from 'styled-components';
import SearchForm from '../components/forms/search-form';
import Topbar from '../components/topbar';

const BufferDiv = styled.div`
    margin: 50px auto 50px auto;
    width: 85%;
`;

const Search = (props) => (
    <div>
        <Topbar title='Search' hasBack={true} />
        <BufferDiv>
            <SearchForm data={props.data}/>
        </BufferDiv>
    </div>
);

export default Search;
