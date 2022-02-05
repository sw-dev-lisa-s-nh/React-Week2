import React from 'react';
import ReviewForm from './reviewform';


// ReviewList - a container inside of a Movie that houses Review components.

export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: []
        };
        this.onFormSubmit = this.onFormSubmit.bind(this); // needed for React
    }

    // addReviewToList -- let's update the reviews array with the new content.
    onFormSubmit(formState) {
        const newreviews = this.state.reviews.slice();
        newreviews.push(formState);
        this.setState ({
        reviews: newreviews
        })
     }   

    render() {
        console.log("in reviewlist");
        // we need a loop to re-render the reviewlist on the page... ??????
        return (
            <div className='container'>
                {this.state.reviews.map(function(review,index) {
                    return <div className="review border p-2" key={index}> <strong>Review:</strong> {review.reviewtext}</div>
                })}
                <ReviewForm  onFormSubmit={(formState) => this.onFormSubmit(formState)}  />
            </div>
        );
    }
}