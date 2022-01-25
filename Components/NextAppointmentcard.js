import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

const NextAppointmentcard = () => {
  return(
      <View style={{width:'100%', marginTop:20, alignItems:'center'}}>
          <TouchableOpacity style={style.container}>
            <View style={style.date}>
                <Text style={{color:'#03686b', fontSize:15, fontWeight:'700'}}>
                    APR
                </Text>
                <Text style={{color:'black', fontSize:20, fontWeight:'700'}}>
                    16
                </Text>
            </View>
            <View style={ style.appointmentinfo}>
                <Text style={{color:'black', fontSize:16, fontWeight:'700'}}>
                    Dr. Godlstein
                </Text>
                <Text style={{color:'black', fontSize:14, fontWeight:'500'}}>
                    12:00 pm
                </Text>
            </View>
            <Image style={style.image} source={{uri:'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'}}/>
          </TouchableOpacity>
      </View>
  );
};

export default NextAppointmentcard;

const style = StyleSheet.create({
    container:{
        width:'85%',
        height:80,
        alignItems:'center',
        paddingHorizontal:20,
        justifyContent:'space-between',
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:15
    },
    date:{
        width:60,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'grey',
        borderRightWidth:.4
    },
    appointmentinfo:{
        width:120,

    },
    image:{
        width:50,
        height:50,
        borderRadius:25
    }
})