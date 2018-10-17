import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const prepareIcons = async () => {
    const icons = await Promise.all([
      Icon.getImageSource('md-map', 30),
      Icon.getImageSource('ios-share-alt', 30),
      Icon.getImageSource('ios-menu', 30),
    ]);
    const [map, share, menu] = icons;
    return {map, share, menu};
};

const startMainTabs = async () => {
    const icons = await prepareIcons();

    Navigation.startTabBasedApp({
        tabs: [
            {
                label: 'Find Place', // tab label as appears under the icon in iOS (optional)
                screen: 'FindPlaceScreen', // unique ID registered with Navigation.registerScreen
                title: 'Find Place', // title of the screen as appears in the nav bar (optional)
                icon: icons.map,
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: icons.menu,
                            title: 'Menu',
                            id: 'SideDrawerToggle',
                        }
                    ]
                },
            },
            {
                label: 'Share Place', // tab label as appears under the icon in iOS (optional)
                screen: 'SharePlaceScreen', // unique ID registered with Navigation.registerScreen
                title: 'Share Place', // title of the screen as appears in the nav bar (optional)
                icon: icons.share,
                navigatorButtons: {
                    leftButtons: [
                        {
                            icon: icons.menu,
                            title: 'Menu',
                            id: 'SideDrawerToggle',
                        }
                    ]
                },
            }
        ],
        drawer: {
            left: {
                screen: 'SideDrawerScreen',
            }
        }
    });
};

export default startMainTabs;
