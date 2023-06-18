import React, {useContext, useState, useEffect}  from "react";
import axios from "axios";
import {Link, useLocation} from 'react-router-dom';
import {Button, Col, Row, Card } from 'react-bootstrap';
import { EquipmentContext } from "./EquipmentContext";

function Search() {
    const query = useQuery().get("query");
    const[results, setResults] = useState([]);
    let {deleteEquipment} = useContext(EquipmentContext);
    function handleDeleteEquipment(id) {
        deleteEquipment(id);
    }

    useEffect(() => {
        axios.get("http://localhost:3001/equipment?q=" + encodeURI(query)).then(result => {
            setResults(result.data);
        })
    },  [query])

    return <Row xs={1} md={4} className="g-4">
        {results.map(({ id, equipName, price, description, imageUrl }) => 
        <Col>
            <Card className="align-self-start">
                <Card.Body>
                    <Card.Img variant="top" src={imageUrl} />
                    <Card.Title>{equipName}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Price:{price}</Card.Subtitle>
                    <Card.Text> {description}</Card.Text>
                    <Link to={'/equipment/${id}/edit'} className="btn btn-primary" style={{ marginRight: '1rem' }}>Edit</Link>
                    <Button variant="danger" onClick={handleDeleteEquipment.bind(this, id)}>Delete</Button>
                </Card.Body>
            </Card>
        </Col>)}
    </Row>
}

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default Search