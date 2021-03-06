import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from './Loader'
import Film from './Film'

const Films = () => {
    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      axios.get('https://ajax.test-danit.com/api/swapi/films')
        .then((res) => {
          setFilms(res.data)
          setIsLoading(false)
        })
    }, [])

    if(isLoading) {
        return <Loader />
    }
  
    const filmItems = films.map(film => <Film key={film.id} film={film} />)

    return (
    <div className='wrapper'>
        <ol>
            {filmItems}
        </ol>
    </div>
    )
}

export default Films
