export type Direction = 'forward' | 'backward'
export type MoveFunc = (amount: number, direction: Direction) => (event: any) => void
export type ShowFunc = (view: 'months' | 'years' | 'days' | 'time') => (event: any) => void
export type SetDateFunc = (type: 'years' | 'months' | 'days', newDate: Date, close?: boolean) => (event: any) => void