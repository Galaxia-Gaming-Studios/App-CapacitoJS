import { useState } from 'react'
import { Clipboard } from '@capacitor/clipboard'

export default function ClipboardExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      await Clipboard.write({ string: 'Respuesta de IA copiada al portapapeles' })
            const copied = await Clipboard.read()
            setResult(`Portapapeles: ${copied.value}`)
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Clipboard</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Leer el portapapeles puede estar restringido por el sistema operativo.</p>
  </main>
}
