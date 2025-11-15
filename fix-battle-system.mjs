#!/usr/bin/env node

/**
 * Script para arreglar el sistema de combate de Pokémon Madrid
 * Añade movimientos, tipos y catch_rate a todos los Pokémon
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const PROJECT_PATH = '/root/stratomaclaude/projects/pokemon-madrid-game';

// Mapeo de tipos Pokémon a Elements de RPG Maker MZ
const TYPE_TO_ELEMENT = {
  "normal": 1,    // Physical
  "fire": 2,      // Fire
  "ice": 3,       // Ice
  "electric": 4,  // Thunder
  "water": 5,     // Water
  "ground": 6,    // Earth
  "flying": 7,    // Wind
  "psychic": 8,   // Light
  "dark": 9,      // Dark
  "fighting": 1,  // Physical
  "poison": 6,    // Earth
  "bug": 7,       // Wind
  "rock": 6,      // Earth
  "ghost": 9,     // Dark
  "steel": 1,     // Physical
  "grass": 5,     // Water
  "dragon": 2,    // Fire
  "fairy": 8      // Light
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
  "dark": [1],           // Placaje
  "steel": [1],          // Placaje
  "flying": [1],         // Placaje
  "poison": [1],         // Placaje
  "ground": [1],         // Placaje
  "rock": [1],           // Placaje
  "bug": [1],            // Placaje
  "ice": [1],            // Placaje
  "dragon": [3]          // Ascua
};

// Datos de Pokémon con tipos y catch rates
const POKEMON_DATA = {
  1: { name: "Chulapón", types: ["normal", "fighting"], catch_rate: 45 },
  2: { name: "Chulapón-Plus", types: ["fighting"], catch_rate: 45 },
  3: { name: "Castizón", types: ["fighting"], catch_rate: 45 },
  4: { name: "Gatolegre", types: ["normal", "ghost"], catch_rate: 45 },
  5: { name: "Miaupintura", types: ["ghost"], catch_rate: 45 },
  6: { name: "Felínoir", types: ["ghost", "dark"], catch_rate: 45 },
  7: { name: "Azulejín", types: ["water", "steel"], catch_rate: 45 },
  8: { name: "Azulejón", types: ["water", "steel"], catch_rate: 45 },
  9: { name: "Mayólicon", types: ["water", "steel"], catch_rate: 45 },
  10: { name: "Ratamad", types: ["normal"], catch_rate: 255 },
  11: { name: "Rataurban", types: ["normal", "dark"], catch_rate: 127 },
  12: { name: "Pichoneta", types: ["normal", "flying"], catch_rate: 255 },
  13: { name: "Palomazul", types: ["flying"], catch_rate: 127 },
  14: { name: "Perrucho", types: ["normal"], catch_rate: 255 },
  15: { name: "Canchorro", types: ["normal"], catch_rate: 127 },
  16: { name: "Rosalaño", types: ["grass", "fairy"], catch_rate: 190 },
  17: { name: "Madroñón", types: ["grass", "fairy"], catch_rate: 75 },
  18: { name: "Castañón", types: ["grass"], catch_rate: 190 },
  19: { name: "Cipresal", types: ["grass", "ghost"], catch_rate: 75 },
  20: { name: "Cochinón", types: ["normal"], catch_rate: 190 }
};

function updateBattleSystem() {
  console.log('🔧 Actualizando sistema de combate...\n');

  // Leer Enemies.json
  const enemiesPath = join(PROJECT_PATH, 'data', 'Enemies.json');
  const enemies = JSON.parse(readFileSync(enemiesPath, 'utf-8'));

  let updated = 0;

  // Actualizar cada Pokémon
  for (let i = 1; i < enemies.length; i++) {
    if (!enemies[i]) continue;

    const pokemon = enemies[i];
    const data = POKEMON_DATA[i];

    if (!data) {
      console.log(`⚠️  ID ${i}: ${pokemon.name} - Sin datos, usando defaults`);
      // Usar defaults para Pokémon sin datos
      pokemon.actions = [
        { skillId: 1, conditionType: 0, conditionParam1: 0, conditionParam2: 0, rating: 5 }
      ];
      pokemon.traits = [
        { code: 11, dataId: 1, value: 0 }  // Normal type por default
      ];
      pokemon.note = `<catchRate:255>`;
      updated++;
      continue;
    }

    console.log(`✓ ID ${i}: ${data.name} (${data.types.join('/')})`);

    // 1. Configurar movimientos (actions)
    const actions = [];
    for (const type of data.types) {
      const moves = MOVES_BY_TYPE[type] || [1];
      for (const moveId of moves) {
        // Evitar duplicados
        if (!actions.find(a => a.skillId === moveId)) {
          actions.push({
            skillId: moveId,
            conditionType: 0,
            conditionParam1: 0,
            conditionParam2: 0,
            rating: 5
          });
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
    for (const type of data.types) {
      const elementId = TYPE_TO_ELEMENT[type] || 1;
      // Evitar duplicados
      if (!traits.find(t => t.dataId === elementId)) {
        traits.push({
          code: 11,      // Element Rate
          dataId: elementId,
          value: 0       // Neutral (no resistance)
        });
      }
    }

    pokemon.traits = traits;

    // 3. Añadir catch_rate y evolution a note
    let note = `<catchRate:${data.catch_rate}>`;

    // Añadir evolución si existe
    if (data.evolution) {
      note += `\n<evolution:${data.evolution.into_id},${data.evolution.level}>`;
    }

    pokemon.note = note;

    updated++;
  }

  // Guardar archivo actualizado
  writeFileSync(enemiesPath, JSON.stringify(enemies, null, 2), 'utf-8');

  console.log(`\n✅ ${updated} Pokémon actualizados!`);
  console.log('\n📊 Resumen:');
  console.log('   - Movimientos: Asignados según tipo');
  console.log('   - Tipos: Configurados en traits');
  console.log('   - Catch Rate: Añadido a notes');
}

// Ejecutar
updateBattleSystem();
