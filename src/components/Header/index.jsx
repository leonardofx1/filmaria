import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import cabecalho from '../../assets/style/cabecalho.scss'; 

const Header = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
  }
  const handleSubmit =(e) => {
    e.preventDefault() 
    console.log(search)
    navigate(`/search?q=${search}`)
    
    setSearch('')
  }

  return (
      <header className='cabecalho'>

        < nav className='cabecalho__links'>
            <h1 ><Link className='home__link' to='/'> Filmaria</Link></h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value ={search} className='input__seach' onChange={handleSearch} />
            <button type='submit' className='btn__seach' > Buscar</button>
            </form>
        </nav>
      </header>
  )
}

export default Header