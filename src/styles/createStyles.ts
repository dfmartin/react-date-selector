import { StyleRules } from './styleRules'

export const createStyles = <C extends string>(styles: StyleRules<C>) => styles
