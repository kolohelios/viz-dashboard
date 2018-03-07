import * as React from 'react'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory'

export default class extends React.Component {
    render() {
        return (
            <VictoryChart
                theme={ VictoryTheme.material }
            >
                <VictoryLine
                    style={{
                        data: { stroke: 'rgb(153, 50, 204)' },
                        parent: { border: '1px solid rgb(180, 180, 180)'},
                    }}
                    data={[
                        { x: 10, y: 35 },
                        { x: 15, y: 72 },
                        { x: 20, y: 86 },
                        { x: 25, y: 97 },
                    ]}
                />
            </VictoryChart>
        )
    }
}
