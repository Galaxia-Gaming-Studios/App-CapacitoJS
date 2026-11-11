import { useState } from 'react'
import { Haptics, ImpactStyle } from '@capacitor/haptics'

export default function HapticsExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      await Haptics.impact({ style: ImpactStyle.Medium })
            setResult('Vibración háptica ejecutada')
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Haptics</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Depende del hardware y de la plataforma.</p>
  </main>
}
