import React, {useStore, useState, useEffect} from 'react';
import {View, ScrollView, StatusBar} from 'react-native';

import axios from 'react-native-axios';

// FILES
import SearchBar from './Input';
import Header from './Header';
import Item from './Item';
import {getUsers} from '../store/actions/actions';
import {store} from '../store';
import Modal from "./Modal";

function HomeScreen() {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.github.com/users')
      .then(function(response) {
        setAllUser(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
    const unsubscribe = store.subscribe(() => {
      let convertIntoArray = [];

      convertIntoArray.push(store.getState().auth?.filterUser);

      setAllUser(convertIntoArray);
    });
    return unsubscribe;
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="rgba(0, 0, 0, 0.251)"
      />
      <Header title={'What Would You Like To Cook?'} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <SearchBar />
        {/* <Modal/> */}
        {allUser.length ? allUser.map(v => <Item item={v} key={v} />) : null}
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
