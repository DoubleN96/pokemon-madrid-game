#!/usr/bin/env node

/**
 * Generador del Equipo Vandalia - Pokémon Madrid
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { createCreatureTool } = require('../pokemon-game-mcp/dist/tools/pokemon/create-creature.js');

const PROJECT_PATH = '/root/pokemon-madrid-game';

const vandaliaPokemon = [
  // POKÉMON COMUNES DE RECLUTAS (Nivel 12-25)
  {
    id: 47,
    name: "Sprayón",
    types: ["poison"],
    base_stats: { hp: 50, attack: 45, defense: 40, sp_attack: 60, sp_defense: 45, speed: 70 },
    catch_rate: 190,
    exp_yield: 68,
    description: "Bote de spray que cobró vida absorbiendo pintura tóxica. Vandalia los usa para marcar territorio. Su gas puede causar alucinaciones.",
    moves: [
      { level: 1, move_name: "Impactrueno" },
      { level: 1, move_name: "Gas Venenoso" },
      { level: 12, move_name: "Ácido" },
      { level: 18, move_name: "Bomba Lodo" }
    ]
  },
  {
    id: 48,
    name: "Cadenazo",
    types: ["steel", "dark"],
    base_stats: { hp: 60, attack: 75, defense: 70, sp_attack: 35, sp_defense: 50, speed: 55 },
    catch_rate: 120,
    exp_yield: 82,
    description: "Cadena de bicicleta robada que se retorció hasta cobrar vida. Vandalia las usa como armas. El sonido que hace al moverse aterroriza a los transeúntes.",
    moves: [
      { level: 1, move_name: "Atadura" },
      { level: 1, move_name: "Golpe Bajo" },
      { level: 15, move_name: "Garra Metal" },
      { level: 22, move_name: "Triturar" }
    ]
  },
  {
    id: 49,
    name: "Murcielastre",
    types: ["poison", "flying"],
    base_stats: { hp: 40, attack: 45, defense: 35, sp_attack: 30, sp_defense: 40, speed: 85 },
    catch_rate: 255,
    exp_yield: 54,
    description: "Murciélago del metro abandonado. Vandalia los entrena para vigilar túneles. Su chillido puede romper cristales.",
    moves: [
      { level: 1, move_name: "Absorber" },
      { level: 1, move_name: "Supersónico" },
      { level: 9, move_name: "Impresionar" },
      { level: 13, move_name: "Mordisco" }
    ],
    evolution: { method: "level", level: 22, into_name: "Murciesiniestro" }
  },
  {
    id: 50,
    name: "Murciesiniestro",
    types: ["poison", "flying"],
    base_stats: { hp: 75, attack: 80, defense: 70, sp_attack: 65, sp_defense: 75, speed: 110 },
    catch_rate: 90,
    exp_yield: 159,
    description: "Murciélago gigante evolucionado. Líder de las colonias del metro. Vandalia lo usa para ataques nocturnos sorpresa.",
    moves: [
      { level: 1, move_name: "Absorber" },
      { level: 1, move_name: "Supersónico" },
      { level: 9, move_name: "Impresionar" },
      { level: 13, move_name: "Mordisco" },
      { level: 22, move_name: "Colmillo Veneno" },
      { level: 30, move_name: "Aire Afilado" },
      { level: 38, move_name: "Tóxico" }
    ]
  },

  // POKÉMON DE COMANDANTES (Nivel 30-40)
  {
    id: 51,
    name: "Vandalón",
    types: ["dark", "fighting"],
    base_stats: { hp: 75, attack: 100, defense: 70, sp_attack: 50, sp_defense: 65, speed: 90 },
    catch_rate: 75,
    exp_yield: 172,
    description: "Pandillero que fusionó con la oscuridad de los túneles. Representa el espíritu rebelde de Vandalia. Su puño puede atravesar muros.",
    moves: [
      { level: 1, move_name: "Puño" },
      { level: 1, move_name: "Malicioso" },
      { level: 18, move_name: "Golpe Bajo" },
      { level: 25, move_name: "Golpe Cruz" },
      { level: 32, move_name: "Triturar" },
      { level: 40, move_name: "A Bocajarro" }
    ]
  },
  {
    id: 52,
    name: "Destrozón",
    types: ["steel", "dark"],
    base_stats: { hp: 80, attack: 110, defense: 90, sp_attack: 55, sp_defense: 70, speed: 70 },
    catch_rate: 60,
    exp_yield: 185,
    description: "Máquina excavadora abandonada en obras de metro que Vandalia reanimó. Destruye todo a su paso. Abre túneles secretos bajo Madrid.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 1, move_name: "Defensa Férrea" },
      { level: 20, move_name: "Garra Metal" },
      { level: 28, move_name: "Triturar" },
      { level: 35, move_name: "Cabeza de Hierro" },
      { level: 42, move_name: "Terremoto" }
    ]
  },

  // POKÉMON DE LOS LÍDERES VANDALIA
  {
    id: 53,
    name: "Metroxidado",
    types: ["steel", "poison"],
    base_stats: { hp: 85, attack: 75, defense: 115, sp_attack: 70, sp_defense: 85, speed: 50 },
    catch_rate: 45,
    exp_yield: 195,
    description: "Vagón de metro abandonado de la línea fantasma. Su óxido es venenoso. Vandalia lo usa como base móvil en túneles olvidados.",
    moves: [
      { level: 1, move_name: "Impactrueno" },
      { level: 1, move_name: "Gas Venenoso" },
      { level: 22, move_name: "Giro Bola" },
      { level: 30, move_name: "Bomba Lodo" },
      { level: 38, move_name: "Defensa Férrea" },
      { level: 45, move_name: "Tóxico" }
    ]
  },
  {
    id: 54,
    name: "Sombratún",
    types: ["dark", "ghost"],
    base_stats: { hp: 70, attack: 90, defense: 60, sp_attack: 105, sp_defense: 75, speed: 100 },
    catch_rate: 45,
    exp_yield: 205,
    description: "Sombra amalgamada de todos los que se perdieron en el metro. Vandalia lo invocó con un ritual oscuro. Puede teletransportarse entre estaciones.",
    moves: [
      { level: 1, move_name: "Impresionar" },
      { level: 1, move_name: "Malicioso" },
      { level: 25, move_name: "Lanza Sombras" },
      { level: 33, move_name: "Golpe Bajo" },
      { level: 40, move_name: "Bola Sombra" },
      { level: 48, move_name: "Pulso Umbrío" }
    ]
  },

  // POKÉMON EXCLUSIVO DEL LÍDER SUPREMO (Nivel 50+)
  {
    id: 55,
    name: "Megalínea",
    types: ["steel", "dark"],
    base_stats: { hp: 100, attack: 120, defense: 110, sp_attack: 80, sp_defense: 90, speed: 85 },
    catch_rate: 30,
    exp_yield: 240,
    description: "Tren completo de metro fusionado en una criatura colosal. El arma definitiva de Vandalia. Puede invocar terremotos al rugir. Solo obedece al líder supremo.",
    moves: [
      { level: 1, move_name: "Derribo" },
      { level: 1, move_name: "Malicioso" },
      { level: 28, move_name: "Garra Metal" },
      { level: 35, move_name: "Triturar" },
      { level: 42, move_name: "Giro Bola" },
      { level: 50, move_name: "Defensa Férrea" },
      { level: 55, move_name: "Cabeza de Hierro" }
    ]
  },

  // POKÉMON ADICIONALES DE ENTRENADORES VANDALIA
  {
    id: 56,
    name: "Grafitorra",
    types: ["poison", "psychic"],
    base_stats: { hp: 65, attack: 60, defense: 55, sp_attack: 95, sp_defense: 70, speed: 85 },
    catch_rate: 90,
    exp_yield: 148,
    description: "Graffiti psicodélico de Lavapiés que cobró vida. Sus colores hipnotizan. Vandalia lo usa para propaganda en las paredes.",
    moves: [
      { level: 1, move_name: "Confusión" },
      { level: 1, move_name: "Gas Venenoso" },
      { level: 16, move_name: "Psicorrayo" },
      { level: 24, move_name: "Bomba Lodo" },
      { level: 32, move_name: "Psíquico" }
    ]
  },
  {
    id: 57,
    name: "Cerrojón",
    types: ["steel"],
    base_stats: { hp: 70, attack: 65, defense: 105, sp_attack: 40, sp_defense: 80, speed: 35 },
    catch_rate: 120,
    exp_yield: 125,
    description: "Cerrojo gigante de las puertas del metro abandonado. Vandalia lo usa como guardián. Nadie puede abrir las puertas que cierra.",
    moves: [
      { level: 1, move_name: "Atadura" },
      { level: 1, move_name: "Defensa Férrea" },
      { level: 14, move_name: "Garra Metal" },
      { level: 20, move_name: "Giro Bola" },
      { level: 28, move_name: "Cabeza de Hierro" }
    ]
  },
  {
    id: 58,
    name: "Túnelator",
    types: ["dark", "ground"],
    base_stats: { hp: 75, attack: 95, defense: 75, sp_attack: 55, sp_defense: 65, speed: 80 },
    catch_rate: 75,
    exp_yield: 168,
    description: "Topo mutante que Vandalia entrenó para cavar túneles secretos. Puede sentir vibraciones de pasos a kilómetros de distancia.",
    moves: [
      { level: 1, move_name: "Arañazo" },
      { level: 1, move_name: "Ataque Arena" },
      { level: 17, move_name: "Excavar" },
      { level: 25, move_name: "Golpe Bajo" },
      { level: 33, move_name: "Terremoto" }
    ]
  }
];

async function generateVandalia() {
  console.log('💀 POKÉMON MADRID - Equipo Vandalia');
  console.log('===================================\n');

  for (const pokemon of vandaliaPokemon) {
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

  console.log('\n✅ Equipo Vandalia completado!');
  console.log('\n📊 Jerarquía Vandalia:');
  console.log('   Reclutas (Lv.12-18): Sprayón, Cadenazo, Murcielastre');
  console.log('   Veteranos (Lv.20-28): Murciesiniestro, Grafitorra, Cerrojón, Túnelator');
  console.log('   Comandantes (Lv.30-40): Vandalón, Destrozón');
  console.log('   Líderes (Lv.42-48): Metroxidado, Sombratún');
  console.log('   Líder Supremo (Lv.50-55): Megalínea + equipo completo');
}

generateVandalia();
