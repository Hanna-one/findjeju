import { configureStore } from '@reduxjs/toolkit'
import  { area, list } from './reducer/areaReducer.js';
import { login } from './reducer/loginReducer.js';

export default configureStore({
  // configureStore는 내부적으로 combineReducers를 호출합니다. 

  reducer: {
    area: area.reducer,
    list: list.reducer,
    login: login.reducer
  }

});


