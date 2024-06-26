// use frontend ---
// import { allMoviesData } from '../../assets/data'

import { useEffect, useState } from "react";
import MovieCard from "./movieCard";


interface Movie {
    id: string;
    title: string;
    image: string
    year: number;
    category: string;
    rating: string;
    isBookmarked: boolean;
    isTrending: boolean;
  }

const Home = () => {

//  use backend ---
    const [allMoviesData , setAllMoviesData] = useState<Movie[]>([])
//   const [loading , setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3002/movie');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setAllMoviesData(data);
                // setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

// if(loading){
//     return <>
//     <h3>loading----</h3>
//     </>
// }

    console.log(allMoviesData);

    return (
        <div className='grid grid-cols-4 gap-4 m-12'>

            {
                allMoviesData.map((movie) => <MovieCard key={movie.id} movie={movie}></MovieCard>)
            }

        </div>
    );
};

export default Home;