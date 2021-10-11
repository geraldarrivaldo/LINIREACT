import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import LoginComponent from '../../components/LoginComponent';
import {HOME, HOME_NAVIGATOR} from '../../constants/routeNames';
import loginUser from '../../context/actions/auth/loginUser';
import {GlobalContext} from '../../context/Provider';

const Login = ({navigation}) => {
  const {navigate} = useNavigation();
  const [value, onChangeText] = React.useState('');
  const [justSignedUp, setJustSignedUp] = useState(false);
  const [form, setForm] = useState({});
  const {params} = useRoute();

  useEffect(() => {
    if (params?.data) {
      setJustSignedUp(true);
      setForm({...form, user_login: params.data.user_login});
    }
  }, [params]);

  const {
    authDispatch,
    authState: {error, loading, isLoggedIn},
  } = useContext(GlobalContext);

  const onSubmit = () => {
    if (form.user_login && form.password) {
      loginUser(form)(authDispatch);
      // navigate(HOME_NAVIGATOR, {screen: HOME});

      // navigation.navigate(HOME_NAVIGATOR);
    }
  };

  const onChange = ({name, value}) => {
    setJustSignedUp(false);
    setForm({...form, [name]: value});
  };
  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
      justSignedUp={justSignedUp}
    />
  );
};

export default Login;
