import React from 'react';
import styled from 'styled-components';

const StyledMovieWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    margin: 15px;
    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
`;

const StyledMain = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 10px;
`;

export const MovieInfo = ({ Title, Poster, Year,}) => {
    return (
       <StyledMovieWrapper>
        {Poster && <img alt={`poster of ${Title}`} src={Poster} /> }
        <StyledMain>
            <h1>{Title}</h1>
            <span>{Year}</span>
        </StyledMain>
       </StyledMovieWrapper> 
    );
};
