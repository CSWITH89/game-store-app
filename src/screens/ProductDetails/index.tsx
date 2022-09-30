import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  StyleSheet,
  Pressable,
} from 'react-native';
import ScreenView from 'components/templates/ScreenView';
import {Spacer} from 'components';
import {useNavigation} from '@react-navigation/native';
import ArrowLeft from 'assets/images/ArrowLeft.svg';

const ProductDetails = ({route}: any) => {
  const productData = route.params;
  const navigation = useNavigation();

  return (
    <ScreenView>
      <ImageBackground
        style={styles.image}
        source={{uri: productData.background_image}}
      />
      <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
        <ArrowLeft height={30} width={30} />
      </Pressable>
      <View style={styles.informationContainer}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.categoryTitle}>
          {productData.name}
        </Text>
        <Spacer height={10} />
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.secondaryText}>
          {productData.tags[0].name}
        </Text>
        <Spacer height={20} />
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.secondaryText}>
          Description:
        </Text>
        <Spacer height={10} />
        <ScrollView>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            placerat, justo id accumsan viverra, quam turpis blandit urna, ut
            pellentesque erat mi a magna. Nunc blandit eget nibh eu consequat.
            Nunc mi dolor, blandit sit amet purus sit amet, tempus maximus est.
            Curabitur neque orci, mollis eget interdum vitae, aliquet quis urna.
            Sed a metus gravida, semper ante sit amet, ultricies purus. Donec
            vitae erat urna. Nullam at turpis ac libero aliquam euismod eu et
            augue. Aenean suscipit eu nisi a vestibulum. Vivamus suscipit,
            ligula sit amet tempor iaculis, libero nunc consequat ex, eu
            interdum orci risus id justo. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Integer
            faucibus volutpat est id lobortis. Etiam fringilla ultrices quam ut
            pellentesque. Proin molestie scelerisque fermentum. Curabitur a
            dolor neque. Vivamus blandit et nisl tincidunt aliquet. Sed nec
            pretium nisi. Nullam sed justo vel velit viverra vestibulum. Nullam
            molestie magna vitae venenatis efficitur. Nulla consequat, urna in
            fringilla tempus, tellus mauris tempor nulla, ac consectetur dolor
            arcu in nibh. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia curae; Proin quis imperdiet tellus, quis
            lobortis ligula. Vivamus eu tellus tristique, porttitor turpis
            hendrerit, blandit diam. Phasellus bibendum porta urna, id euismod
            justo consequat id. Praesent facilisis nisi ex, vel fermentum diam
            euismod vel. Nullam mattis maximus justo. Nulla ornare cursus metus,
            non pellentesque nunc lacinia sit amet. Nam molestie elit vitae
            turpis vestibulum egestas. Cras nisl tellus, pretium eu dui a,
            faucibus luctus sapien. Proin ullamcorper turpis ante, ac ultricies
            metus ullamcorper sit amet. Nunc rutrum urna ut nisl iaculis, id
            consequat metus rutrum. Aenean ultrices, nulla suscipit tristique
            vestibulum, metus risus aliquet neque, vitae feugiat mauris massa ac
            orci. Integer feugiat consequat tortor, at condimentum nibh
            scelerisque in. Phasellus rhoncus velit sit amet enim hendrerit
            ullamcorper quis eu risus. Nulla facilisi. Aenean pharetra et sem
            sit amet blandit. Maecenas lacinia mauris id diam semper accumsan.
            Maecenas vulputate feugiat ipsum, a porttitor libero pellentesque
            ac. Duis iaculis lacinia tincidunt. Nullam rhoncus justo eget auctor
            tempus. Phasellus volutpat, risus a iaculis dignissim, diam velit
            tristique lectus, id mattis magna risus maximus magna. Curabitur
            lobortis ultricies libero euismod tincidunt. Maecenas hendrerit
            tincidunt magna, et pellentesque ante consectetur eget. Vivamus
            felis nibh, lacinia eu blandit nec, pulvinar id nisi. Donec interdum
            aliquam tortor ac consectetur. Integer eu erat lacus. Proin
            condimentum nisl sed dolor bibendum, ac pulvinar diam tristique.
            Nullam vel felis venenatis, laoreet odio accumsan, pretium quam.
            Aenean id mattis sapien. Morbi ornare pulvinar lectus, vel bibendum
            turpis posuere non. Sed lacinia scelerisque neque, ut placerat nibh
            dignissim ac. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas. Donec ut vestibulum
            sapien.
          </Text>
          <Spacer height={100} />
        </ScrollView>
      </View>
    </ScreenView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  categoryTitle: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: '700',
  },
  informationContainer: {
    backgroundColor: '#1c1c1e',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    paddingHorizontal: 25,
    paddingTop: 60,
  },
  secondaryText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#68686c',
  },
  descriptionText: {
    fontWeight: '400',
    fontSize: 18,
    color: '#FFF',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    height: 46,
    width: 46,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c1c1e',
    opacity: 0.8,
  },
});

export default ProductDetails;
