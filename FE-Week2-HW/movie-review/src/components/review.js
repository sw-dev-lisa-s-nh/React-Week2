import React from 'react';
import { Card } from 'react-bootstrap';

// Review - A text review a user can leave on a movie.

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            reviewtext: ''
        };
        //this.countClicks = this.countClicks.bind(this); // needed for React
    }

    render() {
        return (
            <Card>
            <Card.Header>
                <br /><strong>Movie Review</strong> <span>&nbsp;</span><strong>{this.state.title}</strong>                          
            </Card.Header>
           
            <Card.Body>
            <div className="cardBody">
                <strong>Review: </strong> {this.state.reviewtext}
            </div>
            </Card.Body>
        </Card>
        );
    }
}