const {createStore} = require("redux")

const INCRMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const initialState = {
    users: ["rahim"],
    count: 1
}

const inrementAction  = ()=> {
    return {
        type: INCRMENT
    }
}
const decrementAction  = ()=> {
    return {
        type: DECREMENT
    }
}

const addUser = (data)=> {
    return {
        type: "adduser",
        payload: data

    }
}

const reducer = (state = initialState, action)=> {
    switch(action.type){
        case INCRMENT:
            return {
                ...state,
                count: state.count + 1
            };
            case DECREMENT:
                return {
                    ...state,
                    count:state.count - 1
                }
                case "adduser": 
                return {
                    users:[...state.users,action.payload],
                    count: state.count + 1

                }
                default: 
                return state
    }
}

const store = createStore(reducer)
store.subscribe(()=> console.log(store.getState()))

store.dispatch(addUser("rahim"))
store.dispatch(addUser("babo"))
