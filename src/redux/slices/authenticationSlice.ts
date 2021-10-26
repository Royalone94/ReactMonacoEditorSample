import {
  createAsyncThunk,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";

export interface UserState {
  id: string;
  accountId: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface SliceState {
  user: UserState | null;
}

interface AuthenticationReduxState {
  authentication: SliceState;
}

export const fetchUserDetail = createAsyncThunk(
  "authentication/fetchUserDetail",
  async () => {
    return {
      id: "12345",
      accountId: "12345",
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
    };
  }
);

const authentication = createSlice({
  name: "authentication",
  initialState: {
    user: null,
  } as SliceState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUserDetail.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});

export const { setUser } = authentication.actions;
export default authentication.reducer;

const userStateSelector = (state: AuthenticationReduxState) =>
  state.authentication;

export const userSelector = createSelector(
  userStateSelector,
  (state: SliceState) => state.user
);
