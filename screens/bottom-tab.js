// In App.js in a new project

import * as React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView, Navigator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from
'@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




class HomeScreen extends React.Component{
  render(){
    return(
      <SafeAreaView style={styles.safearea}>
      <View>
      <Text style = { styles.titleText } >Homescreen</Text>
      </View>
      </SafeAreaView>

    )
  }
}

class Calandar extends React.Component{
  render(){
    return(
      <SafeAreaView style={styles.safearea}>
      <View>
      <Text style = { styles.titleText } >Calandar</Text>
      </View>
      </SafeAreaView>

    )
  }
}

class Banis extends React.Component{
  render(){
    return(
      <SafeAreaView style={styles.safearea}>
      <View>
      <Text style = { styles.titleText } >Banis</Text>
      </View>
      </SafeAreaView>

    )
  }
}

class Information extends React.Component{
  render(){
    return(
      <SafeAreaView style={styles.safearea}>
      <View>
      <Text style = { styles.titleText } >Information</Text>
      </View>
      </SafeAreaView>
    )
  }
}


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const MyTabs= () => {
  return (
    <NavigationContainer >

    <Tab.Navigator
      initialRouteName="HomeScreen"
      activeColor="#e91e63"
      style={{ backgroundColor: 'tomato' }}
    >

    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: 'home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
      <Tab.Screen
        name="Calandar"
        component={Calandar}
        options={{
          tabBarLabel: 'Calandar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Banis"
        component={Banis}
        options={{
          tabBarLabel: 'Banis',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="book-open" color={color} size={26} />
//book-open-page-variant can also be used
          ),
        }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          tabBarLabel: 'Information',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
    </NavigationContainer >

  );}


//Stylesheets
const styles = StyleSheet.create({

      titleText: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
      },
      safearea:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
      },
  });
export default MyTabs;
