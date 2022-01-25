import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
  } from 'react-native';

const TopView = ({line1, line2}) => {
  return(
      <View style={style.container}>
          <Text style={style.Text1}>
            {line1}
          </Text>
          <Text style={style.Text2}>
            {line2}
          </Text>
      </View>
  );
};

export default TopView;

const style = StyleSheet.create({
    container:{
        height:160,
        width:'100%',
        backgroundColor:'#03686b',
        //position:'absolute',
        //top:0,
        paddingHorizontal:20,
        justifyContent:'flex-end'
    },
    Text1:{
        color:'white',
        fontSize:28,
        fontWeight:'700',
        
    },
    Text2:{
        color:'white',
        fontSize:17,
        fontWeight:'500',
        marginVertical:5,
        opacity:.5,
        marginBottom:20
    }
})
