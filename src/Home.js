import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import { Link, Outlet } from "react-router-dom"
import Form  from 'react-bootstrap/Form'
import  Button  from 'react-bootstrap/Button'
import './Home.css'
import { Image } from 'react-bootstrap'







function Home() {
  return (
    <>
      <Navbar className='nav-bar'>
        <Container>
        <Navbar.Brand className='me-auto'>
            <Image src='https://ih1.redbubble.net/image.478925657.4191/fposter,small,wall_texture,product,40x50.jpg'></Image>
            </Navbar.Brand>
          <Nav className="ms-auto">
            <Link to= "/" className='nav-link'>Home</Link>
            <Link to="/about" className='nav-link' >About Us</Link>
            <Link to="/equipment" className='nav-link' >Equipment</Link>
            <Link to="/add" className='nav-link'>Create</Link>
            
            
            <Form>
                <Form.Control input type="text"  placeholder="Look it up" className="me-sm-2" />
            </Form> 
            <Form>
                <Button variant="dark" onClick="submit" >Search</Button>
            </Form>
          </Nav>  
        </Container>
      </Navbar>
      <Stack gap={3} className="col-md-10 mx-auto mt-3">
        <Outlet />
      </Stack>
    </>
  )
}

export default Home