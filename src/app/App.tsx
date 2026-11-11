import { RouterProvider } from 'react-router'
import { router } from './router/Router'
import './style.css';

export default function App() {
  return <RouterProvider router={router} />
}
