import React from 'react';
import {View, Text, Image} from 'react-native';
import colors from '../../assets/theme/colors';
import CustomButton from '../../common/CustomButton';
import Icon from '../../common/Icon';
import Header from '../Header';
import styles from './styles';

const ProductDetailComponents = () => {
  return (
    <View style={styles.wrapper}>
      <Header />
      <View style={{flexDirection: 'row'}}>
        <Text>Beranda </Text>
        <Icon name="angle-right" size={17} />
        <Text> Snack </Text>
        <Icon name="angle-right" size={17} />
        <Text style={{color: colors.grey}}> Beng Beng</Text>
      </View>

      <View style={styles.wrapperImage}>
        <Image
          style={{width: 200, height: 200}}
          source={{
            uri: 'https://sc04.alicdn.com/kf/UTB8JbsFebPJXKJkSafSq6yqUXXaV.jpg',
          }}
        />
      </View>

      <Text style={{fontSize: 20, paddingLeft: 10}}> Beng Beng Coklat</Text>
      <View style={styles.wrapperStok}>
        <Image
          width={17}
          height={17}
          style={{tintColor: 'gray', opacity: 0.8}}
          source={require('../../assets/images/store.png')}
        />
        <Text>Stok 10</Text>
      </View>

      <View>
        <Text
          style={{
            color: colors.blue,
            fontWeight: '600',
            fontSize: 19,
            paddingLeft: 10,
          }}>
          Rp. 12.000
        </Text>
      </View>

      <View style={{paddingHorizontal: 10}}>
        <CustomButton
          blue
          style={{borderWidth: 1, borderColor: '#243D97'}}
          title="Tambah Ke Keranjang"
        />
      </View>
    </View>
  );
};

export default ProductDetailComponents;
