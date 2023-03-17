import React from 'react'
import { Link } from 'react-router-dom';
import header from '../../assets/style/header.scss'; 

const Header = () => {

    return (
      <nav>
        <ul className='cabecalho__links'>
            <li ><Link className='home__link'> Filmaria</Link></li>
          <li>
            <input type="text"  className='input__seach'/>
            <button className='btn__seach' > Buscar</button></li>
        </ul>
      </nav>
    )
}

export default Header