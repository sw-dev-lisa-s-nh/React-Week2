import React from 'react';
import Movie from '../components/movie';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

// MovieList - a container for all the Movie components and their data.

export default class MovieList extends React.Component {

    render() {
        return (
            <div className="container p-5 ">
                <h2>Movie List</h2>
                <Movie {...
                { id: 1,
                  key: 1,
                  ranking: 1,
                  title: 'Schindler\'s List',
                  rating: 'R (for language, some sexuality and actuality violence).',
                  synopsis: 'In German-occupied Poland during World War II industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
                  image: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg' }
                }/>
                <br /><br /><br />
                <Movie {...
                { id: 2,
                  key: 2,
                  ranking: 2,
                  title: 'Whiplash',
                  rating: 'R (for strong language including some sexual references).',
                  synopsis: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
                  image: 'https://i.pinimg.com/originals/f6/dd/d9/f6ddd907657e80b41e51bbd417ea7dae.jpg' }
                }/>   
                <br /><br /><br />
                <Movie {...
                { id: 3,
                  key: 3,
                  ranking: 4,
                  title: 'The Shawshank Redemption',
                  rating: 'R (for language and prison violence).',
                  synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency',
                  image: 'https://m.media-amazon.com/images/I/71715eBi1sL._AC_SY879_.jpg'}
                }/>   
                <br /><br /><br />
                <Movie {...
                { id: 4,
                  key: 4,
                  ranking: 4,
                  title: 'Encanto',
                  rating: 'PG (for some thematic elements and mild peril).',
                  synopsis: 'A young Colombian woman has to face the frustration of being the only member of her family without magical powers.',
                  image: 'https://www.themoviedb.org/t/p/original/7M8bMABEbhGkC6z36WEsDttDk6F.jpg'}
                }/>   
            </div>
        );
    }
}