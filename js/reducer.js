// add code snippets from README

let state;

function reducer(state = {count: 0}, action) {
    switch(action.type) {
        default: 
            return state
        case "INCREASE_COUNT": 
            return state = {count: state.count + 1}
    }
}

function dispatch(action) {
    state = reducer(state, action)
    render()
}

function render() {
    let container = document.getElementById('container');
    container.textContent = state.count;
}

dispatch({type: "yeet"})

let button = document.getElementById('button');

button.addEventListener("click", () => {
    dispatch({type: "INCREASE_COUNT"})
})