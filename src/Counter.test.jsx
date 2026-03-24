/** @format */
import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "./Counter";

test("increments count on button click", () => {
  render(<Counter />);
  const button = screen.getByText("Increment");
  fireEvent.click(button);
  expect(screen.getByText("Count: 1")).toBeInTheDocument();
});
