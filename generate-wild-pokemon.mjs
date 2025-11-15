#!/usr/bin/env node

/**
 * Generador de Pokémon Salvajes - Pokémon Madrid
 * Tetuán y Ruta 1
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { createCreatureTool } = require('../pokemon-game-mcp/dist/tools/pokemon/create-creature.js');

const PROJECT_PATH = '/root/pokemon-madrid-game';

const wildPokemon = [
  // RATAMAD - Rata urbana de Madrid
  {
    id: 10,
    name: "Ratamad",
    types: ["normal"],
    base_stats: { hp: 30, attack: 56, defense: 35, sp_attack: 25, sp_defense: 35, speed: 72 },
    catch_rate: 255,
    exp_yield: 51,
    description: "Rata común de las calles y Metro de Madrid. Extremadamente adaptable, puede vivir en cualquier rincón de la ciudad. Su cola es tan larga como su cuerpo.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 1, move_name: "Látigo" },
      { level: 7, move_name: "Ataque Rápido" },
      { level: 14, move_name: "Hipnosis" },
      { level: 23, move_name: "Superdiente" }
    ],
    evolution: { method: "level", level: 20, into_name: "Rataurban" }
  },
  {
    id: 11,
    name: "Rataurban",
    types: ["normal"],
    base_stats: { hp: 55, attack: 81, defense: 60, sp_attack: 50, sp_defense: 70, speed: 97 },
    catch_rate: 127,
    exp_yield: 145,
    description: "Evolución de Ratamad que ha dominado el metro madrileño. Puede navegar por los túneles a gran velocidad. Los maquinistas lo consideran un amuleto de buena suerte.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 1, move_name: "Látigo" },
      { level: 7, move_name: "Ataque Rápido" },
      { level: 14, move_name: "Hipnosis" },
      { level: 20, move_name: "Superdiente" },
      { level: 27, move_name: "Persecución" },
      { level: 34, move_name: "Triturar" }
    ]
  },

  // PICHONETA - Paloma urbana
  {
    id: 12,
    name: "Pichoneta",
    types: ["normal", "flying"],
    base_stats: { hp: 40, attack: 45, defense: 40, sp_attack: 35, sp_defense: 35, speed: 56 },
    catch_rate: 255,
    exp_yield: 50,
    description: "Paloma extremadamente común en Madrid. Anida en edificios y se alimenta de migas en las terrazas. Su arrullo es el sonido característico de las plazas madrileñas.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 5, move_name: "Ataque Arena" },
      { level: 9, move_name: "Tornado" },
      { level: 13, move_name: "Ataque Rápido" },
      { level: 21, move_name: "Torbellino" }
    ],
    evolution: { method: "level", level: 18, into_name: "Palomazul" }
  },
  {
    id: 13,
    name: "Palomazul",
    types: ["normal", "flying"],
    base_stats: { hp: 63, attack: 60, defense: 55, sp_attack: 50, sp_defense: 50, speed: 71 },
    catch_rate: 120,
    exp_yield: 122,
    description: "Paloma urbana evolucionada con plumas azul metálico. Vigila Madrid desde los tejados. Se dice que puede predecir el tiempo observando el cielo desde las Cuatro Torres.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 5, move_name: "Ataque Arena" },
      { level: 9, move_name: "Tornado" },
      { level: 13, move_name: "Ataque Rápido" },
      { level: 18, move_name: "Ala de Acero" },
      { level: 27, move_name: "Torbellino" },
      { level: 36, move_name: "Aire Afilado" }
    ]
  },

  // PERRUCHO - Perro callejero
  {
    id: 14,
    name: "Perrucho",
    types: ["normal"],
    base_stats: { hp: 55, attack: 70, defense: 45, sp_attack: 40, sp_defense: 40, speed: 60 },
    catch_rate: 190,
    exp_yield: 61,
    description: "Perro callejero leal y territorial. Protege a los tenderos que le dan comida. En el Rastro, los vendedores los consideran sus guardaespaldas no oficiales.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 1, move_name: "Aullido" },
      { level: 8, move_name: "Mordisco" },
      { level: 15, move_name: "Rugido" },
      { level: 22, move_name: "Derribo" }
    ],
    evolution: { method: "level", level: 28, into_name: "Canchorro" }
  },
  {
    id: 15,
    name: "Canchorro",
    types: ["normal", "fighting"],
    base_stats: { hp: 80, attack: 100, defense: 70, sp_attack: 50, sp_defense: 65, speed: 85 },
    catch_rate: 75,
    exp_yield: 158,
    description: "Perro callejero que ha aprendido a defenderse en las calles de Madrid. Extremadamente leal a su entrenador. Los vendedores del Rastro lo usan para proteger sus puestos.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 1, move_name: "Aullido" },
      { level: 8, move_name: "Mordisco" },
      { level: 15, move_name: "Rugido" },
      { level: 22, move_name: "Derribo" },
      { level: 28, move_name: "A Bocajarro" },
      { level: 35, move_name: "Triturar" },
      { level: 42, move_name: "Sacrificio" }
    ]
  }
];

async function generateWildPokemon() {
  console.log('🌿 POKÉMON MADRID - Generador de Pokémon Salvajes');
  console.log('=================================================\n');
  console.log('Zona: Tetuán + Ruta 1\n');

  for (const pokemon of wildPokemon) {
    try {
      console.log(`Creando: ${pokemon.name} (ID: ${pokemon.id})...`);

      const result = await createCreatureTool.execute({
        project_path: PROJECT_PATH,
        creature_data: pokemon,
        generate_sprite: false
      });

      console.log(`✓ ${pokemon.name} creado exitosamente`);
      console.log(`  Tipos: ${pokemon.types.join('/')}`);
      console.log(`  Catch Rate: ${pokemon.catch_rate}`);
      console.log('');

    } catch (error) {
      console.error(`✗ Error creando ${pokemon.name}:`, error.message);
    }
  }

  console.log('\n✅ Generación de Pokémon salvajes completada!');
  console.log('\n📊 Encuentros en hierba:');
  console.log('   Tetuán (Parque): Ratamad 90%, Pichoneta 10%');
  console.log('   Ruta 1: Ratamad 70%, Pichoneta 25%, Perrucho 5%');
}

generateWildPokemon();
