import { combineReducers } from "redux"

const defaultState = {
    visibleModalThank: false,
}

const actionChangeState = (state = defaultState, payload) => {
    switch (payload.type) {
        case "update_one": {
            return {
                ...state,
                visibleModalThank: payload.visibleModalThank,
            }
        }
        default:
            return {
                state
            }
    }
}

const reducer = combineReducers({
    resultSate: actionChangeState
})

export default (state,action) => reducer(state, action);