import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { FlatList, View } from "react-native"
import { Header, Screen } from "../../components"
import { Category } from "../../models"
import { NavigatorParamList } from "../../navigators"
import { CategoryItem } from "./components"
import homeScreenStyles from "./home-screen.styles"
// import { useNavigation } from "@react-navigation/native"
import { useGetCategories } from "./useGetCategories"

const keyExtractor = (item: Category) => item.key

const itemSeparatorComponent = () => <View style={homeScreenStyles.categorySeparator} />

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  function HomeScreen() {
    const { categories } = useGetCategories()

    // const navigation = useNavigation()

    const renderItem = ({ item }) => {
      return <CategoryItem testID="item" category={item} />
    }

    return (
      <Screen testID="screen" style={homeScreenStyles.container} preset="fixed">
        <Header
          testID="header"
          headerTx="home.title"
          style={homeScreenStyles.header}
          titleStyle={homeScreenStyles.titleHeader}
        />
        <FlatList
          testID="list"
          data={categories}
          numColumns={2}
          keyExtractor={keyExtractor}
          contentContainerStyle={homeScreenStyles.flatList}
          renderItem={renderItem}
          ItemSeparatorComponent={itemSeparatorComponent}
        />
      </Screen>
    )
  },
)
