import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { ButtonProps } from 'react-native';
import { Button } from 'react-native';

const Stack = createNativeStackNavigator();
const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Check your parties availability"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const MainScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Main Menu' }}
        />
        <Stack.Screen name="Schedule" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


