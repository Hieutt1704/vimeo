// we always make sure 'react-native' gets included first
import "react-native"

// libraries to mock
import "./mock-react-native-image"
import "./mock-async-storage"
import "./mock-i18n"
import "./mock-reactotron"
import "./mock-react-native-safe-area-context"

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper")

jest.useFakeTimers()
declare global {
  let __TEST__
}
