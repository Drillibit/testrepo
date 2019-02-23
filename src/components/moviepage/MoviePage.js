import React, { Component } from 'react';
import styled from 'styled-components';

//Request movie data
import { movieRequest } from '../../helpers/movieRequest';
import { ErrorDisplay } from '../error';

const StyledPageWrapper = styled.div`
    display: flex;
    width: 80%;
    margin: 40px auto;
`;

const StyledBlock = styled.div`
    display: flex;
    margin: 10px 0;
`;

const StyledInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledSpan = styled.span`
    margin-right: 5px;
`;

const StyledImage = styled.img`
    height: 50%;
    margin-right: 15px;
`;

const StyledButton = styled.button`
    width: 180px;
    height: 45px;
    border: none;
    color: #fff;
    background-color: deepskyblue;
    font-size: 20px;
    margin-left: 5px; 
    cursor: pointer;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
`;

export class MoviePage extends Component {
    state = {
        loading: true,
        movie: {},
        error: false
    }

    componentDidMount() {
        movieRequest(this.props.match.params.id)
            .then(movie => this.setState({ loading: false, movie }));
    }

    componentDidCatch(){
        this.setState({ error: true });
    }
    render() {
        const { loading, movie, error } = this.state;
        if(loading) {
          return  <p>Loading...</p>
        }

        if(error) {
            return <ErrorDisplay />;
        }

        return (
            <StyledPageWrapper>
                {movie.Poster !== 'N/A' && <StyledImage alt={`poster of ${movie.title}`} src={movie.Poster} />}
                <StyledInfoWrapper>
                {Object.keys(movie).map((value) => {
                    if(value === 'Poster' || value === 'imdbID' || value === 'Response') {
                        return null;   
                    }
                    return (
                        <div key={value}>
                        {Array.isArray(movie[value]) ? (
                            movie[value].map(({ Source, Value }) => {
                                return (
                                    <StyledBlock key={Source}>
                                        <StyledSpan>{Source}: </StyledSpan>
                                        <p>{Value}</p>
                                    </StyledBlock>
                                    );
                                })
                        ) : (
                            <StyledBlock>
                                <StyledSpan>{value}:</StyledSpan>
                                <p>{movie[value]}</p>
                            </StyledBlock>
                        )}
                        </div>
                    )
                })}
                </StyledInfoWrapper>
                <StyledButton onClick={() => this.props.history.goBack()}>Back</StyledButton>  
            </StyledPageWrapper>
        );
    }
};
