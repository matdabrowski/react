import {combineReducers} from 'redux';

const changeCounter = (state = {}, action) => {
    console.log("changeCounter");
    console.log(state);
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter === undefined ? 1 : state.counter + 1};
        case 'DECREMENT':
            return {...state, counter: state.counter === undefined ? 0 : state.counter - 1};
        default:
            return state;
    }
}

const changeSign = (state = {}, action) => {
    console.log("changeSign");
    console.log(state);
    switch (action.type) {
        case 'UP':
            return {...state, aSign: "+"};
        case 'DOWN':
            return {...state, aSign: "-"};
        default:
            return state;
    }
}

export const appReducers = combineReducers({
    changeCounter,
    changeSign
});