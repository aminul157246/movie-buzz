
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
const MovieCard: React.FC<{movie : Movie} > = ({movie}) => {

    const { id,  title, year, category, rating, isBookmarked, isTrending, image} = movie; 
    // console.log(movie);


const handleBookmark = (id:any) => {
console.log(id);
}



    return (
        <div >
        <div className="card card-compact w-[350px] h-80 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category}</h2>
                <p>{title}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleBookmark(id)} className="btn ">+ Bookmark</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MovieCard;