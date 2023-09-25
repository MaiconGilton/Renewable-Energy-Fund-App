import { createStackNavigator } from '@react-navigation/stack';
import { THEME_COLORS } from '@theme/colors';
import React from 'react';

const Stack = createStackNavigator();

export function Navigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: THEME_COLORS.WHITE
        }
      }}
    >

    </Stack.Navigator>
  );
}
