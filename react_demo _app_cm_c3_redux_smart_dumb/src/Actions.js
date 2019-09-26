import * as ActionTypes from './ActionTypes';

export const increment = (counterCaption) => {
    return {
        type: 'increment',
        counterCaption: counterCaption,
    }
}

export const decrement = (counterCaption) => {
    return {
        type: 'decrement',
        counterCaption: counterCaption,
    }
}