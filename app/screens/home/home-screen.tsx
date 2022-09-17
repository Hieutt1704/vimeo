import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Header, Screen } from "../../components"
import { NavigatorParamList } from "../../navigators"
import { CategoryList } from "./components"
import homeScreenStyles from "./home-screen.styles"
// import { useNavigation } from "@react-navigation/native"
import { useGetCategories } from "./useGetCategories"

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
        <CategoryList testID="list" categories={categories} />
      </Screen>
    )
  },
)
