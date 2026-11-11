import { useState } from 'react'
import { App as CapacitorApp } from '@capacitor/app'

export default function AppExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      const info = await CapacitorApp.getInfo()
            setResult(JSON.stringify(info, null, 2))
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>App</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Muestra información de la aplicación instalada.</p>
  </main>
}
