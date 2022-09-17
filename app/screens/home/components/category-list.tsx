import React from "react"
import { FlatList, View } from "react-native"
import { Category } from "../../../models"
import homeScreenStyles from "../home-screen.styles"
import { CategoryItem } from "./category-item"

const keyExtractor = (item: Category) => item.key

const itemSeparatorComponent = () => <View style={homeScreenStyles.categorySeparator} />

interface CategoryListProps {
  testID?: string
  categories: Category[]
}

export const CategoryList = ({ categories, testID }: CategoryListProps) => {
  const renderItem = ({ item }) => {
    return <CategoryItem category={item} />
  }

  return (
    <FlatList
      testID={testID}
      data={categories}
      numColumns={2}
      keyExtractor={keyExtractor}
      contentContainerStyle={homeScreenStyles.flatList}
      renderItem={renderItem}
      ItemSeparatorComponent={itemSeparatorComponent}
    />
  )
}
