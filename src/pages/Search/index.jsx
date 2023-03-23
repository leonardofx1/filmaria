
import CardMovie from '../../components/CardMovie';
import {useEffect, useState} from 'react'
import { useSearchParams} from 'react-router-dom';



const Search = () => {
    const apiEndPoint = 'https://api.themoviedb.org/3/search/movie/';
    const apiKey = 'api_key=a2d6119472acbe1442838a3070aa489d';

    const [searchParams] = useSearchParams()
    const [movies, setMovies] = useState([])

    const query = searchParams.get('q')

    const getSearchMovie = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        setMovies(data.results)
    }

    useEffect(()=> {
      
        getSearchMovie(`https://api.themoviedb.org/3/search/movie?${apiKey}&query=${query}`)
    },[query])

    return (
        <main className='container__movies'>

            { console.log(movies, 'ola', query)},
       
        {
        movies.length > 0 &&
         movies.map((movies)=>{
        return(
             <CardMovie title={movies.title} vote_average={movies.vote_average} poster_path={movies.poster_path} id={movies.id} />
        )
    })

     }
     </main>
    )

}

export default Search