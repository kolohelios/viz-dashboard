import * as React from 'react'
import { VictoryPie } from 'victory'

export default class extends React.Component {
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
