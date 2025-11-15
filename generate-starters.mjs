#!/usr/bin/env node

/**
 * Generador de Pokémon Iniciales - Pokémon Madrid
 * Genera los 3 iniciales + sus 6 evoluciones
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { createCreatureTool } = require('../pokemon-game-mcp/dist/tools/pokemon/create-creature.js');

const PROJECT_PATH = '/root/pokemon-madrid-game';

const starters = [
  // CHULAPÓN LINE
  {
    id: 1,
    name: "Chulapón",
    types: ["fighting"],
    base_stats: { hp: 50, attack: 62, defense: 49, sp_attack: 38, sp_defense: 44, speed: 75 },
    catch_rate: 45,
    exp_yield: 64,
    description: "Criatura nacida del espíritu castizo de Madrid. Viste chaleco de pana y pañuelo rojo al cuello. Es orgulloso pero leal, y nunca rechaza un buen reto.",
    moves: [
      { level: 1, move_name: "Puño" },
      { level: 1, move_name: "Malicioso" },
      { level: 7, move_name: "Patada Baja" },
      { level: 13, move_name: "Foco Energía" },
      { level: 19, move_name: "Golpe Kárate" }
    ],
    evolution: { method: "level", level: 16, into_name: "Chulapón-Plus" }
  },
  {
    id: 2,
    name: "Chulapón-Plus",
    types: ["fighting"],
    base_stats: { hp: 65, attack: 85, defense: 65, sp_attack: 50, sp_defense: 60, speed: 80 },
    catch_rate: 45,
    exp_yield: 142,
    description: "Al evolucionar, su orgullo madrileño se intensifica. Ahora luce el traje completo de chulapo y pelea con la técnica de los antiguos boxeadores callejeros.",
    moves: [
      { level: 1, move_name: "Puño" },
      { level: 1, move_name: "Malicioso" },
      { level: 7, move_name: "Patada Baja" },
      { level: 13, move_name: "Foco Energía" },
      { level: 19, move_name: "Golpe Kárate" },
      { level: 25, move_name: "Agilidad" },
      { level: 31, move_name: "Golpe Cruz" }
    ],
    evolution: { method: "level", level: 36, into_name: "Castizón" }
  },
  {
    id: 3,
    name: "Castizón",
    types: ["fighting"],
    base_stats: { hp: 90, attack: 125, defense: 90, sp_attack: 70, sp_defense: 80, speed: 75 },
    catch_rate: 45,
    exp_yield: 239,
    description: "Maestro absoluto del mantón madrileño. Su técnica de combate fusiona el arte de la verbena con golpes devastadores. Se dice que protege las fiestas de San Isidro.",
    moves: [
      { level: 1, move_name: "Mantón Madrileño" },
      { level: 1, move_name: "Puño" },
      { level: 1, move_name: "Malicioso" },
      { level: 7, move_name: "Patada Baja" },
      { level: 13, move_name: "Foco Energía" },
      { level: 19, move_name: "Golpe Kárate" },
      { level: 25, move_name: "Agilidad" },
      { level: 31, move_name: "Golpe Cruz" },
      { level: 37, move_name: "A Bocajarro" },
      { level: 43, move_name: "Sacrificio" }
    ]
  },

  // GATOLEGRE LINE
  {
    id: 4,
    name: "Gatolegre",
    types: ["normal", "ghost"],
    base_stats: { hp: 45, attack: 50, defense: 40, sp_attack: 55, sp_defense: 50, speed: 80 },
    catch_rate: 45,
    exp_yield: 66,
    description: "Gato elegante de las noches de Malasaña. Su bufanda fantasmal le permite atravesar paredes. Se dice que en los años 80 inspiró a muchos artistas de La Movida.",
    moves: [
      { level: 1, move_name: "Arañazo" },
      { level: 1, move_name: "Gruñido" },
      { level: 9, move_name: "Impresionar" },
      { level: 13, move_name: "Furia" },
      { level: 17, move_name: "Mordisco" }
    ],
    evolution: { method: "level", level: 18, into_name: "Miaupintura" }
  },
  {
    id: 5,
    name: "Miaupintura",
    types: ["normal", "ghost"],
    base_stats: { hp: 60, attack: 65, defense: 55, sp_attack: 80, sp_defense: 70, speed: 80 },
    catch_rate: 45,
    exp_yield: 145,
    description: "Su pelaje ahora muestra manchas de colores como si hubiera pasado por un estudio de arte. Representa el alma bohemia y creativa del Madrid nocturno.",
    moves: [
      { level: 1, move_name: "Arañazo" },
      { level: 1, move_name: "Gruñido" },
      { level: 9, move_name: "Impresionar" },
      { level: 13, move_name: "Furia" },
      { level: 17, move_name: "Mordisco" },
      { level: 25, move_name: "Lanza Sombras" },
      { level: 33, move_name: "Golpe" }
    ],
    evolution: { method: "level", level: 38, into_name: "Felínoir" }
  },
  {
    id: 6,
    name: "Felínoir",
    types: ["normal", "ghost"],
    base_stats: { hp: 75, attack: 90, defense: 75, sp_attack: 115, sp_defense: 90, speed: 75 },
    catch_rate: 45,
    exp_yield: 237,
    description: "Elegante gato espectral envuelto en niebla. Dicen que merodea por los tejados de Malasaña protegiendo a los artistas. Su maullido suena como música electrónica.",
    moves: [
      { level: 1, move_name: "Noche Malasañera" },
      { level: 1, move_name: "Arañazo" },
      { level: 1, move_name: "Gruñido" },
      { level: 9, move_name: "Impresionar" },
      { level: 13, move_name: "Furia" },
      { level: 17, move_name: "Mordisco" },
      { level: 25, move_name: "Lanza Sombras" },
      { level: 33, move_name: "Golpe" },
      { level: 41, move_name: "Bola Sombra" }
    ]
  },

  // AZULEJÍN LINE
  {
    id: 7,
    name: "Azulejín",
    types: ["water", "steel"],
    base_stats: { hp: 50, attack: 48, defense: 65, sp_attack: 50, sp_defense: 55, speed: 47 },
    catch_rate: 45,
    exp_yield: 65,
    description: "Su cuerpo está formado por azulejos de Talavera. Nace en las fuentes de Madrid y representa la tradición arquitectónica de la ciudad. Al moverse suena como porcelana.",
    moves: [
      { level: 1, move_name: "Pistola Agua" },
      { level: 1, move_name: "Malicioso" },
      { level: 7, move_name: "Rizo Defensa" },
      { level: 13, move_name: "Burbuja" },
      { level: 19, move_name: "Refugio" }
    ],
    evolution: { method: "level", level: 18, into_name: "Azulejón" }
  },
  {
    id: 8,
    name: "Azulejón",
    types: ["water", "steel"],
    base_stats: { hp: 70, attack: 60, defense: 85, sp_attack: 70, sp_defense: 75, speed: 45 },
    catch_rate: 45,
    exp_yield: 144,
    description: "Los azulejos de su cuerpo se han multiplicado formando patrones ornamentales más complejos. Puede disparar chorros de agua desde las juntas entre azulejos.",
    moves: [
      { level: 1, move_name: "Pistola Agua" },
      { level: 1, move_name: "Malicioso" },
      { level: 7, move_name: "Rizo Defensa" },
      { level: 13, move_name: "Burbuja" },
      { level: 19, move_name: "Refugio" },
      { level: 25, move_name: "Giro Bola" },
      { level: 31, move_name: "Hidrobomba" }
    ],
    evolution: { method: "level", level: 36, into_name: "Mayólicon" }
  },
  {
    id: 9,
    name: "Mayólicon",
    types: ["water", "steel"],
    base_stats: { hp: 100, attack: 80, defense: 130, sp_attack: 105, sp_defense: 85, speed: 25 },
    catch_rate: 45,
    exp_yield: 240,
    description: "Fuente viviente de cerámica ornamental. Su cuerpo es una obra maestra de la artesanía madrileña. Dicen que si duerme en la Fuente de Cibeles, bendice la ciudad.",
    moves: [
      { level: 1, move_name: "Fuente de Cibeles" },
      { level: 1, move_name: "Pistola Agua" },
      { level: 1, move_name: "Malicioso" },
      { level: 7, move_name: "Rizo Defensa" },
      { level: 13, move_name: "Burbuja" },
      { level: 19, move_name: "Refugio" },
      { level: 25, move_name: "Giro Bola" },
      { level: 31, move_name: "Hidrobomba" },
      { level: 37, move_name: "Defensa Férrea" }
    ]
  }
];

async function generateStarters() {
  console.log('🎮 POKÉMON MADRID - Generador de Iniciales');
  console.log('==========================================\n');

  for (const starter of starters) {
    try {
      console.log(`Creando: ${starter.name} (ID: ${starter.id})...`);

      const result = await createCreatureTool.execute({
        project_path: PROJECT_PATH,
        creature_data: starter,
        generate_sprite: false
      });

      console.log(`✓ ${starter.name} creado exitosamente`);
      console.log(`  Tipos: ${starter.types.join('/')}`);
      console.log(`  Stats Total: ${Object.values(starter.base_stats).reduce((a,b) => a+b, 0)}`);
      console.log('');

    } catch (error) {
      console.error(`✗ Error creando ${starter.name}:`, error.message);
    }
  }

  console.log('\n✅ Generación de iniciales completada!');
  console.log('\n📁 Archivos generados en:');
  console.log(`   ${PROJECT_PATH}/data/Enemies.json`);
  console.log(`   ${PROJECT_PATH}/data/pokemon/creatures.json`);
}

generateStarters();
