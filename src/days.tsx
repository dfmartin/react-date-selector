import * as React from 'react'
import { getDate } from 'date-fns'
import { MoveFunc, ShowFunc, SetDateFunc } from './types'
import { createStyles } from './styles'

const styles = createStyles({
    root: {
        display: "flex"
    },
    day: {
        backgroundColor: "lightgray",
        margin: 2
    }
})

interface Props {
    dateTime: Date
    navigate?: MoveFunc
    showView?: ShowFunc
    selectedDate?: Date
    setDate?: SetDateFunc
}

export const Days: React.SFC<Props> = (props: Props) => {

    const {
        dateTime = new Date(),

    } = props;

    return (
        <div>
            hello
        </div>
    )
}

