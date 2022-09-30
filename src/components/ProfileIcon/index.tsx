import {Pressable, StyleSheet, Image} from 'react-native';
import React from 'react';

type TProfileIconProps = {
  style: any;
  onPress(): void;
};

const ProfileIcon = ({style, onPress}: TProfileIconProps) => {
  return (
    <Pressable style={[styles.icon, style]} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.hobbydb.com/processed_uploads/catalog_item_photo/catalog_item_photo/image/830684/Batman_%2528Black_and_Navy%2529_Vinyl_Art_Toys_47ea9669-21b3-4da1-a1b2-ccf7534217e8.jpg',
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 32,
    width: 32,
    borderRadius: 100,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});

export default ProfileIcon;
