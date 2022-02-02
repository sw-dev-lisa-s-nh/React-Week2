import React from 'react';
import { Card } from 'react-bootstrap';
import ReviewForm from './reviewform';
//import ReviewList from './reviewlist';
//import Stars from './stars';


// Movie - a component that represents movie data 
//          (i.e. image, synopsis, rating, etc...)

export default class Movie extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      key: props.key,
      ranking: props.ranking,
      title: props.title,
      rating: props.rating,
      synopsis: props.synopsis,
      image: props.image,
      reviews: []
    };
  }

  render() {
    return (
        <Card className="border border-primary">
            <Card.Header>
                <Card.Img class="img-fluid" variant="top" src={this.state.image} />
                <br /><strong>{this.state.id}.</strong> <span>&nbsp;</span><strong>{this.state.title}</strong>                          
            </Card.Header>
           
            <Card.Body>
            <div className="cardBody">
                <strong>Stars:</strong>
                {/* <Stars /> */}
                <br /><br />                
                <strong>Synopsis:</strong>  {this.state.synopsis}
                <br /><br />
                <strong>Rating: </strong> {this.state.rating}
                <br /><br />
                {/* <ReviewList /> */}
            </div>
            </Card.Body>
            <Card.Footer className="text-muted">               
                <ReviewForm />
            </Card.Footer>
        </Card>
        )
    }
}