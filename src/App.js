import logo from './logo.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, login } from './actions'

function App() {
  const counter = useSelector((state) => state.counter)
  const isLoggedIn = useSelector((state) => state.isLogin)
  const dispatch = useDispatch()

  return (
    <div className='App'>
      <h1>Redux</h1>
      <h3>カウント: {counter}</h3>
      <div>
        {/* 引数はpayloadとしてreducerに渡される */}
        <button onClick={() => dispatch(increment(7))}>+1</button>
        <button onClick={() => dispatch(decrement())}>-2</button>
      </div>
      <h3>{isLoggedIn ? 'ログイン済み' : '未ログイン'}</h3>
      {isLoggedIn ? (
        <button onClick={() => dispatch(login())}>ログアウト</button>
      ) : (
        <button onClick={() => dispatch(login())}>ログイン</button>
      )}
    </div>
  )
}

export default App
