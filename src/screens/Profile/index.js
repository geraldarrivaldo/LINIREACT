import React from 'react';
import {View, Text} from 'react-native';
import ProfileComponents from '../../components/ProfileComponents';
import {GlobalContext} from '../../context/Provider';

const Profile = () => {
  const {authDispatch} = React.useContext(GlobalContext);

  return <ProfileComponents authDispatch={authDispatch} />;
};

export default Profile;
