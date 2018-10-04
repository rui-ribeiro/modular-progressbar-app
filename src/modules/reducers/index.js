import { combineReducers } from 'redux'

let INITIAL_PERCENT = localStorage.getItem('percent');
if (INITIAL_PERCENT === null) {
    INITIAL_PERCENT = 0;
    localStorage.setItem('percent', INITIAL_PERCENT)
}

const progressBar = (state = { percent: INITIAL_PERCENT }, action) => {
    let oldValue = parseInt(state.percent);
    switch (action.type) {
        case 'REACHED_MAX':
            return { ...state, error: 'Max reached' };
        case 'REACHED_MIN':
            return { ...state, error: 'Min reached' };
        case 'INCREMENT':
            localStorage.setItem('percent', oldValue + 15);
            return { percent: oldValue + 15 };
        case 'DECREMENT':
            localStorage.setItem('percent', oldValue - 15);
            return { percent: oldValue - 15 };
        default:
            return state
    }
};
const features = (state = {}, action) => {
    switch (action.type) {
        case 'FEATURE_ADDED':
            let newState = { ...state };
            newState[action.name] = action.id;
            return state;
        default:
            return state;
    }
};

export default combineReducers({ progressBar, features })