import React from 'react';
import { Card } from 'react-bootstrap';

// Review - A text review a user can leave on a movie.

export default class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            reviewtext: props.reviewtext,
            key: props.key
        };
    }

    render() {
        return (
            <Card>
                <div className="cardHeader">
                    <strong>*</strong>
                </div>    
                <div className="cardBody">
                    <strong>{this.state.title}: </strong> {this.state.reviewtext}
                </div>
        </Card>
        );
    }
}