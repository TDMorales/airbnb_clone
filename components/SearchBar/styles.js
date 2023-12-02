import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
    },
    buttonSearch: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: width - 20,
        height: 60,
        borderRadius: 10,
        position: 'absolute',
        top: 50,
        zIndex: 1,
        marginTop: 40,
        marginHorizontal: 10,
        borderRadius: 30
    },
    buttonSearchText: {
        marginLeft: 15,
        fontSize: 16,
        fontWeight: 'bold'
    },
})

export default styles;