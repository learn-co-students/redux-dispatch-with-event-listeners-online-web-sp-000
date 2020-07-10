// add code snippets from README
//Action -> Reducer -> New State 

//If we pass an action and a previous state to our reducer, the reducer should return the new state 
let state;  //allow function reducer to set the state either by specific value or default argument
function reducer(state = {count: 0}, action) {
    //state is set as a default argument
    switch(action.type) {
        case 'INCREASE_COUNT': 
            return {count: state.count + 1}
        default: 
            return state; 
    }
}

//Wrap the execution of our reducer in a function called dispatch
function dispatch(action) {
    state = reducer(state, action);
    render();   //display state 
}

//Use the render function to display our state 
function render() {
    let container = document.getElementById('container');
    container.textContent = state.count; 
}

dispatch({type: '@@INIT'})


//Integrate Dispatch w/User Event(in this case, button click); every time we click the button, we dispatch an action of type increase
let button = document.getElementById('button');
button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
})