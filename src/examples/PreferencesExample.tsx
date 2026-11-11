import { useState } from 'react'
import { Preferences } from '@capacitor/preferences'

export default function PreferencesExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      await Preferences.set({ key: 'ai-theme', value: 'dark' })
            const saved = await Preferences.get({ key: 'ai-theme' })
            setResult(`Valor guardado: ${saved.value}`)
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Preferences</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>No guardés contraseñas, API keys ni tokens secretos en Preferences.</p>
  </main>
}
