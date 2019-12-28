// add code snippets from README
let state;

function reducer(state={ count: 0 }, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

function dispatch(action) {
  state = reducer(state, action);
  render();
}

function render() {
  const c = document.querySelector('#container');
  c.textContent = state.count;
}

dispatch({type: '@@INIT'});

const b = document.querySelector('#button');
b.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
});
