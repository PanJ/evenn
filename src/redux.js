const SET_FIELD = 'SET_FIELD'
const RESET_FIELDS = 'RESET_FIELDS'

const initialState = {
  name: '',
  email: '',
  ticketType: '',
  food: false,
  agreeTerms: false,
  countdown: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIELD:
      return {
        ...state,
        [action.key]: action.value
      }
    case RESET_FIELDS:
      return initialState
    default:
      return state
  }
}

export const setField = (key, value) => ({
  type: SET_FIELD,
  key,
  value
})

export const resetFields = () => ({
  type: RESET_FIELDS
})
