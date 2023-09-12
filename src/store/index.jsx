import { configureStore } from "@reduxjs/toolkit";
import special from "./specialSlice";
import categories from "./categoriesSlice";
import products from "./productsSlice";
import authSlice from "./authSlice";
// import { signInWithGoogle, signOut } from "./authSlice";

const store = configureStore({
    reducer: {
        special: special.reducer,
        categories: categories.reducer,
        products: products.reducer,
        authSlice: authSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
})

export default  store