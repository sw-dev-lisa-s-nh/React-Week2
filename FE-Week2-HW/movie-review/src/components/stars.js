import React from 'react';

// Stars - a one to five-star rating component that allows users to rate something
// (movies in this case, but remember that components are reusable, so
//  you could use it elsewhere!)

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stars: 0,
            totalratings: 0
        };
        //this.countClicks = this.countClicks.bind(this); // needed for React   
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({stars: event.target.stars},{totalratings: event.target.totalratings++});
    }
  
    handleSubmit(event) {
      alert('A new Star Rating was entered!');
      console.log('Star rating: ' + event.this.stars);
      console.log('You clicked: ' + event.this.id);
      //setAttribute('src', '{require('./full-star.jpeg')}'); 
      event.preventDefault();
    }
    
  
    render() {
      return (
          <div className="border border-primary p-3">
            <h5>Stars Rating</h5>
            <form className="p-2" onSubmit={this.handleSubmit}>
                <label><strong>How many stars will you rate this movie:</strong><br />
                <div className="radio">
                    <label>
                        <input type="radio" name="star" value="option1" />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <br />
                    </label>
                    </div>
                    
                    <div className="radio">
                    <label>
                        <input type="radio" name="star" value="option2" />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <br/>
                    </label>
                    </div>
                    
                    <div className="radio">
                    <label>
                        <input type="radio" name="star" value="option3" />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <br/>
                    </label>
                    </div>
                    
                    <div className="radio">
                    <label>
                        <input type="radio" name="star" value="option4" />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <br/>                    
                    </label>
                    </div>
                    
                    <div className="radio">
                    <label>
                        <input type="radio" name="star" value="option5" />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <br/>    
                     </label>
                    </div>
                </label><br /><br /><span>&nbsp; &nbsp;</span>
            <input className="submit-button btn-dark" type="submit" value="Submit Star Rating" />
            </form>
          </div>
      );
    }
  }


                // onClick {
                //     ${id}
                // }

                /* <form>
                    <div>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <img onClick = {this.stars} className = "star starOne" id = "1" src = {require('./empty-star.png')} alt="first star" />
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <img onClick = {this.stars} className = "star starTwo" id = "2" src = {require('./empty-star.png')} alt="second star" />
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <img onClick = {this.stars} className = "star starThree" id = "3" src = {require('./empty-star.png')} alt="third star" />
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    <img onClick = {this.stars} className = "star starFour" id = "4" src = {require('./empty-star.png')} alt="fourth star"/>
                    <span>&nbsp;&nbsp;&nbsp;</span>
                   <img onClick = {this.stars} className = "star starFive" id = "5" src = {require('./empty-star.png')} alt="fifth star"/>
                   <br />
                </div> 
                </form> */

                /* Add a 1,2,3,4,5 toggle button */