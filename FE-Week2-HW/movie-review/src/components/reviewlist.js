import React from 'react';
import ReviewForm from './reviewform';

// ReviewList - a container inside of a Movie that houses Review components.

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        };
        //this.onFormSubmit = this.onFormSubmit.bind(this); // needed for React
    }

    // onFormSubmit -- let's update the reviews array with the new content.

    render() {
        // var count = 1;
        // we need a loop to re-render the reviewlist on the page... ??????
        return (
            <div>
                <strong>Reviews: </strong>  
                <div className="container">                         
                    <h5>TO DO:  Make this work!</h5>
                    {this.state.reviews}
                </div>
                <ReviewForm />
            </div>
        );
    }
}