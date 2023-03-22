import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  BsHourglassSplit, BsWallet2,BsGraphUp, BsFillFileEarmarkTextFill } from 'react-icons/bs'

import cardDetail from '../../assets/style/cardDetail.scss'


function MovieDetails() {
  const [budget, setBudget] = useState(null)
  const [revenue, setRevenue]= useState(null)

  const { id } = useParams()

  const apiKey = '?api_key=a2d6119472acbe1442838a3070aa489d'
  const apiURl = 'https://api.themoviedb.org/3/movie/'
  const apiImg = 'https://image.tmdb.org/t/p/w500/'

  const [movie, setMovie] = useState([])
  const fetchRepos = async (url) => {
    const repos = await fetch(url)
    const movieJson = await repos.json()

    setMovie(movieJson)
  }

  useEffect(() => {
    const url = `${apiURl}${id}${apiKey}`

    fetchRepos(url)
  }, [])


  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

useEffect(() => {
  setTimeout(()=> {
      const format = formatCurrency(movie.budget)
      setBudget(format)
    }, 500)
   setTimeout (()=>{
    const format = formatCurrency(movie.revenue)
    setRevenue(format)
   },500)
}, [movie])

  return (

  <div>
    {movie &&
      (<main className='conteiner__detail'>
        <ul className='card__corpo__detail'>
          <li><img src={apiImg + movie.poster_path} /></li>
          <li><p>Titulo:</p>
            {
          movie.title}</li>
          <li><p> <BsWallet2 /> Orçamento</p>
            {budget}</li>
          <li><p> <BsGraphUp />Receita:</p>
          {revenue}
         </li>
          <li><p>Popularidade:</p>
            {movie.popularity}</li>
          <li> <BsHourglassSplit />{movie.runtime}</li>
          <li><p> <BsFillFileEarmarkTextFill />Descrição:</p>{movie.overview}</li>
          {console.log(budget, movie.budget)}
        </ul>
      </main>)}
  </div>
  )

}

export default MovieDetails