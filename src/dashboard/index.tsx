import * as React from 'react'
import PieChart from './PieChart'
import { Row, Col } from 'react-materialize'

export default class extends React.Component {
    render() {
        return (
            <Row>
                <Col s={12} m={6} l={3}>
                    <PieChart/>
                </Col>
                <Col s={12} m={6} l={3}>
                    <PieChart/>
                </Col>
                <Col s={12} m={6} l={3}>
                    <PieChart/>
                </Col>
                <Col s={12} m={6} l={3}>
                    <PieChart/>
                </Col>
            </Row>
        )
    }
}
