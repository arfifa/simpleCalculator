import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from '../../assets/constants';

const OperationIconItem = (props) => {
  return (
    <TouchableOpacity style={styles.container}
      onPress={props.onPress}>
      <Icon name={props.iconName} size={20} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 55,
    height: 40,
    borderWidth: 2,
    borderColor: theme.colors.black,
    borderRadius: 10
  }
})

export default OperationIconItem;
