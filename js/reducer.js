//global scope
// let state = {count: 0}
let state 

//use a default arg in the reducer to set initial state 
function reducer(state = {count: 0}, action){
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1};
            default:
                return state;
    }
}

//IN CONSOLE
//> reducer({count: 0}, {type: 'INCREASE_COUNT'});
//< {count: 1}

//reassign state 
function dispatch(action){
    state = reducer(state, action);
    render();
}

//IN CONSOLE:
// dispatch({type: 'INCREASE_COUNT'})
// undefined
// state
// {count: 1}

//render display state 
function  render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
}

//shows a state of 0
dispatch({type: '@@INIT'})

//integrating dispatch with a user event 
let button = document.getElementById('button');

button.addEventListener('click', () => {
    //action type
    dispatch({type: 
    'INCREASE_COUNT'})
})