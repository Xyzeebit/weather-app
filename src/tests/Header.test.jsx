import { describe, expect, it } from 'vitest';
import Header from '../components/Header';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../utils';

describe("Header", () => {
    it("renders the Header component correctly", async () => {
        renderWithProviders(<Header />);

        await waitFor(() => {
            const textBox = screen.getByRole("textbox");
            expect(textBox).toBeInTheDocument();
        });
    });
});