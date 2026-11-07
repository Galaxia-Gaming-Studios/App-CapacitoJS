import { Link } from 'react-router'

const links = [
  ['App lifecycle', '/app'], ['Camera', '/camera'], ['Geolocation', '/geolocation'],
  ['Local notifications', '/local-notifications'], ['Push notifications', '/push-notifications'],
  ['Filesystem', '/filesystem'], ['Preferences', '/preferences'], ['Network', '/network'],
  ['Device', '/device'], ['Haptics', '/haptics'], ['Keyboard', '/keyboard'],
  ['Status bar', '/status-bar'], ['Splash screen', '/splash-screen'],
  ['Clipboard', '/clipboard'], ['Share', '/share'], ['Browser', '/browser'],
  ['Dialog', '/dialog'], ['Toast', '/toast'], ['Action sheet', '/action-sheet'],
] as const

export default function Home() {
  return <main>
    <h1>Ejemplos de Capacitor 8</h1>
    <p>Elegí una función. Los plugins nativos deben probarse en Android/iOS; algunas funciones no operan en el navegador.</p>
    <ul>{links.map(([label, path]) => <li key={path}><Link to={path}>{label}</Link></li>)}</ul>
  </main>
}
