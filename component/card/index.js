import React, { Component } from 'react';
import {
    View, TextInput, Text, ScrollView, Image, Button, Animated, TouchableOpacity, Keyboard, KeyboardAvoidingView, Platform, Vibration,
    TouchableHighlight, Dimensions, ImageBackground,
    StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

import { Constants } from 'expo';

// style
import styles from './styles.js';

import logo from '../../assets/wbLogo.png';
import blurBg from '../../assets/blurBg.png';
// import bg from './assets/bg.png';
import { Ionicons, Feather } from '@expo/vector-icons';

// Card
export class Card extends Component {
    render() {
        const { round, titleBg, margin, marginTopBottom, marginLeftRight } = this.props;
        let margTopBottom = margin || marginTopBottom || 0;
        let margLeftRight = margin || marginLeftRight || 12;
        return (
            <View style={[styles.card, {
                marginLeft: margLeftRight,
                marginRight: margLeftRight,
                marginTop: margTopBottom,
                marginBottom: margTopBottom
            }]}>
                <View style={{
                    flex: 1,
                    backgroundColor: titleBg,
                    borderRadius: round,
                }}>
                    {this.props.children}
                </View>
            </View>
        );
    }
};

Card.propTypes = {
    round: PropTypes.number,
    titleBg: PropTypes.string
}

// CardTitle
export class CardTitle extends Component {
    render() {
        const { title, color, round, background } = this.props;
        let titleColor = color || "#000";
        let bg = background || "#fff";
        return (
            <View style={{
                flex: 1,
                backgroundColor: bg,
                padding: 5,
                paddingLeft: 10,
                borderTopLeftRadius: round,
                borderTopRightRadius: round
            }}>
                <Text style={{ color: titleColor }}>{title}</Text>
            </View>
        )
    }
};

Card.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    round: PropTypes.number
}

// CardBody
export class CardBody extends Component {
    render() {
        return (
            <View style={styles.cardContent}>
                {this.props.children}
            </View>
        )
    }
}

// CardIcon
export class CardIcon extends Component {
    render() {
        const { name, color, size } = this.props;
        let iconColor = color || '#000';
        let iconSize = size || 20;
        return (
            <View style={{ flex: 0.3, justifyContent: 'center' }}>
                <Ionicons name={name} color={iconColor} size={iconSize} />
            </View>
        )
    }
}

CardIcon.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number
}

// CardContent
export class CardContent extends Component {
    render() {
        const {
            title, titleColor,
            subTitle, subTitleColor,
            value, valueColor
        } = this.props;
        let subColor = subTitleColor || "#8e8e8e";
        let valColor = valueColor || "#000";
        return (
            <View style={{ flex: 3, flexDirection: 'row' }}>
                <View style={{ flex: 2 }}>
                    <Text style={{ color: titleColor }}>{title}</Text>
                    <Text style={{ color: subColor }}>{subTitle}</Text>
                </View>
                <View style={{ flex: 1.3, justifyContent: 'center' }}>
                    <Text style={[styles.depositValue, { color: valColor }]}>{value}</Text>
                </View>
            </View>
        )
    }
}

CardContent.propTypes = {
    title: PropTypes.string,
    titleColor: PropTypes.string,
    subTitle: PropTypes.string,
    subTitleColor: PropTypes.string,
    value: PropTypes.string,
    valueColor: PropTypes.string
}

// Panel
export class Panel extends Component {
    render() {
        const { background, color, title, round, margin, marginTopBottom, marginLeftRight } = this.props;
        let bg = background || "#fff";
        let titleColor = color || "#000"
        let radius = round || 10;
        let margTopBottom = margin || marginTopBottom || 0;
        let margLeftRight = margin || marginLeftRight || 12;
        return (
            <View style={[styles.panel,
            {
                backgroundColor: bg,
                borderRadius: radius,
                marginLeft: margLeftRight,
                marginRight: margLeftRight,
                marginTop: margTopBottom,
                marginBottom: margTopBottom
            }]}>
                <Text style={{ color: titleColor }}>{title}</Text>
            </View>
        )
    }
}