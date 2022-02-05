import React from 'react';
import MovieList from './components/movielist';

export default class Container extends React.Component {
    //since we are handling the state within here the parent component 
    //      we have to build the state up in the constructor to reflect that 
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    render() {
        return (
        <div>
            <MovieList />
        </div>
        )
    };
    
}