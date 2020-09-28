let state; //dispatching an initial action
 
function reducer(state = {count: 0}, action){ //default argument
  switch (action.type) { //pass an action and previous state to our reducer 
    case 'INCREASE_COUNT': //increase our state 
      return {count: state.count + 1}
    default:
      return state; //return new state 
  }
}
 
//wrap the execution of our reducer in a function we call dispatch
function dispatch(action){
  state = reducer(state, action)
  render();
}
 
//render function displays our state
function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}
 
//default state and then call render 
dispatch({type: '@@INIT'})

//integrating dispatch with a user event 
//want an action to be dispatched each time a user clicks 
//javascript event listener:
let button = document.getElementById('button');
 
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})