import React from 'react';
import {View, TouchableOpacity, Dimensions, Image} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon} from 'galio-framework';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

export default function Header({title}) {
  //   const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        flexDirection: 'row',
      }}>
      <View
        style={{width: 40, justifyContent: 'center', alignItems: 'center'}}
      />
      <Image
        source={require('../../assets/images/logo.jpg')}
        style={{height: 40, width: 100}}
        resizeMode={'contain'}
      />
      <TouchableOpacity
        style={{width: 40, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="account-circle" family="MaterialCommunityIcons" size={26} />
      </TouchableOpacity>
    </View>
  );
}
