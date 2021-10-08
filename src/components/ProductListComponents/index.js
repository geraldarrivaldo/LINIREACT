import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import colors from '../../assets/theme/colors';
import Carousel from '../../common/Carousels/Carousel';

import CustomButton from '../../common/CustomButton';
import {CART_LIST, LOGIN, PRODUCT_DETAIL} from '../../constants/routeNames';
import {GlobalContext} from '../../context/Provider';
import {dummyData} from '../../data/Data';
import styles from './styles';

const ProductListComponents = ({navigation}) => {
  const {navigate} = useNavigation();

  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);

  const menuItems = [
    {
      id: 1,
      name: 'Beng-Beng',
      image: 'https://sc04.alicdn.com/kf/UTB8JbsFebPJXKJkSafSq6yqUXXaV.jpg',
      onPress: () => {
        navigate(PRODUCT_DETAIL);
      },
    },
    {
      id: 2,
      name: 'Indomie Goreng',
      image: 'https://www.tagar.id/Asset/uploads2019/1620713851079-indomie.jpg',
      onPress: () => {
        navigate(PRODUCT_DETAIL);
      },
    },
  ];

  return (
    <>
      {isLoggedIn ? (
        <ScrollView style={{flex: 1}}>
          {/* Banner */}
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
            <View style={styles.brgWrapper}>
              {menuItems.map(({name, id, image, onPress}) => (
                <View
                  style={{
                    width: 190,
                    borderRadius: 8,
                    height: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.grey,
                    position: 'relative',
                  }}>
                  <TouchableOpacity onPress={onPress} key={id}>
                    <Image
                      style={{width: 150, height: 150}}
                      source={{uri: image}}
                    />
                    <Text style={styles.itemText}>{name}</Text>
                  </TouchableOpacity>
                  <CustomButton
                    primary
                    white
                    title="Tambah ke keranjang"
                    onPress={() => {
                      navigate(CART_LIST);
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
          {/* Mie Instan Populer */}
          {/* Barang Terlaris */}
          <View style={styles.wrapperProduct}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>
              Mie Instan Populer
            </Text>
            <View style={styles.brgWrapper}>
              {menuItems.map(({name, id, image, onPress}) => (
                <View
                  style={{
                    width: 190,
                    borderRadius: 8,
                    height: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.grey,
                    position: 'relative',
                  }}>
                  <TouchableOpacity onPress={onPress} key={id}>
                    <Image
                      style={{width: 150, height: 150}}
                      source={{uri: image}}
                    />
                    <Text style={styles.itemText}>{name}</Text>
                  </TouchableOpacity>
                  <CustomButton
                    primary
                    white
                    title="Tambah ke keranjang"
                    onPress={() => {
                      navigate(CART_LIST);
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <ScrollView style={{flex: 1}}>
          {/* Banner */}

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
            <View style={styles.brgWrapper}>
              {menuItems.map(({name, id, image, onPress}) => (
                <View
                  style={{
                    width: 190,
                    borderRadius: 8,
                    height: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.grey,
                    position: 'relative',
                  }}>
                  <TouchableOpacity onPress={onPress} key={id}>
                    <Image
                      style={{width: 150, height: 150}}
                      source={{uri: image}}
                    />
                    <Text style={styles.itemText}>{name}</Text>
                  </TouchableOpacity>
                  <CustomButton
                    primary
                    white
                    title="Tambah ke keranjang"
                    onPress={() => {
                      navigate(CART_LIST);
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
          {/* Mie Instan Populer */}
          <View style={styles.wrapperProduct}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>
              Mie Instan Populer
            </Text>
            <View style={styles.brgWrapper}>
              {menuItems.map(({name, id, image, onPress}) => (
                <View
                  style={{
                    width: 190,
                    borderRadius: 8,
                    height: 300,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.grey,
                    position: 'relative',
                  }}>
                  <TouchableOpacity onPress={onPress} key={id}>
                    <Image
                      style={{width: 150, height: 150}}
                      source={{uri: image}}
                    />
                    <Text style={styles.itemText}>{name}</Text>
                  </TouchableOpacity>
                  <CustomButton
                    primary
                    white
                    title="Tambah ke keranjang"
                    onPress={() => {
                      navigate(CART_LIST);
                    }}
                  />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default ProductListComponents;
