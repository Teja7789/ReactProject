// collection of all logic of all files
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getPost = createAsyncThunk("post/getPost", async({id})=> {
 return fetch(`http://localhost:3006/posts/${id}`).then((res) => res.json());    
});
//deletePost-1
export const deletePost = createAsyncThunk("post/deltePost", async({id})=> {
    return fetch(`http://localhost:3006/posts/${id}`, {
        method: "DELETE",
    }).then((res) => res.json());    
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
    //deletePost-1
    //inCase of delete , fullfill returns {} empty object payload
    [deletePost.pending]: (state, action) => {
        state.loading = true;
    },
    [deletePost.fulfilled]: (state, action) => {
        state.loading = false;
        state.post = action.payload;// //inCase of delete , fullfill returns {} empty object payload
    },
    [deletePost.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
},
});

export default postSlice.reducer;
