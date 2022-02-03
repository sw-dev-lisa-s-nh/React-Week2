import React from 'react';
import { Card } from 'react-bootstrap';
import ReviewForm from './reviewform';
import ReviewList from './reviewlist';
//import Stars from './stars';


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
      synopsis: props.synopsis,
      image: props.image,
      reviews: []
    };
  }

  

  render() {
      console.log(this.props.image);
    return (
        <Card className="card-movie p-2 border border-primary">
            <Card.Header>
                {/* <img src={require(this.props.image)} alt='movie poster' type='image/jpeg'/> */}
                <Card.Img className="card-image img-fluid" variant="left" src={this.state.image} alt='movie poster' type='image/jpeg'/>
                <span>&nbsp; &nbsp; </span>
                <strong>{this.state.id}.</strong> <span>&nbsp;</span><strong>{this.state.title}</strong>                          
            </Card.Header>
           
            <Card.Body>
            <div className="cardBody p-2 border border-color: rgb(46, 46, 88)">
                <strong>Stars:</strong>
                {/* <Stars /> */}
                <br /><br />                
                <strong>Synopsis:</strong>  {this.state.synopsis}
                <br /><br />
                <strong>Rating: </strong> {this.state.rating}
                <br /><br />
                <ReviewList />
            </div>
            </Card.Body>
            <Card.Footer className="text-muted">               
                <ReviewForm />
            </Card.Footer>
        </Card>
        )
    }
}