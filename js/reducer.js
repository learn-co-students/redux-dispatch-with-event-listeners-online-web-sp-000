// add code snippets from README
//redux principles action to reducer to new state


//pass action and prev state into reducer, should return new state
//shows button with increase count
//within dev tools console use: reducer({count: 0}, {type: 'INCREASE_COUNT'}); yields {count: 1}
//however state isn't affected yet, dev console: state -- is undefined
//let state refactored so uncommented later
//let state = {count: 0}
 
//state declared and then set at default here instead
//dev console use: dispatch({type: 'INCREASE_COUNT'})
let state;
function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

//reassign state via dispatch
//dev tools use: dispatch({type: 'INCREASE_COUNT'}) -- is undefined
//however dev console: state now yields {count: 1}
function dispatch(action){
    state = reducer(state, action);
    render(); //will update html each time now
  }


//function to render to place count on page
//in dev console: render -- will update display
//then dev console: dispatch({type: 'INCREASE_COUNT'})  --will change the state
//then dev console: render -- update number displayed
//also added render(); to function dispatch above
function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
  }

//and lastly add the @@INIT for the general dispatch build
dispatch({type: '@@INIT'})

//now adding event listener to complexity of dispatch
let button = document.getElementById('button');
 
button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})