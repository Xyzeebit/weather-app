import { describe, expect, it, afterAll, afterEach, beforeAll } from "vitest";
import App from '../App';
import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../utils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import weather from '../data.json';

export const handlers = [
  rest.get(`/api/weather`, (req, res, ctx) => {
    return res(ctx.json(weather));
  }),
]

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('App', () => {
    it('Should render the App component', async () => {
        renderWithProviders(<App />);
        waitFor(() => {
            const text = screen.getByText(/qweather/i);
            expect(text).toBeInTheDocument();
        });
    });

    it("Should fetch the weather report and renders the component", async () => {
        renderWithProviders(<App />);
        expect(await screen.getByText(/lagos/i)).toBeInTheDocument();
    })
});