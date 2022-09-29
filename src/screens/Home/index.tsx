import * as React from 'react';
import ScreenView from 'components/templates/ScreenView';
import {RNCarousel, CategorySection, Spacer} from 'components';
import {getGamesList} from 'contexts/api/endpoints';
import {Alert} from 'react-native';
// "count": 802376,
//   "description": "",
//   "filters": {

//   },
//   "next": "https://api.rawg.io/api/games?key=9aa8f751f06c4c32b1f87f7a0c9bfdd8&page=2",
//   "nofollow": false,
//   "nofollow_collections": [
//     "stores"
//   ],
//   "noindex": false,
//   "previous": null,
//   "results": [
// "seo_description": "",
// "seo_h1": "All Games",
// "seo_keywords": "",
// "seo_title": "All Games"

const Home = () => {
  const [productData, setProductData] = React.useState<any[] | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const newData = await getGamesList();
        setProductData(newData);
      } catch (error) {
        Alert.alert('An error was encountered. Please try again later');
        console.log('Error: ', error);
      } finally {
        setIsLoading(false);
      }
    };
    if (!productData) {
      loadData();
    }
  }, [productData]);

  return (
    <ScreenView hasScroll>
      <Spacer height={20} />
      <RNCarousel />
      <CategorySection
        withGradient
        isLoading={isLoading}
        categoryTitle="Featured & Recommended"
        productData={productData}
      />
      <Spacer height={30} />
      <CategorySection
        isLoading={isLoading}
        categoryTitle="New Releases"
        productData={productData}
      />
      <Spacer height={100} />
    </ScreenView>
  );
};

export default Home;
