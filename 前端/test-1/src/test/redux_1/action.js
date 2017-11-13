import TYPES from '../../module/$redux/rootTypes.js'

export function myTest() {
    return (dispatch)=>{
        dispatch(mTest());
    }
}

export const mTest = () => {
    return {type: TYPES.TEST.TEST_1}
}