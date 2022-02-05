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
        // let reviews = [];
        // if (this.state.reviews.length !== 0) {
        //     for (let review of this.state.reviews) {
        //         reviews.push(<Review {...review} />);
        //     }
        //}
        return (
            <Card> 
                <div className="cardBody">
                    {this.state.reviews}
                </div>
            </Card>
        );
    }
}