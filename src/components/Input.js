import React, {Component, useState, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'galio-framework';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import axios from 'react-native-axios';

import {store} from '../store';
import {onFilterUser} from '../store/actions/actions';

const {width, height} = Dimensions.get('window');

export default function SearchBar() {
  const [filterUser, setFilterUser] = useState('');

  getFilterUser = searchString => {
    axios
      .get(`https://api.github.com/users/${searchString}`)
      .then(function(response) {
        store.dispatch(onFilterUser(response.data));
        // alert(JSON.stringify(response.data));
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.searchSection}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        onChangeText={searchString => getFilterUser(searchString)}
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity>
        <Icon
          name="search1"
          family="AntDesign"
          size={22}
          style={styles.searchIcon}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  searchSection: {
    alignSelf: 'center',
    flexDirection: 'row',
    margin: 10,
    height: hp('9%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEEFEE',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  searchIcon: {
    color: 'black',
    marginRight: 5,
  },
  input: {
    flex: 2,
    alignSelf: 'center',
    color: '#424242',
    fontFamily: 'Poppins-Regular',
  },
});
