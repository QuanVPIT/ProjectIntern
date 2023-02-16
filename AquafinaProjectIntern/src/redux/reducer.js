import { combineReducers } from "redux"

const defaultState = {
    visibleModalThank: false,
    visibleModalAP: false,
    visbleModalEndTime: false,
    goHome: false,
}

const actionChangeState = (state = defaultState, payload) => {
    switch (payload.type) {
        case "update_one": {
            return {
                ...state,
                visibleModalThank: payload.visibleModalThank,
            }
        }
        case "update_two": {
            return {
                ...state,
                visibleModalAP: payload.visibleModalAP,
            }
        }
        case "update_three": {
            return {
                ...state,
                visbleModalEndTime: payload.visbleModalEndTime,
            }
        }
        case "go_home": {
            return {
                ...state,
                goHome: payload.goHome,
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