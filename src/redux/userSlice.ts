import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
}


interface AuthUser {
  email: string;
  password: string;
}


interface UserState {
  user: AuthUser | null;
  registeredUsers: AuthUser[];
  userData: User | null;
}


const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");
const storedUserData = JSON.parse(localStorage.getItem("userData") || "null");
const storedLoggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");

const initialState: UserState = {
  user: storedLoggedInUser,
  registeredUsers: storedUsers,
  userData: storedUserData,
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: (state, action: PayloadAction<AuthUser>) => {
      state.registeredUsers.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.registeredUsers));
    },
    loginUser: (state, action: PayloadAction<AuthUser>) => {
      const foundUser = state.registeredUsers.find(
        (u) => u.email === action.payload.email && u.password === action.payload.password
      );
      if (foundUser) {
        state.user = foundUser;
        localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
      } else {
        alert("Invalid email or password");
      }
    },
   
    saveUserData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
  },
});


export const { registerUser, loginUser, saveUserData } = userSlice.actions;
export default userSlice.reducer;