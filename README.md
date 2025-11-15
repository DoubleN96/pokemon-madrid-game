# 🎮 POKÉMON MADRID: EDICIÓN CASTIZA

## Descripción

Pokémon Madrid es un juego de RPG estilo Game Boy inspirado en Pokémon Rojo/Azul, ambientado completamente en Madrid, España. Explora la capital española convertida en una región Pokémon completa con criaturas basadas en la cultura, historia y lugares emblemáticos de Madrid.

## 🗺️ Características Principales

- **80 Pokémon originales** basados en la cultura madrileña
- **3 Pokémon iniciales** con líneas evolutivas completas
- **8 Gimnasios** ubicados en lugares emblemáticos de Madrid
- **Organización villana** Team Vandalia que opera desde el metro
- **7 Legendarios** inspirados en símbolos de Madrid
- **Liga Pokémon** en el Palacio Real
- **Mundo abierto** basado en los distritos de Madrid

## 🎯 Pokémon Iniciales

### Chulapón (Lucha) #001
*Criatura castiza de Madrid*
- Evoluciona a Chulapón-Plus (Lv.16)
- Evolución final: Castizón (Lv.36)
- Movimiento exclusivo: "Mantón Madrileño"

### Gatolegre (Normal/Fantasma) #004
*Gato bohemio de Malasaña*
- Evoluciona a Miaupintura (Lv.18)
- Evolución final: Felínoir (Lv.38)
- Movimiento exclusivo: "Noche Malasañera"

### Azulejín (Agua/Acero) #007
*Azulejo de Talavera viviente*
- Evoluciona a Azulejón (Lv.18)
- Evolución final: Mayólicon (Lv.36)
- Movimiento exclusivo: "Fuente de Cibeles"

## 🏛️ Gimnasios

1. **Plaza Mayor** - Mayor Matilde (Normal)
2. **Gran Vía** - Volteo (Eléctrico)
3. **Palacio Real** - Don Félix (Lucha)
4. **El Retiro** - Flora (Planta)
5. **Las Ventas** - Brascón (Fuego/Lucha)
6. **Malasaña** - Rebeca (Veneno/Siniestro)
7. **Cuatro Torres** - Dra. Visión (Psíquico)
8. **Cibeles** - Cibelia (Agua)

## 💀 Team Vandalia

Organización criminal que opera desde el metro abandonado de Madrid. Su objetivo es controlar la ciudad usando Pokémon de tipo Siniestro, Veneno y Acero.

**Pokémon signature:**
- Megalínea (Acero/Siniestro) - Arma definitiva del líder
- Metroxidado (Acero/Veneno) - Base móvil
- Sombratún (Siniestro/Fantasma) - Guardián de túneles

## ⭐ Pokémon Legendarios

### Legendarios Principales (BST 680)
- **Metrión** (Acero/Psíquico) - Dios del Metro de Madrid
- **Ursabón** (Normal/Hada) - Oso del escudo de Madrid

### Legendarios Menores (BST 580)
- **Halcónix** (Volador/Fuego) - Halcón de la Torre de Madrid
- **Cuervoluz** (Volador/Eléctrico) - Cuervo de las Cuatro Torres
- **Águilasol** (Volador/Psíquico) - Águila de la Gran Vía

### Sub-Legendarios (BST 525)
- **Osabón** (Normal/Tierra) - Oso de Casa de Campo
- **Angelón** (Hada/Volador) - Ángel del Monumento

## 👑 Alto Mando (Liga Pokémon)

Ubicado en el Palacio Real:

1. **Carmen** - Especialista en Fantasma
2. **Rodrigo** - Especialista en Dragón
3. **Victoria** - Especialista en Hada
4. **Alfonso** - Especialista en Acero/Lucha
5. **Campeona Isabel** - Balanceado (equipo mixto)

## 📊 Estadísticas del Proyecto

- **Total Pokémon:** 80
- **Pokémon con evolución:** 12 líneas evolutivas
- **Tipos únicos:** 18 tipos de Pokémon
- **Movimientos exclusivos:** 8 movimientos especiales de Madrid
- **Catch rate más bajo:** 3 (Legendarios principales)
- **Catch rate más alto:** 255 (Pokémon comunes)

## 🗺️ Mapa del Mundo

### Ciudad Inicial: Tetuán
Tu aventura comienza en el barrio de Tetuán, al norte de Madrid.

### Rutas y Ciudades:
1. **Ruta 1** → Plaza Castilla
2. **Ruta 2** → Chamberí
3. **Gran Vía** (Gimnasio 2)
4. **Chueca** → Malasaña (Gimnasio 6)
5. **Centro** → Sol, Plaza Mayor (Gimnasio 1)
6. **Palacio Real** (Gimnasio 3)
7. **El Retiro** (Gimnasio 4)
8. **Atocha** → Lavapiés
9. **Las Ventas** (Gimnasio 5)
10. **AZCA** → Cuatro Torres (Gimnasio 7)
11. **Paseo de la Castellana** → Cibeles (Gimnasio 8)
12. **Liga Pokémon** - Palacio Real

