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