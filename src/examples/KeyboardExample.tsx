import { useState } from 'react'
import { Keyboard } from '@capacitor/keyboard'

export default function KeyboardExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      await Keyboard.hide()
            setResult('Se solicitó ocultar el teclado')
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Keyboard</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Probalo en Android/iOS con el teclado abierto.</p>
  </main>
}
