import Main from "../components/Main";
import ScanningPage from "../components/ScanningPage";
import ScannedListItemsPage from "../components/ScannedListItemsPage";
import LogInPage from "../components/LogInPage";

const Routes = {
  Main: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({ title: `Main` })
  },
  ScanningPage: {
    screen: ScanningPage,
    navigationOptions: ({ navigation }) => ({ title: 'Scanning Page'})
  },
  ScannedListItemsPage: {
    screen: ScannedListItemsPage,
    navigationOptions: ({ navigation }) => ({ title: 'Scanned List Items'})
  },
  LogInPage: {
    screen: LogInPage,
    navigationOptions: ({ navigation }) => ({ title: 'Log In'})
  },
};

export default Routes;