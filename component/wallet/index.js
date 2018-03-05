import React, { Component } from 'react';
import {
    View, TextInput, Text, ScrollView, Image, Button, Animated, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, Vibration,
    TouchableHighlight, Dimensions, ImageBackground,
    StyleSheet,
} from 'react-native';

import { Constants } from 'expo';

// style
import styles from './styles.js';

import logo from '../../assets/wbLogo.png';
import blurBg from '../../assets/blurBg.png';
import { Ionicons, Feather } from '@expo/vector-icons';

// component
import { Card, CardTitle, CardBody, CardIcon, CardContent, Panel } from '../card/index.js';

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
                            <TouchableOpacity>
                                <Card
                                    round={15}
                                    titleBg='rgba(255,255,255,.4)'
                                    margin={12}
                                >
                                    <CardTitle title="បង្កក់ទុក" color="#2c3e50" background="rgba(255,255,255,.6)" round={15} />
                                    <CardBody>
                                        <CardIcon name="md-cash" color="#20bf6b" />
                                        <CardContent
                                            title="បង្កក់រួច"
                                            titleColor="#34495e"
                                            subTitle="17 មករា 2018 09:00 ព្រឹក"
                                            subTitleColor="#34495e"
                                            value="+400,000.00 ៛"
                                            valueColor="#20bf6b"
                                        />
                                    </CardBody>
                                </Card>
                            </TouchableOpacity>

                            <Panel
                                title="ថ្ងៃពុធ​ ទី18 ខែមករា ឆ្នាំ2018"
                                background="rgba(41,128,185,.5)"
                                color="#fff"
                                marginTopBottom={3}
                            />

                            <TouchableOpacity>
                                <Card
                                    round={15}
                                    titleBg='rgba(255,255,255,.4)'
                                    marginTopBottom={4}
                                >
                                    <CardBody>
                                        <CardIcon name="md-cash" color="#20bf6b" />
                                        <CardContent
                                            title="បង្កក់រួច"
                                            titleColor="#34495e"
                                            subTitle="17 មករា 2018 09:00 ព្រឹក"
                                            subTitleColor="#34495e"
                                            value="+400,000.00 ៛"
                                            valueColor="#20bf6b"
                                        />
                                    </CardBody>
                                </Card>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <Card round={15} titleBg='rgba(255,255,255,.4)'>
                                    <CardBody>
                                        <CardIcon name="md-cash" color="#20bf6b" />
                                        <CardContent
                                            title="តម្កល់ប្រាក់រួច"
                                            titleColor="#34495e"
                                            subTitle="09:00 ព្រឹក"
                                            subTitleColor="#34495e"
                                            value="+400,000.00 ៛"
                                            valueColor="#20bf6b"
                                        />
                                    </CardBody>
                                </Card>

                                <View style={styles.cardWithDrawDeposit}>
                                    <View style={styles.viewCardWithDrawDeposit}>
                                        <View style={{ flex: 0.3, justifyContent: 'center' }}>
                                            <Ionicons name="md-cash" color="#20bf6b" size={20} />
                                        </View>
                                        <View style={{ flex: 2 }}>
                                            <Text style={styles.cardContentText}>តម្កល់ប្រាក់រួច</Text>
                                            <Text style={styles.cardSubTitle}>09:00 ព្រឹក</Text>
                                        </View>
                                        <View style={{ flex: 1.3, justifyContent: 'center' }}>
                                            <Text style={styles.depositValue}>+400,000.00 ៛</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.cardWithDrawDeposit}>
                                    <View style={styles.viewCardWithDrawDeposit}>
                                        <View style={{ flex: 0.3, justifyContent: 'center' }}>
                                            <Ionicons name="md-person" color="#2d98da" size={20} />
                                        </View>
                                        <View style={{ flex: 2 }}>
                                            <Text style={styles.cardContentText}>ឡាច សាមឿន</Text>
                                            <Text style={styles.cardSubTitle}>09:10 ព្រឹក</Text>
                                        </View>
                                        <View style={{ flex: 1.3, justifyContent: 'center' }}>
                                            <Text style={styles.withDrawValue}>-50,000.00 ៛</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.cardWithDrawDeposit}>
                                    <View style={styles.viewCardWithDrawDeposit}>
                                        <View style={{ flex: 0.3, justifyContent: 'center' }}>
                                            <Ionicons name="md-person" color="#2d98da" size={20} />
                                        </View>
                                        <View style={{ flex: 2 }}>
                                            <Text style={styles.cardContentText}>នូវ ខន្តី</Text>
                                            <Text style={styles.cardSubTitle}>09:15 ព្រឹក</Text>
                                        </View>
                                        <View style={{ flex: 1.3, justifyContent: 'center' }}>
                                            <Text style={styles.withDrawValue}>-30,000.00 ៛</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.cardWithDrawDeposit}>
                                    <View style={styles.viewCardWithDrawDeposit}>
                                        <View style={{ flex: 0.3, justifyContent: 'center' }}>
                                            <Ionicons name="md-person" color="#2d98da" size={20} />
                                        </View>
                                        <View style={{ flex: 2 }}>
                                            <Text style={styles.cardContentText}>ចាន់ តុលា</Text>
                                            <Text style={styles.cardSubTitle}>09:24 ព្រឹក</Text>
                                        </View>
                                        <View style={{ flex: 1.3, justifyContent: 'center' }}>
                                            <Text style={styles.withDrawValue}>-10,000.00 ៛</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.cardWithDrawDeposit}>
                                    <View style={styles.viewCardWithDrawDeposit}>
                                        <View style={{ flex: 0.3, justifyContent: 'center' }}>
                                            <Ionicons name="md-person" color="#2d98da" size={20} />
                                        </View>
                                        <View style={{ flex: 2 }}>
                                            <Text style={styles.cardContentText}>ប៉ូវ សំភី</Text>
                                            <Text style={styles.cardSubTitle}>09:36 ព្រឹក</Text>
                                        </View>
                                        <View style={{ flex: 1.3, justifyContent: 'center' }}>
                                            <Text style={styles.withDrawValue}>-20,000.00 ៛</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={styles.cardWithDrawDeposit}>
                                    <View style={styles.viewCardWithDrawDeposit}>
                                        <View style={{ flex: 0.3, justifyContent: 'center' }}>
                                            <Ionicons name="md-person" color="#2d98da" size={20} />
                                        </View>
                                        <View style={{ flex: 2 }}>
                                            <Text style={styles.cardContentText}>មាស ចាន់ណា</Text>
                                            <Text style={styles.cardSubTitle}>09:45 ព្រឹក</Text>
                                        </View>
                                        <View style={{ flex: 1.3, justifyContent: 'center' }}>
                                            <Text style={styles.withDrawValue}>-15,000.00 ៛</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity>
                                <View style={styles.cardWithDrawDeposit}>
                                    <View style={styles.viewCardWithDrawDeposit}>
                                        <View style={{ flex: 0.3, justifyContent: 'center' }}>
                                            <Ionicons name="md-person" color="#2d98da" size={20} />
                                        </View>
                                        <View style={{ flex: 2 }}>
                                            <Text style={styles.cardContentText}>កេត្រ ចន្ត្រា</Text>
                                            <Text style={styles.cardSubTitle}>09:58 ព្រឹក</Text>
                                        </View>
                                        <View style={{ flex: 1.3, justifyContent: 'center' }}>
                                            <Text style={styles.withDrawValue}>-35,000.00 ៛</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>

                    </View>
                </ImageBackground>
            </View >
        );
    }
};
export default Wallet;
