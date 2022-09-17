import { render, screen } from "@testing-library/react-native"
import React from "react"
import App from "./app"
/**
 * Test View
 */
test("render correctly", async () => {
  render(<App />)

  expect(screen.toJSON()).toMatchSnapshot()
})
