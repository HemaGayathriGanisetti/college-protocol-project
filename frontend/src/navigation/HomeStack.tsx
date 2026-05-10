import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function HomeStack({ navigation }: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',

          // ☰ MENU ONLY HERE
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
              style={{ marginLeft: 15 }}
            >
              <Text style={{ fontSize: 22 }}>☰</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}