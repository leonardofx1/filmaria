import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  BsHourglassSplit, BsWallet2,BsGraphUp, BsFillFileEarmarkTextFill } from 'react-icons/bs'

import cardDetail from '../../assets/style/cardDetail.scss'


function MovieDetails() {
  const [movie, setMovie] = useState([])
  const [budget, setBudget] = useState(0)
  const [revenue, setRevenue]= useState(0)
  const [showInfo, setShowInfo] = useState(false)

  const { id } = useParams()

  const apiKey = '?api_key=a2d6119472acbe1442838a3070aa489d'
  const apiURl = 'https://api.themoviedb.org/3/movie/'
  const apiImg = 'https://image.tmdb.org/t/p/w500/'


  const fetchRepos = async (url) => {
    try  {
      const repos = await fetch(url)

      if(!repos.ok) {
        new Error('não foi possivel obter os dados do filme')
      }
        
    const movieJson = await repos.json()
    setMovie(movieJson)
  }
    catch(error) {
      console.error(error.menssage)
    }
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
    console.log(movie.budget)
      const format = formatCurrency(movie.budget)
      setBudget(format)
    }, 500)
   setTimeout (()=>{
    console.log(movie.revenue)
    const format = formatCurrency(movie.revenue)
    setRevenue(format)
   },500)
 
}, [movie])

useEffect(() => {

    setShowInfo(movie?.budget > 0 && movie?.revenue > 0 )
}, [budget,revenue])

  return (

  <div>
    {
    movie &&
      (<main className='conteiner__detail'>
        <ul key={1} className='card__corpo__detail'>
          <li ><img src={apiImg + movie.poster_path} /></li>
          <li><p>Titulo:</p>
          {movie.title}</li>
          { showInfo && <>
          <li> <BsWallet2 />
          <p> Orçamento</p>
            {budget}</li>
          <li >
            <p> <BsGraphUp />Receita:</p>
          {revenue}
         </li></>}
          <li><
            p>Popularidade:</p>
            {movie.popularity}</li>
          <li > <p>Duração:</p>
          <BsHourglassSplit />{movie.runtime}</li>
          <li>
            <p> <BsFillFileEarmarkTextFill />Descrição:</p>
          {movie.overview}</li>
        </ul>   
      </main>)}
  </div>
  )

}

export default MovieDetails