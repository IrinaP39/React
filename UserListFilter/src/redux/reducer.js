import { createStore } from "redux";

const initialState = {
  users: [
    { id: 1, name: "Maria" },
    { id: 2, name: "Anton" },
    { id: 3, name: "Hania" },
    { id: 4, name: "Nik" },
    { id: 5, name: "Maja" },
    { id: 6, name: "Mark" },
    { id: 7, name: "Henry" },
    { id: 8, name: "Nikita" },
    { id: 9, name: "Inna" },
    { id: 10, name: "Karina" },
    { id: 11, name: "Michal" },
    { id: 12, name: "Barbara" },
  ],
  filter: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
