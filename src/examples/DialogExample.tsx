import { useState } from 'react'
import { Dialog } from '@capacitor/dialog'

export default function DialogExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      const answer = await Dialog.confirm({ title: 'Confirmar acción', message: '¿Querés continuar?', okButtonTitle: 'Continuar', cancelButtonTitle: 'Cancelar' })
            setResult(answer.value ? 'El usuario confirmó' : 'El usuario canceló')
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Dialog</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Útil para confirmaciones importantes.</p>
  </main>
}
