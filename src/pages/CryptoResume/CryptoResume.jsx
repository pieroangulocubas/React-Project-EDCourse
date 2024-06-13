import axios from 'axios'
import { useEffect, useState } from "react"
import { CryptoGrid } from "../../components/CryptoGrid/CryptoGrid"
import { Loader } from "../../components/Loader/Loader"

function CryptoResume() {
  const [cryptos,setCryptos]=useState([])
  const [isLoading,setIsLoading]=useState(false)
  const API_URL=import.meta.env.VITE_API_URL

  useEffect(()=>{
    setIsLoading(true)
    axios.get(`${API_URL}/assets`)
    .then(({data})=>{
      setCryptos(data.data)
    })
    .catch(()=>{
      console.error("La peticion falló")
    })
    .finally(()=>{
      setIsLoading(false)
    })
  },[])

  if(isLoading) {
    return (
      <div style={{height:"100vh",display:"grid",placeItems:"center"}}>
        <Loader />
      </div>
    )
  }

  return (  
    <>
     <CryptoGrid cryptos={cryptos} />
    </>
  )
}

export default CryptoResume
