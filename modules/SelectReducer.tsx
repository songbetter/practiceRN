const SET_ITEM = 'SET_ITEM'
const RESET = 'RESET'

export type SelectProps = {
  gender?: string
  mood?: string
  color?: string
}

export const setItem = (select: SelectProps) => ({
  type: SET_ITEM,
  payload: select,
})

export const resetItem = () => ({
  type: RESET,
})
// type statusCodeAction = ReturnType<typeof getStatusCode>

export const INITIAL_STATE: SelectProps = {
  gender: '',
  mood: '',
  color: '',
}

export default function SelectReducer(
  state: SelectProps = INITIAL_STATE,
  action: any,
): SelectProps {
  const { type, payload } = action

  switch (type) {
    case SET_ITEM:
      return {
        ...state,
        ...payload,
      }
    case RESET:
      return INITIAL_STATE
    default:
      return state
  }
}

const newState = (payload: any) =>
  Object.keys(payload).forEach(function (key) {
    return { [key]: payload[key] }
  })
