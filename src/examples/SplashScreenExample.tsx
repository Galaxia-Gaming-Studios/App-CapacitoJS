import { useState } from 'react'
import { SplashScreen } from '@capacitor/splash-screen'

export default function SplashScreenExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      await SplashScreen.hide()
            setResult('Se solicitó ocultar la pantalla de inicio')
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>SplashScreen</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Normalmente se oculta automáticamente. Controlala si configuraste launchAutoHide: false.</p>
  </main>
}
