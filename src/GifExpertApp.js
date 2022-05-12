import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {  
  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        <br />        

        <ul>
            { 
                categories.map((category, idx) => 
                    <GifGrid category={ category } key={ category }/>
                ) 
            }
        </ul>
    </>
  )
}

export default GifExpertApp