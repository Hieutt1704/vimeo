import React from "react"
import { render, screen } from "@testing-library/react-native"
import App from "./app"
/**
 * Test View
 */
test("match snapshot", () => {
  render(<App />)
  expect(screen.toJSON()).toMatchSnapshot()
})
