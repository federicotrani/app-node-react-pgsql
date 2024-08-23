import { useEffect, useState } from 'react'
import api from './api/users.api'

function App() {
  
  const [data, setData] = useState([])

  useEffect(() => {
  
    const obtenerUsuario = async() => {
      const result = await api.getUsuarios()

      console.log(result.data)

      setData(result.data)
    }

    obtenerUsuario();    

  }, [])
  
  
  return (
    <>
      <h4>Lista de Usuarios</h4>
      {data.map(item =>(
        <p key={item.id}>{item.name} - {item.email}</p>
      ))}      
    </>
  )
}

export default App
