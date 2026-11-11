import { useState } from 'react'
import { Geolocation } from '@capacitor/geolocation'

export default function GeolocationExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      const permission = await Geolocation.requestPermissions()
            const position = await Geolocation.getCurrentPosition({ enableHighAccuracy: true, timeout: 15000 })
            setResult(JSON.stringify({ permission, latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy }, null, 2))
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Geolocation</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Solicitá ubicación solo cuando sea necesaria y explicá su uso.</p>
  </main>
}
