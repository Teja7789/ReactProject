// collection of all logic of all files
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getPost = createAsyncThunk("post/getPost", async({id})=> {
 return fetch(`http://localhost:3006/posts/${id}`).then((res) => res.json());    
});

const postSlice = createSlice({
    name:"post",
    initialState: {
        post:[],
        loading: false,
        error: null
    },
    //extrareducer for pending,fullfill and reject
    extraReducers:{
    [getPost.pending]: (state, action) => {
        state.loading = true;
    },
    [getPost.fulfilled]: (state, action) => {
        state.loading = false;
        state.post = [action.payload];
    },
    [getPost.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
},
});

export default postSlice.reducer;
