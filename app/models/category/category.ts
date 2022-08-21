import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

export const CategoryModel = types.model("Category").props({
  key: types.string,
  id: types.string,
  name: types.string,
  lastUpdate: types.string,
  image: types.string,
})

export interface Category extends Instance<typeof CategoryModel> {}
export interface CategorySnapshotOut extends SnapshotOut<typeof CategoryModel> {}
export interface CategorySnapshotIn extends SnapshotIn<typeof CategoryModel> {}
export const createCategoryDefaultModel = () => types.optional(CategoryModel, {})
