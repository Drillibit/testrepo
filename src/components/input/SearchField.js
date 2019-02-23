import React, { Component } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    display: flex;
    border: none;
    border-bottom: 1px solid black;
`;

export class SearchField extends Component {
    state = {
        text: ''
    }

    onTextChange = (e) => this.setState({ text: e.target.value });

    render() {
        return (
            <StyledInput name="search" type="text" onChange={this.onTextChange} />
        );
    }
};