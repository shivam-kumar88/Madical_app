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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Madicationdetailcard = ({madecine, direction, quantity, Fills, RX, noofpill, timeperiod}) => {
  return (
    <View style={style.container}>
        <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between',}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <MaterialCommunityIcons name="earth" color={'grey'} size={25} />
                <Text numberOfLines={1} style={style.Text1}>
                    {madecine}
                </Text>  
            </View>
            <TouchableOpacity>
                <MaterialCommunityIcons name="information-outline" color={'#03686b'} size={25} />
            </TouchableOpacity>
            
        </View>
        <Text style={style.Text2}>
            Direction:{direction}
        </Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', width:'70%', marginLeft:40}}>
            <View>
                <Text style={{fontSize:11, color:'grey'}}>
                    Qty
                </Text>    
                <Text style={{fontSize:15, fontWeight:'700', color:'black'}}>
                    {quantity} days
                </Text>
            </View>
            <View>
                <Text style={{fontSize:11, color:'grey'}}>
                    Fills
                </Text>
                <Text style={{fontSize:15, fontWeight:'700', color:'black'}}>
                    {Fills} left
                </Text>
            </View>
            <View>
                <Text style={{fontSize:11, color:'grey'}}>
                    RX
                </Text>
                <Text style={{fontSize:15, fontWeight:'700', color:'black'}}>
                    {RX}
                </Text>
            </View>
        </View>
        <Text style={{fontSize:15, color:'grey', marginLeft:50, marginTop:15, opacity:.8}}>
            <MaterialCommunityIcons name="clock-outline" color={'grey'} size={15} /> {noofpill} {timeperiod}
        </Text>
    </View>
  );
};

export default Madicationdetailcard;

const style = StyleSheet.create({
    container:{
        width:'90%',
        paddingTop:20,
        paddingBottom:30,
        borderBottomWidth:.5,
        borderColor:'grey',

    },
    Text1:{
        color:'black',
        fontSize:22,
        fontWeight:'700',
        marginLeft:15
    },
    Text2:{
        color:'black',
        fontSize:15,
        fontWeight:'400',
        marginLeft:40,
        width:'80%',
        marginVertical:10
    },
})
