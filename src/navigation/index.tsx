import { HomeIcon, PortfolioIcon, TradeIcon } from '@assets/icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { THEME_COLORS } from '@theme/colors';
import { THEME_FONTS } from '@theme/fonts';
import React from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon fill={color} width={26} height={26} />
          } else if (route.name === 'Trade') {
            return <TradeIcon fill={color} width={26} height={26} />
          } else {
            return <PortfolioIcon fill={color} width={26} height={26} />
          }
        },
        tabBarActiveTintColor: THEME_COLORS.PURPLE,
        tabBarInactiveTintColor: THEME_COLORS.BLACK,
        tabBarLabelStyle: {
          fontFamily: THEME_FONTS.SORA_BOLD,
          fontSize: 10
        },
        tabBarStyle: { height: 70, paddingBottom: 10, paddingTop: 5 }
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Trade"
        component={TradeScreen}
      />

      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
      />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: THEME_COLORS.WHITE
        }
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}

function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: THEME_COLORS.WHITE
        }
      }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Stack.Screen name="FundDetailScreen" component={FundDetailScreen} />
    </Stack.Navigator>
  );
}

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
      {user?.id
        ? <Stack.Screen name="AppStack" component={AppStack} />
        : <Stack.Screen name="AuthStack" component={AuthStack} />
      }
    </Stack.Navigator>
  );
}
