import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { fetchUsersFromAPI } from "./usersAPI";

interface User {
  id: number;
  login: string;
  avatar_url: string;
  type: string;
  score: number;
}

interface UsersState {
  loading: boolean;
  users: User[];
}

const initialState: UsersState = {
  loading: false,
  users: [],
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (query: string) => {
    const response = await fetchUsersFromAPI(query);
    return response;
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearUsers: (state) => {
      state.users = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { clearUsers } = usersSlice.actions;

export const selectUsers = (state: RootState) => state.users.users;
export const selectLoading = (state: RootState) => state.users.loading;

export default usersSlice.reducer;
