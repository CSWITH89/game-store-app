import * as React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {StyleSheet, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/Layout';
import CarouselCard from '../CarouselCard';
import {TGameData} from 'constants/globalTypes';

type TCarouselItem = {
  title: string;
  description: string;
  type: 'game' | 'poster';
  ctaText: string;
  image: string;
  gameData: TGameData;
};

type TRNCarouselProps = {
  items: TCarouselItem[];
};

const RNCarousel = ({items}: TRNCarouselProps) => {
  const [state, setState] = React.useState({
    activeIndex: 0,
  });

  return (
    <View>
      <Carousel
        data={items}
        renderItem={CarouselCard}
        onSnapToItem={index => setState({activeIndex: index})}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH * 0.85}
        autoplay
        autoplayDelay={10000}
        autoplayInterval={10000}
        loop
      />
      <View style={styles.paginationRow}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={state.activeIndex}
          dotStyle={styles.dot}
          inactiveDotStyle={styles.inactiveDot}
          inactiveDotOpacity={1}
          inactiveDotScale={1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#287dff',
  },
  inactiveDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#3a3a3c',
  },
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
  title: {
    fontSize: 30,
  },
  paginationRow: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 4,
    paddingBottom: 8,
  },
});

export default RNCarousel;
