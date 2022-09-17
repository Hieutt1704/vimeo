import { render, screen } from "@testing-library/react-native"
import React from "react"
import { CategoryList } from "./category-list"

test("category-list no data", () => {
  render(<CategoryList categories={[]} />)
  expect(screen.toJSON()).toMatchSnapshot()
})

test("category-list have data", () => {
  render(
    <CategoryList
      categories={[
        {
          key: "abcdef",
          id: "favourite",
          name: "favourite",
          lastUpdate: "022-08-20T18:51:49+00:00",
          image: "",
        },
        {
          key: "abcdefasdasd",
          id: "favourite",
          name: "favourite",
          lastUpdate: "022-08-20T18:51:49+00:00",
          image: "",
        },
      ]}
    />,
  )
  expect(screen.toJSON()).toMatchSnapshot()
})
