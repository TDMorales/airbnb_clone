import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import DestinationSearch from '../screens/DestinationSearch/DestinationSearch'
import HomeTabNavigator from './HomeTabNavigator'
import GuestsPage from '../screens/GuestsPage/GuestsPage'
import SearchResults from '../screens/SearchResults/SearchResults'

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
                <Stack.Screen
                    name={"Destination Search"}
                    component={DestinationSearch}
                    options={{
                    }}
                />
                <Stack.Screen
                    name={"Guest Page"}
                    component={GuestsPage}
                    options={{
                        title: "How many people?"
                    }}
                />
                <Stack.Screen
                    name={"Search Results"}
                    component={SearchResults}
                    options={{
                        // title: "How many people?"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router