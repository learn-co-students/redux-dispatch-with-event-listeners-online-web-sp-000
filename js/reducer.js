// add code snippets from README
let state;

// only our initial state set in the reducer
// setting our initial state as a default argument to our reducer
function reducer(action, state = { count: 0 }) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };
    default:
      return state
  }
}

// reassign state to be return value of reducer
// each time we dispatch an action we should have to update our HTML
function dispatch(action) {
  state = reducer(state, action);
  render(); //display state change in HTML
}

function render() {
  let container = document.getElementById('container');
  container.textContent = state.count;
}

// return our default state and then call render
dispatch({ type: '@@init' })

let button = document.getElementById('button');

// every time we click, we dispatch an action of type increase
// executing `dispatch` from inside the callback of an event handler
button.addEventListener('click', () => {
  dispatch({ type: 'INCREASE_COUNT' })
})