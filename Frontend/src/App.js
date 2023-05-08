import './css/App.css'
import Layout from './Components/Layout'
import MobileLayout from './Components/MobileLayout'
import { isBrowser, isMobile } from 'react-device-detect';
import CameraView from './Components/CameraView';
import MobileCameraView from './Components/MobileCameraView';
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/Layout",
      element: isBrowser ? <Layout /> : isMobile ? <MobileLayout /> : "",
    },
    {
      path: "/",
      element: isBrowser ? <CameraView /> : isMobile ? <MobileCameraView /> : '',
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
