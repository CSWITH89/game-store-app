import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
} from 'react-native';
import {SCREEN_HEIGHT} from '../../constants/Layout';
import LinearGradient from 'react-native-linear-gradient';
import Spacer from '../Spacer';
import ArrowButton from '../ArrowButton';

// type TCardData = {
//   type: 'poster' | 'game';
//   image: string;
//   title?: string;
//   description?: string;
//   ctaText?: string;
//   gameData: any;
// };

type TCarouselCardProps = {
  item: any;
  index: number;
};

const CarouselCard = ({
  item: {type, image, title, description, ctaText, gameData},
  index,
}: TCarouselCardProps) => {
  if (type === 'poster') {
    return (
      <Pressable
        style={styles.slide}
        onPress={() => console.log('Navigate ', gameData)}>
        <Image
          source={{uri: image}}
          resizeMode="cover"
          style={styles.posterImage}
        />
      </Pressable>
    );
  } else if (type === 'game') {
    return (
      <Pressable
        key={index}
        style={styles.slide}
        onPress={() => console.log('Navigate ', gameData)}>
        <ImageBackground
          source={{uri: image}}
          resizeMode="cover"
          style={styles.gameImage}>
          {ctaText && (
            <View style={styles.buttonAnchor}>
              <ArrowButton
                text={ctaText}
                onPress={() => console.log('Navigate ', gameData)}
              />
            </View>
          )}

          <View style={styles.gameInfoText}>
            <LinearGradient
              colors={['#237da5', '#195577']}
              style={styles.linearGradient}>
              <Text style={styles.gameTitleText}>{title}</Text>
              <Spacer height={4} />
              <Text
                style={styles.gameDescriptionText}
                numberOfLines={2}
                ellipsizeMode="tail">
                {description}
              </Text>
            </LinearGradient>
          </View>
        </ImageBackground>
      </Pressable>
    );
  } else {
  }
};

const styles = StyleSheet.create({
  slide: {
    height: SCREEN_HEIGHT * 0.24,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  gameImage: {
    height: '100%',
    width: '100%',
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 4,
    paddingBottom: 8,
  },
  gameInfoText: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  gameTitleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFF',
  },
  buttonAnchor: {
    position: 'absolute',
    left: 14,
    top: 14,
  },
  gameDescriptionText: {
    fontSize: 14,
    color: '#FFF',
  },
  posterImage: {
    height: '100%',
    width: '100%',
  },
});

export default CarouselCard;
