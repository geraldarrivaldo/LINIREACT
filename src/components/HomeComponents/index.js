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
import Carousel from '../../common/Carousels/Carousel';
import {dummyData} from '../../data/Data';

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
    // console.log('item', item);
    const {concat_name, price, unit_count, thumbnail_source} = item;
    return (
      <View
        style={{
          width: 180,
          borderRadius: 8,
          height: 300,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.grey,
          position: 'relative',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigate(PRODUCT_DETAIL);
          }}>
          <Image
            style={{width: 150, height: 150}}
            source={{uri: thumbnail_source}}
          />
        </TouchableOpacity>
        <Text>{concat_name}</Text>
        <Text>{unit_count}</Text>
        <Text>{price}</Text>
        <CustomButton
          primary
          white
          title="Tambah ke keranjang"
          onPress={() => {
            navigate(CART_LIST);
          }}
        />
      </View>
    );
  };

  return (
    <>
      <View style={{flex: 1}}>
        <Header modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <ScrollView style={{flex: 1}}>
          <Carousel data={dummyData} />
          {/* Kategori Populer */}
          <View>
            <Text
              style={{
                fontSize: 17,
                fontWeight: '500',
                paddingHorizontal: 10,
              }}>
              Kategori Populer
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  width: 195,
                  marginBottom: 10,
                  borderRadius: 8,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: colors.grey,
                }}>
                <Text>Semua Kategori</Text>
              </View>
              <View
                style={{
                  width: 195,
                  marginBottom: 10,
                  borderRadius: 8,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: colors.danger,
                }}>
                <Text>Mie Instant</Text>
              </View>
              <View
                style={{
                  width: 195,
                  marginBottom: 10,
                  borderRadius: 8,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: colors.success,
                }}>
                <Text>Sereal</Text>
              </View>
              <View
                style={{
                  width: 195,
                  marginBottom: 10,
                  borderRadius: 8,
                  height: 100,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: colors.blue,
                }}>
                <Text>Biskuit</Text>
              </View>
            </View>
          </View>
          {/* Barang Terlaris */}

          <View style={styles.wrapperProduct}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>
              Barang Terlaris
            </Text>

            {productLoading && (
              <View style={{paddingVertical: 100, paddingHorizontal: 100}}>
                <ActivityIndicator color={colors.primary} size="large" />
              </View>
            )}
            {!productLoading && (
              <FlatList
                renderItem={renderItem}
                data={dataProduct}
                // ItemSeparatorComponent={() => {
                //   return (
                //     <View
                //       style={{height: 0.5, backgroundColor: colors.grey}}></View>
                //   );
                // }}
                ListEmptyComponent={ListEmptyComponent}
                keyExtractor={item => String(item.id)}
                // ListFooterComponent={<View style={{height: 150}}></View>}
              />
            )}
          </View>
        </ScrollView>
        {/* <AppModal
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
        /> */}

        {/* <ProductListComponents /> */}
      </View>
    </>
  );
};

export default HomeComponents;
