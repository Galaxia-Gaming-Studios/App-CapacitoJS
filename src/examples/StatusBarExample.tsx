import { useState } from 'react'
import { StatusBar, Style } from '@capacitor/status-bar'

export default function StatusBarExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      await StatusBar.setStyle({ style: Style.Dark })
            setResult('Estilo de barra de estado actualizado')
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>StatusBar</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>El comportamiento y las opciones varían entre plataformas.</p>
  </main>
}
