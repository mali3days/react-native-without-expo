import React, { PureComponent } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

import startMainTabs from '../startMainTabs';

class AuthScreen extends PureComponent {
    loigIn = () => {
        startMainTabs();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Please Log In</Text>
                <Button title="Switch to Login" onPress={this.loigIn}/>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input}  placeholder="Password" />
                    <TextInput style={styles.input}  placeholder="Confirm Password" />
                </View>
                <Button title='Submit' onPress={this.loigIn}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        width: '100%',
    }
});

export default AuthScreen;
