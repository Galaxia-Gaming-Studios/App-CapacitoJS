import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import Home2 from '../pages/Home2'
import AppExample from '../examples/AppExample'
import CameraExample from '../examples/CameraExample'
import GeolocationExample from '../examples/GeolocationExample'
import LocalNotificationsExample from '../examples/LocalNotificationsExample'
import PushNotificationsExample from '../examples/PushNotificationsExample'
import FilesystemExample from '../examples/FilesystemExample'
import PreferencesExample from '../examples/PreferencesExample'
import NetworkExample from '../examples/NetworkExample'
import DeviceExample from '../examples/DeviceExample'
import HapticsExample from '../examples/HapticsExample'
import KeyboardExample from '../examples/KeyboardExample'
import StatusBarExample from '../examples/StatusBarExample'
import SplashScreenExample from '../examples/SplashScreenExample'
import ClipboardExample from '../examples/ClipboardExample'
import ShareExample from '../examples/ShareExample'
import BrowserExample from '../examples/BrowserExample'
import DialogExample from '../examples/DialogExample'
import ToastExample from '../examples/ToastExample'
//import ActionSheetExample from '../examples/ActionSheetExample'

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/home2', element: <Home2 /> },
  { path: '/app', element: <AppExample /> },
  { path: '/camera', element: <CameraExample /> },
  { path: '/geolocation', element: <GeolocationExample /> },
  { path: '/local-notifications', element: <LocalNotificationsExample /> },
  { path: '/push-notifications', element: <PushNotificationsExample /> },
  { path: '/filesystem', element: <FilesystemExample /> },
  { path: '/preferences', element: <PreferencesExample /> },
  { path: '/network', element: <NetworkExample /> },
  { path: '/device', element: <DeviceExample /> },
  { path: '/haptics', element: <HapticsExample /> },
  { path: '/keyboard', element: <KeyboardExample /> },
  { path: '/status-bar', element: <StatusBarExample /> },
  { path: '/splash-screen', element: <SplashScreenExample /> },
  { path: '/clipboard', element: <ClipboardExample /> },
  { path: '/share', element: <ShareExample /> },
  { path: '/browser', element: <BrowserExample /> },
  { path: '/dialog', element: <DialogExample /> },
  { path: '/toast', element: <ToastExample /> },
  //{ path: '/action-sheet', element: <ActionSheetExample /> },
])
