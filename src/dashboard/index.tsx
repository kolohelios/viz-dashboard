import * as React from 'react'
import PieChart from './PieChart'
import LineChart from './LineChart'
import { Row, Col } from 'react-materialize'

export default class extends React.Component {
    render() {
        return (
            <div>
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
                <Row>
                    <LineChart/>
                </Row>
            </div>
        )
    }
}
