
let state;
const addOne = {type: 'INCREASE_COUNT'};

const render = () => {
    let container = document.getElementById('container')
    container.textContent = state.count
}

const dispatch = (action) => {
    state = reducer(state, action)
    render()
}

function reducer(state={count: 0}, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

dispatch({type: '@@init'})

let button = document.getElementById('button');

button.addEventListener('click', () => dispatch(addOne))