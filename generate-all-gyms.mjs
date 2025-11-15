#!/usr/bin/env node

/**
 * Generador de Gimnasios 3-8 - Pokémon Madrid
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { createCreatureTool } = require('../pokemon-game-mcp/dist/tools/pokemon/create-creature.js');

const PROJECT_PATH = '/root/pokemon-madrid-game';

const allGyms = [
  // GIMNASIO 3: PALACIO REAL - DON FÉLIX (Lucha)
  {
    id: 22,
    name: "Espadachín",
    types: ["fighting", "steel"],
    base_stats: { hp: 60, attack: 80, defense: 65, sp_attack: 40, sp_defense: 55, speed: 75 },
    catch_rate: 90,
    exp_yield: 128,
    description: "Mosquetero español del siglo XVII. Lucha con honor y elegancia. Su espada nunca se oxida y brilla con el orgullo de los tercios españoles."
  },
  {
    id: 23,
    name: "Piquerico",
    types: ["fighting", "steel"],
    base_stats: { hp: 70, attack: 85, defense: 80, sp_attack: 35, sp_defense: 60, speed: 55 },
    catch_rate: 90,
    exp_yield: 138,
    description: "Soldado de pica de los tercios. Su lanza puede perforar cualquier armadura. Marcha en formación incluso cuando duerme."
  },
  {
    id: 24,
    name: "Alabardón",
    types: ["fighting", "steel"],
    base_stats: { hp: 80, attack: 95, defense: 85, sp_attack: 45, sp_defense: 70, speed: 50 },
    catch_rate: 75,
    exp_yield: 155,
    description: "Guardia real del Palacio. Su alabarda ha protegido a reyes durante siglos. Dicen que su armadura fue forjada con oro de América."
  },

  // GIMNASIO 4: RETIRO - FLORA (Planta)
  {
    id: 25,
    name: "Rosalaño",
    types: ["grass", "fairy"],
    base_stats: { hp: 65, attack: 50, defense: 60, sp_attack: 85, sp_defense: 75, speed: 70 },
    catch_rate: 100,
    exp_yield: 135,
    description: "Rosa del Rosaleda del Retiro que cobró vida. Su perfume calma a cualquier criatura. Los enamorados la buscan para declarar su amor."
  },
  {
    id: 26,
    name: "Cipresal",
    types: ["grass", "ghost"],
    base_stats: { hp: 70, attack: 60, defense: 80, sp_attack: 75, sp_defense: 85, speed: 45 },
    catch_rate: 90,
    exp_yield: 142,
    description: "Ciprés centenario del Retiro. Guarda las almas de las historias contadas bajo su sombra. Por la noche, sus ramas susurran secretos del pasado."
  },
  {
    id: 27,
    name: "Estanquera",
    types: ["grass", "water"],
    base_stats: { hp: 85, attack: 55, defense: 75, sp_attack: 90, sp_defense: 95, speed: 50 },
    catch_rate: 75,
    exp_yield: 158,
    description: "Pokémon nenúfar gigante del Estanque Grande. Puede sostener a niños pequeños en sus hojas. Las tortugas del estanque la consideran su reina."
  },

  // GIMNASIO 5: LAS VENTAS - BRASCÓN (Fuego/Lucha)
  {
    id: 28,
    name: "Taurín",
    types: ["fire", "fighting"],
    base_stats: { hp: 70, attack: 90, defense: 70, sp_attack: 50, sp_defense: 60, speed: 80 },
    catch_rate: 75,
    exp_yield: 145,
    description: "Toro de lidia joven con llamas en los cuernos. Entrena embistiendo árboles en Casa de Campo. Sueña con ser tan legendario como Taurón Bravo."
  },
  {
    id: 29,
    name: "Capotero",
    types: ["fire", "flying"],
    base_stats: { hp: 60, attack: 65, defense: 55, sp_attack: 95, sp_defense: 70, speed: 90 },
    catch_rate: 90,
    exp_yield: 140,
    description: "Capote de torero que cobró vida con el fuego de la pasión taurina. Ondea grácilmente al viento y puede envolver a sus enemigos en llamas."
  },
  {
    id: 30,
    name: "Taurón Bravo",
    types: ["fire", "fighting"],
    base_stats: { hp: 95, attack: 120, defense: 85, sp_attack: 65, sp_defense: 75, speed: 85 },
    catch_rate: 45,
    exp_yield: 210,
    description: "Toro legendario de Las Ventas. Sus cuernos arden con el fuego de mil corridas. Solo los toreros más valientes se atreven a enfrentarlo."
  },

  // GIMNASIO 6: MALASAÑA - REBECA (Veneno/Siniestro)
  {
    id: 31,
    name: "Grafitón",
    types: ["poison", "dark"],
    base_stats: { hp: 65, attack: 80, defense: 60, sp_attack: 85, sp_defense: 65, speed: 90 },
    catch_rate: 90,
    exp_yield: 148,
    description: "Graffiti que cobró vida en una pared de Malasaña. Puede cambiar de forma y color. Los artistas urbanos lo respetan como musa de la calle."
  },
  {
    id: 32,
    name: "Viniloz",
    types: ["dark", "flying"],
    base_stats: { hp: 70, attack: 75, defense: 70, sp_attack: 90, sp_defense: 75, speed: 95 },
    catch_rate: 75,
    exp_yield: 155,
    description: "Disco de vinilo de los años 80 que gira eternamente. Toca música de La Movida sin parar. Dicen que Alaska lo vio nacer en una discoteca."
  },
  {
    id: 33,
    name: "Moviderón",
    types: ["poison", "dark"],
    base_stats: { hp: 80, attack: 90, defense: 75, sp_attack: 100, sp_defense: 80, speed: 105 },
    catch_rate: 60,
    exp_yield: 185,
    description: "Espíritu de La Movida Madrileña. Representa libertad, arte y rebeldía. Su presencia hace que todos quieran bailar y crear arte."
  },

  // GIMNASIO 7: CUATRO TORRES - DRA. VISIÓN (Psíquico)
  {
    id: 34,
    name: "Teleportín",
    types: ["psychic"],
    base_stats: { hp: 60, attack: 50, defense: 65, sp_attack: 105, sp_defense: 85, speed: 100 },
    catch_rate: 75,
    exp_yield: 165,
    description: "Oficinista que puede teletrabaja desde cualquier dimensión. Su mente conecta con internet psíquicamente. Nunca llega tarde a las reuniones."
  },
  {
    id: 35,
    name: "Torrezka",
    types: ["psychic", "steel"],
    base_stats: { hp: 75, attack: 60, defense: 110, sp_attack: 95, sp_defense: 100, speed: 60 },
    catch_rate: 60,
    exp_yield: 175,
    description: "Torre de oficinas viviente. Su estructura mental es perfecta. Puede calcular millones de datos simultáneamente."
  },
  {
    id: 36,
    name: "Cerebrium",
    types: ["psychic"],
    base_stats: { hp: 70, attack: 55, defense: 75, sp_attack: 125, sp_defense: 95, speed: 110 },
    catch_rate: 45,
    exp_yield: 195,
    description: "Cerebro digital del futuro de Madrid. Procesa información más rápido que cualquier ordenador. Predice el desarrollo de la ciudad."
  },

  // GIMNASIO 8: CIBELES - CIBELIA (Agua)
  {
    id: 37,
    name: "Leonceles",
    types: ["water"],
    base_stats: { hp: 75, attack: 95, defense: 80, sp_attack: 70, sp_defense: 75, speed: 85 },
    catch_rate: 75,
    exp_yield: 160,
    description: "León de la Fuente de Cibeles. Protege a la diosa con su vida. Cuando el Real Madrid gana, ruge de alegría soltando chorros de agua."
  },
  {
    id: 38,
    name: "Fuentiña",
    types: ["water", "fairy"],
    base_stats: { hp: 80, attack: 60, defense: 90, sp_attack: 100, sp_defense: 95, speed: 70 },
    catch_rate: 60,
    exp_yield: 172,
    description: "Fuente ornamental menor que aspira a ser como Cibeles. Cada gota de su agua es mágica. Los madrileños le piden deseos al pasar."
  },
  {
    id: 39,
    name: "Cibeleón",
    types: ["water", "fairy"],
    base_stats: { hp: 100, attack: 85, defense: 100, sp_attack: 115, sp_defense: 110, speed: 80 },
    catch_rate: 45,
    exp_yield: 220,
    description: "León místico de Cibeles elevado a categoría divina. Cuando ruge, todas las fuentes de Madrid responden. Es el símbolo viviente de la victoria."
  }
];

async function generateAllGyms() {
  console.log('🏆 POKÉMON MADRID - Gimnasios 3-8');
  console.log('==================================\n');

  for (const pokemon of allGyms) {
    try {
      console.log(`Creando: ${pokemon.name} (ID: ${pokemon.id})...`);

      const moves = pokemon.moves || [
        { level: 1, move_name: "Placaje" },
        { level: 1, move_name: "Malicioso" }
      ];

      const result = await createCreatureTool.execute({
        project_path: PROJECT_PATH,
        creature_data: {
          ...pokemon,
          moves,
          catch_rate: pokemon.catch_rate,
          exp_yield: pokemon.exp_yield
        },
        generate_sprite: false
      });

      console.log(`✓ ${pokemon.name}`);

    } catch (error) {
      console.error(`✗ Error: ${pokemon.name}`);
    }
  }

  console.log('\n✅ Todos los gimnasios generados!');
  console.log('\n📊 Total Pokémon hasta ahora:', 21 + allGyms.length);
}

generateAllGyms();
