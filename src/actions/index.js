import CONSTANTS from '../constants/';

export const incrementAction = payload => ({type: CONSTANTS.INCREMENT, payload });
export const decrementAction = payload => ({type: CONSTANTS.DECREMENT, payload });
export const updateValueAction = payload => ({type: CONSTANTS.UPDATE_VALUE, payload });