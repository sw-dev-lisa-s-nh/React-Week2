import React from 'react';
import { Card } from 'react-bootstrap';
import ReviewList from './reviewlist';
import ReviewForm from './reviewform';
import Stars from './stars';


// Movie - a component that represents movie data 
//          (i.e. image, synopsis, rating, etc...)

export default class Movie extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      ranking: props.ranking,
      title: props.title,
      rating: props.rating,
      stars: props.stars,
      newstars: props.newstars,
      totalvotes: props.totalvotes,
      synopsis: props.synopsis,
      image: props.image,
      reviews: props.reviews
    };
    this.onStarSubmit = this.onStarSubmit.bind(this); // needed for React
    this.onFormSubmit = this.onFormSubmit.bind(this); // needed for React
  }

  onStarSubmit(formState) {
    console.log("In Movie.js -- onStarSubmit: " + formState.newstars);
    let oldstars = this.state.stars;
    const newstars = formState.newstars;
    const newtotalvotes = this.state.totalvotes+1;
    let computedstars = (oldstars + newstars);
    console.log ("computed stars: " + computedstars);
    computedstars = computedstars/newtotalvotes;
    console.log ("computed stars: " + computedstars);
    this.setState({
      stars: computedstars,
      totalvotes: newtotalvotes
    });
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
      // console.log(this.props.image); // for debugging purposes
    return (
        <Card className="card-movie p-2 border border-primary">
            <Card.Header>
                <Card.Img className="card-image img-fluid" variant="left" src={this.state.image} alt='movie poster' type='image/jpeg'/>
                <span>&nbsp; &nbsp; </span>
                <strong>{this.state.id}.</strong> <span>&nbsp;</span><strong>{this.state.title}</strong>                          
            </Card.Header>
           
            <Card.Body>
            <div className="cardBody p-2">
                <strong>Synopsis:</strong>  {this.state.synopsis}
                <br /><br />
                <strong>Rating: {this.state.rating} </strong>
                <br /><br />
                <strong>Stars Average Rating: </strong> <span>&nbsp; &nbsp;</span><strong>{this.state.stars}</strong>
                <br /><br />
                <strong>Reviews: </strong>
                <br/><br />
                <ReviewList />
            </div>
            </Card.Body>
            <br />
            <Card.Footer className="text-muted p-2"> 
                <div>
                    <Stars  onStarSubmit={(formState) => this.onStarSubmit(formState)}/> 
                    <br /> <br />
                    <ReviewForm  onFormSubmit={(formState) => this.onFormSubmit(formState)}  />
                </div>
              
               End of <strong>{this.state.title}</strong>
            </Card.Footer>
        </Card>
        )
    }
}