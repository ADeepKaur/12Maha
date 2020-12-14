import * as React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView, Navigator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from
'@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



function Information({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>We are developer team of three</Text>

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
 export default Information;
