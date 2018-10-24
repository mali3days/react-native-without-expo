import React, { PureComponent } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import startMainTabs from '../startMainTabs';
import Input from '../../components/UI/@Input/Input';
import HeadingText from '../../components/UI/@HeadingText/HeadingText';
import MainText from '../../components/UI/@MainText/MainText';
import ButtonWithBackground from '../../components/UI/@ButtonWithBackground/ButtonWithBackground';

import backgroundImage from '../../images/backgroundImage.png';

class AuthScreen extends PureComponent {
    loigIn = () => {
        startMainTabs();
    }

    render() {
        return (
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
                <View style={styles.container}>
                    <MainText><HeadingText style={styles.textHeading}>Please Log In</HeadingText></MainText>
                    <ButtonWithBackground color="#29aaf4" onPress={() => alert('dsa')}>Switch to Login</ButtonWithBackground>
                    <View style={styles.inputContainer}>
                        <Input placeholder="Email" style={styles.input} />
                        <Input placeholder="Password" style={styles.input} />
                        <Input placeholder="Confirm Password" style={styles.input} />
                    </View>
                    <ButtonWithBackground color="#29aaf4" onPress={this.loigIn}>Submit</ButtonWithBackground>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
    },
    textHeading: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: '#eee',
        borderColor: '#bbb',
    },
});

export default AuthScreen;
