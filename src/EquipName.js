import { useEffect, useState } from 'react';
import axios from 'axios'

function EquipName() {
  let [name, setName] = useState("unknown")

  useEffect(() => {
    async function getName() {
      const response = await axios.get("http://localhost:3001/equipment/1")
      setName(response.data.name)
    }
    getName()
  }, [])

  return (
    <p>Name: {name}</p>
  )
}

export default EquipName;