import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResident = ({url}) => {

    const resident = useFetch(url)

  return (
    <article className='card-bg'>
      <div className="card-img">
        <img src={resident?.image} alt={resident?.name} />
      </div>

      <div className="card-dscr">

        <h3 className='name'>{resident?.name}</h3>
        <ul className='card-list'>

          <li>{`${resident?.status}-${resident?.species}`}</li>

          <span className='sub-title'>Origin</span>
          <li>{resident?.origin.name}</li>

          <span className='sub-title'>Episodes Where Appear</span>
          <li>{resident?.episode.length}</li>

        </ul>

      </div>
    </article>
  )
}

export default CardResident