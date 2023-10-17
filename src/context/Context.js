import React, { useState } from 'react'
import { useContext } from 'react';

const  ActiveContext = React.createContext({})

export const ContextProvider = ({children}) => {
  
  const T_KEY = 'isActive';
  const getInitialState = () => {
    return localStorage.getItem(T_KEY) ?? 'true';
  }
  const [ isActive, setActive ] = useState(getInitialState);

  const handler = (value) => {
    localStorage.setItem(T_KEY, value);
    setActive(value);
  }

  return(
    <ActiveContext.Provider
      value={{
        isActive,
        setActive: handler,
      }}
    >
      {children}
    </ActiveContext.Provider>
  )
}

export const useActiveContext = () => useContext(ActiveContext);