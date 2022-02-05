import React from 'react';
import {Button, Form} from 'react-bootstrap';


// ReviewForm - a form at the bottom of a Movie component that allows users to 
// leave reviews.  When submitted, the review should be added to the movie.  
// All this data can be stored in an array, no networking or database 
//      needed for this assignment.

export default class ReviewForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        reviewtext: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    resetReview() {
      this.setState({
        reviewtext: ''
      });
    }

    handleChange(event) {
      let current = event.target;
      const name = current.name;
      const value = current.value;
      console.log("Name: " + name + "  value: " + value);
      this.setState({
          [name]: value
      });
    }
  
    handleSubmit(event) {
      event.preventDefault();
      console.log('A movie review was submitted.');
      this.props.onFormSubmit(this.state);
      this.resetReview();
    }
  
    render() {
      return (
          <div className="new-movie-review p-2">
            {/* <Review review={this.state.reviews} /> */}

            <h5>Personal Movie Review</h5>
            <Form className="form">
                {/* <label htmlFor="titleInput"><b>Title for Movie Review:</b></label>
                <br />
                    <input name="title" type="text" id="titleInput" value={this.state.title} onChange={this.handleChange} />
                    <br /> */}
                    <label htmlFor="reviewInput"><b>Enter review here:</b></label>
                    <br />
                    <input name="reviewtext" type="text" id="reviewInput" value={this.state.reviewtext} onChange={this.handleChange} />
                    <br /><br/>
                    <Button className="submit-button btn btn-dark" type="submit" value="Submit Review" onClick={this.handleSubmit}>Submit Movie Review</Button>
                    <div>
                      <input type='hidden' name='movieid' id='movieid' value={this.id}/>
                      <input type='hidden' id='displayid' placeholder={this.id}/>
                    </div>                    
            </Form>
          </div>
      );
    }
  }



// export default class ReviewForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: this.props.name,
//             date: this.props.date
//         };
//         //this.countClicks = this.countClicks.bind(this); // needed for React
//     }

//     // add a form to collect a movie review:
//     // needs a username, date, and text
//     render() {
//         return(
//             <div className="border border-primary p-5"> 
//                 <form>
//                     <label>Name:
//                         <input type="text" name="name" />
//                     </label> <br />
//                     <label>Date:
//                         <input type="date" name="date" />
//                     </label> <br />
//                     <label>Movie Review:
//                         <input type="text" name="reviewcontent" />
//                     </label> <br />
//                     <input type="submit" value="Submit" />
//                 </form>


//             </div>
//             // <div className="card w-75">
//             //     <div className="card-header bg-success text-white">
 
//             //     {this.props.name} {this.props.date}
//             //     </div>

//             //     <div className="card-body">
//             //         {this.props.content}
//             //     </div>

//             //     <div className="card-footer">
//             //         {/* <span>&nbsp;</span> */}
//             //         <SubmitButton />
//             //     </div>
//             // </div>
//         );

//     }
// }