# 🤖 Chatbot + N8N Integration para Portafolio Wilson

## 📋 Resumen de Implementación

Se ha agregado un **chatbot inteligente** a tu portafolio que se conecta con **N8N** para proporcionar respuestas automatizadas sobre tu experiencia profesional.

## 🚀 Características Implementadas

### 1. **Widget Flotante de Chat**
- Botón flotante en la esquina inferior derecha
- Ventana de chat elegante con diseño consistente con tu portafolio
- Animaciones suaves y UX moderna
- Responsive en dispositivos móviles

### 2. **Funcionalidades del Chat**
- ✅ Conversación en tiempo real
- ✅ Historial de mensajes (hasta 20 mensajes)
- ✅ Indicador de "escribiendo..."
- ✅ IDs únicos de usuario para seguimiento
- ✅ Manejo de errores elegante
- ✅ Persistencia de sesión con localStorage

### 3. **Integración N8N**
- ✅ Webhook configurado para recibir mensajes
- ✅ Procesamiento con OpenAI para respuestas inteligentes
- ✅ Logging de conversaciones en Google Sheets
- ✅ Contexto personalizado sobre tu experiencia

## 🛠️ Configuración Necesaria

### Paso 1: Configurar N8N
1. **Instalar N8N** (si no lo tienes):
   ```bash
   npm install n8n -g
   n8n start
   ```

2. **Importar el workflow** (ver archivo JSON en la documentación)

3. **Configurar credenciales**:
   - OpenAI API Key
   - Google Sheets (opcional, para logging)

### Paso 2: Actualizar URL del Webhook
En `src/components/ChatBot.astro`, línea 106:
```javascript
N8N_WEBHOOK_URL: 'https://tu-n8n-instance.com/webhook/chatbot'
```

Reemplaza con tu URL real de N8N.

### Paso 3: Configurar OpenAI
1. Obtén tu API Key de OpenAI
2. En N8N, configura las credenciales de OpenAI
3. El workflow usará automáticamente tu contexto profesional

## 📊 Workflow N8N Explicado

### Nodos del Workflow:

1. **Webhook Trigger**: Recibe mensajes del chatbot
2. **Process Message**: Prepara el contexto y determina el tipo de consulta
3. **OpenAI Chat**: Genera respuestas inteligentes usando tu información
4. **Format Response**: Formatea la respuesta y agrega call-to-actions
5. **Log Conversation**: Guarda conversaciones en Google Sheets (opcional)
6. **Respond to Webhook**: Envía la respuesta de vuelta al chatbot

### Tipos de Consultas Automáticas:
- 📝 **Experiencia laboral**
- 🛠️ **Habilidades técnicas**
- 🚀 **Proyectos realizados**
- 📧 **Información de contacto**
- 💬 **Preguntas generales**

## 🎯 Casos de Uso

### Para Visitantes:
- "¿Qué tecnologías dominas?"
- "Cuéntame sobre tu experiencia"
- "¿Tienes experiencia con React?"
- "¿Cómo puedo contactarte?"
- "¿Qué proyectos has realizado?"

### Para Ti:
- Generación automática de leads
- Captura de preguntas frecuentes
- Analytics de interés de visitantes
- Primera impresión automatizada

## 📈 Beneficios

### 🎪 **Engagement**
- Incrementa el tiempo en sitio
- Proporciona interacción inmediata
- Responde 24/7 a visitantes

### 💼 **Profesional**
- Muestra competencia técnica
- Automatización inteligente
- Experiencia de usuario superior

### 📊 **Analytics**
- Tracking de conversaciones
- Insights sobre intereses de visitantes
- Data para optimización

## 🔄 Automatizaciones Adicionales Posibles

### 1. **Email Follow-up**
```json
{
  "trigger": "Conversation ends",
  "action": "Send personalized email with portfolio details"
}
```

### 2. **Slack Notifications**
```json
{
  "trigger": "High-value question",
  "action": "Notify you immediately via Slack"
}
```

### 3. **Lead Scoring**
```json
{
  "trigger": "Multiple technical questions",
  "action": "Flag as hot lead in CRM"
}
```

### 4. **Content Optimization**
```json
{
  "trigger": "Frequently asked questions",
  "action": "Suggest new content for portfolio"
}
```

## 🚀 Próximos Pasos

### Inmediatos:
1. ✅ Configurar tu instancia de N8N
2. ✅ Obtener API Key de OpenAI
3. ✅ Actualizar webhook URL
4. ✅ Probar el chatbot

### Mejoras Futuras:
- 🔄 Integración con tu CRM
- 📱 Notificaciones push
- 🎨 Personalización de respuestas
- 📊 Dashboard de analytics
- 🌐 Soporte multiidioma

## 🛡️ Consideraciones de Seguridad

- Rate limiting en webhook
- Validación de input del usuario
- CORS configurado correctamente
- API Keys en variables de entorno
- Logging de seguridad en N8N

## 💡 Tips de Optimización

1. **Personaliza el contexto** en el workflow según tu experiencia actual
2. **Ajusta los prompts** para tu estilo de comunicación
3. **Monitorea las conversaciones** para mejorar respuestas
4. **A/B testing** en mensajes de bienvenida

## 📞 Soporte

Si tienes preguntas sobre la implementación o necesitas ayuda con la configuración de N8N, ¡tu propio chatbot puede ayudarte con preguntas técnicas! 😄

---

**¡Tu portafolio ahora tiene IA! 🚀**
