// add code snippets from README
let state = {count:0};

function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}

function reducer(state, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count:state.count + 1}
        // default
            // return state
    render()
}
render()

}
// reducer({count: 10}, {type: 'INCREASE_COUNT'});

function dispatch(action){
  state = reducer(state, action);
}

// dispatch({type: 'INCREASE_COUNT'})
