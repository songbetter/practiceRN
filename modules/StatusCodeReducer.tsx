const GET_CODE = 'GET_CODE'
const RESET = 'RESET'

export type StatusCodeProps = {
  code: number
}

const getStatusCode = (code: StatusCodeProps) => ({
  type: GET_CODE,
  payload: code,
})
// type statusCodeAction = ReturnType<typeof getStatusCode>

export const INITIAL_STATE: StatusCodeProps = {
  code: 404,
}

export default function StatusCodeReducer(
  state: StatusCodeProps = INITIAL_STATE,
  action: any,
): StatusCodeProps {
  const { type, payload } = action

  switch (type) {
    case GET_CODE:
      return {
        code: payload,
      }
    case RESET:
      return INITIAL_STATE
    default:
      return state
  }
}
