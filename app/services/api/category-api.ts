/* eslint-disable camelcase */
import { ApiResponse } from "apisauce"
import { Api } from "./api"
import { GetCategoriesResult } from "./api.types"
import { getGeneralApiProblem } from "./api-problem"
import { Category } from "../../models"

const transformCategory = (category: any) => {
  const { last_video_featured_time, name, icon, resource_key, uri } = category || {}
  const { sizes } = icon || {}
  const { link } = sizes?.[0] || {}
  const categoryTransformed: Category = {
    key: resource_key || "",
    id: uri?.replace?.("/categories/", "") || "",
    name: name || "",
    lastUpdate: last_video_featured_time || "",
    image: link || "http://",
  }
  return categoryTransformed
}

export class CategoryApi {
  private api: Api

  constructor(api: Api) {
    this.api = api
  }

  async getCategories(): Promise<GetCategoriesResult> {
    try {
      const response: ApiResponse<any> = await this.api.apisauce.get(`/categories`)

      if (!response.ok) {
        const problem = getGeneralApiProblem(response)
        if (problem) return problem
      }

      const { data } = response.data || {}

      console.log("getCategories", response)

      const categories = data?.map?.(transformCategory) || []

      return { kind: "ok", categories }
    } catch (e) {
      __DEV__ && console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
