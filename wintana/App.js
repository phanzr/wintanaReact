import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

// createBottomTabNavigator(RouteConfigs, TabNavigatorConfig);
const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(TabNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  purple:{ backgroundColor: '#7224bf'},
  lightPurple:{backgroundColor: '#8b56bf'},
  orangeText:{ color: '#ff7043'},
  text:{
    fontFamily:'nunito-regular', 
    // fonts not loaded yet 
    // fontFamily:'Nunito-Bold',
    color: '#767676',
    fontSize: 24,
    lineHeight: 32,
    // justifyContent: 'left', bug 
  },
  titleText: {
    fontSize: 20,
    // fontWeight: 'bold',
  },
  purpleBtn: {
    backgroundColor: '#7224bf',
    color: '#ffffff',
    // alignItems: 'center',
    fontSize: 16,
  },
  circleModule1:{
    height:100,
    width:100,
    backgroundColor:'#dddddd',
    // shadowOpacity
    shadowColor:'#80000000',
  },
  circleModule2:{
    height:88,
    width:88,
    backgroundColor:'#f6f4f4',
    // shadowOpacity
    shadowColor:'#80000000',
  },
  rectangleSmallBox:{
    height: 90,
    width: 179,
    backgroundColor: '#ffffff',
    radius: 10,
    //this must work
    // borderRadius: 10,
    borderColor: '#7224bf',
    borderWidth: 1,
    shadowColor: '#80000000',
    fontSize: 18,
    textAlign: "left",
  },
  rectangleLargeBox:{
    height:88,
    width:88,    
  },
  squareBox:{
    height:88,
    width:88,
  },
});


// import HomeScreen from '../screens/Home';
// import AboutScreen from '../screens/About';
// import GlossaryScreen from '../screens/Glossary';

// const TabNavigator = createBottomTabNavigator({
//   Glossary: {
//     screen: GlossaryScreen
//   },
//   Home: {
//     screen: HomeScreen
//   },
//   About: {
//     screen: AboutScreen
//   }
// });

