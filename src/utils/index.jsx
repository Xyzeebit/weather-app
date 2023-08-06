import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "../redux/weatherSlice";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import PropTypes from 'prop-types';

export function renderWithProviders(
    ui,
    {
        preloadedState = {},
        // Automatically create a store instance if no store was passed in
        store = configureStore({
            reducer: { weather: weatherSlice },
            preloadedState,
        }),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }

    Wrapper.propTypes = {
        children: PropTypes.node
    }

    // return an object with the store
    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}