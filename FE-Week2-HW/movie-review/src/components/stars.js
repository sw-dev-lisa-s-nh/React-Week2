import React from 'react';

// Stars - a one to five-star rating component that allows users to rate something
// (movies in this case, but remember that components are reusable, so
//  you could use it elsewhere!)

export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newstars: 0
        };
        //this.countClicks = this.countClicks.bind(this); // needed for React   
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    resetStars() {
      this.setState({
        newstars: 0
      });
    }

    handleChange(event) {
      let current = event.target;
      let name = current.name;
      let value = current.value;
      alert('A new Star Rating was entered: ' + value);
      console.log('Name: ' + name + ' Value: ' + value);
      this.setState({
          newstars : value
      });
    }
  
    handleSubmit() {
      console.log('A star rating was submitted:' + this.state.newstars);
      // PROBLEM:  This is undefined!
      this.props.onFormSubmit(this.state);
      this.resetStars();
    }
    
  
    render() {
      return (
          <div className="border border-primary m-3 p-3">
            <h5>Stars Rating</h5>
            <h5>TO DO:  Make Submit work!</h5>
            <form className="star-submission p-2" onSubmit={this.handleSubmit}>
                <label><strong>How many stars will you rate this movie:</strong><br />
                <div className="radio">
                    <label>
                        <input type="radio" name="star" value="1" onChange={this.handleChange} />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <br />
                    </label>
                    </div>
                    
                    <div className="radio">
                    <label>
                        <input type="radio" name="star" value="2" onChange={this.handleChange} />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <img className = "star" src = {require('./empty-star.png')} alt="first star" />
                        <span>&nbsp;&nbsp;&nbsp;</span>
                        <br/>
                    </label>
                    </div>
                    
                    <div className="radio">
                    <label>
                        <input type="radio" name="star" value="3" onChange={this.handleChange} />
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
                        <input type="radio" name="star" value="4" onChange={this.handleChange} />
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
                        <input type="radio" name="star" value="5" onChange={this.handleChange}  />
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
            <input className="submit-button btn-dark" type="submit"  onClick={this.handleSubmit} value="Submit Star Rating" />
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