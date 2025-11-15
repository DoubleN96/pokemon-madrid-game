# 🔌 Guía de Plugins - Pokémon Madrid

## Plugins Instalados

El proyecto Pokémon Madrid usa una combinación de plugins para crear una experiencia completa estilo Pokémon en RPG Maker MZ.

---

## 📦 Monster Capture System (Synrec)

### Synrec_MC_Core.js
**Plugin principal** del sistema de captura de monstruos.

**Características:**
- Sistema de captura basado en fórmula de Pokémon Gen 1-5
- Catch rate personalizable por enemigo
- Variables y switches para control de captura

**Fórmula de Captura:**
```
((3 * HP_MAX - 2 * HP_ACTUAL) * CATCH_RATE * BALL_BONUS) / (3 * HP_MAX)
```

**Variables importantes:**
- Variable 1: Última captura exitosa
- Switch 1: Flag de captura exitosa

### Synrec_MC_BattleCore.js
**Sistema de batalla** para mecánicas de captura.

**Características:**
- Integración con sistema de combate de MZ
- Comandos de captura en batalla
- Feedback visual de intento de captura

### Synrec_MC_Evolution.js
**Sistema de evolución** de criaturas.

**Características:**
- Evolución por nivel
- Evolución por objeto
- Animaciones de evolución
- Switch 2: Control de evolución

**Uso:**
```javascript
// En notas del enemigo (data/Enemies.json):
<evolution: ID_EVOLUCION, NIVEL_REQUERIDO>
```

### Synrec_MC_Beastiary.js
**Pokédex/Bestiario** de criaturas.

**Características:**
- Registro automático de capturas
- Lista de criaturas vistas/capturadas
- Información detallada por criatura
- Estadísticas de completitud

**Comandos de menú:**
- Acceso desde menú principal
- Filtros por tipo/capturado/visto

### Synrec_MC_GenderTraits.js
**Sistema de género** para criaturas.

**Características:**
- Género aleatorio al capturar
- Traits especiales por género
- Compatible con breeding (futuro)

### Synrec_MC_PlayerSetup.js
**Configuración inicial** del jugador.

**Características:**
- Setup de party inicial
- Configuración de inventario de captura
- Sistema de guardado extendido

---

## 🎨 Pokemon Mechanics (SumRndmDde)

### SRD_PokemonTypeSystem.js
**Sistema de tipos** estilo Pokémon.

**Características:**
- 18 tipos de Pokémon
- Tabla de efectividad completa
- Super efectivo (2x daño)
- No muy efectivo (0.5x daño)
- Inmunidad (0x daño)

**Tipos implementados:**
- Normal, Lucha, Volador, Veneno
- Tierra, Roca, Bicho, Fantasma
- Acero, Fuego, Agua, Planta
- Eléctrico, Psíquico, Hielo, Dragón
- Siniestro, Hada

**Configuración en Elements (data/System.json):**
```json
"elements": [
  "", "Physical", "Fire", "Ice", "Thunder",
  "Water", "Earth", "Wind", "Light", "Dark"
]
```

### SRD_PokemonTypeDisplay.js
**Visualización de tipos** en UI.

**Características:**
- Muestra tipos en menú de estado
- Iconos personalizables
- Compatible con dual-type

### SRD_Natures.js
**Sistema de naturalezas** Pokémon.

**Características:**
- 25 naturalezas diferentes
- Buffs/nerfs de stats (+10%/-10%)
- Asignación aleatoria al capturar
- Muestra en menú de estado

**Naturalezas disponibles:**
- Hardy (neutral)
- Lonely (+ATK, -DEF)
- Brave (+ATK, -SPD)
- Adamant (+ATK, -MATK)
- Naughty (+ATK, -MDEF)
- Bold (+DEF, -ATK)
- ... (y 19 más)

### SRD_Pokemon4MovesOnly.js
**Limitación de movimientos** a 4.

**Características:**
- Máximo 4 skills por actor
- Sistema de olvido de movimientos
- Selector de movimiento al aprender nuevo

---

## 🎮 Orden de Carga de Plugins

