import { allMoviesData } from '../../assets/data'

const getDataByCate = (category:any) => {
    return allMoviesData.filter(movie => movie.category === category)
}

const tvSeries = getDataByCate("TV Series")

const TVSeries = () => {

    


    return (
        <div className='grid grid-cols-4 gap-4 m-12'>
             {
                tvSeries.map(movie => <div key={movie.id}>
                    <div className="card card-compact w-[350px] h-80 bg-base-100 shadow-xl">
                        <figure><img src={movie.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{movie.category}</h2>
                            <p>{movie.title}</p>
                            <div className="card-actions justify-end">
                                <button className="btn ">+ Bookmark</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default TVSeries;