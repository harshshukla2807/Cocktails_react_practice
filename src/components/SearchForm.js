import React, { useState } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {searchTerm,setSearchTerm}=useGlobalContext()
  
  return (
  <div className='search'>
    <form action='' className='search-form form-control'>
      <label className='label '>Search Your Favourite Cocktail</label>
      <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className='input'/>
    </form>
  </div>
  )
}

export default SearchForm
