import React from 'react';

// ReviewList - a container inside of a Movie that houses Review components.

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        };
    }

    render() {
        console.log("in reviewlist");
        // we need a loop to re-render the reviewlist on the page... ??????
        return (
            <div className='container'>
                <div>   
                    {this.state.reviews.map(function(review,index) {
                        return <div key={index}>{review.title}<span>: &nbsp; &nbsp;</span> {review.reviewtext}</div>
                    })}
                </div>
            </div>
        );
    }
}