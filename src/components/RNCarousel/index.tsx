import * as React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants/Layout';
import LinearGradient from 'react-native-linear-gradient';

const RNCarousel = ({items}) => {
  const [state, setState] = React.useState({
    activeIndex: 0,
  });

  const carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
      type: 'poster',
      image:
        'https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/clans/41316928/7a96241dbe13ab18376b9a57dd53d1d8a7417e68.jpg',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
      type: 'game',
      image:
        'https://cdn.windowsreport.com/wp-content/uploads/2020/06/payday-2-lag-930x620.jpg',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
      type: 'game',
      image:
        'https://cdn.windowsreport.com/wp-content/uploads/2020/06/payday-2-lag-930x620.jpg',
    },
    {
      title: 'Item 4',
      text: 'Text 4',
      type: 'game',
      image:
        'https://cdn.windowsreport.com/wp-content/uploads/2020/06/payday-2-lag-930x620.jpg',
    },
    {
      title: 'Item 5',
      text: 'Text 5',
      type: 'game',
      image:
        'https://cdn.windowsreport.com/wp-content/uploads/2020/06/payday-2-lag-930x620.jpg',
    },
  ];
  // const renderPagination = () => {
  //   return (
  //     <Pagination
  //       dotsLength={carouselItems.length}
  //       activeDotIndex={state.activeIndex}
  //       dotStyle={styles.dot}
  //       inactiveDotStyle={
  //         {
  //           // Define styles for inactive dots here
  //         }
  //       }
  //       inactiveDotOpacity={0.4}
  //       inactiveDotScale={0.6}
  //     />
  //   );
  // };

  const renderItem = ({item, index}) => {
    if (item.type === 'poster') {
      return (
        <View style={styles.slide}>
          <Image
            source={{uri: item.image}}
            resizeMode="cover"
            style={{height: '100%', width: '100%'}}
          />
        </View>
      );
    }
    return (
      <View style={styles.slide}>
        <ImageBackground
          source={{uri: item.image}}
          resizeMode="cover"
          style={{height: '100%', width: '100%'}}>
          <View
            style={{
              backgroundColor: 'black',
              position: 'absolute',
              height: '35%',
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <LinearGradient
              colors={['#237da5', '#195577']}
              style={styles.linearGradient}>
              <Text>Sign in with Facebook</Text>
            </LinearGradient>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View>
      <Carousel
        data={carouselItems}
        renderItem={renderItem}
        onSnapToItem={index => setState({activeIndex: index})}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH * 0.85}
        autoplay
        autoplayDelay={6000}
        autoplayInterval={5000}
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
  },
});

export default RNCarousel;
