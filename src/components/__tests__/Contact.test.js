import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () => {
  test("Should load heading in Contact us component", () => {
    render(<Contact />);

    // Querying
    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact us component", () => {
    render(<Contact />);

    // Querying
    const button = screen.getByRole("button");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load textbox 'name' inside Contact us component", () => {
    render(<Contact />);

    // Querying
    const textbox = screen.getByPlaceholderText("Name");

    // Assertion
    expect(textbox).toBeInTheDocument();
  });

  test("Should load 2 textboxes inside Contact us component", () => {
    render(<Contact />);

    // Querying
    const textboxes = screen.getAllByRole("textbox");

    // Assertion
    expect(textboxes.length).toBe(2);
  });
});
