import React, {useStore, useState, useEffect} from 'react';

import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Text} from 'galio-framework';

import Modal from './Modal';
import {Colors} from '../contstant';

export default function CategoryCards({item}) {
  const [isModal, setIsModal] = useState(false);

  const onchange = p => {
    setIsModal(!isModal);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        onchange();
        // onPress={() => alert(JSON.stringify(item))}
      }}>
      {isModal ? (
        <Modal isModal={isModal} onchange={onchange} selectedUser={item} />
      ) : null}
      <View style={styles.row}>
        <Image source={{uri: item.avatar_url}} style={styles.pic} />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt}>{item.login}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  pic: {
    borderRadius: 25,
    width: 50,
    height: 50,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 270,
  },
  closeButton: {
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF3974',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  end: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    fontWeight: '400',
    color: '#666',
    fontSize: 12,
  },
  icon: {
    height: 28,
    width: 28,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
});
