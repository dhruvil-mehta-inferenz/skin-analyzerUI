import './css/App.css'
import Layout from './Components/Layout/Layout'
import MobileLayout from './Components/Layout/MobileLayout'
import { isBrowser, isMobile } from 'react-device-detect';
import CameraView from './Components/Camera/CameraView';
import MobileCameraView from './Components/Camera/MobileCameraView';
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
