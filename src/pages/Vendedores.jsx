import React from 'react'
import DataVendedor from '../components/DataVendedor'
import { Row, Col, Container, Card } from 'react-bootstrap';

export default function Vendedores() {
  return (
    
    <div className="d-flex vh-100 align-items-center justify-content-center">
        <h1> </h1>
        <Container>
            <Row>
                <Col ms="12" md={{spna:8}} lg={{spna:6, offset:3}}>
                <Card>
                    <h2>Vendedores</h2>
                    <hr />
                    <DataVendedor></DataVendedor>
                </Card>
                </Col>
            </Row>
        </Container>

        
    </div>
  )
}
