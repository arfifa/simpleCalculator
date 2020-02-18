import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux'

import { theme } from '../../../assets/constants';
import ListInputNumber from '../../organisms/ListInputNumber';
import OperationMenu from '../../organisms/OperationMenu';

class MainPage extends Component {
  render() {
    const { result } = this.props.calculator
    return (
      <View style={styles.root}>
        <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        <View style={styles.containerInput}>
          <ListInputNumber />
        </View>
        <View style={styles.containerOperator}>
          <OperationMenu />
        </View>
        <View style={styles.line} />
        <View style={styles.containerResult}>
          <Text style={styles.textResult}>Hasil:</Text>
          <Text style={styles.textResult}>{result}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    paddingHorizontal: 25
  },
  containerInput: {
    width: '100%'
  },
  containerOperator: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 15,
    width: '80%'
  },
  line: {
    width: '80%',
    borderWidth: 1,
    backgroundColor: theme.colors.black,
    alignSelf: 'flex-start',
    marginTop: 35,
  },
  containerResult: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 25,
    alignSelf: 'flex-start',
    justifyContent: "space-between"
  },
  textResult: {
    fontSize: theme.fonts.resultTitle
  }
})

function mapStateToProps(state) {
  return {
    calculator: state.calculator
  }
}

export default connect(mapStateToProps)(MainPage);