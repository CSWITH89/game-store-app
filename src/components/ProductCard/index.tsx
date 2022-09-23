/* eslint-disable react-native/no-inline-styles */
import {Pressable, Text, Image, View, StyleSheet} from 'react-native';
import * as React from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'constants/Layout';
import {Spacer} from 'components';
// import {useNavigation} from '@react-navigation/native';
import {TProduct} from '../../constants/globalTypes';
import Heart from 'assets/images/Heart.svg';

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
  // const salePrice = '14.99';
  const salePrice = null;
  const percentageDiscount = '50';

  // const navigation = useNavigation();
  return (
    // TO-DO: Navigation
    <Pressable
      style={styles.pressableContainer}
      onPress={() => console.log('Navigate to product details')}>
      {/* Card Wrapper */}
      <View style={styles.cardWrapper}>
        {/* Image Content  */}
        <Image
          style={styles.image}
          source={{
            uri: 'https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg',
          }}
        />
        {/* Information Wrapper */}
        <View style={styles.informationWrapper}>
          {/* Title Row */}
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.titleText}>
            {title}
          </Text>
          <Spacer height={5} />
          {/* Developer Information Row */}
          <Text style={styles.developerText}>{developer}</Text>
          {/* Discount Row */}
          <View>
            {percentageDiscount ? (
              <Spacer height={12} />
            ) : (
              <Spacer height={12} />
            )}
          </View>
          {/* Wishlist & Price Row */}
          <View style={styles.priceRow}>
            <Heart width={10} height={10} fill={'#68686c'} />
            {/* Current Price & Sale Price */}
            <View style={styles.pricesContainer}>
              {currentPrice && (
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[
                    styles.currentPriceText,
                    salePrice ? styles.inactiveText : null,
                  ]}>
                  {`${currentPrice}€`}
                </Text>
              )}
              {salePrice && (
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.salePriceText}>
                  {`${salePrice}€`}
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

// default is no sale price

// If there is a sale price we need to unhighlight current price and strikethrough
// if there is a sale price it need to be active highlight and current price inactive and striked through

const styles = StyleSheet.create({
  pressableContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  cardWrapper: {
    borderRadius: 5,
    width: SCREEN_WIDTH * 0.38,
    overflow: 'hidden',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT * 0.26,
  },
  informationWrapper: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: '#3a3a3c',
  },
  titleText: {
    fontWeight: '700',
    fontSize: 12,
    color: '#bcbcbd',
  },
  developerText: {
    fontWeight: '600',
    fontSize: 10,
    color: '#68686c',
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pricesContainer: {
    flexDirection: 'row',
  },
  currentPriceText: {
    fontWeight: '700',
    fontSize: 10,
    color: '#bcbcbd',
  },
  salePriceText: {
    fontWeight: '700',
    fontSize: 10,
    color: '#bcbcbd',
  },
  inactiveText: {
    color: '#68686c',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    marginRight: 5,
  },
});

export default ProductCard;
