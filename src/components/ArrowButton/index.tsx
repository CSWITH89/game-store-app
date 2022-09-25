import {StyleSheet, Text, Pressable} from 'react-native';
import * as React from 'react';
import ArrowRight from 'assets/images/ArrowRight.svg';

type TArrowButtonProps = {
  text: string;
  onPress(): void;
  style?: any;
};

const ArrowButton = ({text, onPress, style}: TArrowButtonProps) => {
  return (
    <Pressable style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
      <ArrowRight fill={'#000'} height={14} width={14} />
    </Pressable>
  );
};

export default ArrowButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2a7aff',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    color: '#FFF',
    marginRight: 2,
  },
});
