// add code snippets from README
let state; 

let button = document.getElementById('button')

const reducer = (state = {count: 0}, action) => {
    switch(action.type){
        case 'INCREASE_COUNT' : 
            return {count: state.count + 1}
        default : 
            return state;
    }
}

button.addEventListener('click', () => {
    dispatch({type: 'INCREASE_COUNT'})
})

const dispatch = action => {
    state = reducer(state, action)
    render()
}

function render(){
    let container = document.getElementById('container')
    container.textContent = state.count
}

dispatch({type: '@@INIT'})