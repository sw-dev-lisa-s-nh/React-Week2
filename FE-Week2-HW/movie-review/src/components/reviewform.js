import React from 'react';
//import SubmitButton from './submitbutton';

// ReviewForm - a form at the bottom of a Movie component that allows users to 
// leave reviews.  When submitted, the review should be added to the movie.  
// All this data can be stored in an array, no networking or database 
//      needed for this assignment.

export default class ReviewForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        index: this.props.index,
        reviewtext: this.props.reviewtext
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({reviewtext: event.target.reviewtext});
    }
  
    handleSubmit(event) {
      alert('A movie review was submitted.');
      event.preventDefault();
    }
  
    render() {
      return (
          <div className="border border-primary p-3">
            <h5>Review this movie here:</h5>
            <form className="p-2" onSubmit={this.handleSubmit}>
                <label>Review:<br />
                    <textarea className="m-1"value={this.props.reviewtext} onChange={this.handleChange} />
                </label><br /><span>&nbsp; &nbsp;</span>
            <input className="submit-button btn-dark" type="submit" value="Submit Movie Review" />
            </form>
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