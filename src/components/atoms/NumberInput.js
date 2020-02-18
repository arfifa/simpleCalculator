import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { theme } from '../../assets/constants';

const NumberInput = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        type="number"
        keyboardType="numeric"
        onChangeText={input => props.onChangeText(input)}
        style={styles.textInput}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '80%'
  },
  textInput: {
    borderWidth: 2,
    borderColor: theme.colors.black,
    paddingHorizontal: 10
  }
})

export default NumberInput;
