import React, { createContext, useState, useEffect } from "react"
import axios from "axios"

export const EquipmentContext = createContext()

export const EquipmentProvider = (props) => {
  const [equipment, setEquipment] = useState([])

  useEffect(() => {
    async function fetchEquipment() {
      await refreshEquipment()
    }
    fetchEquipment()
  }, []);

  function refreshEquipment() {
    return axios.get("http://localhost:3001/equipment")
      .then(response => {
        setEquipment(response.data)
      })
  }

  function getEquipment(id) {
    return axios.get(`http://localhost:3001/equipment/${id}`)
    .then(response =>
      new Promise((resolve) => resolve(response.data))
    )
    .catch((error) =>
      new Promise((_, reject) => reject(error.response.statusText))
    )
  }

  function addEquipment(equipment) {
    return axios.post("http://localhost:3001/equipment", equipment)
    .then(response => {
      refreshEquipment()
      return new Promise((resolve) => resolve(response.data))
    })
  }

  function updateEquipment(equipment) {
    return axios.put(`http://localhost:3001/equipment/${equipment.id}`, equipment)
    .then(response => {
      refreshEquipment()
      return new Promise((resolve) => resolve(response.data))
    })
  }

  function deleteEquipment(id) {
    axios.delete(`http://localhost:3001/equipment/${id}`)
        .then(refreshEquipment)
  }

  return (
    <EquipmentContext.Provider
      value={{
        equipment,
        getEquipment,
        deleteEquipment,
        addEquipment,
        updateEquipment
      }}
    >
      {props.children}
    </EquipmentContext.Provider>
  )
}