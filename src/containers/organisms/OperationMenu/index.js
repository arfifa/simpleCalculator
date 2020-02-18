import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import OperationIconItem from '../../../components/molecules/OperationIconItem';

class OperationMenu extends Component {

  _handleOperation = (operation) => {
    if (this.props.calculator.input1.isChecked) {
      alert('ok')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <OperationIconItem iconName="plus"
          onPress={(minus) => this._handleOperation(minus)} />
        <OperationIconItem iconName="minus"
          onPress={(plus) => this._handleOperationI(plus)} />
        <OperationIconItem iconName="close"
          onPress={(multiplication) => this._handleOperation(multiplication)} />
        <OperationIconItem iconName="division"
          onPress={(division) => this._handleOperatio(division)} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    width: '100%'
  }
})

function mapStateToProps(state) {
  return {
    calculator: state.calculator
  }
}

export default connect(mapStateToProps)(OperationMenu);
