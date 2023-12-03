import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        height: '100%'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // height: 50,
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cacaca'
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    operatorButton: {
        width: 30,
        height: 30,
        borderRadius: 20,
        marginHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#434242',
        borderWidth: 1,
    },
    total: {
        fontSize: 20,
        color: '#2a2929',
        marginHorizontal: 10
    },
    operator: {
        fontSize: 20,
        color: '#434242',
        marginBottom: 2
    },
    typeTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    secondaryTitle: {
        color: "#7c7c7c"
    },
    searchButton: {
        backgroundColor: '#f15454',
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10
    },
    searchText: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'white',
    }
});

export default styles;