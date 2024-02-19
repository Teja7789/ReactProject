import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:1
}
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            state.value +=1;
        }
    }
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;