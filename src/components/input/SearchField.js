import React, { Component } from 'react';
import styled from 'styled-components';
import { searchRequest } from '../../helpers';

const StyledForm = styled.form`
    display: flex;
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
    &:focus {
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
    &:active {
        box-shadow: 0;
    }
`;

export class SearchField extends Component {
    state = {
        text: '',
        movie: null,
        error: '',
        loading: false
    }

    onTextChange = (e) => this.setState({ text: e.target.value, error: '' });
    onFormSubmit = async (e) => {
        const { text } = this.state;
        e.preventDefault();
        this.setState({ loading: true });
        const res = await searchRequest(text);
        if(res.response) {
            this.setState({ movie: res, loading: false });
        } else {
            this.setState({ error: res.Error, loading: false });
        }
    }

    render() {
        const { loading, text } = this.state;
        return (
            <StyledForm onSubmit={this.onFormSubmit}>
                <StyledFormGroup>
                    <StyledInput required name="search" type="text" onChange={this.onTextChange} />
                    <StyledLabel htmlFor="search">Search Movie</StyledLabel>
                </StyledFormGroup>
                <StyledButton disabled={loading || text.length < 1} type="submit">Search</StyledButton>
            </StyledForm>    
        );
    }
};