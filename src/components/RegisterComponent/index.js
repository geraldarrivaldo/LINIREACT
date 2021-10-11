import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Container from '../../common/Container';
import CustomButton from '../../common/CustomButton';
import Input from '../../common/Input';
import {HOME_NAVIGATOR, LOGIN} from '../../constants/routeNames';
import Message from '../../common/Message';
import styles from './styles';
import Icon from '../../common/Icon';
import colors from '../../assets/theme/colors';
import Home from '../../screens/Home';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  loading,
  data,
  dataWarehouse,
  warehouseLoading,
  error,
  errors,
}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No Warehouse to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log('item', item);
    const {id, vendor_name, name} = item;
    return (
      <TouchableOpacity>
        <View>
          <View>
            <Text>{name}</Text>
          </View>
        </View>
        {/* <Icon name="right" type="ant" size={17} color={colors.grey} /> */}
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Container>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/linistore-logo.png')}
          style={styles.logoImage}
        />
        <View>
          <Text style={styles.title}>Welcome to LINISTORE</Text>
          <Text style={styles.subTitle}>Create a free account</Text>

          <View style={styles.form}>
            {error?.error && (
              <Message retry danger retryFn={onSubmit} message={error?.error} />
            )}
            {/* {error?.error && <Text>{error.error}</Text>} */}
            <Input
              label="Nama"
              iconPosition="right"
              placeholder="Masukkan Nama"
              error={errors.name || error?.name?.[0]}
              onChangeText={value => {
                onChange({name: 'name', value});
              }}
            />

            {/* <Input
            label="No. Ktp"
            iconPosition="right"
            placeholder="Masukkan No Ktp"
            onChangeText={value => {
              onChange({name: 'id_number', value});
            }}
            error={errors.id_number || error?.id_number?.[0]}
          /> */}
            <Input
              label="No. Hp"
              iconPosition="right"
              placeholder="Masukkan No. hp"
              error={errors.phone_number || error?.phone_number?.[0]}
              onChangeText={value => {
                onChange({name: 'phone_number', value});
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
              error={errors.password || error?.password?.[0]}
              onChangeText={value => {
                onChange({name: 'password', value});
              }}
            />
            <Input
              label="Konfirmasi Password"
              placeholder="Masukkan Konfirmasi Password"
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
              error={
                errors.password_confirmation ||
                error?.password_confirmation?.[0]
              }
              onChangeText={value => {
                onChange({name: 'password_confirmation', value});
              }}
            />
            {console.log('err', error)}
            {warehouseLoading && (
              <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
                <ActivityIndicator color={colors.primary} size="large" />
              </View>
            )}
            {!warehouseLoading && (
              <View style={{paddingVertical: 20}}>
                <FlatList
                  renderItem={renderItem}
                  data={dataWarehouse}
                  ItemSeparatorComponent={() => {
                    return (
                      <View
                        style={{
                          height: 0.5,
                          backgroundColor: colors.grey,
                        }}></View>
                    );
                  }}
                  ListEmptyComponent={ListEmptyComponent}
                  keyExtractor={item => String(item.id)}
                  ListFooterComponent={<View style={{height: 150}}></View>}
                />
              </View>
            )}

            <CustomButton
              loading={loading}
              onPress={onSubmit}
              disabled={loading}
              primary
              white
              title="Register"
            />

            <View style={styles.createSection}>
              <Text style={styles.infoText}>Already have an account?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigate(LOGIN);
                }}>
                <Text style={styles.linkBtn}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    </>
  );
};

export default RegisterComponent;
