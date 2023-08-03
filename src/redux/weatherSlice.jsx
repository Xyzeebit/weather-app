import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    error: null,
    data: null,
    searching: false,
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        updateWeather: (state, { payload }) => {
            if (payload.ok) {
                state.data = payload.weather;
                state.loading = false;
                state.error = null;
                state.searching = false;
            } else {
                state.data = null;
                state.error = payload.error;
                state.loading = false;
                state.searching = false;
            }
        },
        updateSearch: (state, { payload }) => {
            state.searching = payload.searching;
        }
    }
});

export const { updateWeather, updateSearch } = weatherSlice.actions;

export default weatherSlice.reducer