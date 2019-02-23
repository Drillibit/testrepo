import React, { Component } from 'react';
import styled from 'styled-components';

//Request movie data
import { movieRequest } from '../../helpers/movieRequest';

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

export class MoviePage extends Component {
    state = {
        loading: true,
        movie: {}
    }

    componentDidMount() {
        movieRequest(this.props.match.params.id)
            .then(movie => this.setState({ loading: false, movie }));
    }
    render() {
        const { loading, movie } = this.state;
        if(loading) {
          return  <p>Loading...</p>
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
            </StyledPageWrapper>
        );
    }
};
