import { useState } from 'react'
import { Network } from '@capacitor/network'

export default function NetworkExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      const status = await Network.getStatus()
            setResult(JSON.stringify(status, null, 2))
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Network</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>También podés escuchar networkStatusChange para detectar cambios de conexión.</p>
  </main>
}
