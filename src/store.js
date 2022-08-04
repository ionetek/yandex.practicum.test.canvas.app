import { configureStore } from '@reduxjs/toolkit'
import tableReducer from "./pages/TableSlice";

export const store = configureStore({
    reducer: {
        table: tableReducer,
    },
})