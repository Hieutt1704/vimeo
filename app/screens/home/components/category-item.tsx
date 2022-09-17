import React from "react"
import { View } from "react-native"
import { AutoImage, Text } from "../../../components"
import { Category } from "../../../models"
import homeScreenStyles from "../home-screen.styles"

const BACKGROUND_IMAGE =
  "https://i.vimeocdn.com/video/1486234694-2789256b3e16a01f78abaebcc3eeb1ef872b63bc8bfda834c8c4cc6b11fb578b-d"

interface CategoryItemProps {
  testID?: string
  category: Category
}

export const CategoryItem = ({ category, testID }: CategoryItemProps) => {
  return (
    <View testID={testID} style={homeScreenStyles.categoryContainer}>
      <AutoImage source={{ uri: BACKGROUND_IMAGE }} style={homeScreenStyles.categoryBackground} />
      <View style={homeScreenStyles.categoryInfo}>
        <AutoImage source={{ uri: category.image }} style={homeScreenStyles.categoryIcon} />
        <Text style={homeScreenStyles.categoryName}>{category.name}</Text>
      </View>
    </View>
  )
}
