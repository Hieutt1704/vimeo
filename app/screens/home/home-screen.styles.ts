import { Dimensions, StyleSheet } from "react-native"
import { color, spacing } from "../../theme"

const WIDTH_DEVICE = Dimensions.get("window").width

const WIDTH_CATEGORY = (WIDTH_DEVICE - spacing[2] * 3) / 2

export default StyleSheet.create({
  categoryBackground: {
    height: WIDTH_CATEGORY,
    width: WIDTH_CATEGORY,
  },
  categoryContainer: {
    marginLeft: spacing[2],
  },
  categoryIcon: {
    height: 24,
    tintColor: color.palette.white,
    width: 24,
  },
  categoryInfo: {
    alignItems: "center",
    backgroundColor: color.palette.blackTransparent,
    height: WIDTH_CATEGORY,
    justifyContent: "center",
    position: "absolute",
    width: WIDTH_CATEGORY,
  },
  categoryName: {
    color: color.palette.white,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: spacing[2],
  },
  categorySeparator: {
    height: spacing[2],
  },
  container: {
    backgroundColor: color.background,
    flex: 1,
  },
  flatList: {
    paddingVertical: spacing[2],
  },
  header: {
    borderBottomWidth: 1,
    borderColor: color.palette.lighterGrey,
    paddingTop: spacing[3],
  },
  titleHeader: {
    color: color.palette.black,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
})
