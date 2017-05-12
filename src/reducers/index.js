import CONSTANTS from '../constants/index';

const rootReducer = (state, action) => {
	switch(action.type) {
		case CONSTANTS.INCREMENT:
			return {
				...state,
				counter: state.counter + action.payload
			};
		case CONSTANTS.DECREMENT:
			return {
				...state,
				counter: state.counter - action.payload
			};
		case CONSTANTS.UPDATE_VALUE:
			return {
				...state,
				value: action.payload
			};
		default:
			return state;
	}
};

export default rootReducer;