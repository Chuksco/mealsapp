import { useState } from 'react'
import { useGlobalContext } '..context'

const Search = () => {

  const { setSearchTerm } = useGlobalContext ()
const [text, setText] = useState('')
  const handleChange = (e) => {
    setText(e.target.value)
  }
const handleSubmit = (e) => {
  e.preventDefault()
  if (text) {
    setSearchTerm(text)
  }
}
  
  return <header className='search-container'>
  <form onSubmit={handleSubmit} >
    <input type='text' onChange={handleChange} value={text} placeholder='Type your favorite meal' className='form-input' />
    <button type='submit' classNmae='btn'>Search</button>
    <button type='button' className='btn btn-hipster'>Suprise Me!</button>
  </form>
  </header>
}

export default Search;