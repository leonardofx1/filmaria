import React, { useEffect, useState } from 'react'
import CardMovie from '../../components/CardMovie';
import movieCard from '../../assets/style/movieCard.scss'



function Home() {
  const apiKey = 'a2d6119472acbe1442838a3070aa489d'
  const apiURl ='https://api.themoviedb.org/3/movie/top_rated?api_key='

  const [data, setData] =useState([])
  const fetchRepos = async (url) => {
    const repos = await fetch(url)
    const data = await repos.json()

    setData(data.results)
  }
useEffect(() => {
  
    fetchRepos(apiURl + apiKey)
  },[])
  return (
    <main className='container__movies'>
    
      {
      data.length > 0&& data.map(movie => {
        return (
          
          <CardMovie title={movie.title} vote_average={movie.vote_average} poster_path={movie.poster_path} id={movie.id} />
  
        )
      })}
     </main>
  )
}

export default Home