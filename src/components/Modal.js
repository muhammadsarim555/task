import React, {useStore, useState, useEffect} from 'react';
import {
  Button,
  Text,
  View,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'react-native-axios';

function ModalTester(props) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [followers, setFollowers] = useState("");

  const toggleModal = () => {
    console.log(props);
  };

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${props.selectedUser?.login}/followers`)
      .then(function(response) {
        setFollowers(response.data.length);
        // alert(response.data.length)
      })
      .catch(function(error) {
        console.log(error);
      });
    
  }, props.selectedUser?.login);


  return (
    <View style={styles.container}>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={props.isModal}
        onRequestClose={() => {
          toggleModal();
        }}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => {
            props.onchange(false);
            // alert(JSON.stringify(props.selectedUser.login));
          }}>
          <Text style={styles.buttonText}>Close Modal</Text>
        </TouchableOpacity>

        <View>
          <Text style={styles.text}>Name: {props.selectedUser.login}</Text>
          <Text style={styles.text}>No of Followers: {followers}</Text>
          {/* <Text style={styles.text}>No of Following: 93</Text> */}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
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
    shadowRadius: 25,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
});

export default ModalTester;
