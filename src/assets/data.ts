// interface Movie {
//   id: string;
//   title: string;
//   image: string
//   year: number;
//   category: string;
//   rating: string;
//   isBookmarked: boolean;
//   isTrending: boolean;
// }

  const allMoviesData
  //  : Movie[]
    = 
    
    [
      {
        "id": "1",
        "title": "Beyond Earth",
        "year": 2019,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": true,
        "image": "https://source.unsplash.com/featured/?Beyond+Earth"
      },
      {
        "id": "2",
        "title": "Bottom Gear",
        "year": 2021,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": true,
        "image": "https://source.unsplash.com/featured/?Bottom+Gear"
      },
      {
        "id": "3",
        "title": "Undiscovered Cities",
        "year": 2019,
        "category": "TV Series",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": true,
        "image": "https://source.unsplash.com/featured/?Undiscovered+Cities"
      },
      {
        "id": "4",
        "title": "1998",
        "year": 2021,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": false,
        "isTrending": true,
        "image": "https://source.unsplash.com/featured/?1998"
      },
      {
        "id": "5",
        "title": "Dark Side of the Moon",
        "year": 2018,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": true,
        "image": "https://source.unsplash.com/featured/?Dark+Side+of+the+Moon"
      },
      {
        "id": "6",
        "title": "The Great Lands",
        "year": 2019,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?The+Great+Lands"
      },
      {
        "id": "7",
        "title": "The Diary",
        "year": 2019,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?The+Diary"
      },
      {
        "id": "8",
        "title": "Earth’s Untouched",
        "year": 2017,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": true,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Earths+Untouched"
      },
      {
        "id": "9",
        "title": "No Land Beyond",
        "year": 2019,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?No+Land+Beyond"
      },
      {
        "id": "10",
        "title": "During the Hunt",
        "year": 2016,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?During+the+Hunt"
      },
      {
        "id": "11",
        "title": "Autosport the Series",
        "year": 2016,
        "category": "TV Series",
        "rating": "18+",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Autosport+the+Series"
      },
      {
        "id": "12",
        "title": "Same Answer II",
        "year": 2017,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Same+Answer+II"
      },
      {
        "id": "13",
        "title": "Below Echo",
        "year": 2016,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Below+Echo"
      },
      {
        "id": "14",
        "title": "The Rockies",
        "year": 2015,
        "category": "TV Series",
        "rating": "E",
        "isBookmarked": true,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?The+Rockies"
      },
      {
        "id": "15",
        "title": "Relentless",
        "year": 2017,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Relentless"
      },
      {
        "id": "16",
        "title": "Community of Ours",
        "year": 2018,
        "category": "TV Series",
        "rating": "18+",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Community+of+Ours"
      },
      {
        "id": "17",
        "title": "Van Life",
        "year": 2015,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Van+Life"
      },
      {
        "id": "18",
        "title": "The Heiress",
        "year": 2021,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?The+Heiress"
      },
      {
        "id": "19",
        "title": "Off the Track",
        "year": 2017,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": true,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Off+the+Track"
      },
      {
        "id": "20",
        "title": "Whispering Hill",
        "year": 2017,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Whispering+Hill"
      },
      {
        "id": "21",
        "title": "112",
        "year": 2013,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?112"
      },
      {
        "id": "22",
        "title": "Lone Heart",
        "year": 2017,
        "category": "Movie",
        "rating": "E",
        "isBookmarked": true,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Lone+Heart"
      },
      {
        "id": "23",
        "title": "Production Line",
        "year": 2018,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Production+Line"
      },
      {
        "id": "25",
        "title": "Dogs",
        "year": 2016,
        "category": "TV Series",
        "rating": "E",
        "isBookmarked": true,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Dogs"
      },
      {
        "id": "26",
        "title": "Asia in 24 Days",
        "year": 2020,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Asia+in+24+Days"
      },
      {
        "id": "27",
        "title": "The Tasty Tour",
        "year": 2016,
        "category": "TV Series",
        "rating": "PG",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?The+Tasty+Tour"
      },
      {
        "id": "28",
        "title": "Darker",
        "year": 2017,
        "category": "Movie",
        "rating": "18+",
        "isBookmarked": true,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Darker"
      },
      {
        "id": "29",
        "title": "Unresolved Cases",
        "year": 2018,
        "category": "TV Series",
        "rating": "18+",
        "isBookmarked": false,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Unresolved+Cases"
      },
      {
        "id": "30",
        "title": "Mission: Saturn",
        "year": 2017,
        "category": "Movie",
        "rating": "PG",
        "isBookmarked": true,
        "isTrending": false,
        "image": "https://source.unsplash.com/featured/?Mission+Saturn"
      }
    ]
    

    export { allMoviesData}
