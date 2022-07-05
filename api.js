const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const url = "https://jsonplaceholder.typicode.com/todos"

const initialState = {
  data: [],
  isloading: false,
  error: null,
};

const request = "request";
const success = "success";
const error = "error";

// actions.............
const requestAction = () => {
  return {
    type: request,
  };
};

const successAction = (data) => {
  return {
    type: success,
    payload:data
  };
};

const errorAction = (errorMessage) => {
    return {
        type:error,
        payload:errorMessage
    }
};




const reducer = (state = initialState,action)=> {
    switch(action.type){
        case request:
            return {
                ...state,
                isloading:true,

            };
            case success:
                return {
                    ...state,
                    isloading:false,
                    data:action.payload
                    
                };
                case error:
                  return {
                    ...state,
                    isloading:false,
                    error:action.payload
                  }

                  default: return state
    }

}

const fetchData = ()=> {

  return (dispatch)=> {
    dispatch(requestAction())
    axios.get(url)
    .then(res=> {
      const title = res.data.map(item=> item.title)
      dispatch(successAction(title))
    })
    .catch(error=> {
      const errorMessage = error.message
      dispatch(errorAction(errorMessage))
    })

  }
}


const store = createStore(reducer,applyMiddleware(thunk))
store.subscribe(()=> console.log(store.getState()))
store.dispatch(fetchData())

