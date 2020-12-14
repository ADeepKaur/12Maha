// In App.js in a new project

import * as React from 'react';
import { View, Text, Button,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Banis = ({navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Banis is here</Text>
      <Button
      title="Home"
      onPress={() =>navigation.navigate("Home")}/>
      <Button
      title="Information"
      onPress={() =>navigation.push("Information")}/>
    </View>
  );
}


const Home = ({navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>home supposed to be here</Text>
      <Button
      title="Banis"
      onPress={() =>navigation.push("Banis")}/>
      <Button
      title="Information"
      onPress={() =>navigation.push("Information")}/>
    </View>
  );
}

const Information = ({navigation})=> {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Information supposed to be here</Text>
      <Button
      title="Banis"
      onPress={() =>navigation.push("Banis")}/>
      <Button
      title="Home"
      onPress={() =>navigation.navigate("Home")}/>
    </View>
  );
}



const Stack = createStackNavigator();

const Screen = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen name="Home" component={Home}  name="Home"
        options={{
          title: 'Calandar',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
        <Stack.Screen name="Banis" component={Banis}
        name="Banis"
        options={{
          title: 'Banis',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Information" component={Information}
        name="Information"
        options={{
          title: 'Information',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Screen;
