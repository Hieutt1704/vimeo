import { render, screen } from "@testing-library/react-native"
import React from "react"
import { CategoryItem } from "./category-item"

test("match snapshot", () => {
  render(
    <CategoryItem
      category={{
        key: "abcdef",
        id: "favourite",
        name: "favourite",
        lastUpdate: "022-08-20T18:51:49+00:00",
        image: "",
      }}
    />,
  )
  expect(screen.toJSON()).toMatchSnapshot()
})
