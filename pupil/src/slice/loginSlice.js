import { createSlice } from "@reduxjs/toolkit";

/**
 * @author: 248Kobe
 * @description: 로그인 때 필요한 정보 관리
 * 로그인 상태, 유저 타입 관리
 */
const initialState = {
  isLoggedIn: false,
  id: "",
  password: "",
  userType: "",
  isValidForm: false,
};

const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setId(state, action) {
      state.id = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setIsValidForm(state) {
      if (
        /^[A-Za-z0-9]{4,12}$/.test(state.id) &&
        /^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,20}$/.test(state.password)
      ) {
        state.isValidForm = true;
      } else {
        state.isValidForm = false;
      }
    },
    setUserType(state, action) {
      //유저 정보에 맞는 타입 설정
      state.userType = action.payload;
    },

    loginSuccess: (state) => {
      //로그인 성공 시 로그인 상태 변경
      state.isLoggedIn = true;
    },
    logout: (state) => {
      //로그아웃 시 로그인 상태 변경
      state.isLoggedIn = false;
    },
  },
});

export const {
  loginSuccess,
  logout,
  setUserType,
  setId,
  setPassword,
  setIsValidForm,
} = loginSlice.actions;
export default loginSlice.reducer;
