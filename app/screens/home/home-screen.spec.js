import React from "react"
import { render, screen } from "@testing-library/react-native"
import { HomeScreen } from "./home-screen"

/**
 * Test View
 */
test("render correctly", () => {
  const { getByTestId } = render(<HomeScreen />)
  expect(getByTestId("screen")).toBeTruthy()
  expect(getByTestId("header")).toBeTruthy()
  expect(getByTestId("list")).toBeTruthy()
//   expect(getByTestId("item")).toBeTruthy()
})

test("match snapshot", () => {
  render(<HomeScreen />)
  expect(screen.toJSON()).toMatchSnapshot()
})
