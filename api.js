const { createStore } = require("redux");
const thunk = require("redux-thunk").default();

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

const successAction = () => {
  return {
    type: success,
  };
};

const errorAction = () => {
    return {
        type:error
    }
};


