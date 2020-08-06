import React from 'react'
import { Row,
         Col,
         Button
} from 'react-bootstrap'
import logo from '../../img/global/Icon.png'

function Navbar(){
    return(
        <Row>
            <Col style={{ marginTop: "-50px" }}>
            <nav className="navbar navbar-expand navbar-dark bg-transparant">
                <img src={logo} alt="logo" />
                <div className="nav navbar-nav ml-auto">
                    <Button variant="outline-light" className="mr-2">Login</Button>
                    <Button variant="warning" className="text-white">Register</Button>
                </div>
            </nav>
            </Col>
        </Row>
    )
}

export default Navbar