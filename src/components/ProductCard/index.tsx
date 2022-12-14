import {Pressable, Text, Image, View, StyleSheet} from 'react-native';
import * as React from 'react';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'constants/Layout';
import {Spacer} from 'components';
import {useNavigation} from '@react-navigation/native';
import {TGameData} from 'constants/globalTypes';
import Heart from 'assets/images/Heart.svg';

type TProductCardProps = {
  image: string;
  title: string;
  developer: string;
  status: 'default' | 'wishlishted' | 'bought';
  currentPrice: string;
  salePrice: string | null;
  percentageDiscount: string;
  gameData: TGameData;
};

const ProductCard = ({
  image,
  title,
  developer,
  status,
  currentPrice,
  salePrice,
  percentageDiscount,
  gameData,
}: TProductCardProps) => {
  // TO-DO Status
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.pressableContainer}
      onPress={() => navigation.navigate('ProductDetails', gameData)}>
      {/* Card Wrapper */}
      <View style={styles.cardWrapper}>
        {/* Image Content  */}
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        {/* Information Wrapper */}
        <View style={styles.informationWrapper}>
          {/* Title Row */}
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.titleText}>
            {title}
          </Text>
          <Spacer height={5} />
          {/* Developer Information Row */}
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.developerText}>
            {developer}
          </Text>
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
            <Heart width={12} height={12} fill={'#68686c'} />
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
                  {`${currentPrice}???`}
                </Text>
              )}
              {salePrice && (
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.salePriceText}>
                  {`${salePrice}???`}
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
    marginVertical: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 6.0,
    elevation: 24,
  },
  cardWrapper: {
    borderRadius: 10,
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
    fontSize: 14,
    color: '#bcbcbd',
  },
  developerText: {
    fontWeight: '600',
    fontSize: 12,
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
    fontSize: 12,
    color: '#bcbcbd',
  },
  salePriceText: {
    fontWeight: '700',
    fontSize: 12,
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
