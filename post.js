const { createStore, applyMiddleware } = require("redux");
const axios = require("axios")
const thunk = require("redux-thunk").default;
const postRequest = "postrequest";
const postSuccess = "postsuccess";
const postError = "posterror";
const initialState = {
  post: [],
  isLoading: false,
  error: "",
};

const postRequestAction = () => {
  return {
    type: postRequest,
  };
};

const postSuccessAction = (data) => {
  return {
    type: postSuccess,
    payload: data,
  };
};

const postErrorAction = (errorMessage) => {
  return {
    type: postError,
    payload: errorMessage,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case postRequest:
      return {
        ...state,
        isLoading: true,
      };
    case postSuccess:
      return {
        ...state,
        isLoading: false,
        post: action.payload,
      };
    case postError:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchData = () => {
    return (dispatch)=> {
        dispatch(postRequestAction())
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            const title = res.data.map(post=> post.title)
            dispatch(postSuccessAction(title))
        })
        .catch(error=> dispatch(postErrorAction(error.message)))
        
        
        


    }
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
