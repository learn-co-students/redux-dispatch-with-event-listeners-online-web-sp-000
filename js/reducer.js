let state = {count: 0}
 
function reducer(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1};
    default:
      return state;
  }
}

function render(){
    let container = document.getElementById('container');
    container.textContent = state.count;
}



function dispatch(action){
    state = reducer(state, action);
    render()
}

let button = document.getElementById('button')

button.addEventListener('click', () => {
  applyStateChange({type: 'INCREASE_COUNT'})
})


dispatch('@@INIT')