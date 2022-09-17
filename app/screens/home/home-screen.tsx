import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { FlatList, View } from "react-native"
import { AutoImage, Header, Screen, Text } from "../../components"
import { NavigatorParamList } from "../../navigators"
import homeScreenStyles from "./home-screen.styles"
// import { useNavigation } from "@react-navigation/native"
import { useGetCategories } from "./useGetCategories"

const BACKGROUND_IMAGE =
  "https://i.vimeocdn.com/video/1486234694-2789256b3e16a01f78abaebcc3eeb1ef872b63bc8bfda834c8c4cc6b11fb578b-d"

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  function HomeScreen() {
    const { categories } = useGetCategories()

    // const navigation = useNavigation()

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
          keyExtractor={(item) => item.key}
          contentContainerStyle={homeScreenStyles.flatList}
          renderItem={({ item }) => (
            <View testID="item" style={homeScreenStyles.categoryContainer}>
              <AutoImage
                source={{ uri: BACKGROUND_IMAGE }}
                style={homeScreenStyles.categoryBackground}
              />
              <View style={homeScreenStyles.categoryIcon}>
                <AutoImage source={{ uri: item.image }} style={homeScreenStyles.categoryIcon} />
                <Text style={homeScreenStyles.categoryName}>{item.name}</Text>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={homeScreenStyles.categorySeparator} />}
        />
      </Screen>
    )
  },
)
