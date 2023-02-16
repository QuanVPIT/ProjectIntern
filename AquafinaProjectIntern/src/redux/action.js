export const updateVisibleOne = (visibleModalThank) => async dispatch =>{
    try {
        await dispatch({
            type:"update_one",
            visibleModalThank:visibleModalThank,
        })
    } catch (error) {
        console.log("Lỗi: ",error)
    }
}
export const updateVisibleTwo = (visibleModalAP) => async dispatch =>{
    try {
        await dispatch({
            type:"update_two",
            visibleModalAP:visibleModalAP,
        })
    } catch (error) {
        console.log("Lỗi: ",error)
    }
}
export const updateVisibleThree = (visbleModalEndTime) => async dispatch =>{
    try {
        await dispatch({
            type:"update_three",
            visbleModalEndTime:visbleModalEndTime,
        })
    } catch (error) {
        console.log("Lỗi: ",error)
    }
}

export const goHome = (goHome) => async dispatch =>{
    try {
        await dispatch({
            type:"go_home",
            goHome:goHome,
        })
    } catch (error) {
        console.log("Lỗi: ",error)
    }
}