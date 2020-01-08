const intialState = {
  currency: 1,
  data: {},
  choosed: []
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return {
        ...state,
        currency: action.payload
      };

    case "ADD_DEFAULT":
      return {
        ...state,
        data: action.payload.data,
        choosed: state.choosed.concat(action.payload.defaultArr)
      };

    case "UPDATE_CHOOSEN":
      return {
        ...state,
        choosed: state.choosed.concat(action.payload)
      };

    case "DELETE_CHOOSEN":
      var deletedArr = state.choosed.filter(
        (item, index) => index !== action.payload
      );
      return {
        ...state,
        choosed: deletedArr
      };

    default:
      return state;
  }
};

export default reducer;
