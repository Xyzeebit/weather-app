import { describe, expect, it } from "vitest";
import App from '../App';
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../utils";

describe('App', () => {
    it('Should render the App component', async () => {
        renderWithProviders(<App />);
        waitFor(() => {
            const text = screen.getByText(/qweather/i);
            expect(text).toBeInTheDocument();
        });
    });
});