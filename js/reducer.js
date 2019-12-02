// add code snippets from README
let state 
let action = {type: 'INCREASE_COUNT'}

function reducer(state = {count: 0}, action){
    switch(action.type){
        case 'INCREASE_COUNT':
            return {count: state.count + 1}
        default:
            return state    
    }
}

// console.log(reducer(state, action))

function dispatch(action){
    state = reducer(state, action)
    render()
}
// console.log(dispatch(action))
// console.log(state)

function render(){
    let container = document.getElementById('container')
    container.textContent = state.count
}

dispatch({type: '@@INIT'})

let button = document.getElementById('button')
button.addEventListener('click', () => {
  dispatch(action)
})