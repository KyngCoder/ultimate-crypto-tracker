

import React,{createContext, useState} from 'react'

export const SearchContext = createContext(null)



const Context = ({children}) => {
    const [search, setSearch] = useState(false)
  return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
  )
}

export default Context