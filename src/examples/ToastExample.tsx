import { useState } from 'react'
import { Toast } from '@capacitor/toast'

export default function ToastExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      await Toast.show({ text: 'Respuesta guardada correctamente', duration: 'short' })
            setResult('Toast mostrado')
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Toast</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Mensajes breves; no reemplazan explicaciones de errores importantes.</p>
  </main>
}
