#!/usr/bin/env node

/**
 * Generador de Gimnasios 1 y 2 - Pokémon Madrid
 * Plaza Mayor (Normal) + Gran Vía (Eléctrico)
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { createCreatureTool } = require('../pokemon-game-mcp/dist/tools/pokemon/create-creature.js');

const PROJECT_PATH = '/root/pokemon-madrid-game';

const gymPokemon = [
  // GIMNASIO 1: PLAZA MAYOR - MAYOR MATILDE (Normal)
  {
    id: 16,
    name: "Castañón",
    types: ["normal", "grass"],
    base_stats: { hp: 65, attack: 75, defense: 70, sp_attack: 45, sp_defense: 50, speed: 45 },
    catch_rate: 120,
    exp_yield: 112,
    description: "Pokémon castaño gigante nacido de las castañeras de la Plaza Mayor. Su cuerpo es una castaña enorme con pinchos. Desprende calor constante en invierno.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 1, move_name: "Látigo" },
      { level: 12, move_name: "Pisotón" },
      { level: 16, move_name: "Bomba Germen" },
      { level: 20, move_name: "Cuerpo Pesado" }
    ]
  },

  // GIMNASIO 2: GRAN VÍA - VOLTEO (Eléctrico)
  {
    id: 17,
    name: "Voltaploma",
    types: ["electric", "flying"],
    base_stats: { hp: 50, attack: 60, defense: 45, sp_attack: 75, sp_defense: 50, speed: 90 },
    catch_rate: 120,
    exp_yield: 118,
    description: "Paloma que absorbió la electricidad de los neones de Gran Vía. Sus plumas brillan con luz eléctrica por la noche. Anida en los carteles luminosos de cines.",
    moves: [
      { level: 1, move_name: "Picotazo" },
      { level: 1, move_name: "Impactrueno" },
      { level: 15, move_name: "Ataque Rápido" },
      { level: 18, move_name: "Chispa" },
      { level: 22, move_name: "Ala de Acero" }
    ]
  },
  {
    id: 18,
    name: "Farola-K",
    types: ["electric", "steel"],
    base_stats: { hp: 60, attack: 55, defense: 85, sp_attack: 80, sp_defense: 70, speed: 40 },
    catch_rate: 90,
    exp_yield: 135,
    description: "Farola antigua de Gran Vía que cobró vida. Ilumina las calles nocturnas con luz eléctrica. Los artistas callejeros se reúnen bajo su luz porque atrae la inspiración.",
    moves: [
      { level: 1, move_name: "Impactrueno" },
      { level: 1, move_name: "Defensa Férrea" },
      { level: 18, move_name: "Chispa" },
      { level: 20, move_name: "Rayo" },
      { level: 24, move_name: "Giro Bola" }
    ]
  },
  {
    id: 19,
    name: "Neoniko",
    types: ["electric", "poison"],
    base_stats: { hp: 55, attack: 70, defense: 50, sp_attack: 90, sp_defense: 60, speed: 95 },
    catch_rate: 90,
    exp_yield: 145,
    description: "Lagartija que absorbe luz de neón. Su cuerpo cambia de color según la publicidad que mira. Dicen que fue una mascota de un cine que escapó y evolucionó en los carteles.",
    moves: [
      { level: 1, move_name: "Arañazo" },
      { level: 1, move_name: "Impactrueno" },
      { level: 15, move_name: "Onda Voltio" },
      { level: 22, move_name: "Rayo" },
      { level: 26, move_name: "Gas Venenoso" }
    ]
  },

  // Pokémon adicionales de entrenadores previos
  {
    id: 20,
    name: "Libracho",
    types: ["psychic"],
    base_stats: { hp: 45, attack: 35, defense: 50, sp_attack: 70, sp_defense: 60, speed: 55 },
    catch_rate: 150,
    exp_yield: 88,
    description: "Libro viviente del Barrio de las Letras. Sus páginas contienen poemas antiguos de Madrid. Levita silenciosamente por las bibliotecas buscando nuevos lectores.",
    moves: [
      { level: 1, move_name: "Confusión" },
      { level: 1, move_name: "Impresionar" },
      { level: 12, move_name: "Psicorrayo" },
      { level: 18, move_name: "Recuperación" },
      { level: 24, move_name: "Psíquico" }
    ],
    evolution: { method: "level", level: 28, into_name: "Tomoroto" }
  },
  {
    id: 21,
    name: "Tomoroto",
    types: ["psychic"],
    base_stats: { hp: 70, attack: 50, defense: 75, sp_attack: 100, sp_defense: 85, speed: 70 },
    catch_rate: 75,
    exp_yield: 165,
    description: "Tomo antiguo que guarda toda la historia literaria de Madrid. Puede proyectar escenas del pasado de la ciudad. Los historiadores lo buscan para consultar eventos olvidados.",
    moves: [
      { level: 1, move_name: "Confusión" },
      { level: 1, move_name: "Impresionar" },
      { level: 12, move_name: "Psicorrayo" },
      { level: 18, move_name: "Recuperación" },
      { level: 24, move_name: "Psíquico" },
      { level: 28, move_name: "Premonición" },
      { level: 35, move_name: "Amnesia" }
    ]
  }
];

async function generateGyms() {
  console.log('🏛️ POKÉMON MADRID - Gimnasios 1 y 2');
  console.log('====================================\n');

  for (const pokemon of gymPokemon) {
    try {
      console.log(`Creando: ${pokemon.name} (ID: ${pokemon.id})...`);

      const result = await createCreatureTool.execute({
        project_path: PROJECT_PATH,
        creature_data: pokemon,
        generate_sprite: false
      });

      console.log(`✓ ${pokemon.name} creado`);
      console.log(`  Tipos: ${pokemon.types.join('/')}\n`);

    } catch (error) {
      console.error(`✗ Error: ${pokemon.name}:`, error.message);
    }
  }

  console.log('\n✅ Gimnasios 1 y 2 completados!');
  console.log('\n🏆 GIMNASIO 1 - PLAZA MAYOR (Mayor Matilde):');
  console.log('   Ratamad ♀ Lv.10');
  console.log('   Perrucho ♂ Lv.11');
  console.log('   Castañón ♂ Lv.12');
  console.log('\n⚡ GIMNASIO 2 - GRAN VÍA (Volteo):');
  console.log('   Voltaploma ♂ Lv.18');
  console.log('   Farola-K ♀ Lv.20');
  console.log('   Neoniko ♂ Lv.22');
}

generateGyms();
