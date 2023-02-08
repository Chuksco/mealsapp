import React, { useState, useContext, useEffect } from 'react'

const AppContext = React.createContext()

import axios from 'axios'
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'




const AppProvider = ({ children }) => {
  
  const fetchMeals = async (url) => {
    
    try {
      const {data} = await axios(url)
     console.log(data)
   
    }
    catch (error) {
      console.log(error.response)
    }
    
  }


  useEffect(() => {
    fetchMeals(allMealsUrl)
  }, [])


  return (
    <AppContext.Provider value={{name: 'John', age: 30, gender: 'Male'}}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider}