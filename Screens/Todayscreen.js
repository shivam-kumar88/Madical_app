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
import TopView from '../Components/TopView';
import Todaymadicationcard from '../Components/Todaymadicationcard';
import { madical_detail } from '../datas/madication_detail';
import NextAppointmentcard from '../Components/NextAppointmentcard';


const Todayscreen = () => {
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{flex:1, alignItems:'center'}}>
        <TopView
            line1={'Good Morning!'}
            line2={'Thrusday, January 25th'}
        />
        <View style={{width:'100%', paddingVertical:15}}>
            <Text style={style.headerText}>Today's Madication</Text>
            <View style={{flex:1, flexDirection:'row', marginBottom:20}}>
            <ScrollView contentContainerStyle={{marginHorizontal:30}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    madical_detail.todaysmadication.map((item, index)=>{
                        return(
                            <>
                                <Todaymadicationcard
                                    time={item.time}
                                    timeperiod={item.timeperiod}
                                    madecine={item.madecine}
                                    quantity={item.quantity}
                                    Fills={item.Fills}
                                />
                            </>
                        )
                    })
                }
            </ScrollView>
            </View>
            <Text style={style.headerText}>Next Appointment</Text>
            <NextAppointmentcard/>
        </View>
      </View>
      </ScrollView>
  );
};

export default Todayscreen;

const style = StyleSheet.create({
    headerText:{
        color:'black',
        fontWeight:'700',
        fontSize:18,
        marginLeft:30
    }
})
