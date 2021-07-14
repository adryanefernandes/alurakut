import { useState, useEffect } from 'react'
import axios from 'axios'

function useRequestData(initialState, FINAL_URL) {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    axios.get(`https://api.github.com${FINAL_URL}`)
      .then((res) => {
        setData(res.data)
      }).catch((error) => {
        alert(error)
      })
  }, [])

  return data
}

export default useRequestData