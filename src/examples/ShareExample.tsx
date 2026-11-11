import { useState } from 'react'
import { Share } from '@capacitor/share'

export default function ShareExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      await Share.share({ title: 'Respuesta de IA', text: 'Mirá esta respuesta generada por mi aplicación.', dialogTitle: 'Compartir respuesta' })
            setResult('Se abrió el panel para compartir')
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Share</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>El panel de compartir lo proporciona el sistema operativo.</p>
  </main>
}
