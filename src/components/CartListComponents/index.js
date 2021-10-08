import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import colors from '../../assets/theme/colors';
import CustomButton from '../../common/CustomButton';
import Icon from '../../common/Icon';
import Header from '../Header';
import styles from './styles';

const CartListComponents = () => {
  return (
    <View style={styles.wrapper}>
      <Header />

      <Text>Keranjang Belanja </Text>

      <View style={{padding: 10}}>
        <View
          style={{
            elevation: 5,
            borderRadius: 8,
            height: 300,
          }}>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Image
              width={17}
              height={17}
              source={require('../../assets/images/store.png')}
            />
            <Text> RetailKita Piyungan</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 20,
            }}>
            <Image
              style={{width: 100, height: 100}}
              source={require('../../assets/images/1.png')}
            />
            <View style={{paddingTop: 15, paddingLeft: 20}}>
              <Text>Indomie Goreng </Text>
              <Text>Stock : 10</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Icon
                    style={{color: colors.blue}}
                    name="minus-circle"
                    size={17}
                  />
                </TouchableOpacity>
                <Text style={{paddingHorizontal: 10}}>1</Text>
                <TouchableOpacity>
                  <Icon
                    style={{color: colors.blue}}
                    name="plus-circle"
                    size={17}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartListComponents;
