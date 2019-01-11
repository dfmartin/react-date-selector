import * as React from 'react'
import * as CSS from 'csstype'

export interface CSSProperties extends CSS.Properties<number | string> {
    [k: string]: CSS.Properties<number | string>[keyof CSS.Properties] | CSSProperties
}

export type StyleRules<ClassKey extends string = string> = Record<ClassKey, CSSProperties>


