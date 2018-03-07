import * as React from 'react'
import { VictoryPie, VictoryTheme } from 'victory'

export default class extends React.Component {
    render() {
        return (
            <VictoryPie
                theme={ VictoryTheme.material }
                data={[
                    { x: 'SEA', y: 52 },
                    { x: 'PDX', y: 48 },
                ]}
            />
        )
    }
}
