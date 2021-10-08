import React from 'react';
import {View, Text} from 'react-native';
import Icon from '../../common/Icon';

const ProfileComponents = () => {
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <Text>Profile</Text>
        <Icon name="user-circle" size={100} />
        <Text style={{fontSize: 20}}>Gerald Arrivaldo</Text>
      </View>
    </View>
  );
};

export default ProfileComponents;