### Áreas Especiales:
- **Metro Abandonado** - Base de Team Vandalia
- **Casa de Campo** - Safari Zone
- **Madrid Río** - Zona de Agua
- **Cerro del Tío Pío** - Pokémon voladores

## 🎮 Sistema de Captura

Sistema de captura implementado usando fórmulas auténticas de Pokémon:

```
Catch Rate = (3 * Max HP - 2 * Current HP) * Catch Rate * Ball Bonus
             / (3 * Max HP) * Status Bonus
```

**Pokéballs disponibles:**
- Poké Ball (1x)
- Super Ball (1.5x)
- Ultra Ball (2x)
- Master Ball (100% catch)

## 🚀 Instalación

### Requisitos
- RPG Maker MZ
- Node.js 18+ (para scripts de generación)

### Pasos
1. Clona el repositorio:
```bash
git clone https://github.com/DoubleN96/pokemon-madrid-game.git
cd pokemon-madrid-game
```

2. Abre el proyecto en RPG Maker MZ

3. ¡Juega!

## 🛠️ Desarrollo

### Generar Pokémon

Los scripts de generación usan el MCP server `pokemon-game-mcp`:

```bash
# Generar iniciales
node generate-starters.mjs

# Generar Pokémon salvajes
node generate-wild-pokemon.mjs

# Generar gimnasios 1-2
node generate-gyms-1-2.mjs

# Generar gimnasios 3-8
node generate-all-gyms.mjs

# Generar equipo rival
node generate-rival-pokemon.mjs

# Generar Team Vandalia
node generate-team-vandalia.mjs

# Generar legendarios
node generate-legendaries.mjs

# Generar Alto Mando
node generate-elite-four.mjs
```

### Estructura del Proyecto

```
pokemon-madrid-game/
├── data/
│   ├── Enemies.json           # Datos de batalla de Pokémon
│   ├── System.json            # Configuración del juego
│   └── pokemon/
│       └── creatures.json     # Datos extendidos de Pokémon
├── docs/
│   ├── FASE_1_INICIALES.md   # Documentación de iniciales
│   └── ...
├── img/
│   └── enemies/              # Sprites de Pokémon
├── js/
│   └── plugins/
│       └── PokemonSystem/    # Sistema de Pokémon
└── generate-*.mjs            # Scripts de generación
```

## 📖 Pokédex Completa

### Por Tipo

**Normal:** Ratamad, Rataurban, Pichoneta, Palomazul, Perrucho, Canchorro, Castañón, Cochinón, Gatolegre, Miaupintura, Felínoir, Ursabón, Realmajestic, Osamajestuoso

**Lucha:** Chulapón, Chulapón-Plus, Castizón, Espadachín, Piquerico, Alabardón, Taurín, Taurón Bravo, Vandalón, Armadurón

**Agua:** Azulejín, Azulejón, Mayólicon, Barquito, Estanquera, Leonceles, Fuentiña, Cibeleón, Fuentealta

**Planta:** Rosalaño, Cipresal, Florecita

**Fuego:** Capotero, Halcónix, Culebrasa, Cañonazo

**Eléctrico:** Voltaploma, Farola-K, Neoniko, Cuervoluz, Metrobús

**Veneno:** Sprayón, Murcielastre, Murciesiniestro, Grafitón, Grafitorra, Metroxidado

**Volador:** Gorrioneta, Urracabra, Halcónix, Cuervoluz, Águilasol, Angelón, Angelreal

**Psíquico:** Libracho, Tomoroto, Teleportín, Cerebrium, Teatrón, Metrión, Metrocrown, Águilasol, Realmajestic, Coronarón

**Fantasma:** Cipresal, Sombratún, Teatrón, Fantasmadrid, Espectrópera

**Acero:** Farola-K, Azulejín, Azulejón, Mayólicon, Cadenazo, Torrezka, Metrobús, Destrozón, Metroxidado, Megalínea, Cerrojón, Dragomadrid, Armadurón, Cañonazo, Coronarón, Metrión, Metrocrown

**Siniestro:** Grafitón, Viniloz, Moviderón, Vandalón, Sombratún, Túnelator, Urracabra, Fantasmadrid

**Hada:** Rosalaño, Madroñón, Fuentiña, Cibeleón, Espectrópera, Florecita, Fuentealta, Angelreal, Angelón, Ursabón, Osamajestuoso

**Dragón:** Lagartijo, Dragomadrid, Culebrasa

**Tierra:** Túnelator, Osabón

## 🎵 Créditos

- **Diseño de juego:** Basado en Pokémon Red/Blue de Game Freak
- **Concepto:** Pokémon Madrid - Edición Castiza
- **Motor:** RPG Maker MZ
- **MCP Server:** pokemon-game-mcp
- **Inspiración:** Madrid, España - Su cultura, historia y lugares emblemáticos

## 📄 Licencia

Este es un proyecto fan-made sin fines de lucro. Pokémon es propiedad de Game Freak/Nintendo/The Pokémon Company.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Contacto

Para reportar bugs o sugerencias, abre un issue en GitHub.

---

**¡Hazte con todos! ¡Conviértete en el Campeón de Madrid!** 🏆
