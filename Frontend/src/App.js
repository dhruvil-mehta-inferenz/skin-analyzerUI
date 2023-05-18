import './css/App.css'
import Layout from './Components/Layout/Layout'
// import MobileLayout from './Components/Layout/MobileLayout'
import { isBrowser, isMobile } from 'react-device-detect';
import CameraView from './Components/Camera/CameraView';
// import MobileCameraView from './Components/Camera/MobileCameraView';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import States from "./Utils/States/States"

function App() {
  const router = createBrowserRouter([
    {
      path: "/Layout",
      element: isBrowser ? <> <States> <Layout /></States></> : isMobile ? "<> <States> <MobileLayout /></States></>" : "",
    },
    {
      path: "/",
      element: isBrowser ? <> <States> <CameraView /></States></> : isMobile ? "<> <States> <MobileCameraView /></States></> ": '',
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App
