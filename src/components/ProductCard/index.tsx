/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, Pressable, Text, Image, View} from 'react-native';
import * as React from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'constants/Layout';
import {Spacer} from 'components';
import {startCase} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import {TProduct} from '../../constants/globalTypes';

type TProductCardProps = {
  item: TProduct;
};

const ProductCard = ({item}: TProductCardProps) => {
  // Product takes a poster image, title, description or developer
  // wishlist status, previous price, current price, sale discount
  // width has to be larger than a third
  // Pressable

  const title = 'Grand Theft Auto V: Definitive Edition';
  const developer = 'Rockstar';
  const status = 'default';
  const currentPrice = '30.00';
  const salePrice = '14.99';
  const percentageDiscount = '50';

  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.navigate('Product Details', item)}>
      <View
        style={{
          borderRadius: 5,
          width: SCREEN_WIDTH * 0.38,
          overflow: 'hidden',
        }}>
        <Image
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            height: SCREEN_HEIGHT * 0.26,
          }}
          source={{
            uri: 'https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg',
          }}
        />
        <View
          style={{
            paddingHorizontal: 8,
            paddingVertical: 6,
            backgroundColor: '#3a3a3c',
          }}>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              fontWeight: '700',
              fontSize: 12,
              color: '#bcbcbd',
            }}>
            {title}
          </Text>
          <Spacer height={5} />
          <Text
            style={{
              fontWeight: '600',
              fontSize: 10,
              color: '#68686c',
            }}>
            {startCase(developer)}
          </Text>
          <View></View>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
