import { useState } from 'react'
import { Browser } from '@capacitor/browser'

export default function BrowserExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      await Browser.open({ url: 'https://capacitorjs.com/docs' })
            setResult('Se solicitó abrir la documentación')
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Browser</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Abrí únicamente URLs confiables y validadas por tu aplicación.</p>
  </main>
}
