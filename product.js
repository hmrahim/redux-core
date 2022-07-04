const { createStore,combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
const initialState = {
  product: ["mobile", "computer"],
  count: 2,
};

const initialCartState = {
    cart:["apple","mango"],
    count:2
}

const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

const ADD_CART = "ADD_CART";
const GET_CART = "GET_CART";

const addPoductAction = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

const getProductAction = () => {
  return {
    type: GET_PRODUCT,
  };
};

const addCartAction = (data) => {
  return {
    type: ADD_CART,
    payload: data,
  };
};

const getCartAction = () => {
  return {
    type: GET_CART,
  };
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return state;
    case ADD_PRODUCT:
      return {
        product: [...state.product, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
};

const cartReducer = (state = initialCartState,action) => {
    switch(action.type){
        case GET_CART:
            return state;
            case ADD_CART:
                return {
                    cart:[...state.cart,action.payload],
                    count: state.count+1
                };
                default: 
                return state
    }

};
const rootReducer = combineReducers({
    productReducer,cartReducer
})

const store = createStore(rootReducer,applyMiddleware(logger));
store.subscribe(() => console.log(store.getState()));


store.dispatch(getCartAction());
store.dispatch(addCartAction("painapple"));

// store.dispatch(getProductAction());
// store.dispatch(addPoductAction("umbrela"));
