import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import DataDespidos from '../components/DataDespidos';

export default function Despidos() {
  return (
    <div className="d-flex vh-100 align-items-center justify-content-center">
        <h1> </h1>
        <Container>
            <Row>
                <Col ms="12" md={{spna:8}} lg={{spna:6, offset:3}}>
                <Card>
                    <h2>Despidos</h2>
                    <hr />
                    <DataDespidos></DataDespidos>
                </Card>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
