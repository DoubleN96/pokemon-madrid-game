#!/usr/bin/env node

/**
 * Generador del Equipo del Rival Pablo - Pokémon Madrid
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { createCreatureTool } = require('../pokemon-game-mcp/dist/tools/pokemon/create-creature.js');

const PROJECT_PATH = '/root/pokemon-madrid-game';

const rivalPokemon = [
  // BATALLA 1: Tetuán (Nivel 5) - Solo el inicial
  // Pablo elige el inicial que contrarresta al del jugador
  // Ya tenemos los 3 iniciales generados (IDs 1, 4, 7)

  // BATALLA 2: Ruta 3 (Nivel 12-14)
  {
    id: 40,
    name: "Gorrioneta",
    types: ["normal", "flying"],
    base_stats: { hp: 40, attack: 55, defense: 30, sp_attack: 30, sp_defense: 30, speed: 70 },
    catch_rate: 255,
    exp_yield: 52,
    description: "Gorrión urbano que anida en los edificios de Madrid. Extremadamente rápido y ágil. Los niños intentan atraparlos lanzando migas de pan.",
    moves: [
      { level: 1, move_name: "Picotazo" },
      { level: 1, move_name: "Gruñido" },
      { level: 9, move_name: "Ataque Rápido" },
      { level: 13, move_name: "Tornado" }
    ]
  },

  // BATALLA 3: Gran Vía (Nivel 18-20)
  {
    id: 41,
    name: "Cochinón",
    types: ["normal"],
    base_stats: { hp: 80, attack: 80, defense: 50, sp_attack: 40, sp_defense: 40, speed: 35 },
    catch_rate: 120,
    exp_yield: 78,
    description: "Cochinillo de Segovia que migró a Madrid. Su carne es tan sabrosa que los restaurantes los buscan. Muy territorial cuando protege su comida.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 1, move_name: "Látigo" },
      { level: 10, move_name: "Rodar" },
      { level: 15, move_name: "Derribo" }
    ]
  },

  // BATALLA 4: Retiro (Nivel 28-32)
  {
    id: 42,
    name: "Barquito",
    types: ["water"],
    base_stats: { hp: 50, attack: 40, defense: 55, sp_attack: 65, sp_defense: 55, speed: 60 },
    catch_rate: 190,
    exp_yield: 88,
    description: "Barco de remos del Estanque Grande del Retiro que cobró vida. Navega eternamente en círculos. Las parejas lo usan para paseos románticos.",
    moves: [
      { level: 1, move_name: "Pistola Agua" },
      { level: 1, move_name: "Malicioso" },
      { level: 12, move_name: "Burbuja" },
      { level: 18, move_name: "Hidropulso" }
    ]
  },
  {
    id: 43,
    name: "Mapachín",
    types: ["normal", "dark"],
    base_stats: { hp: 65, attack: 70, defense: 50, sp_attack: 50, sp_defense: 50, speed: 80 },
    catch_rate: 127,
    exp_yield: 96,
    description: "Mapache invasor que llegó a Casa de Campo. Roba comida de las papeleras. Los guardabosques intentan controlar su población sin éxito.",
    moves: [
      { level: 1, move_name: "Arañazo" },
      { level: 1, move_name: "Malicioso" },
      { level: 14, move_name: "Mordisco" },
      { level: 20, move_name: "Golpe Bajo" }
    ]
  },

  // BATALLA 5: Cuatro Torres (Nivel 42-48) - Equipo completo pre-Liga
  {
    id: 44,
    name: "Urracabra",
    types: ["dark", "flying"],
    base_stats: { hp: 70, attack: 85, defense: 65, sp_attack: 75, sp_defense: 70, speed: 95 },
    catch_rate: 90,
    exp_yield: 155,
    description: "Urraca ladrona de las zonas residenciales. Roba objetos brillantes y los esconde en nidos secretos en los áticos. Se dice que tiene un tesoro en Lavapiés.",
    moves: [
      { level: 1, move_name: "Picotazo" },
      { level: 1, move_name: "Malicioso" },
      { level: 15, move_name: "Golpe Bajo" },
      { level: 22, move_name: "Aire Afilado" },
      { level: 30, move_name: "Mofa" }
    ]
  },
  {
    id: 45,
    name: "Madroñón",
    types: ["grass", "fairy"],
    base_stats: { hp: 80, attack: 60, defense: 70, sp_attack: 90, sp_defense: 85, speed: 70 },
    catch_rate: 75,
    exp_yield: 168,
    description: "Madroño viviente del escudo de Madrid. Sus frutos rojos curan cualquier enfermedad. Solo crece en el kilómetro 0 de la Puerta del Sol.",
    moves: [
      { level: 1, move_name: "Absorber" },
      { level: 1, move_name: "Viento Feérico" },
      { level: 18, move_name: "Megaagotar" },
      { level: 26, move_name: "Hoja Mágica" },
      { level: 35, move_name: "Bomba Germen" }
    ]
  },
  {
    id: 46,
    name: "Metrobús",
    types: ["steel", "electric"],
    base_stats: { hp: 75, attack: 70, defense: 100, sp_attack: 85, sp_defense: 75, speed: 85 },
    catch_rate: 60,
    exp_yield: 182,
    description: "Autobús de la EMT que fusionó con un vagón de metro. Recorre Madrid sin parar. Solo se detiene en las paradas fantasma del metro abandonado.",
    moves: [
      { level: 1, move_name: "Impactrueno" },
      { level: 1, move_name: "Defensa Férrea" },
      { level: 20, move_name: "Chispa" },
      { level: 28, move_name: "Giro Bola" },
      { level: 38, move_name: "Rayo" }
    ]
  }
];

async function generateRivalPokemon() {
  console.log('👤 POKÉMON MADRID - Equipo del Rival Pablo');
  console.log('=========================================\n');

  for (const pokemon of rivalPokemon) {
    try {
      console.log(`Creando: ${pokemon.name} (ID: ${pokemon.id})...`);

      const result = await createCreatureTool.execute({
        project_path: PROJECT_PATH,
        creature_data: pokemon,
        generate_sprite: false
      });

      console.log(`✓ ${pokemon.name}`);

    } catch (error) {
      console.error(`✗ Error: ${pokemon.name}`);
    }
  }

  console.log('\n✅ Equipo del rival Pablo completado!');
  console.log('\n📊 Pokémon del Rival por batalla:');
  console.log('   Batalla 1 (Tetuán Lv.5): Inicial contrarresta');
  console.log('   Batalla 2 (Ruta 3 Lv.12-14): Inicial Lv.14 + Gorrioneta Lv.12');
  console.log('   Batalla 3 (Gran Vía Lv.18-20): Inicial Lv.20 + Gorrioneta Lv.18 + Cochinón Lv.18');
  console.log('   Batalla 4 (Retiro Lv.28-32): Inicial Evo Lv.32 + Gorrioneta Lv.28 + Cochinón Lv.30 + Barquito Lv.28 + Mapachín Lv.30');
  console.log('   Batalla 5 (C.Torres Lv.42-48): Inicial Final Lv.48 + Urracabra Lv.44 + Madroñón Lv.45 + Metrobús Lv.46 + Cochinón Lv.42 + Mapachín Lv.44');
}

generateRivalPokemon();
