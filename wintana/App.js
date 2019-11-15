import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Supongo q esta es la caratula :,v</Text>
    </View>
  );
}

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
    // fontFamily:'Nunito-Regular', fonts not loaded yet 
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
