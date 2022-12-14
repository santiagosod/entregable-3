import React from 'react'

const Location = ({location}) => {

  return (
    <article className='locations'>
        <div className="planet__name">
            <h2>{location?.name}</h2>
        </div>

        <ul className="descr">
            <li><span>Type: </span>{location?.type}</li>

            <li><span>Dimension: </span>{location?.dimension}</li>

            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default Location