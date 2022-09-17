import React from "react"
import { Screen } from "./screen"
import { render, screen } from "@testing-library/react-native"

test("renders fixed", () => {
  render(<Screen preset="fixed" />)
  expect(screen.toJSON()).toMatchSnapshot()
})

test("renders scroll", () => {
  render(<Screen preset="scroll" />)
  expect(screen.toJSON()).toMatchSnapshot()
})

test("renders auto", () => {
  render(<Screen preset="auto" />)
  expect(screen.toJSON()).toMatchSnapshot()
})
