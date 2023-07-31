import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    error: null,
    data: null,
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        updateWeather: (state, { type, payload }) => {
            if (type === "weather/updateWeather" && payload.ok) {
                state.data = payload.weather;
                state.loading = false;
                state.error = null;
            } else {
                state.data = null;
                state.error = payload.error;
                state.loading = false;
            }
        },
    }
});

export const { updateWeather } = weatherSlice.actions;

export default weatherSlice.reducer