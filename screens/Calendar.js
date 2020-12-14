import * as React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView, Navigator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from
'@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import Information from './screens/Information';


function Calendar({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Calendar</Text>
      <Button
        title="go to settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
}
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
 export default Calendar;
