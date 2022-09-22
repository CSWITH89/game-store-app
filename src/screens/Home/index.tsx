import * as React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import ScreenView from 'components/templates/ScreenView';
import {getProductDataAPI} from 'contexts/api/endpoints';
import {ProductCard} from 'components';
import {TProduct} from '../../constants/globalTypes';

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
    <ScreenView>
      <ProductCard
        item={{
          id: 1,
          title: 'Nerf N-Strike Blazin Bow Blaster',
          description:
            "Hit your mark with the real bow action of the Blazin' Bow blaster! Pull it back and let fly with one of the 3 giant foam arrows at targets up to 40 feet away. The blaster's 20-inch wingspan gives it big launching power, and you can reload quickly from the blaster's arrow storage compartment! Take aim and sharpen your archery skills with the Blazin' Bow blaster!",
          specification:
            "Hit your mark with the real bow action of the Blazin' Bow blaster! Pull it back and let fly with one of the 3 giant foam arrows at targets up to 40 feet away. The blaster's 20-inch wingspan gives it big launching power, and you can reload quickly from the blaster's arrow storage compartment! Take aim and sharpen your archery skills with the Blazin' Bow blaster!",
          price: 19.99,
          images: [
            {
              thumb:
                'https://vignette.wikia.nocookie.net/nerf/images/f/f6/Nerf-blazin-bow.jpg/revision/latest/scale-to-width-down/185?cb=20170916044554',
              original:
                'https://vignette.wikia.nocookie.net/nerf/images/f/f6/Nerf-blazin-bow.jpg/revision/latest/scale-to-width-down/1000?cb=20170916044554',
            },
            {
              thumb:
                'https://vignette.wikia.nocookie.net/nerf/images/f/f2/BlazinBow_box.jpg/revision/latest/scale-to-width-down/185?cb=20160913005113',
              original:
                'https://vignette.wikia.nocookie.net/nerf/images/f/f2/BlazinBow_box.jpg/revision/latest?cb=20160913005113',
            },
            {
              thumb:
                'https://vignette.wikia.nocookie.net/nerf/images/5/5c/BlazinBow_model.jpg/revision/latest/scale-to-width-down/185?cb=20160913005141',
              original:
                'https://vignette.wikia.nocookie.net/nerf/images/5/5c/BlazinBow_model.jpg/revision/latest?cb=20160913005141',
            },
          ],
        }}
      />
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

export default Home;
