import { useNostr } from '@cmdcode/use-nostr'
import Error        from './components/Error/index.js'
import Events       from './components/Events/index.js'
import Login        from './components/Login/index.js'
import UserProfile  from './components/Profile/index.js'
import RelayList    from './components/RelayList/index.js'
import DemoRoom     from './components/Room/index.js'

export default function App () {
  const { store } = useNostr()

  return (
    <div className='App'>
      <Error />
      <RelayList />
      {store.isConnected && 
        <>
          {!store.profile && <Login /> || <UserProfile />}
          <Events />
          {/* <DemoRoom /> */}
        </>
      }
    </div>
  )
}
