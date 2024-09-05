import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import DataContratos from '../components/DataContratos';

export default function Contratos() {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center">
        <h1> </h1>
        <Container>
            <Row>
                <Col ms="12" md={{spna:8}} lg={{spna:6, offset:3}}>
                <Card>
                    <h2>Contratos</h2>
                    <hr />
                    <DataContratos></DataContratos>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
