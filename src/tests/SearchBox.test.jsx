import { describe, it, expect } from "vitest";
import SearchBox from "../components/SearchBox";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../utils";

describe('SearchBox', () => {
    it("should render search box correctly", () => {
        renderWithProviders(<SearchBox />);

        const textbox = screen.getByRole('textbox');
        expect(textbox).toBeInTheDocument();
    });

    it("should have input value", () => {
        renderWithProviders(<SearchBox />);

        fireEvent.change(screen.getByPlaceholderText(/Enter city name for weather report/i), {
            target: { value: 'Lagos'}
        });
    });

    it("should submit form", () => {
        renderWithProviders(<SearchBox />);

        fireEvent(screen.getByTestId('search-form', 'Submit'),
            new KeyboardEvent('keyup', { code: '13' })
        );

    });
});