import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    textInput: {
        fontSize: 20,
        marginBottom: 20
    },
    row: {
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: 'center',
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBlockColor: 'rgba(202, 202, 202, 0.4)'
    },
    iconContainer: {
        height: 50,
        width: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: 'rgba(202, 202, 202, 0.4)',
        borderColor: 'rgba(140, 138, 138, 0.2)',
        borderWidth: 0.5
    },
    locationText: {
        marginLeft: 20,
    }
})

export default styles;