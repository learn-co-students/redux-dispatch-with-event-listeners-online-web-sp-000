// add code snippets from README

// dispatch is instanciated with @@INIT
// clicck Event Listener that triggers dispatch, 
// dispatch passes the action aka {type: 'INCREASE_COUNT'} & initializes the reducer fn with it
// reducer takes i state and action and increates the count which overrides the og state count property's value...then return out a new state 
// inside dispatch, the return value of reducers's value (aka the new state) is saved to a variable called state
// inside dispatch, we call render() fn which takes bits from our state and displays to DOM


let state;

function reducer(state = {count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
	}
}

function dispatch(action){
	state = reducer(state, action);
	render();
}

function render(){
	let container = document.getElementById('container');
	container.textContent = state.count;
}

dispatch({type: '@@INIT'})

let button = document.getElementById('button');


button.addEventListener('click', () => {
	dispatch({type: 'INCREASE_COUNT'})
})