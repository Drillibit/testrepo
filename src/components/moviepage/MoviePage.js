import React, { Component } from 'react';
import styled from 'styled-components';

export class MoviePage extends Component {
    state = {
        movie: {}
    }

    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <p>Movie Page</p>
        );
    }
};




// Actors: "",
// Awards: "",
// BoxOffice: "",
// Country: "",
// DVD: "",
// Director: "",
// Genre: "",
// Language: "",
// Metascore: "",
// Plot: "",
// Poster: "",
// Production: "",
// Rated: "",
// Ratings: [],
// Released: "",
// Response: "",
// Runtime: "10 min"
// Title: "Trixie Friganza in My Bag o' Trix"
// Type: "movie"
// Website: "N/A"
// Writer: "N/A"
// Year: "1929"
// imdbID: "tt0142676"
// imdbRating: "6.7"
// imdbVotes: "85"