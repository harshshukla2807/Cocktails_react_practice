import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'


const CocktailList = () => {
  const {cocktails,loading}=useGlobalContext();

  if(loading){
    return <Loading/>
  }
  if(cocktails==null || cocktails.length<1 ){
    return <h2 className='section-title'>no cocktails match</h2>
  }
  
  // console.log(cocktails)
  
  return (
    <section className='section'>
      <h1 className='section-title'>Cocktails</h1>
      <div className='cocktails-center'>
       {cocktails.map((item)=>{
         console.log(item)
         return <Cocktail key={item.id} {...item}/>
       })}
      </div>
    </section>
  )
}

export default CocktailList
