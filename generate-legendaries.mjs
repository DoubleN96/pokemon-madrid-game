#!/usr/bin/env node

/**
 * Generador de Pokémon Legendarios - Pokémon Madrid
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { createCreatureTool } = require('../pokemon-game-mcp/dist/tools/pokemon/create-creature.js');

const PROJECT_PATH = '/root/pokemon-madrid-game';

const legendaries = [
  // LEGENDARIO PRINCIPAL: METRIÓN
  {
    id: 59,
    name: "Metrión",
    types: ["steel", "psychic"],
    base_stats: { hp: 106, attack: 90, defense: 120, sp_attack: 154, sp_defense: 120, speed: 90 },
    catch_rate: 3,
    exp_yield: 270,
    description: "Dios del Metro de Madrid. Existe desde que se inauguró la primera línea en 1919. Protege los túneles y a los viajeros nocturnos. Se dice que aparece solo ante entrenadores puros de corazón. Su rugido suena como mil trenes arrancando simultáneamente.",
    moves: [
      { level: 1, move_name: "Confusión" },
      { level: 1, move_name: "Defensa Férrea" },
      { level: 25, move_name: "Psicorrayo" },
      { level: 35, move_name: "Garra Metal" },
      { level: 45, move_name: "Psíquico" },
      { level: 55, move_name: "Giro Bola" },
      { level: 65, move_name: "Premonición" },
      { level: 70, move_name: "Pulso Metro" }
    ]
  },

  // LEGENDARIO SECUNDARIO: URSABÓN
  {
    id: 60,
    name: "Ursabón",
    types: ["normal", "fairy"],
    base_stats: { hp: 110, attack: 110, defense: 90, sp_attack: 100, sp_defense: 110, speed: 60 },
    catch_rate: 3,
    exp_yield: 270,
    description: "Oso eterno del escudo de Madrid junto al madroño. Guardián milenario de la ciudad desde tiempos del rey Alfonso VI. Se dice que mientras Ursabón duerma bajo la Puerta del Sol, Madrid prosperará. Solo despierta cuando la ciudad está en grave peligro.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 1, move_name: "Viento Feérico" },
      { level: 25, move_name: "Golpe" },
      { level: 35, move_name: "Hoja Mágica" },
      { level: 45, move_name: "Derribo" },
      { level: 55, move_name: "Brillo Mágico" },
      { level: 65, move_name: "Bomba Germen" },
      { level: 70, move_name: "Abrazo Madroño" }
    ]
  },

  // LEGENDARIOS MENORES: AVES DE MADRID
  {
    id: 61,
    name: "Halcónix",
    types: ["flying", "fire"],
    base_stats: { hp: 90, attack: 125, defense: 70, sp_attack: 85, sp_defense: 75, speed: 115 },
    catch_rate: 3,
    exp_yield: 250,
    description: "Halcón legendario que anida en la Torre de Madrid. Su chillido puede oírse en toda la ciudad. Representa el orgullo y la nobleza madrileña. Los días de victoria del Real Madrid, sobrevuela el Bernabéu.",
    moves: [
      { level: 1, move_name: "Picotazo" },
      { level: 1, move_name: "Ascua" },
      { level: 30, move_name: "Ataque Ala" },
      { level: 40, move_name: "Lanzallamas" },
      { level: 50, move_name: "Pájaro Osado" },
      { level: 60, move_name: "Envite Ígneo" },
      { level: 70, move_name: "Nitrocarga" }
    ]
  },
  {
    id: 62,
    name: "Cuervoluz",
    types: ["flying", "electric"],
    base_stats: { hp: 90, attack: 90, defense: 85, sp_attack: 125, sp_defense: 90, speed: 100 },
    catch_rate: 3,
    exp_yield: 250,
    description: "Cuervo legendario que vive en la Torre Picasso. Controla las tormentas sobre Madrid. Su graznido trae lluvia. Se dice que protege las Cuatro Torres Business Area de desastres naturales.",
    moves: [
      { level: 1, move_name: "Picotazo" },
      { level: 1, move_name: "Impactrueno" },
      { level: 30, move_name: "Ataque Ala" },
      { level: 40, move_name: "Rayo" },
      { level: 50, move_name: "Tormenta" },
      { level: 60, move_name: "Trueno" },
      { level: 70, move_name: "Aire Afilado" }
    ]
  },
  {
    id: 63,
    name: "Águilasol",
    types: ["flying", "psychic"],
    base_stats: { hp: 106, attack: 85, defense: 90, sp_attack: 125, sp_defense: 110, speed: 95 },
    catch_rate: 3,
    exp_yield: 250,
    description: "Águila dorada que vive en lo alto de la Gran Vía. Representa la sabiduría y la visión del futuro de Madrid. Dicen que puede ver todos los caminos posibles de la ciudad. Solo aparece al amanecer en la Puerta del Sol.",
    moves: [
      { level: 1, move_name: "Picotazo" },
      { level: 1, move_name: "Confusión" },
      { level: 30, move_name: "Ataque Ala" },
      { level: 40, move_name: "Psíquico" },
      { level: 50, move_name: "Pájaro Osado" },
      { level: 60, move_name: "Premonición" },
      { level: 70, move_name: "Aire Afilado" }
    ]
  },

  // SUB-LEGENDARIOS: GUARDIANES DE DISTRITOS
  {
    id: 64,
    name: "Osabón",
    types: ["normal", "ground"],
    base_stats: { hp: 95, attack: 105, defense: 100, sp_attack: 65, sp_defense: 90, speed: 70 },
    catch_rate: 25,
    exp_yield: 220,
    description: "Oso gigante de Casa de Campo. Primo menor de Ursabón. Protege los bosques urbanos de Madrid. Cuando ruge, todos los animales del parque se ponen en alerta.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 1, move_name: "Ataque Arena" },
      { level: 20, move_name: "Golpe" },
      { level: 30, move_name: "Excavar" },
      { level: 40, move_name: "Derribo" },
      { level: 50, move_name: "Terremoto" }
    ]
  },
  {
    id: 65,
    name: "Angelón",
    types: ["fairy", "flying"],
    base_stats: { hp: 80, attack: 75, defense: 95, sp_attack: 115, sp_defense: 105, speed: 90 },
    catch_rate: 25,
    exp_yield: 220,
    description: "Ángel del Monumento a los Caídos por España. Protege a los héroes caídos. Su canto puede curar cualquier herida del alma. Aparece en momentos de gran tristeza para consolar.",
    moves: [
      { level: 1, move_name: "Viento Feérico" },
      { level: 1, move_name: "Tornado" },
      { level: 20, move_name: "Hoja Mágica" },
      { level: 30, move_name: "Ataque Ala" },
      { level: 40, move_name: "Brillo Mágico" },
      { level: 50, move_name: "Aire Afilado" }
    ]
  }
];

async function generateLegendaries() {
  console.log('⭐ POKÉMON MADRID - Legendarios');
  console.log('================================\n');

  for (const pokemon of legendaries) {
    try {
      console.log(`Creando: ${pokemon.name} (ID: ${pokemon.id})...`);

      const result = await createCreatureTool.execute({
        project_path: PROJECT_PATH,
        creature_data: pokemon,
        generate_sprite: false
      });

      console.log(`✓ ${pokemon.name} - ${pokemon.types.join('/')}`);

    } catch (error) {
      console.error(`✗ Error: ${pokemon.name}`);
    }
  }

  console.log('\n✅ Todos los legendarios generados!');
  console.log('\n📊 Clasificación:');
  console.log('   Legendarios Principales: Metrión (Metro), Ursabón (Escudo de Madrid)');
  console.log('   Legendarios Menores: Halcónix (Fuego), Cuervoluz (Eléctrico), Águilasol (Psíquico)');
  console.log('   Sub-Legendarios: Osabón (Casa de Campo), Angelón (Monumento Caídos)');
  console.log('\n   Total BST Metrión/Ursabón: 680 (tier Lugia/Ho-Oh)');
  console.log('   Total BST Aves: 580 (tier Zapdos/Moltres/Articuno)');
  console.log('   Total BST Sub-Legendarios: 525 (tier Regi/Beast)');
}

generateLegendaries();
