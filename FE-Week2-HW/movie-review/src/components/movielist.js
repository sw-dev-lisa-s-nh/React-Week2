import React from 'react';
import Movie from '../components/movie';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


// MovieList - a container for all the Movie components and their data.

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     movies: {},
        //     name: '',
        //     synopsis: '',
        //     action: ''
        // };
        this.addMovie = this.addMovie.bind(this); // needed for React
    }

    addMovie(movie) {
        this.setState(state => {
            state.movies.addMovie(movie);
        });
    }

    render() {
        const Encanto = require('../Encanto.jpeg');
        return (
            <div className="container">
                <h2>Movie List</h2>
                <Movie {...
                { id: 1,
                  key: 1,
                  ranking: 1,
                  title: 'Schindler\'s List',
                  rating: 'R (for language, some sexuality and actuality violence).',
                  synopsis: 'In German-occupied Poland during World War II industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
                  image: <img src={require(`../SchindlersList.jpeg`)} alt='Schindler' /> }
                }/>

                <Movie {...
                { id: 2,
                  key: 2,
                  ranking: 2,
                  title: 'Whiplash',
                  rating: 'R (for strong language including some sexual references).',
                  synopsis: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
                  image: <img src={require('../Whiplash.jpg')} alt='Whiplash' /> }
                }/>   

                <Movie {...
                { id: 3,
                  key: 3,
                  ranking: 4,
                  title: 'The Shawshank Redemption',
                  rating: 'R (for language and prison violence).',
                  synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency',
                  image: <img src={require('../Shawshank.jpeg')} alt='Shawshank' /> }
                }/>   

                <Movie {...
                { id: 4,
                  key: 4,
                  ranking: 4,
                  title: 'Encanto',
                  rating: 'PG (for some thematic elements and mild peril).',
                  synopsis: 'A young Colombian woman has to face the frustration of being the only member of her family without magical powers.',
                  image: <img src={Encanto} alt='Encanto' /> }
                }/>   
            </div>
        );
    }
}



// export default class NewsFeed extends React.Component {
//     render() {
//         let comments = [
//             {
//                 content: 'This is my comment',
//                 username: 'Tommy',
//                 date:  '12-12-2018'
//             },
//             {
//                 content: 'This is another comment',
//                 username: 'Sammy',
//                 date:  '12-17-2018'
//             },
//             {
//                 content: 'Here\'s another comment from me',
//                 username: 'Sally',
//                 date:  '12-20-2018'
//             }
//         ]
//         return (
//             <div className="container">
//                 <Post {...{comments: comments, content: 'This is my post content!'}}/>
//                 <Post {...{content: 'Here is another post!!!!!!!!!!!'}}/>
//             </div>
//         );
//     }
// }

 