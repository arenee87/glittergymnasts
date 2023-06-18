import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import { Link, Outlet } from 'react-router-dom';
import { EquipmentContext } from './EquipmentContext';



function EquipmentList() {
  function equipmentList(equipment) {
    if (equipment === null) return;
    return equipment.map((equipment) => (
      <Card key={equipment.id} style={{ width: '18rem' }}>
        <Card.Img variant='top' src={equipment.imageUrl} />
        <Card.Body>
            {equipment.equipName}
            <Link className='btn btn-secondary m-2' to={`/${equipment.id}`}>
          View
        </Link>
        </Card.Body>
        </Card>
    ));
  }

  return (
    <>
    <h1 className='h1'>Equipment for Gymnasts</h1>
    <Stack direction="horizontal" gap={3}>
        <ListGroup className="align-self-start w-25">
            <EquipmentContext.Consumer>
                {({equipment}) => equipmentList(equipment)}
            </EquipmentContext.Consumer>
        </ListGroup>
        <Outlet />
    </Stack>
    </>
  );
}

export default EquipmentList;