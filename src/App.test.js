import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the navigation bar", () => {
  render(<App />);
  const navElement = screen.getByRole("navigation");
  expect(navElement).toBeInTheDocument();
});

test("renders the footer", () => {
  render(<App />);
  const footerText = screen.getByText(/All rights reserved/i);
  expect(footerText).toBeInTheDocument();
});
