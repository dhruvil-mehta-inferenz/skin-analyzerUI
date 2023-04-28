import './css/App.css'
import Layout from './Components/Layout'
import MobileLayout from './Components/MobileLayout'
import { isBrowser, isMobile } from 'react-device-detect';
import CameraView from './Components/CameraView';

function App() {
  if (isMobile) {
    return (
      // <MobileLayout />
      <CameraView/>
    )
  }
  else if (isBrowser) {
    return (
      // <Layout />
      <CameraView/>
    )
  }
}

export default App
