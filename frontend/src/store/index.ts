import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

//서로 다른 리듀싱 함수들을 값으로 가지는 객체를 받아서 createStroe에 넘길 수 있는 하나의 리듀싱 함수로 변환
export const rootReducer = combineReducers({
  user: userReducer,
  // eg. post:pstReducer
});

const persistConfig = {
  key: "root", //key 이름
  storage, // localStorege에 저장
  //whitelist: [], //여러 reducer 중에 해당 reducer만 localstorage에 저장.
  //blacklist: [], //blacklist -> 그것만 제외
};

//rootReducer + persistConfig
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
