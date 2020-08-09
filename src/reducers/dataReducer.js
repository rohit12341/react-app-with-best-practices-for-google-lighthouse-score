const initial_state = {
    status:null,
    data:[]
}

export const getData = (state=initial_state, action) => {
switch(action.type){
    case 'getData' :
        if(action.payload.status)
            return {
                ...state,
                status:action.payload.status,
                data: action.payload.data
                }
        else  return {
            ...state,
            status:action.payload.status,
            data: []
            }        
    default:
        return state;        
}
}