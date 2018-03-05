import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
    card: {
        flex: 1
    },
    viewCardTitle: {
        flex: 1,
        // backgroundColor: 'rgba(255,255,255,.6)',
        padding: 5,
        paddingLeft: 10,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    cardTitleText: {
        color: '#2c3e50'
    },
    viewCardContent: {
        flex: 2,
        backgroundColor: 'rgba(255,255,255,.4)',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flexDirection: 'row'
    },
    cardContentText: {
        color: '#34495e'
    },
    cardIcon: {
        flex: 1
    },
    depositValue: {
        textAlign: 'right',
        fontSize: 15
    },
    withDrawValue: {
        textAlign: 'right',
        fontSize: 15,
        color: '#2d98da'
    },
    cardSubTitle: {
        color: '#8e8e8e'
    },
    cardWithDrawDeposit: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 5
    },
    viewCardWithDrawDeposit: {
        flex: 2,
        backgroundColor: 'rgba(255,255,255,.4)',
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 15,
        flexDirection: 'row'
    },
    panel: {
        flex: 1,
        padding: 5,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    cardContent: {
        flex: 1,
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    }
});