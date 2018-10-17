import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

/* Screens */
import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';

import configureStore from './src/store/config';

const store = configureStore();

// Register Screens
Navigation.registerComponent('AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('SharePlaceScreen', () => SharePlaceScreen, store, Provider);
Navigation.registerComponent('FindPlaceScreen', () => FindPlaceScreen, store, Provider);
Navigation.registerComponent('PlaceDetailsScreen', () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent('SideDrawerScreen', () => SideDrawerScreen, store, Provider);

// Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: 'AuthScreen', // unique ID registered with Navigation.registerScreen
    title: 'Login', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});
