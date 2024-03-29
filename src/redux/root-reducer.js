import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";
import directoryReducer from "./directory/directory.reducer";
import { authReducer } from "./auth/auth.reducer";

import { persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'auth']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
    auth: authReducer
})

export default persistReducer(persistConfig, rootReducer)