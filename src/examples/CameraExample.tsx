import { useState } from 'react'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

export default function CameraExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      const photo = await Camera.getPhoto({ quality: 85, resultType: CameraResultType.Uri, source: CameraSource.Prompt })
            setResult(photo.webPath ?? 'No se obtuvo una ruta de imagen')
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>Camera</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Obtiene una foto. Para mostrarla, guardá webPath en estado y usala en un elemento img.</p>
  </main>
}
