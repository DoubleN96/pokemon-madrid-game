# 🚀 Deployment Guide - Pokémon Madrid Web

## 📱 Play in Browser

Este proyecto está configurado para desplegarse como una aplicación web estática que funciona en navegadores (incluyendo móviles).

## 🐳 Deployment con Docker

### Build local:

```bash
docker build -t pokemon-madrid-game .
docker run -p 8080:80 pokemon-madrid-game
```

Abre: http://localhost:8080

### Deployment en Coolify:

1. **Conectar repositorio:**
   - Ve a Coolify Dashboard
   - New Resource → GitHub Repository
   - Selecciona: `DoubleN96/pokemon-madrid-game`

2. **Configurar deployment:**
   - Build Pack: `Dockerfile`
   - Port: `80`
   - Domain: Configurar tu dominio

3. **Deploy:**
   - Click "Deploy"
   - Coolify detectará automáticamente el Dockerfile

## 🌐 Deployment Manual (Nginx)

Si prefieres desplegar sin Docker:

```bash
# Copiar archivos al servidor
scp -r . user@server:/var/www/pokemon-madrid

# Configurar Nginx
sudo cp nginx.conf /etc/nginx/sites-available/pokemon-madrid
sudo ln -s /etc/nginx/sites-available/pokemon-madrid /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 📂 Estructura del Build

```
pokemon-madrid-game/
├── index.html          # Punto de entrada
├── js/                 # Motor RPG Maker MZ
│   ├── libs/          # Librerías (Pixi.js, etc.)
│   ├── rmmz_*.js      # Core scripts
│   ├── plugins/       # Plugins del juego
│   └── main.js        # Inicialización
├── data/              # Datos del juego
│   ├── Enemies.json   # Pokémon
│   ├── Items.json     # Poké Balls, items
│   ├── Skills.json    # Movimientos
│   ├── Map*.json      # Mapas
│   └── ...
├── img/               # Sprites
│   └── enemies/       # Sprites de Pokémon
├── audio/             # Música y sonidos
├── fonts/             # Fuentes
└── icon/              # Iconos de la app

```

## 🎮 Controles Web

### Desktop:
- **Flechas:** Mover
- **Z / Enter:** Confirmar
- **X / Esc:** Cancelar
- **Shift:** Correr

### Mobile:
- Touch controls habilitados automáticamente
- Virtual D-Pad para movimiento
- Botones en pantalla para acciones

## 🔧 Optimizaciones

El build incluye:
- ✅ Compresión gzip
- ✅ Cache de assets estáticos
- ✅ Headers de seguridad
- ✅ Optimización para móviles
- ✅ PWA ready (Progressive Web App)

## 📱 Instalar como App (PWA)

En Android/iOS:
1. Abre el juego en el navegador
2. Menu → "Añadir a pantalla de inicio"
3. ¡Juega como una app nativa!

## 🐛 Troubleshooting

### "Failed to load resource"
- Verifica que todos los archivos estén en el servidor
- Comprueba permisos: `chmod -R 755`

### "Black screen"
- Abre consola del navegador (F12)
- Verifica errores de JavaScript
- Asegúrate de que data/System.json existe

### Performance lento
- Habilita compresión gzip en nginx
- Usa CDN para assets estáticos
- Verifica que el servidor tiene suficientes recursos

---

**URL del juego:** https://pokemon-madrid.tu-dominio.com

¡Hazte con todos! 🎮
