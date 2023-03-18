

const CardMovie = ({title, vote_average, poster_path}) => {
console.log(title,vote_average)
    const apiImg = 'https://image.tmdb.org/t/p/w500/'

    return (
        <main>
            <ul className='card__corpo'>
                <li className='card__img'><img src={apiImg + poster_path} alt={title} /><span>{vote_average}</span> </li>
                <li>{title}</li>
            
            </ul>
        </main>
    )
}
export default  CardMovie