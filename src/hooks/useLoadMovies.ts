import React, { useEffect, useState } from 'react';

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


const useLoadMovies = () => {


    const [allMoviesData , setAllMoviesData] = useState<Movie[]>([])
    const [loading , setLoading] = useState(true)
  
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3002/movie');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setAllMoviesData(data);
                setLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    return [allMoviesData, loading]
};

export default useLoadMovies;