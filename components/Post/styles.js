import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'black',
        // width: width,
        // height: height
        marginHorizontal: 20
    },
    image: {
        width: width - 40,
        // height: height,
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10
    },
    details: {
        marginVertical: 10,
        color: 'grey'
    },
    description: {
        fontSize: 15,
        lineHeight: 30,
        // fontWeight: 'bold',
        fontFamily: 'Montserrat_400Regular'
    },
    prices: {
        marginVertical: 10,
        color: 'black',
        fontWeight: 'bold'
    },
    total: {
        color: 'grey',
        textDecorationLine: 'underline',
        marginBottom: 15
    }
})

export default styles;