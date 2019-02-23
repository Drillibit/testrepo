import React, { Component } from 'react';
import styled from 'styled-components';
import { searchRequest } from '../../helpers';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`;

const StyledFormGroup = styled.fieldset`
    display: flex;
`;

const StyledInput = styled.input`
    display: flex;
    border: none;
    border-bottom: 1px solid black;
`;

const StyledButton = styled.button`
    border: none;
    color: #fff;
    background-color: deepskyblue;
`;

export class SearchField extends Component {
    state = {
        text: '',
        movie: null,
        error: ''
    }

    onTextChange = (e) => this.setState({ text: e.target.value, error: '' });
    onFormSubmit = async (e) => {
        const { value } = this.state;
        e.preventDefault();
        const res = await searchRequest(value);
        if(res.response) {
            this.setState({ movie: res });
        } else {
            this.setState({ error: res.Error });
        }
    }

    render() {
        return (
            <StyledForm onSubmit={this.onFormSubmit}>
                <StyledFormGroup>
                    <StyledInput name="search" type="text" onChange={this.onTextChange} />
                </StyledFormGroup>
                <StyledButton type="submit">Search</StyledButton>
            </StyledForm>    
        );
    }
};