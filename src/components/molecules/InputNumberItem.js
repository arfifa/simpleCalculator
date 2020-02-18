import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'native-base';

import NumberInput from '../atoms/NumberInput';
import { theme } from '../../assets/constants';


const InputNumberItem = (props) => {
  return (
    <View style={styles.containerListInput}>
      <NumberInput onChangeText={input => props.onChangeText(input)} />
      <CheckBox style={styles.CheckBox}
        checked={props.isChecked}
        onPress={props.checkBox} />
    </View>
  )
}

const styles = StyleSheet.create({
  containerListInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  CheckBox: {
    borderColor: theme.colors.black,
    marginRight: 10
  }
})

export default InputNumberItem;
