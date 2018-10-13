import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';

import startMainTabs from '../startMainTabs';

class AuthScreen extends PureComponent {
    loigIn = () => {
        startMainTabs();
    }

    render() {
        return (
            <View>
                <Text>Auth Screen</Text>
                <Button title='Login' onPress={this.loigIn}/>
            </View>
        );
    }
}

export default AuthScreen;
