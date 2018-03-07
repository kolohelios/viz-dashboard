import * as React from 'react'
import { render } from 'react-dom'
import { VictoryPie } from 'victory'
import { Row, Col } from 'react-materialize'

class PieChart extends React.Component {
    render() {
        return (
            <VictoryPie
                data={[
                    { x: 'SEA', y: 52 },
                    { x: 'PDX', y: 48 },
                ]}
            />
        )
    }
}

/* tslint:disable:no-magic-numbers */
class Root extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>A Visualization Dashboard</h1>
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
            </div>
        )
    }
}

const reactElement = React.createElement(Root)
const rootEl = document.getElementById('root')

if (rootEl === null) {
    throw new Error('React root container not found.')
}

render(reactElement, rootEl)
