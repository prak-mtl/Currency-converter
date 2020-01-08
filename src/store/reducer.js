const intialState = {
  choosed: {},
  personChoosen: null,
  peopleList: []
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "ADD_PERSON":
      if (action.payload.name !== "") {
        if (state.peopleList.length > 0) {
          var index = state.peopleList.findIndex(
            x => x.name === action.payload.name
          );
          if (index === -1) {
            state.peopleList.push({ ...action.payload });
          }
        } else state.peopleList.push(action.payload);
        return {
          ...state,
          peopleList: [...state.peopleList]
        };
      }
      
    case "DELETE_PERSON":
      var deletedArr = state.peopleList.filter(
        (item, index) =>
          item.name.toLowerCase() !== action.payload.toLowerCase()
      );
      return {
        ...state,
        peopleList: deletedArr
      };

    case "SHOW_PERSON":
      var choosedPerson = state.peopleList.filter(
        (item, index) => index === action.payload
      );
      return {
        ...state,
        choosed: choosedPerson,
        personChoosen: action.payload
      };

    case "SAVE_PERSON":
      var newArr = state.peopleList.map((item, index) => {
        if (index == state.personChoosen) {
          item = action.payload;
        }
        return item;
      });
      return {
        ...state,
        peopleList: newArr
      };

    default:
      return state;
  }
};

export default reducer;
