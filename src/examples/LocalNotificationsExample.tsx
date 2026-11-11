import { useState } from 'react'
import { LocalNotifications } from '@capacitor/local-notifications'

export default function LocalNotificationsExample() {
  const [result, setResult] = useState('Listo para probar')

  async function run() {
    try {
      const permission = await LocalNotifications.requestPermissions()
            if (permission.display !== 'granted') { setResult('Permiso no concedido'); return }
            await LocalNotifications.schedule({ notifications: [{ title: 'Recordatorio de IA', body: 'Notificación local de prueba', id: 1001, schedule: { at: new Date(Date.now() + 5000) } }] })
            setResult('Notificación programada para dentro de 5 segundos')
    } catch (error) {
      setResult(error instanceof Error ? error.message : String(error))
    }
  }

  return <main>
    <h1>LocalNotifications</h1>
    <button onClick={run}>Probar</button>
    <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
    <p>Android 13+ requiere permiso. Alarmas exactas pueden requerir configuración adicional.</p>
  </main>
}
