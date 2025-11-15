#!/usr/bin/env node

/**
 * Script completo para arreglar el sistema de combate
 * Lee datos de creatures.json y actualiza Enemies.json
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const PROJECT_PATH = '/root/stratomaclaude/projects/pokemon-madrid-game';

// Mapeo de tipos Pokémon a Elements de RPG Maker MZ
const TYPE_TO_ELEMENT = {
  "normal": 1, "fighting": 1, "steel": 1,
  "fire": 2, "dragon": 2,
  "ice": 3,
  "electric": 4,
  "water": 5, "grass": 5,
  "ground": 6, "poison": 6, "rock": 6,
  "flying": 7, "bug": 7,
  "psychic": 8, "fairy": 8,
  "dark": 9, "ghost": 9
};

// Movimientos por tipo (IDs de Skills.json)
const MOVES_BY_TYPE = {
  "normal": [1, 2],      // Placaje, Arañazo
  "fighting": [9],       // Golpe Kárate
  "fire": [3, 10],       // Ascua, Lanzallamas
  "water": [4],          // Pistola Agua
  "grass": [5],          // Absorber
  "electric": [6],       // Impactrueno
  "psychic": [7],        // Confusión
  "fairy": [8],          // Viento Feérico
  "ghost": [7],          // Confusión
  "dark": [1, 2],        // Placaje, Arañazo
  "steel": [1],          // Placaje
  "flying": [1],         // Placaje
  "poison": [1],         // Placaje
  "ground": [1],         // Placaje
  "rock": [1],           // Placaje
  "bug": [1],            // Placaje
  "ice": [1],            // Placaje
  "dragon": [3, 10]      // Ascua, Lanzallamas
};

// Catch rates por rareza
const DEFAULT_CATCH_RATES = {
  "common": 255,      // Pokémon comunes
  "uncommon": 190,    // Pokémon poco comunes
  "rare": 75,         // Pokémon raros
  "veryrare": 45,     // Pokémon muy raros
  "starter": 45,      // Iniciales
  "legendary": 3,     // Legendarios
  "sublegendary": 45  // Sub-legendarios
};

function getCatchRate(pokemonId, name) {
  // Iniciales (1-9)
  if (pokemonId >= 1 && pokemonId <= 9) return 45;

  // Comunes de ruta (10-20)
  if (pokemonId >= 10 && pokemonId <= 20) return 255;

  // Legendarios (59-65, 70, 77-80)
  if ([59, 60, 61, 62, 63, 64, 65, 70, 77, 78, 79, 80].includes(pokemonId)) return 3;

  // Sub-legendarios
  if ([66, 67, 68, 69, 71, 72, 73, 74, 75, 76].includes(pokemonId)) return 45;

  // Team Vandalia (48-58)
  if (pokemonId >= 48 && pokemonId <= 58) return 75;

  // Resto: poco comunes
  return 190;
}

function updateCompleteBattleSystem() {
  console.log('🔧 Actualizando sistema de combate COMPLETO...\n');

  // Leer creatures.json
  const creaturesPath = join(PROJECT_PATH, 'data', 'pokemon', 'creatures.json');
  const creatures = JSON.parse(readFileSync(creaturesPath, 'utf-8'));

  // Leer Enemies.json
  const enemiesPath = join(PROJECT_PATH, 'data', 'Enemies.json');
  const enemies = JSON.parse(readFileSync(enemiesPath, 'utf-8'));

  let updated = 0;

  // Actualizar cada Pokémon
  for (const creature of Object.values(creatures)) {
    const pokemonId = creature.id;
    if (!pokemonId || pokemonId >= enemies.length) continue;

    const pokemon = enemies[pokemonId];
    if (!pokemon) continue;

    const types = creature.types || ["normal"];
    const catchRate = getCatchRate(pokemonId, creature.name);

    console.log(`✓ ID ${pokemonId}: ${creature.name} (${types.join('/')}) - Catch: ${catchRate}`);

    // 1. Configurar movimientos (actions)
    const actions = [];
    const seenMoves = new Set();

    for (const type of types) {
      const moves = MOVES_BY_TYPE[type] || [1];
      for (const moveId of moves) {
        if (!seenMoves.has(moveId)) {
          actions.push({
            skillId: moveId,
            conditionType: 0,
            conditionParam1: 0,
            conditionParam2: 0,
            rating: 5
          });
          seenMoves.add(moveId);
        }
      }
    }

    // Asegurar al menos 1 movimiento
    if (actions.length === 0) {
      actions.push({
        skillId: 1,
        conditionType: 0,
        conditionParam1: 0,
        conditionParam2: 0,
        rating: 5
      });
    }

    pokemon.actions = actions;

    // 2. Configurar tipos (traits)
    const traits = [];
    const seenElements = new Set();

    for (const type of types) {
      const elementId = TYPE_TO_ELEMENT[type] || 1;
      if (!seenElements.has(elementId)) {
        traits.push({
          code: 11,      // Element Rate
          dataId: elementId,
          value: 0       // Neutral
        });
        seenElements.add(elementId);
      }
    }

    pokemon.traits = traits;

    // 3. Añadir catch_rate y evolution a note
    let note = `<catchRate:${catchRate}>`;

    // Añadir evolución si existe
    if (creature.evolution && creature.evolution.into_id) {
      note += `\n<evolution:${creature.evolution.into_id},${creature.evolution.level}>`;
    }

    pokemon.note = note;

    updated++;
  }

  // Guardar archivo actualizado
  writeFileSync(enemiesPath, JSON.stringify(enemies, null, 2), 'utf-8');

  console.log(`\n✅ ${updated} Pokémon actualizados!`);
  console.log('\n📊 Resumen del Sistema de Combate:');
  console.log('   ✓ Movimientos: Asignados según tipo de Pokémon');
  console.log('   ✓ Tipos: Traits configurados con Elements correctos');
  console.log('   ✓ Catch Rate: Añadido según rareza');
  console.log('   ✓ Evoluciones: Notas actualizadas');
  console.log('\n🎮 El sistema de combate ahora es FUNCIONAL!');
}

// Ejecutar
updateCompleteBattleSystem();
