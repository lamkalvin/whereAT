import React, {useState} from 'react';
import {Topbar} from '../../components';
import styled from 'styled-components';

const StyledText = styled.h3`
    margin-top: 20px;
    text-align: center;
`

const NearYouPage = () => {
    const [noResults, setNoResults] = useState(false);
    return (
        <div>
            <Topbar title="Study spaces near you" hasBack={true} titleSize={'24pt'}/>
            {noResults ? null : <StyledText>No results...</StyledText>}
        </div>
    )
};

export default NearYouPage;