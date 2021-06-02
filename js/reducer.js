let state;

function reducer(state = {count: 0}, action){
    switch (action.type) {
        case 'INCREASE_COUNT':
            return {count: state.count + 1 }
        case 'DECREASE_COUNT':
            return { count: state.count - 1 }
        case 'RESET_COUNT':
            return { count: 0 }
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

const inc = document.getElementById('increase');

inc.addEventListener('click', () => dispatch({ type: 'INCREASE_COUNT' }))

const dec = document.getElementById('decrease')
dec.addEventListener('click', () => dispatch({ type: 'DECREASE_COUNT'}))

const reset = document.getElementById('reset')
reset.addEventListener('click', () => dispatch({ type: 'RESET_COUNT' }))
