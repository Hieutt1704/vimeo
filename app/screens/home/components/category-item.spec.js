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
        image:
          "https://i.vimeocdn.com/grab?s=https%3A%2F%2Ff.vimeocdn.com%2Fimages_v6%2Fcategories%2Firis_icon_sports_64.png%3F11f6d29ab6a020eb65c580a92c1a836c25cf81c4%3Fv%3D2&r=pad&w=20&h=20&f=png",
      }}
    />,
  )
  expect(screen.toJSON()).toMatchSnapshot()
})
