const initialState = {
  result: 5,
  input1: {
    value: null,
    isChecked: false
  },
  input2: {
    value: null,
    isChecked: false
  },
  input3: {
    value: null,
    isChecked: false
  }
}

const calculator = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS_OPERATION':
      return {
        ...state,
        result: action.payload
      }
    case 'MINUS_OPERATION':
      return {
        ...state,
        result: action.payload
      }
    case 'MULTIPLICATION_OPERATION':
      return {
        ...state,
        result: action.payload
      }
    case 'DIVISION_OPERATION':
      return {
        ...state,
        result: action.payload
      }
    case 'INPUT_1':
      return {
        ...state,
        input1: action.payload
      }
    case 'INPUT_2':
      return {
        ...state,
        input2: action.payload
      }
    case 'INPUT_3':
      return {
        ...state,
        input2: action.payload
      }
    default:
      return state
  }
}

export default calculator;
