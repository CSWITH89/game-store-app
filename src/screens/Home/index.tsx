import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import ScreenView from 'components/templates/ScreenView';
import {getProductDataAPI} from 'contexts/api/endpoints';
import {ProductCard, RNCarousel} from 'components';
import {TProduct} from 'constants/globalTypes';
import {Spacer} from 'components';
import LinearGradient from 'react-native-linear-gradient';

const renderProduct = (item: TProduct) => {
  return <ProductCard item={item} />;
};

const Home = () => {
  const [productData, setProductData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const loadProductData = async () => {
      setIsLoading(true);
      const newData = await getProductDataAPI();
      setProductData(newData);
      setIsLoading(false);
    };

    loadProductData();
  }, []);

  return (
    <ScreenView hasScroll>
      <Spacer height={20} />
      <RNCarousel />
      <LinearGradient
        colors={['#237da5', '#195577']}
        style={styles.linearGradient}>
        <View>
          <Text
            style={{
              color: '#FFF',
              fontSize: 18,
              fontWeight: '700',
            }}>
            Featured & Recommended
          </Text>
        </View>
        <Spacer height={12} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{marginRight: 5}} />
          <ProductCard
            title="Resident Evil Village"
            image="https://cdn.cdkeys.com/700x700/media/catalog/product/r/e/resident_evil_village_pc_cover.jpg"
            developer="CAPCOM"
            status="default"
            currentPrice="39.99"
          />
          <View style={{marginRight: 20}} />
          <ProductCard
            image="https://image.api.playstation.com/vulcan/ap/rnd/202205/2800/W5uSEsW7yefCNTHatS03v5q7.png"
            title="Call of Duty®: Modern Warfare® II"
            developer="Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios"
            status="default"
            currentPrice="69.99"
          />
          <View style={{marginRight: 20}} />
          <ProductCard image="https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg" />
          <View style={{marginRight: 20}} />

          <ProductCard
            image="https://image.api.playstation.com/vulcan/ap/rnd/202205/2800/W5uSEsW7yefCNTHatS03v5q7.png"
            title="Call of Duty®: Modern Warfare® II"
            developer="Infinity Ward, Raven Software, Beenox, Treyarch, High Moon Studios"
            status="default"
            currentPrice="69.99"
          />
          <View style={{marginRight: 20}} />
          <ProductCard />
          <View style={{marginRight: 20}} />
          <ProductCard />
          <View style={{marginRight: 20}} />
        </ScrollView>
      </LinearGradient>
      <Spacer height={5} />

      {/* {!isLoading && productData.length > 0 && (
        <FlatList
          data={productData}
          renderItem={({item}) => renderProduct(item)}
          numColumns={2}
          keyExtractor={index => index}
        />
      )}

      {isLoading ? <ActivityIndicator /> : null} */}
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 18,
    paddingTop: 10,
    paddingBottom: 20,
  },
});

export default Home;
