import React, { useEffect, useState } from 'react'
import CardMovie from '../../components/CardMovie';
import movieCard from '../../assets/style/movieCard.scss'



function Home() {
  const apiKey = 'a2d6119472acbe1442838a3070aa489d'
  const apiURl ='https://api.themoviedb.org/3/movie/top_rated?api_key='

  const [data, setData] =useState([])

  const fetchRepos = async (url) => {
    try {
      const repos = await fetch(url)

      if(!repos.ok) {
        new Error('não foi possivel obter os dados')
      }
      const data = await repos.json()
       
    setData(data.results)

      } catch (error) {
        console.error(error.mensage)
      }
    

   
  }
useEffect(() => {
  
    fetchRepos(apiURl + apiKey)
  },[])
  return (
    <main className='container__movies'>
    
      {
      data.length > 0&& data.map((movie, index) => {
        return (
          
          <CardMovie  key={index}title={movie.title} vote_average={movie.vote_average} poster_path={movie.poster_path} id={movie.id} />
  
        )
      })}
     </main>
  )
}

export default Home