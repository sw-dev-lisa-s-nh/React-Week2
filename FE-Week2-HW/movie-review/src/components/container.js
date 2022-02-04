import React from 'react';
import MovieList from './movielist';

export default class Container extends React.Component {
    //since we are handling the atate within here the parent component we have to build the state up in the constructor to reflect that 
    constructor(props) {
        super(props);
        this.state = {
            movies: []
            //within here we will have counts which will hold the counts, we will pass in the names assoicated to those names 
            // votes: {},
            // clicksSum: 0,
            // voteSum: 0,
            // voteAvg: 0,
            //*** VIDEO EVENTS PT 3 FOR REFERENCE  */
            //to create the feature the business wants we will start by adding more properties to keep track of it 
            //to start lets go by adding the prop "highestCount: 0" ofc starting at 0 because they will all start at 0
            // highestVote: 0,
            //then we add this which will allow us to compare the name of the buttons with the highest count so it can be updated when needed 
            // highestVoteName: ''
        };
        //this.countClicks = this.countClicks.bind(this);
    }

    render() {
        return (
        <div>
            <MovieList />
        </div>
        )
    };
    
}