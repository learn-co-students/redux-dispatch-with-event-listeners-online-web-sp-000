// add code snippets from README
let state = {count:0};

function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count:state.count + 1}
        // default
            // return state
    }
}
// reducer({count: 10}, {type: 'INCREASE_COUNT'});

function dispatch(action){
  state = reducer(state, action);
//   ! render html
  render()
}

// dispatch({type: 'INCREASE_COUNT'})
function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}