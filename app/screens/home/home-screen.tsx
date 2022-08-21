import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { FlatList, ImageStyle, TextStyle, View, ViewStyle, Dimensions } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { NavigatorParamList } from "../../navigators"
import { AutoImage, Header, Screen, Text } from "../../components"
import { color, spacing } from "../../theme"
// import { useNavigation } from "@react-navigation/native"
import { useGetCategories } from "./useGetCategories"

const BACKGROUND_IMAGE =
  "https://i.vimeocdn.com/video/1486234694-2789256b3e16a01f78abaebcc3eeb1ef872b63bc8bfda834c8c4cc6b11fb578b-d"

const WIDTH_DEVICE = Dimensions.get("window").width

const WIDTH_CATEGORY = (WIDTH_DEVICE - spacing[2] * 3) / 2

const ROOT: ViewStyle = {
  flex: 1,
  backgroundColor: color.background,
}

const HEADER: TextStyle = {
  paddingTop: spacing[3],
  borderBottomWidth: 1,
  borderColor: color.palette.lighterGrey,
}
const HEADER_TITLE: TextStyle = {
  fontSize: 18,
  fontWeight: "bold",
  textAlign: "center",
  color: color.palette.black,
}

const FLAT_LIST: ViewStyle = {
  paddingVertical: spacing[2],
}

const CATEGORY_BACKGROUND: ImageStyle = {
  width: WIDTH_CATEGORY,
  height: WIDTH_CATEGORY,
}

const CATEGORY_CONTAINER: ViewStyle = {
  marginLeft: spacing[2],
}

const CATEGORY_INFO: ViewStyle = {
  ...CATEGORY_BACKGROUND,
  position: "absolute",
  backgroundColor: color.palette.blackTransparent,
  justifyContent: "center",
  alignItems: "center",
}

const CATEGORY_ICON: ImageStyle = {
  width: 24,
  height: 24,
  tintColor: color.palette.white,
}

const CATEGORY_NAME: TextStyle = {
  color: color.palette.white,
  fontSize: 14,
  fontWeight: "bold",
  marginTop: spacing[2],
}

const CATEGORY_SEPARATOR: ViewStyle = {
  height: spacing[2],
}

export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  function HomeScreen() {
    const { categories } = useGetCategories()

    // const navigation = useNavigation()

    return (
      <Screen style={ROOT} preset="fixed">
        <Header testID="header" headerTx="home.title" style={HEADER} titleStyle={HEADER_TITLE} />
        <FlatList
          testID="list"
          data={categories}
          numColumns={2}
          keyExtractor={(item) => item.key}
          contentContainerStyle={FLAT_LIST}
          renderItem={({ item }) => (
            <View testID="item" style={CATEGORY_CONTAINER}>
              <AutoImage source={{ uri: BACKGROUND_IMAGE }} style={CATEGORY_BACKGROUND} />
              <View style={CATEGORY_INFO}>
                <AutoImage source={{ uri: item.image }} style={CATEGORY_ICON} />
                <Text style={CATEGORY_NAME}>{item.name}</Text>
              </View>
            </View>
          )}
          ItemSeparatorComponent={() => <View style={CATEGORY_SEPARATOR} />}
        />
      </Screen>
    )
  },
)
