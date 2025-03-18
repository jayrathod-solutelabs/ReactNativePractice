import { createReducer } from "@reduxjs/toolkit";
import { increment, decrement, INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions/counterActions";

const initialState = {
    value: 0
}


const counterReducer = createReducer(initialState, (builder) => {
    builder.addCase(INCREMENT_COUNTER, (state) => {
        state.value += 1;
    })
    .addCase(DECREMENT_COUNTER, (state)=> {
        state.value -= 1;
    })
})


export default counterReducer;