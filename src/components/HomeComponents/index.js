import {useNavigation} from '@react-navigation/core';
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {
  CART_LIST,
  LOGIN,
  PRODUCT_DETAIL,
  PROFILE,
} from '../../constants/routeNames';
import styles from './styles';
import colors from '../../assets/theme/colors';
import CustomButton from '../../common/CustomButton';
import Header from '../Header';
import Icon from '../../common/Icon';
import Input from '../../common/Input';
import AppModal from '../../common/AppModal';
import {GlobalContext} from '../../context/Provider';
import ProductListComponents from '../ProductListComponents';
import Message from '../../common/Message';

const HomeComponents = ({dataProduct, productLoading}) => {
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  // const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const {navigate} = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const ListEmptyComponent = () => {
    return (
      <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
        <Message info message="No Products to show" />
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log('item', item);
    const {concat_name, price, unit_count, thumbnail_source} = item;
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          {thumbnail_source ? (
            <Image
              style={{width: 45, height: 45, borderRadius: 100}}
              source={{uri: thumbnail_source}}
            />
          ) : (
            <View
              style={{
                width: 45,
                height: 45,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
                backgroundColor: colors.grey,
              }}>
              <Text style={[styles.name, {color: colors.white}]}>
                {concat_name[0]}
              </Text>
              <Text style={[styles.name, {color: colors.white}]}>
                {concat_name[1]}
              </Text>
            </View>
          )}
          <View style={{paddingLeft: 20}}>
            <View>
              <Text style={styles.name}>{concat_name}</Text>
            </View>
            <Text style={styles.phone_number}>{unit_count}</Text>
            <Text style={styles.phone_number}>{price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{flex: 1}}>
        <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <AppModal
          modalBody={
            <View>
              <View>
                <Text style={{fontWeight: '600'}}>No.Hp/Ktp</Text>
                <Input placeholder="No.Hp / Ktp" />
              </View>
              <View>
                <Text style={{fontWeight: '600'}}>Password</Text>
                <Input placeholder="Enter Password" />
              </View>

              <CustomButton primary title="Masuk" />
            </View>
          }
          modalFooter={<></>}
          title={'Masuk Linistore'}
          setModalVisible={setModalVisible}
          modalVisible={modalVisible}
        />
        {/* {productLoading && (
          <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
            <ActivityIndicator color={colors.primary} size="large" />
          </View>
        )}
        {!productLoading && (
          <View style={{paddingVertical: 20}}>
            <FlatList
              renderItem={renderItem}
              data={dataProduct}
              ItemSeparatorComponent={() => {
                return (
                  <View
                    style={{height: 0.5, backgroundColor: colors.grey}}></View>
                );
              }}
              ListEmptyComponent={ListEmptyComponent}
              keyExtractor={item => String(item.id)}
              ListFooterComponent={<View style={{height: 150}}></View>}
            />
          </View>
        )} */}
        <ProductListComponents />
      </View>
    </>
  );
};

export default HomeComponents;
