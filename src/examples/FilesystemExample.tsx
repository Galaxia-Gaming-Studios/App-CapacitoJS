import { useState } from 'react'
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem'

export default function FilesystemExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      const path = 'ai-note.txt'
            await Filesystem.writeFile({ path, data: 'Nota de prueba guardada por la app de IA.', directory: Directory.Documents, encoding: Encoding.UTF8 })
            const file = await Filesystem.readFile({ path, directory: Directory.Documents, encoding: Encoding.UTF8 })
            setResult(String(file.data))
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Filesystem</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Rutas y permisos dependen de Android y de la versión del sistema.</p>
  </main>
}
