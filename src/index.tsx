import * as React from 'react'
import { render } from 'react-dom'
import Dashboard from './dashboard'

/* tslint:disable:no-magic-numbers */
class Root extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>A Visualization Dashboard</h1>
                <Dashboard/>
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
