import { useState, useEffect } from 'react'
import { getAllPizzas } from '../service'

const Pizzas = () => {
    const [recipes,setRecipes] = useState([])
    const [search,setSearch] = useState('')

    useEffect(() => {
        getAllPizzas().then(res => {
           //console.log(res.data.recipes)
           setRecipes(res.data.recipes)
        
        })
    },[])

    return (
        <div className='mainDiv'>
                    <input className='input-search' type='search' placeholder='Search title...' onChange={(e) => {setSearch(e.target.value)}} />

          {
                recipes.filter((value) => {
                    if(search === '') {
                       return value
                    }else if (value.title.toLowerCase().includes(search.toLowerCase())) {
                        return value
                    }  else {
                     return    
                    }
                                
                }).map(({recipe_id,image_url,publisher,source_url,title}) => {
                  return (
                  
                      <div className='item' key={recipe_id}>
                          <h3>Publisher: {publisher} </h3><br/>
                          <p>{title.slice(0,30)}...</p>
                          <img src={image_url} alt={title} /><br/>
                          <a href={source_url}><b>Read more .... </b></a>
                      </div>
                  )
                  })     
            }
    </div>
    )
}

export default Pizzas
