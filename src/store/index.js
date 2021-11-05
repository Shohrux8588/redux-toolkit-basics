import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;




// import { createStore } from "redux";

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "increment":
//             return ({
//                 counter: state.counter + 1,
//                 showCounter: state.showCounter
//             });
//         case "decrement":
//             return ({
//                 counter: state.counter - 1,
//                 showCounter: state.showCounter
//             });

//         case "increase":
//             return ({
//                 counter: state.counter + action.amount,
//                 showCounter: state.showCounter
//             });
//         case "toggle":
//             return ({
//                 counter: state.counter,
//                 showCounter: !state.showCounter
//             });
//         default:
//             return ({
//                 counter: state.counter,
//                 showCounter: state.showCounter
//             });
//     }
// }

// const store = createStore(reducer);

// export default store;