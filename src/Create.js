import { useState, useContext, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from "react-router-dom";
import { EquipmentContext } from './EquipmentContext'

function Create() {
  let params = useParams()
  let [ equipment, setEquipment ] = useState({
    id: params.equipmentId,
    equipName: "",
    price: "",
    description: "",
    imageUrl: ""
  })

  let { getEquipment, addEquipment, updateEquipment } = useContext(EquipmentContext)
  let navigate = useNavigate()
  let { id, equipName, price, description } = equipment

  useEffect(() => {
    if (id === undefined) return
    async function fetch() {
      await getEquipment(id)
        .then((equipment) => setEquipment(equipment))
    }
    fetch()
  }, [id, getEquipment])

  function handleChange(event) {
    setEquipment((preValue) => {
      return { ...preValue, [event.target.name]: event.target.value }})
  }

  function addOrUpdate() {
    if (id === undefined) {
      return addEquipment(equipment)
    } else {
      return updateEquipment(equipment)
    }
  }

  function handleSubmit(event) {
    event.preventDefault()
    addOrUpdate().then((equipment) =>
      navigate(`/${equipment.id}`)
    )
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Equipment</Form.Label>
        <Form.Control type="text" name="equipName" value={equipName} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" name="price" value={price} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" name="description" value={description} onChange={handleChange} />
      </Form.Group>
      <Button type="submit">Create</Button>
    </Form>
  )
}

export default Create