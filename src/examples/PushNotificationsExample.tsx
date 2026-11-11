import { useState } from 'react'
import { PushNotifications } from '@capacitor/push-notifications'

export default function PushNotificationsExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      const permission = await PushNotifications.requestPermissions()
            if (permission.receive !== 'granted') { setResult('Permiso no concedido'); return }
            await PushNotifications.addListener('registration', token => setResult(`Token: ${token.value}`))
            await PushNotifications.addListener('registrationError', error => setResult(`Error: ${JSON.stringify(error)}`))
            await PushNotifications.register()
            setResult('Registro solicitado; esperando token')
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>PushNotifications</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Necesita configurar Firebase Cloud Messaging para Android y un servidor/proveedor para enviar push.</p>
  </main>
}
