import React from 'react';

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
        return (
            <div>
                <strong>Reviews: </strong>  
                <div className="container">  
                        
                    <h5>TO DO:  This is going to hold the ReviewList!</h5>
                </div>
            </div>
        );
    }
}