import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    image: {
        width: width,
        height: height,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 100,
        color: 'white',
        fontWeight: 'bold',
        width: '70%',
        marginLeft: 25
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
        marginHorizontal: 10,
        borderRadius: 30
    },
    buttonSearchText: {
        marginLeft: 15,
        fontSize: 16,
        fontWeight: 'bold'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: 200,
        height: 40,
        marginLeft: 25,
        borderRadius: 10,
        marginBottom: 50
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default styles;