**IMPORTANTE:** Los plugins deben cargarse en este orden:

1. **Synrec_MC_Core** (base del sistema)
2. **Synrec_MC_BattleCore** (batalla)
3. **Synrec_MC_Evolution** (evolución)
4. **Synrec_MC_Beastiary** (pokédex)
5. **Synrec_MC_GenderTraits** (género)
6. **Synrec_MC_PlayerSetup** (setup)
7. **SRD_PokemonTypeSystem** (tipos)
8. **SRD_PokemonTypeDisplay** (UI tipos)
9. **SRD_Natures** (naturalezas)
10. **SRD_Pokemon4MovesOnly** (4 moves)

Este orden está configurado en `js/plugins.js`.

---

## 📝 Integración con Pokémon Madrid

### Configuración de Catch Rates

Los 80 Pokémon de Madrid ya tienen catch_rate configurado en `data/Enemies.json`:

- **Pokémon comunes:** 255 (ej. Ratamad, Pichoneta)
- **Pokémon raros:** 45 (ej. Starters, Gym Leaders)
- **Legendarios principales:** 3 (ej. Metrión, Ursabón)

### Configuración de Tipos

Los tipos están mapeados a los Elements de RPG Maker MZ:

| Pokémon Type | RPG Maker Element | ID |
|--------------|-------------------|-----|
| Normal | Physical | 1 |
| Fuego | Fire | 2 |
| Hielo | Ice | 3 |
| Eléctrico | Thunder | 4 |
| Agua | Water | 5 |
| Tierra | Earth | 6 |
| Volador | Wind | 7 |
| Psíquico | Light | 8 |
| Siniestro | Dark | 9 |

### Configuración de Evoluciones

Ejemplo para Chulapón → Chulapón-Plus (Lv.16):

```javascript
// En data/Enemies.json para Chulapón (ID: 1)
{
  "id": 1,
  "name": "Chulapón",
  "note": "<evolution: 2, 16>"  // Evoluciona a ID 2 en nivel 16
}
```

---

## 🛠️ Comandos de Plugin Útiles

### Script Calls

```javascript
// Forzar captura (testing)
$gameVariables.setValue(1, enemyId);
$gameSwitches.setValue(1, true);

// Ver Pokédex completo
SceneManager.push(Scene_Beastiary);

// Cambiar naturaleza de actor
$gameActors.actor(1).setNature('Adamant');

// Evolucionar manualmente
$gameActors.actor(1).evolve(2); // Evoluciona a ID 2
```

### Variables y Switches

| ID | Tipo | Descripción |
|----|------|-------------|
| 1 | Variable | ID última captura |
| 1 | Switch | Captura exitosa |
| 2 | Switch | Evolución activada |

---

## 🐛 Troubleshooting

### Plugin no carga
- Verificar orden en `js/plugins.js`
- Verificar que `"status": true`
- Revisar consola F12 para errores

### Captura no funciona
- Verificar que catch_rate está definido en Enemies.json
- Verificar fórmula de captura en Synrec_MC_Core
- HP del enemigo debe estar < 100%

### Tipos no aparecen
- Verificar Elements en data/System.json
- Verificar que SRD_PokemonTypeSystem está activo
- Verificar que enemigos tienen elements asignados

---

## 📚 Referencias

- [Monster Capture GitHub](https://github.com/Synrec/RPG-Maker-MZ-Monster-Capture)
- [SumRndmDde Plugins](https://sumrndm.site/category/plugins/pokemon-plugins/)
- [RPG Maker MZ Plugin Docs](https://www.rpgmakerweb.com/blog/rpg-maker-mz-plugin-list)

---

## 🔄 Próximos Plugins a Añadir

- [ ] VisuStella Battle Core (mejor sistema de batalla)
- [ ] Breeding System (cría de Pokémon)
- [ ] IVs/EVs System (stats individuales)
- [ ] Ability System (habilidades de Pokémon)
- [ ] Hold Items (objetos equipados)
- [ ] Shiny System (Pokémon brillantes)

---

**Última actualización:** 2025-11-15
