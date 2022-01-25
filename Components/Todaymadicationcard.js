import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity
  } from 'react-native';
import TopView from '../Components/TopView';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Todaymadicationcard = ({time, timeperiod, madecine, quantity, Fills}) => {
    const [mark, setmark] = useState(false)

  return (
    <View style={style.container}>
        <View style={style.timecontainer}>
          <Text style={style.Text1}>
            {time}
          </Text>
          <Text style={style.Text2}>
            {timeperiod}
          </Text>
        </View>
        <View style={{width:'100%', paddingLeft:20}}>
            <MaterialCommunityIcons style={{marginVertical:10}} name="earth" color={'black'} size={30} />
            <Text numberOfLines={1} style={style.madecine}>
                {madecine}
            </Text>
            <View style={{flexDirection:'row', width:'70%', justifyContent:'space-between', marginVertical:5}}>
                <View>
                    <Text style={{fontSize:11, color:'grey'}}>
                        Qty
                    </Text>
                    <Text style={{fontSize:15, fontWeight:'700'}}>
                        {quantity} days
                    </Text>
                </View>
                <View>
                    <Text style={{fontSize:11, color:'grey'}}>
                        Fills
                    </Text>
                    <Text style={{fontSize:15, fontWeight:'700'}}>
                        {Fills} left
                    </Text>
                </View>
            </View>
            <TouchableOpacity 
                onPress={()=>setmark(!mark)}
                style={mark==false?style.unpressed:style.presssed}>
                <Text style={{fontSize:15, fontWeight:'600', color:'#03686b'}}>
                    Mark as taken
                </Text>
            </TouchableOpacity>
        </View>
        
    </View>
  );
};

export default Todaymadicationcard;

const style = StyleSheet.create({
    container:{
        width:200,
        borderRadius:10,
        backgroundColor:'white',
        shadowColor:'grey',
        shadowRadius:20,
        shadowOpacity:.5,
        elevation:5,
        marginTop:10,
        marginRight:20,
        marginBottom:10
    },
    timecontainer:{
        width:'100%',
        backgroundColor:'#eb5c52',
        opacity:.8,
        height:90,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        padding:10,
        paddingLeft:20,
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
    },
    madecine:{
        color:'black',
        fontWeight:'700',
        fontSize:16,
        marginBottom:10
    },
    unpressed:{
        height:35,
        width:160,
        borderRadius:18,
        borderColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
        borderWidth:.5
    },
    presssed:{
        height:35,
        width:160,
        borderRadius:18,
        borderColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20,
        borderWidth:3,
    }
})
