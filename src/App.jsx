import { useState } from 'react'
import './App.css'
import Location from './components/Location'
import CardResident from './components/CardResident'
import { useEffect } from 'react'
import axios from 'axios'


function App() {
  const [location, setLocation] = useState()
  const [search, setSearch] = useState('')

  useEffect(() => {
    let numberLocation
    if (search === '') {
      numberLocation = Math.ceil(Math.random() * (126 - 1) + 1)
    } else {
      numberLocation = search
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))
  }, [search])

  //Busqueda * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
  
  const submit = e => {
    e.preventDefault()

    setSearch(e.target.search.value);
  }

  //Renderizado * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  
  return (
    <div className="app">

      <header>

        <h1 className='title'>Rick and Morty Wiki</h1>

      </header>

      <form onSubmit={submit} className='search-box'>

      <input type="text" id='search' placeholder='Enter ID 1-126' className='search-bar'/>

      <button className='btn'>Search</button>

      </form>

      <Location location={location}/>

      <div className="card">
        {
          location?.residents.map(url => (
            <CardResident 
              key={url}
              url={url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
