import { useEffect, useState } from 'react'


export default function useLocalStorage(key, initialValue) {

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key)
    if (jsonValue != null){ 
      return JSON.parse(jsonValue)
    }
    else{
      return '';
    }
    // if (typeof initialValue === 'function') {
    //   return initialValue()
    // } else {
    //   return initialValue
    // }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}