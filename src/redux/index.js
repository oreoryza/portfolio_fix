import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import doorReducer from "./slices/doorSlice";
import projectReducer from "./slices/projectSlice";
import {persistReducer, persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const encryptor = encryptTransform({
    secretKey: import.meta.env.VITE_SECRET_KEY,
    onError: function (error) {
      console.log(error);
    },
  });

const persistConfig = {
    key: 'root',
    storage,
    transforms: [encryptor],
    blacklist: ["projects"]
  };

const persistedDoor = persistReducer(persistConfig, doorReducer);
const persistedTheme = persistReducer(persistConfig, themeReducer);

const store = configureStore({
  reducer: {
    projects: projectReducer,
    door: persistedDoor,
    theme: persistedTheme
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export { store, persistor };