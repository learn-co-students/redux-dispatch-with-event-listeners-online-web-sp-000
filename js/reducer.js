let state;
 
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}
// We need to assign our state to be the return value of our reducer each time that we call the reducer
// we can reassign the state by adding the dispatch function
function dispatch(action){
    state = reducer(state, action);
}
//  Call dispatch({type: 'INCREASE_COUNT'}). It should return undefined, since dispatch() doesn't return anything, but our state value should have changed

function render(){
    let container = document.getElementById('container');
    container.innerHTML = state.count
}

//  we want to show the number zero, our default state, well we can just refresh our page, and then dispatch an action that returns the default state like so: dispatch({type: '@@init'})
//  This does not increase our state, but it does return our default state and then call render.
dispatch({type: '@@INIT'})

// every time the user clicks on a button, we dispatch an action
let button = documentgetElementById('button');
// the user to call the dispatch method, by executing dispatch from inside the callback of an event handler.
button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
})
// Now every time we click, we dispatch an action of type increase.
// Dispatch first calls our reducer, which updates our state. Then dispatch renders the updated view.
//  thinking about redux from the perspective of action -> reducer -> new state