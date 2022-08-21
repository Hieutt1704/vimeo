import { CategoryModel } from "./category"

test("can be created", () => {
  const instance = CategoryModel.create({
    key: "abcdef",
    id: "favourite",
    name: "favourite",
    lastUpdate: "022-08-20T18:51:49+00:00",
    image: "",
  })

  expect(instance).toBeTruthy()
})
