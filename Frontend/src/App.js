import './css/App.css'
import Layout from './Components/Layout'
import MobileLayout from './Components/MobileLayout'
import { isBrowser, isMobile } from 'react-device-detect';

function App() {
  if (isMobile) {
    return (
      <MobileLayout />
    )
  }
  else if (isBrowser) {
    return (
      <Layout />
    )
  }
}

export default App
