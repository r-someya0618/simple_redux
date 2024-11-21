export const increment = (number) => ({
  type: 'INCREMENT',
  payload: number, // 引数を受け取る事もできる。payloadを用いるのが慣例
})
export const decrement = () => ({
  type: 'DECREMENT',
})
export const login = () => ({
  type: 'LOGIN',
})
