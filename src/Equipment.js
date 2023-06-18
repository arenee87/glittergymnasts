import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { EquipmentContext } from './EquipmentContext';
import { useContext, useState, useEffect } from 'react';


const Equipment = () => {
    let params = useParams();
    let navigate = useNavigate();

    let { getEquipment, deleteEquipment } = useContext(EquipmentContext);
    let [ equipment, setEquipment ] = useState();

    useEffect(() => {
        async function fetch() {
            await getEquipment(params.Id)
                .then ((equipment) => 
                setEquipment(equipment)
            );
        }
        fetch()
    },   [params.Id, getEquipment]);

    function handleDeleteEquipment(id) {
        deleteEquipment(id)
        navigate('/equipment')
    }

    function equipmentCard() {
        let { id, equipName, description, price, imageUrl } = equipment
        return (
            <Card className="align-self-start w-25">
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{equipName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Price: {price}</Card.Subtitle>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link to={`/${id}/edit`} className="btn btn-primary mx-3">Edit</Link>
                    <Button variant="danger" onClick={handleDeleteEquipment.bind(this, id)}>Delete</Button>
                </Card.Body>
            </Card>
        );
    }
    return equipmentCard();

};
export default Equipment 