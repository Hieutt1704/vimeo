import { useEffect } from "react"
import { useStores } from "../../models"

export const useGetCategories = () => {
  const { categoryStore } = useStores()
  const { categories } = categoryStore || {}

  useEffect(() => {
    async function fetchData() {
      await categoryStore.getCategories()
    }
    fetchData()
  }, [])

  return {
    categories,
  }
}
