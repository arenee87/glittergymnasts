import { React, useContext } from 'react'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Stack  from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import EquipmentContext from './EquipmentContext'




function ListThree() {

  let { setOrderofEquipment, setEquipment } = useContext(EquipmentContext)
  let navigate = useNavigate();


  useEffect(() => {
    async function fetch() {
        await getEquipment(params.equipment.Id).then ((equipment) => 
        setEquipment(equipment))
        }
        fetch()
    },   [params.id, setOrderofEquipment]);

    function handleDeleteEquipment(id) {
      deleteEquipment(id)
      navigate('/equipment')
  }

  function equipmentList(equipment){
    if (equipment === null) return;
      return equipment.map((equipment) =>
        <Card key={equipment.id}>
          <Link to={`/equipment/${equipment.id}`} key={equipment.id} >
            {equipment.name}
          </Link>
          <Link className='btn btn-secondary m-2' to={`/${equipment.id}`}>
          View
        </Link>
          <Link to={`/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
          <Button variant="danger" onClick={handleDeleteEquipment.bind(this, id)}>Delete</Button>
        </Card>
    };

    return(
      <>
      <Stack direction="horizontal" gap={3}>
        <Row className="align-self-start w-25">
          <EquipmentContext.Consumer>
            {({equipment}) => (
            equipmentList(equipment)
          )}
          </EquipmentContext.Consumer>
          </Row>
          <Outlet />
          </Stack>
          </>
        );
};


     
export default ListThree;
