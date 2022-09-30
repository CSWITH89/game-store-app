import * as React from 'react';
import ScreenView from 'components/templates/ScreenView';
import {RNCarousel, CategorySection, Spacer} from 'components';
import {getGamesList} from 'contexts/api/endpoints';
import {Alert} from 'react-native';
import {TGameResponse} from 'constants/globalTypes';
import {carouselItems} from 'constants/ProductData';

const Home = () => {
  const [productData, setProductData] = React.useState<TGameResponse | null>(
    null,
  );
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
      <RNCarousel items={carouselItems} />
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
