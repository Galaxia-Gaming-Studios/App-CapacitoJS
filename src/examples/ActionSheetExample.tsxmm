import { useState } from 'react'
import { ActionSheet } from '@capacitor/action-sheet'

export default function ActionSheetExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      const result = await ActionSheet.showActions({ title: 'Opciones de conversación', message: 'Elegí una acción', options: [{ title: 'Copiar respuesta' }, { title: 'Compartir respuesta' }, { title: 'Cancelar', style: 'cancel' }] })
            setResult(`Índice seleccionado: ${result.index}`)
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>ActionSheet</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>El índice indica la posición de la opción seleccionada.</p>
  </main>
}
