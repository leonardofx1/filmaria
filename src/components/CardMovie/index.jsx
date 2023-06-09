import { Link } from 'react-router-dom';
import { MdGrade} from "react-icons/md";
import movieCard from '../../assets/style/movieCard.scss'

const CardMovie = ({title, poster_path, id, vote_average}) => {
    const apiImg = 'https://image.tmdb.org/t/p/w500/'

    return (
        <>
            <ul className='card__corpo'>
                <li className='card__img'><img src={apiImg + poster_path} alt={title} /> <span className='votos' > <MdGrade/> {vote_average}</span> </li>
                <li>{title}</li>
               
                <Link to={`/movie/${id}`}className='detalhes' >ver detalhes</Link>
            </ul>
        </>
    )
}
export default  CardMovie