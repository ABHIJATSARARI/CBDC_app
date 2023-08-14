import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SendScreen from '../screens/SendScreen';
import ReceiveScreen from '../screens/ReceiveScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native'; // Import the View component


const Tab = createBottomTabNavigator();

// Custom header component for the blue app name bar
const AppHeader = () => {
    return (
        <View style={{ backgroundColor: '#2196F3', height: 60 }}>
            {/* You can add any custom content here if needed */}
        </View>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = 'home';
                        } else if (route.name === 'Send') {
                            iconName = 'send';
                        } else if (route.name === 'Receive') {
                            iconName = 'call-received';
                        }
                        return <MaterialIcons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#2196F3',
                    tabBarInactiveTintColor: 'gray',
                    tabBarStyle: [
                        {
                            display: 'flex',
                        },
                        null,
                    ],
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    // Customize the header for the HomeScreen
                    options={{ header: AppHeader }}
                />
                <Tab.Screen
                    name="Send"
                    component={SendScreen}
                    // Customize the header for the SendScreen
                    options={{ header: AppHeader }}
                />
                <Tab.Screen
                    name="Receive"
                    component={ReceiveScreen}
                    // Customize the header for the ReceiveScreen
                    options={{ header: AppHeader }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
