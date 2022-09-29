import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import * as React from 'react';
import {ProductCard, Spacer} from 'components';
import LinearGradient from 'react-native-linear-gradient';

const CategorySection = ({
  withGradient,
  isLoading,
  categoryTitle,
  productData,
}) => {
  return (
    <LinearGradient
      colors={withGradient ? ['#237da5', '#195577'] : ['#1c1c1e', '#1c1c1e']}
      style={styles.linearGradient}>
      <View>
        <Text style={styles.categoryTitle}>{categoryTitle}</Text>
      </View>
      <Spacer height={12} />
      {isLoading && !productData ? (
        <ActivityIndicator />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.initialSpacer} />
          {productData?.results.map(product => {
            return (
              <View key={product.id} style={{marginRight: 20}}>
                <ProductCard
                  title={product.name || ''}
                  image={product.background_image || ''}
                  developer={product.tags[0].name || ''}
                  status="default"
                  currentPrice="39.99"
                />
              </View>
            );
          })}
        </ScrollView>
      )}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 18,
    paddingTop: 10,
    paddingBottom: 20,
  },
  categoryTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '700',
  },
  initialSpacer: {
    marginRight: 5,
  },
});

export default CategorySection;
