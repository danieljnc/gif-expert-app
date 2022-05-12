import React from 'react'

export const GifGridItem = ( { title, url } ) => {

   const capitalize = (str) => {
       const lower = str.toLowerCase();
       return str.charAt(0).toUpperCase() + lower.slice(1);
   }

  return (
    <div className='card animate__animated animate__fadeIn'>
        <img src={ url } alt={ title } />
       <p>{ capitalize(title) }</p> 
    </div>
  )
}
