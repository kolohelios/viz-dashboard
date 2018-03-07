import * as React from 'react'
import { render } from 'react-dom'
import { VictoryPie } from 'victory'

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

class Root extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>A Visualization Dashboard</h1>
                <PieChart/>
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
