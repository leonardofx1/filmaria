import React, { useEffect, useState } from 'react'
import CardMovie from '../../components/CardMovie';



function Home() {

  const [data, setData] =useState([])
useEffect(() => {
    const fetchRepos = async () => {
      const repos = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=a2d6119472acbe1442838a3070aa489d')
      const data = await repos.json()
      setData(data.results)
    }

    fetchRepos()
  },[])
  return (
    <div>
      {data.length > 0&& data.map(movie => {
        return (
          <>
         
          <p>{movie.title}</p>
          <CardMovie title={movie.title} vote_average={movie.vote_average} poster_path={movie.poster_path}/>
          </>
        )
      })}
    </div>
  )
}

export default Home