import { renderHook } from "@testing-library/react-hooks"
import { useGetCategories } from "./useGetCategories"

/**
 * Test business logics
 */
test("get categories flow", () => {
  renderHook(() => useGetCategories())
})
