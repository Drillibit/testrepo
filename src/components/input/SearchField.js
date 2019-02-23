import React, { Component } from 'react';
import styled from 'styled-components';
import { searchRequest } from '../../helpers';

import { MovieInfo } from '../info';

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    min-height: 100vh;
    margin-top: 40px;
`;

const StyledForm = styled.form`
    display: flex;
    margin-bottom: 20px;
`;

const StyledFormGroup = styled.fieldset`
    display: flex;
    position: relative;
`;


const StyledInput = styled.input`
    display: flex;
    border: none;
    font-size: 17px;
    padding: 5px;
    outline: none;
    border-bottom: 1px solid black;
    width: 270px;
    transition:0.2s ease all; 
    &:focus, &:valid {
        border-bottom: 1px solid deepskyblue;
    }
`;

const StyledLabel = styled.label`
    position: absolute;
    top: 0;
    transition:0.2s ease all;    
    ${StyledInput}:focus ~ &, ${StyledInput}:valid ~ & {
        top: -10px;
        color: deepskyblue;
        font-size: 12px;
    }
`;

const StyledButton = styled.button`
    border: none;
    color: #fff;
    background-color: deepskyblue;
    font-size: 16px;
    margin-left: 5px; 
    cursor: pointer;
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    }
`;

export class SearchField extends Component {
    state = {
        text: '',
        movies: [],
        error: '',
        loading: false
    }

    onTextChange = (e) => this.setState({ text: e.target.value, error: '' });
    onFormSubmit = async (e) => {
        const { text } = this.state;
        e.preventDefault();
        this.setState({ loading: true });
        const res = await searchRequest(text);
        if(res.Response) {
            this.setState({ movies: res.Search, loading: false });
        } else {
            this.setState({ error: res.Error, loading: false });
        }
    }

    render() {
        const { loading, text, movies } = this.state;
        return (
            <StyledContainer>
                <StyledForm onSubmit={this.onFormSubmit}>
                    <StyledFormGroup>
                        <StyledInput required name="search" type="text" onChange={this.onTextChange} />
                        <StyledLabel htmlFor="search">Search Movie</StyledLabel>
                    </StyledFormGroup>
                    <StyledButton disabled={loading || text.length < 1} type="submit">Search</StyledButton>
                </StyledForm>
                {movies.length > 0 && movies.map((movie) => <MovieInfo key={movie.imdbID} {...movie} />)}    
            </StyledContainer>
        );
    }
};