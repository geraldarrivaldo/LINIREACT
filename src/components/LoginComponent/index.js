import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {REGISTER} from '../../constants/routeNames';
import Container from '../../common/Container';
import CustomButton from '../../common/CustomButton';
import Input from '../../common/Input';
import Message from '../../common/Message';
import styles from './styles';
import Icon from '../../common/Icon';

const LoginComponent = ({
  error,
  form,
  justSignedUp,
  onChange,
  onSubmit,
  loading,
}) => {
  const {navigate} = useNavigation();

  const [isSecureEntry, setIsSecureEntry] = React.useState(true);
  return (
    <Container>
      <Image
        height={71}
        width={71}
        style={styles.logoImage}
        source={require('../../assets/images/linistore-logo.png')}
      />

      <View>
        <Text style={styles.title}>Welcome to LINISTORE</Text>
        <Text style={styles.subTitle}>Please Login Here</Text>
        <View style={styles.form}>
          {error && !error.error && (
            <Message
              danger
              onDismiss={() => {}}
              message="Invalid credentials"
            />
          )}
          {justSignedUp && (
            <Message
              success
              onDismiss={() => {}}
              message="Akun Telah Berhasil Di Buat!"
            />
          )}
          {error?.error && <Message danger onDismiss message={error?.error} />}
          <Input
            label="No. Hp"
            iconPosition="right"
            placeholder="Masukkan No Hp"
            value={form.user_login || null}
            onChangeText={value => {
              onChange({name: 'user_login', value});
            }}
          />
          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                <Text>
                  {isSecureEntry ? (
                    <View style={{opacity: 0.5}}>
                      <Icon name="eye-slash" size={20} />
                    </View>
                  ) : (
                    <View style={{opacity: 0.5}}>
                      <Icon name="eye" size={20} />
                    </View>
                  )}
                </Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton
            disabled={loading}
            loading={loading}
            onPress={onSubmit}
            primary
            white={{fontWeight: 'bolder'}}
            title="Login"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Need a new account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={styles.linkBtn}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
