import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from "./postService";
import decode from "jwt-decode";

// get user from localstorage

const initialState = {
  posts: [],
  isLoading: false,
  message: "",
};

export const getPosts = createAsyncThunk(
  "post/getPosts",
  async (uuid, thunkAPI) => {
    try {
      return await postService.getPosts(uuid);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  },
);

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => {
      state.posts = [];
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.isLoading = false;
        state.message = "";
      });
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
