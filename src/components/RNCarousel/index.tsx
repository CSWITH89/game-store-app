import * as React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {StyleSheet, View} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/Layout';
import CarouselCard from '../CarouselCard';

const RNCarousel = ({items}) => {
  const [state, setState] = React.useState({
    activeIndex: 0,
  });

  const carouselItems = [
    {
      type: 'poster',
      image:
        'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/41316928/7a96241dbe13ab18376b9a57dd53d1d8a7417e68.jpg',
      gameData: {},
    },
    {
      title: 'PAYDAY 2',
      description:
        'Pull off the heist of the century with our daily flash deal. Lock and load!',
      type: 'game',
      ctaText: 'Up to -50%',
      image:
        'https://cdn.windowsreport.com/wp-content/uploads/2020/06/payday-2-lag-930x620.jpg',
      gameData: {},
    },
    {
      title: 'Wolfenstein Weekend Sale',
      description:
        'Limited time offer on the epic Wolfenstein franchise. Storm Castle Wolfenstein!',
      type: 'game',
      ctaText: 'Up to -80%',
      image:
        'https://cdn-0.studybreaks.com/wp-content/uploads/2017/09/AOWLFN2_CVR_4x6_SOL.0.jpg?ezimgfmt=rs:0x0/rscb6/ngcb6/notWebP',
      gameData: {},
    },
    {
      title: 'Tacticon Convention & Sale',
      ctaText: 'Up to -75%',
      description:
        'Grab a huge deal with our limited time offer on these best-in-class strategy games',
      type: 'game',
      image:
        'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans//42427156/b5a86f1c78b6be7bbff4609ac224ede590674d94.png',
      gameData: {},
    },
    {
      type: 'poster',
      image:
        'https://cdn.cloudflare.steamstatic.com/steam/apps/1172470/capsule_616x353.jpg',
      gameData: {},
    },
  ];

  return (
    <View>
      <Carousel
        data={carouselItems}
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
          containerStyle={styles.paginationContainer}
          dotsLength={carouselItems.length}
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
  paginationContainer: {
    // width: SCREEN_WIDTH * 0.25,
  },
  linearGradient: {
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: 4,
    paddingBottom: 8,
  },
});

export default RNCarousel;
