import { describe, it, expect } from "vitest";
import SearchBox from "../components/SearchBox";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "../utils";

describe('SearchBox', () => {
    it("should render search box correctly", () => {
        renderWithProviders(<SearchBox />);

        const box = screen.getByRole('textbox');
        expect(box).toBeInTheDocument();
    });

    it("should submit form", () => {
        
    })
});