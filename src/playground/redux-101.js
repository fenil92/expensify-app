import {createStore} from 'redux';

const countReducer = (state = { count : 0 } , action) => {
    switch(action.type)
    {
        case 'INCREMENT':
            return { count : state.count + action.incrementBy }; 
        default:
            return state;
    }
}

const store = createStore(countReducer);

// used to watch for changes to the store, gets called every time the state changes
store.subscribe(() => {
    console.log(store.getState());
});
// Action - object that gets sent to the store
store.dispatch({ type: 'INCREMENT', incrementBy: 5});
//store.dispatch({ type: 'INCREMENT', incrementBy: 15});

const incrementCount = ({incrementBy = 1} = {}) => ({
    type : 'INCREMENT',
    incrementBy
})

store.dispatch(incrementCount({incrementBy : 10 }));

