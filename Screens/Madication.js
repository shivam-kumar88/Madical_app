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
import TopView from '../Components/TopView';
import Madicationdetailcard from '../Components/Madicationdetailcard';
import { madical_detail } from '../datas/madication_detail';

const Madication = () => {
  return(
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{flex:1, alignItems:'center'}}>
        <TopView
            line1={'Madication'}
            line2={'Current Prescribed Madecine'}
        />
        {
          madical_detail.todaysmadication.map((item) => {
            return(
              <Madicationdetailcard
                madecine={item.madecine}
                quantity={item.quantity}
                Fills={item.Fills}
                RX={item.RX}
                direction={item.Direction}
                noofpill={item.noofpill}
                timeperiod={item.timeperiod}
              />
            )
          })
        }
    </View>
    </ScrollView>
  );
};

export default Madication;
