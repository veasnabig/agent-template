import { StyleSheet, Dimensions } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
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
        borderRadius: 25,
        padding: 20,
        justifyContent: 'center',
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
        backgroundColor: '#cae7fc'
    },
    card: {
        flex: 1,
        margin: 12
    },
    viewCardTitle: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,.6)',
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
        fontSize: 15,
        color: '#20bf6b'
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
    cardDateTime: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
        borderRadius: 10,
        backgroundColor: 'rgba(41,128,185,.5)',
        padding: 5,
        paddingLeft: 10,
        justifyContent: 'center'
    },
    card: {
        flex: 1,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 5
    }
});