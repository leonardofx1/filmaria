import { useParams } from 'react-router-dom';


function MovieDetails() {
    const {id} = useParams()
  return (
    <div>MovieDetails{id}</div>
  )
}

export default MovieDetails