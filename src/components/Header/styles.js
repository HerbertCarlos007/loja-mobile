import { StyleSheet, StatusBar } from "react-native";


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#800fff',
        paddingTop: statusBarHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },

    content: {

    }

})