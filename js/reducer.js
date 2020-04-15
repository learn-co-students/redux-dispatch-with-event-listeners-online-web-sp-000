let state

function reducer(state = { count: 0 }, action) {
	switch (action.type) {
		case 'INCREASE_COUNT':
			return { count: state.count + 1 }
		default:
			return state
	}
}

function dispatch(action) {
	state = reducer(state, action)
	render()
}

const render = () => {
	document.getElementById('container').textContent = state.count
}

dispatch({ type: '@@INIT' })
document.getElementById('button').addEventListener('click', () => { dispatch({ type: 'INCREASE_COUNT' }) })