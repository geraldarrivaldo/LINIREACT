import React from 'react';
import {View, TouchableOpacity, Text, Alert} from 'react-native';
import CustomButton from '../../common/CustomButton';
import Icon from '../../common/Icon';
import {logoutUser} from '../../helpers/apiHelpers/authHelpers';
import styles from './styles';

const ProfileComponents = ({navigation, authDispatch}) => {
  const handleLogout = () => {
    Alert.alert('Logout', 'are you sure?', [
      {
        text: 'cancel',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text>Profile</Text>
        <Icon name="user-circle" size={100} />
        <Text style={{fontSize: 20}}>Gerald Arrivaldo</Text>
        <CustomButton
          onPress={() => {
            handleLogout();
          }}
          title="Log Out"
          white
          primary
        />
      </View>
    </View>
  );
};

export default ProfileComponents;
