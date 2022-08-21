import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { CategoryModel, CategorySnapshotOut } from "../category/category"
import { withEnvironment } from "../extensions/with-environment"

export const CategoryStoreModel = types
  .model("CategoryStore")
  .props({
    categories: types.optional(types.array(CategoryModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    saveCategories: (categorySnapshots: CategorySnapshotOut[]) => {
      self.categories.replace(categorySnapshots)
    },
  }))

export interface CategoryStore extends Instance<typeof CategoryStoreModel> {}
export interface CategoryStoreSnapshotOut extends SnapshotOut<typeof CategoryStoreModel> {}
export interface CategoryStoreSnapshotIn extends SnapshotIn<typeof CategoryStoreModel> {}
export const createCategoryStoreDefaultModel = () => types.optional(CategoryStoreModel, {})
