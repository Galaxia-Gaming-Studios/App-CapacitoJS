import { useState } from 'react'
import { Device } from '@capacitor/device'

export default function DeviceExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      const info = await Device.getInfo()
            const id = await Device.getId()
            setResult(JSON.stringify({ info, id }, null, 2))
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Device</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Evitá recopilar identificadores del dispositivo si no son necesarios.</p>
  </main>
}
