import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// ICONS
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
// SCREENS 
import HomeScreen from '../screens/Home/HomeScreen';
import SavedScreen from '../screens/SavedScreen/SavedScreen';
import TripsScreen from '../screens/TripsScreen/TripsScreen';
import MessagesScreen from '../screens/MessagesScreen/MessagesScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
const Tabs = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tabs.Navigator screenOptions={{
            tabBarActiveTintColor: '#f15454'
        }}>
            <Tabs.Screen
                name='Explore'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Fontisto name='search' size={25} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='Saved'
                component={SavedScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name='heart-o' size={25} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='Trips'
                component={TripsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name='airbnb' size={25} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='Messages'
                component={MessagesScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name='message-square' size={25} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='Profile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <EvilIcons name='user' size={35} color={color} />
                    )
                }}
            />
        </Tabs.Navigator>
    )
}

export default HomeTabNavigator