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
//createPost-1
export const createPost = createAsyncThunk("post/createPost", async({ values })=> {
    return fetch(`http://localhost:3006/posts`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title: values.id,
            body: values.body,
        }),
    }).then((res) => res.json());    
   });
   //putmethod-3
export const updatePost = createAsyncThunk("post/createPost", async({ id,body,title})=> {
    return fetch(`http://localhost:3006/posts/${id}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            title,
            body,
        }),
    }).then((res) => res.json());    
   });
const postSlice = createSlice({
    name:"post",
    initialState: {
        post:[],
        loading: false,
        error: null,
        edit: false,
        body: ""
    },
    //post edit functionality
    reducers : {
        setEdit : (state, action) => {
            state.edit = action.payload.edit;
            state.body = action.payload.body;
        },
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
    //createPost-1
    [createPost.pending]: (state, action) => {
        state.loading = true;
    },
    [createPost.fulfilled]: (state, action) => {
        state.loading = false;
        state.post = [action.payload];
    },
    [createPost.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    //putmethod-3
    [updatePost.pending]: (state, action) => {
        state.loading = true;
    },
    [updatePost.fulfilled]: (state, action) => {
        state.loading = false;
        state.post = [action.payload];
    },
    [updatePost.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
},
});
//post edit export
export const { setEdit } = postSlice.actions;
//post edit export
export default postSlice.reducer;
