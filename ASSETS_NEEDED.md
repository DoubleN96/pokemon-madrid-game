# 🎨 Assets de Pokémon Madrid Web

## ✅ Estado Actual

El juego está **completamente desplegado y funcional** en Coolify con todos los assets y configuración necesaria.

**IMPORTANTE:** El problema anterior (pantalla negra) se debía a un `System.json` incompleto, NO a assets faltantes.

### Problemas Resueltos:
1. ✅ System.json completo con configuración de inicio
2. ✅ Todos los assets del sistema generados
3. ✅ Tilesets para mapas
4. ✅ Sprites de personajes y Pokémon
5. ✅ Assets de batalla

## 📁 Assets Requeridos

### Imágenes del Sistema (`img/system/`)
- `Window.png` - Ventanas del UI
- `IconSet.png` - Iconos de items
- `Balloon.png` - Globos de diálogo
- `ButtonSet.png` - Botones de UI
- `Loading.png` - Pantalla de carga
- `Shadow1.png`, `Shadow2.png` - Sombras de personajes
- `Damage.png` - Números de daño
- `States.png` - Estados (veneno, parálisis, etc.)
- `Weapons1.png`, `Weapons2.png`, `Weapons3.png` - Sprites de armas

### Tileset

s (`img/tilesets/`)
- Tiles para mapas (opcional para versión minimal)

### Personajes (`img/characters/`)
- Sprites del jugador
- Sprites de NPCs

### Enemigos (`img/enemies/`)
- Ya existen algunos en `img/enemies/` para los Pokémon

## 🔧 Soluciones

### Opción 1: Usar RPG Maker MZ (Recomendado)

Si tienes RPG Maker MZ instalado:

```bash
# 1. Abre un proyecto nuevo en RPG Maker MZ
# 2. Copia la carpeta img/ completa al repositorio
cp -r "/ruta/a/rpg-maker-mz/NewProject/img" ./

# 3. Commit y push
git add img/
git commit -m "feat: add RPG Maker MZ system assets"
git push origin main

# 4. Redesplegar en Coolify
```

### Opción 2: Descargar Assets Públicos

Usar assets de dominio público o Creative Commons:

```bash
# Descargar assets básicos (TODO: crear script)
./download-basic-assets.sh
```

### Opción 3: Assets Minimalistas

Crear imágenes placeholder para testing:

```bash
# Instalar Pillow
pip install Pillow

# Ejecutar script de generación
python3 generate-placeholder-assets.py
```

## 🚀 Después de Agregar Assets

Una vez agregados los assets:

1. **Commit cambios:**
```bash
git add img/
git commit -m "feat: add game assets"
git push origin main
```

2. **Redesplegar en Coolify:**
   - Ve a https://coolify.stratomai.com
   - Encuentra la app `pokemon-madrid-game`
   - Click en "Deploy" o espera auto-deployment

3. **Verificar:**
   - Abre http://z4skk8sk4g40kw88sk8gokwc.46.224.16.135.sslip.io
   - El juego debería cargar correctamente

## 📊 Estado Actual

- ✅ Motor RPG Maker MZ: Funcionando
- ✅ Datos del juego (Pokémon, mapas, items): Funcionando
- ✅ Scripts y plugins: Funcionando
- ❌ **Assets gráficos**: **FALTANTES**

## 🔍 Cómo Verificar

Abre la consola del navegador (F12) y busca errores como:

```
Failed to load resource: img/system/Window.png 404 (Not Found)
Failed to load resource: img/system/IconSet.png 404 (Not Found)
```

Estos errores confirman que faltan los assets.

## 💡 Notas

- Los assets de RPG Maker MZ son propietarios de Kadokawa/Gotcha Gotcha Games
- Se requiere licencia de RPG Maker MZ para uso comercial
- Para desarrollo/demo, puedes usar assets básicos de proyectos de ejemplo

---

**URL del juego:** http://z4skk8sk4g40kw88sk8gokwc.46.224.16.135.sslip.io

Una vez agregues los assets, el juego funcionará completamente! 🎮
