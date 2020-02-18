export const plusOperation = (result) => {
  return {
    type: 'PLUS_OPERATION',
    payload: result
  }
}

export const minusOperation = (result) => {
  return {
    type: 'MINUS_OPERATION',
    payload: result
  }
}

export const MultiplicationOperation = (result) => {
  return {
    type: 'MULTIPLICATION_OPERATION',
    payload: result
  }
}

export const DivisionOperation = (result) => {
  return {
    type: 'DIVISION_OPERATION',
    payload: result
  }
}

export const input1 = (input) => {
  console.log(input);

  return {
    type: 'INPUT_1',
    payload: input
  }
}

export const input2 = (input) => {
  return {
    type: 'INPUT_2',
    payload: input
  }
}

export const input3 = (input) => {
  return {
    type: 'INPUT_3',
    payload: input
  }
}