import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { input1, input2, input3 } from '../../../redux/action/calculator';

import InputNumberItem from '../../../components/molecules/InputNumberItem'

class ListInputNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: {
        value: '',
        isChecked: false
      },
      input2: {
        value: '',
        isChecked: false
      },
      input3: {
        value: '',
        isChecked: false
      }
    }
  }

  _HandleChecked1 = async () => {
    const { value } = this.state.input1
    await this.setState({
      input1: {
        ...this.state.input1,
        isChecked: !this.state.input1.isChecked
      }
    })
    const { isChecked } = this.state.input1
    console.log(isChecked);
    if (isChecked == true && value.length > 0) {
      this.props.dispatch(input1({ value, isChecked }))
    }
  }

  _HandleChecked2 = async () => {
    const { value } = this.state.input2
    await this.setState({
      input2: {
        ...this.state.input2,
        isChecked: !this.state.input2.isChecked
      }
    })
    const { isChecked } = this.state.input1
    if (isChecked == true && value.length > 0) {
      this.props.dispatch(input2({ value, isChecked }))
    }
  }

  _HandleChecked3 = async () => {
    const { value } = this.state.input3
    await this.setState({
      input3: {
        ...this.state.input3,
        isChecked: !this.state.input3.isChecked
      }
    })
    const { isChecked } = this.state.input1
    if (isChecked == true && value.length > 0) {
      this.props.dispatch(input3({ value, isChecked }))
    }
  }

  render() {
    return (
      <View>
        <InputNumberItem
          onChangeText={(input) => this.setState({
            input1: {
              ...this.state.input1,
              value: input,
              isChecked: false
            }
          })}
          checkBox={() => this._HandleChecked1()}
          isChecked={this.state.input1.isChecked}
        />
        <InputNumberItem
          onChangeText={(input) => this.setState({
            input2: {
              ...this.state.input1,
              value: input,
              isChecked: false
            }
          })}
          checkBox={() => this._HandleChecked2()}
          isChecked={this.state.input2.isChecked}
        />
        <InputNumberItem
          onChangeText={(input) => this.setState({
            input3: {
              ...this.state.input1,
              value: input,
              isChecked: false
            }
          })}
          checkBox={() => this._HandleChecked3()}
          isChecked={this.state.input3.isChecked}
        />
      </View>
    )
  }
}


function mapStateToProps(state) {
  return {
    calculator: state.calculator
  }
}

export default connect(mapStateToProps)(ListInputNumber);
