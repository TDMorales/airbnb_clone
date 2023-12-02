import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import HomeScreen from '../screens/Home/HomeScreen'
import DestinationSearch from '../screens/DestinationSearch/DestinationSearch'
import HomeTabNavigator from './HomeTabNavigator'
const Stack = createStackNavigator()

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                {/* <Stack.Screen
                    name={"Home"}
                    component={HomeScreen}
                    options={{
                        title: false,
                        headerShown: false,
                        headerBackTitleVisible: false
                    }}
                />
                <Stack.Screen name={"Destination Search"} component={DestinationSearch} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router