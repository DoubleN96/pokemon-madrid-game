# 🚀 Deployment en Coolify - Pokémon Madrid

## Paso a Paso para Desplegar

### 1. Acceder a Coolify

Abre tu navegador y ve a:
```
http://46.224.16.135:8000
```

### 2. Crear Nueva Aplicación

1. En el Dashboard de Coolify, haz clic en **"+ New Resource"**
2. Selecciona **"GitHub Repository"** o **"Public Repository"**

### 3. Configurar el Repositorio

- **Repository URL:** `https://github.com/DoubleN96/pokemon-madrid-game`
- **Branch:** `main`
- **Build Pack:** Selecciona `Dockerfile`

### 4. Configurar Opciones de Deployment

- **Name:** `pokemon-madrid-game`
- **Description:** `Pokémon Madrid - Edición Castiza`
- **Port:** `80`
- **Domain:** Asigna un dominio (ej: `pokemon-madrid.tu-dominio.com`)

### 5. Variables de Entorno (Opcional)

No se requieren variables de entorno para este proyecto.

### 6. Deploy

1. Haz clic en **"Deploy"**
2. Coolify automáticamente:
   - Clonará el repositorio
   - Detectará el Dockerfile
   - Construirá la imagen Docker
   - Desplegará el contenedor
   - Configurará el proxy inverso

### 7. Acceder al Juego

Una vez desplegado, accede a:
```
http://tu-dominio-asignado.com
```

O si usaste localhost:
```
http://pokemon-madrid.localhost
```

## 📱 Probar en Móvil

Asegúrate de que el dominio sea accesible desde tu red:

1. Configura el dominio en Coolify
2. Asegúrate de que el puerto 80 esté expuesto
3. Accede desde tu móvil usando el dominio

## 🐛 Troubleshooting

### Build Falla

**Error:** "No Dockerfile found"
- Verifica que el repositorio esté actualizado
- Asegúrate de que `main` sea la rama correcta

### Container No Inicia

**Error:** "Port already in use"
- Cambia el puerto expuesto en la configuración
- Verifica que no hay otros servicios usando el puerto 80

### No Se Carga el Juego

**Error:** "Failed to load resources"
- Verifica que el build se completó correctamente
- Revisa los logs en Coolify
- Asegúrate de que nginx está sirviendo correctamente

### Comando de Deployment Manual (Backup)

Si Coolify tiene problemas, puedes deployar manualmente:

```bash
# Clonar repositorio
git clone https://github.com/DoubleN96/pokemon-madrid-game.git
cd pokemon-madrid-game

# Build Docker image
docker build -t pokemon-madrid:latest .

# Run container
docker run -d \
  -p 8080:80 \
  --name pokemon-madrid \
  --restart unless-stopped \
  pokemon-madrid:latest

# Acceder en:
# http://localhost:8080
```

## 🔄 Re-deployment Automático

Para configurar deployment automático en cada push:

1. En Coolify, ve a la configuración de la aplicación
2. Habilita **"Auto Deploy"**
3. Conecta el webhook de GitHub (opcional)

Ahora cada vez que hagas push a `main`, Coolify automáticamente:
- Detectará el cambio
- Reconstruirá la imagen
- Redesp legará el juego

## ✅ Verificación Post-Deployment

Después del deployment, verifica:

- [ ] El juego carga correctamente
- [ ] Puedes seleccionar un Pokémon inicial
- [ ] Los encuentros aleatorios funcionan
- [ ] El sistema de captura funciona
- [ ] Los controles touch funcionan en móvil
- [ ] No hay errores en la consola del navegador

## 📊 Monitoreo

En Coolify puedes ver:
- Logs en tiempo real
- Uso de CPU/RAM
- Métricas del contenedor
- Tiempo de actividad

---

**URL del juego (ejemplo):**
```
http://pokemon-madrid.localhost
http://pokemon-madrid.tu-dominio.com
```

¡Disfruta jugando Pokémon Madrid! 🎮
