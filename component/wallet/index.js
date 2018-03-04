import React, { Component } from 'react';
import {
    View, TextInput, Text, ScrollView, Image, Button, Animated, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, Vibration,
    TouchableHighlight, Dimensions, ImageBackground,
    StyleSheet
} from 'react-native';

import { Constants } from 'expo';

import logo from '../../assets/wbLogo.png';
import blurBg from '../../assets/blurBg.png';
// import bg from './assets/bg.png';
import { Ionicons, Feather } from '@expo/vector-icons';

class Wallet extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={{ flex: 1, width: null, height: null }}
                    source={blurBg}
                >
                    <View style={{ flex: 1.5, }}>
                        <View style={styles.statusBar}>
                        </View>
                        <View style={styles.header}>
                            <View style={styles.viewIcon}>
                                <Feather
                                    name="chevron-left"
                                    size={30}
                                    color="white"
                                />
                            </View>
                            <View style={styles.viewSmallTitle}>
                                <Text style={styles.smallTitle}>ទំព័រដើម</Text>
                            </View>
                        </View>
                        <View style={styles.viewLargeTitle}>
                            <Text style={styles.largeTitle}>គណនី</Text>
                        </View>
                        <View style={styles.viewBalance}>
                            <Text style={styles.balanceTitle}>សមតុល្យ</Text>
                            <Text style={styles.balance}>100,000.00 ៛</Text>
                        </View>
                    </View>
                    <View style={styles.viewContent}>
                        <ScrollView>
                            <View style={styles.card}>
                                <View style={styles.viewCardTitle}>
                                    <Text>បង្កក់ទុក</Text>
                                </View>
                                <View style={styles.viewCardContent}>
                                    <View style={{ flex: 0.5,justifyContent: 'center' }}>
                                        <Feather name="lock" color="red" size={15} />
                                    </View>
                                    <View style={{ flex: 4 }}>
                                        <Text>បង្កក់រួច</Text>
                                        <Text>17 មករា 2018 09:00 ព្រឹក</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>

                    </View>
                </ImageBackground>
            </View>
        );
    }
};
export default Wallet;

const styles = StyleSheet.create({
    statusBar: {
        height: Constants.statusBarHeight,
    },
    header: {
        height: 56,
        marginLeft: 5,
        flexDirection: 'row'
    },
    viewIcon: {
        height: 56,
        width: 30,
        justifyContent: 'center'
    },
    viewSmallTitle: {
        flex: 1,
        justifyContent: 'center',
    },
    smallTitle: {
        color: 'white',
        fontSize: 18
    },
    viewLargeTitle: {
        flex: 1,
        height: 56,
        marginLeft: 12,
    },
    largeTitle: {
        color: 'white',
        fontSize: 25,
        flex: 1,
    },
    viewBalance: {
        flex: 2,
        backgroundColor: 'rgba(255,255,255,.3)',
        margin: 12,
        marginBottom: 25,
        marginTop: 25,
        borderRadius: 30,
        padding: 20,
        justifyContent: 'center'
    },
    balanceTitle: {
        color: 'white',
        fontSize: 18
    },
    balance: {
        color: 'white',
        fontSize: 30
    },
    viewContent: {
        flex: 2,
        backgroundColor: '#C4E7F5'
    },
    card: {
        flex: 1,
        margin: 12,
        borderRadius: 30
    },
    viewCardTitle: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,.8)',
        padding: 5,
        paddingLeft: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    viewCardContent: {
        flex: 2,
        backgroundColor: 'rgba(255,255,255,.5)',
        padding: 5,
        paddingLeft: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row'
    },
    cardIcon: {
        flex: 1
    }

});