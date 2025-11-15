#!/usr/bin/env node

/**
 * Generador del Alto Mando - Liga Pokémon Madrid
 * Basado en el Palacio Real
 */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const { createCreatureTool } = require('../pokemon-game-mcp/dist/tools/pokemon/create-creature.js');

const PROJECT_PATH = '/root/pokemon-madrid-game';

const eliteFour = [
  // ALTO MANDO 1: CARMEN - Especialista en Tipo Fantasma
  {
    id: 66,
    name: "Teatrón",
    types: ["ghost", "psychic"],
    base_stats: { hp: 70, attack: 65, defense: 75, sp_attack: 110, sp_defense: 95, speed: 95 },
    catch_rate: 45,
    exp_yield: 195,
    description: "Espíritu del Teatro Real. Representa todas las obras jamás representadas. Su voz hipnotiza a quien la escucha. Las noches de función, su canto se mezcla con las arias.",
    moves: [
      { level: 1, move_name: "Impresionar" },
      { level: 1, move_name: "Confusión" },
      { level: 30, move_name: "Lanza Sombras" },
      { level: 40, move_name: "Psíquico" },
      { level: 50, move_name: "Bola Sombra" },
      { level: 58, move_name: "Premonición" }
    ]
  },
  {
    id: 67,
    name: "Fantasmadrid",
    types: ["ghost", "dark"],
    base_stats: { hp: 75, attack: 95, defense: 70, sp_attack: 100, sp_defense: 80, speed: 105 },
    catch_rate: 45,
    exp_yield: 205,
    description: "Alma en pena de la Madrid antigua. Recorre las calles medievales invisibles. Protege el Madrid histórico de ser olvidado. Solo aparece en la noche de San Juan.",
    moves: [
      { level: 1, move_name: "Impresionar" },
      { level: 1, move_name: "Malicioso" },
      { level: 32, move_name: "Lanza Sombras" },
      { level: 42, move_name: "Golpe Bajo" },
      { level: 52, move_name: "Bola Sombra" },
      { level: 58, move_name: "Pulso Umbrío" }
    ]
  },
  {
    id: 68,
    name: "Espectrópera",
    types: ["ghost", "fairy"],
    base_stats: { hp: 80, attack: 70, defense: 85, sp_attack: 115, sp_defense: 100, speed: 90 },
    catch_rate: 45,
    exp_yield: 210,
    description: "Diva fantasmal del Teatro Real. Su aria final puede hacer llorar a las piedras. Dicen que fue una soprano que murió en escena y nunca dejó el teatro.",
    moves: [
      { level: 1, move_name: "Impresionar" },
      { level: 1, move_name: "Viento Feérico" },
      { level: 35, move_name: "Lanza Sombras" },
      { level: 45, move_name: "Brillo Mágico" },
      { level: 55, move_name: "Bola Sombra" },
      { level: 60, move_name: "Hoja Mágica" }
    ]
  },

  // ALTO MANDO 2: RODRIGO - Especialista en Tipo Dragón
  {
    id: 69,
    name: "Lagartijo",
    types: ["dragon"],
    base_stats: { hp: 68, attack: 85, defense: 70, sp_attack: 75, sp_defense: 65, speed: 92 },
    catch_rate: 45,
    exp_yield: 180,
    description: "Lagartija gigante del Madrid antiguo. Evolucionó absorbiendo energía mágica de los dragones heráldicos. Puede trepar por cualquier edificio.",
    moves: [
      { level: 1, move_name: "Arañazo" },
      { level: 1, move_name: "Malicioso" },
      { level: 28, move_name: "Furia Dragón" },
      { level: 38, move_name: "Garra Dragón" },
      { level: 48, move_name: "Pulso Dragón" }
    ],
    evolution: { method: "level", level: 55, into_name: "Dragomadrid" }
  },
  {
    id: 70,
    name: "Dragomadrid",
    types: ["dragon", "steel"],
    base_stats: { hp: 85, attack: 125, defense: 100, sp_attack: 95, sp_defense: 85, speed: 105 },
    catch_rate: 45,
    exp_yield: 240,
    description: "Dragón heráldico del escudo real de Madrid. Protector ancestral de la corona. Puede volar sobre la ciudad sin ser visto. Solo obedece a la realeza... o a quienes demuestren nobleza.",
    moves: [
      { level: 1, move_name: "Arañazo" },
      { level: 1, move_name: "Malicioso" },
      { level: 28, move_name: "Furia Dragón" },
      { level: 38, move_name: "Garra Dragón" },
      { level: 48, move_name: "Pulso Dragón" },
      { level: 55, move_name: "Garra Metal" },
      { level: 62, move_name: "Dragoaliento" }
    ]
  },
  {
    id: 71,
    name: "Culebrasa",
    types: ["dragon", "fire"],
    base_stats: { hp: 90, attack: 110, defense: 90, sp_attack: 105, sp_defense: 90, speed: 95 },
    catch_rate: 45,
    exp_yield: 230,
    description: "Serpiente de fuego de las cuevas bajo Madrid. Guardiana de tesoros olvidados. Su aliento puede derretir el acero. Dicen que vigila el oro perdido de los Austrias.",
    moves: [
      { level: 1, move_name: "Ascua" },
      { level: 1, move_name: "Malicioso" },
      { level: 30, move_name: "Furia Dragón" },
      { level: 40, move_name: "Lanzallamas" },
      { level: 50, move_name: "Pulso Dragón" },
      { level: 58, move_name: "Envite Ígneo" }
    ]
  },

  // ALTO MANDO 3: VICTORIA - Especialista en Tipo Hada
  {
    id: 72,
    name: "Florecita",
    types: ["grass", "fairy"],
    base_stats: { hp: 70, attack: 60, defense: 75, sp_attack: 105, sp_defense: 95, speed: 90 },
    catch_rate: 45,
    exp_yield: 188,
    description: "Flor de los jardines de Aranjuez que migró a Madrid. Su polen cura la tristeza. Los enamorados la buscan para sus ramos.",
    moves: [
      { level: 1, move_name: "Absorber" },
      { level: 1, move_name: "Viento Feérico" },
      { level: 25, move_name: "Megaagotar" },
      { level: 35, move_name: "Hoja Mágica" },
      { level: 45, move_name: "Brillo Mágico" },
      { level: 55, move_name: "Energibola" }
    ]
  },
  {
    id: 73,
    name: "Fuentealta",
    types: ["water", "fairy"],
    base_stats: { hp: 90, attack: 70, defense: 95, sp_attack: 110, sp_defense: 105, speed: 80 },
    catch_rate: 45,
    exp_yield: 215,
    description: "Fuente mágica de los jardines reales. Su agua concede deseos a los niños puros de corazón. Las parejas lanzan monedas esperando el amor eterno.",
    moves: [
      { level: 1, move_name: "Pistola Agua" },
      { level: 1, move_name: "Viento Feérico" },
      { level: 28, move_name: "Hidropulso" },
      { level: 38, move_name: "Brillo Mágico" },
      { level: 48, move_name: "Hidrobomba" },
      { level: 58, move_name: "Hoja Mágica" }
    ]
  },
  {
    id: 74,
    name: "Angelreal",
    types: ["fairy", "flying"],
    base_stats: { hp: 85, attack: 75, defense: 90, sp_attack: 120, sp_defense: 110, speed: 95 },
    catch_rate: 45,
    exp_yield: 225,
    description: "Ángel guardián del Palacio Real. Protege a la familia real desde tiempos de Carlos III. Sus alas brillan con luz divina. Solo los de corazón noble pueden verlo.",
    moves: [
      { level: 1, move_name: "Viento Feérico" },
      { level: 1, move_name: "Tornado" },
      { level: 30, move_name: "Ataque Ala" },
      { level: 40, move_name: "Brillo Mágico" },
      { level: 50, move_name: "Aire Afilado" },
      { level: 60, move_name: "Hoja Mágica" }
    ]
  },

  // ALTO MANDO 4: ALFONSO - Especialista en Tipo Acero/Lucha
  {
    id: 75,
    name: "Armadurón",
    types: ["steel", "fighting"],
    base_stats: { hp: 80, attack: 115, defense: 110, sp_attack: 50, sp_defense: 75, speed: 70 },
    catch_rate: 45,
    exp_yield: 215,
    description: "Armadura de los tercios españoles que cobró vida. Su honor es inquebrantable. Nunca ha perdido una batalla justa. Entrena en el patio de la Armería Real.",
    moves: [
      { level: 1, move_name: "Puño" },
      { level: 1, move_name: "Defensa Férrea" },
      { level: 28, move_name: "Golpe Kárate" },
      { level: 38, move_name: "Garra Metal" },
      { level: 48, move_name: "A Bocajarro" },
      { level: 58, move_name: "Cabeza de Hierro" }
    ]
  },
  {
    id: 76,
    name: "Cañonazo",
    types: ["steel", "fire"],
    base_stats: { hp: 85, attack: 120, defense: 100, sp_attack: 95, sp_defense: 80, speed: 75 },
    catch_rate: 45,
    exp_yield: 225,
    description: "Cañón antiguo del siglo XVIII que defendió Madrid. Despierta cuando la ciudad está en peligro. Su rugido se oye en todo el Palacio Real.",
    moves: [
      { level: 1, move_name: "Ascua" },
      { level: 1, move_name: "Defensa Férrea" },
      { level: 30, move_name: "Garra Metal" },
      { level: 40, move_name: "Lanzallamas" },
      { level: 50, move_name: "Cabeza de Hierro" },
      { level: 60, move_name: "Envite Ígneo" }
    ]
  },
  {
    id: 77,
    name: "Coronarón",
    types: ["steel", "psychic"],
    base_stats: { hp: 75, attack: 95, defense: 120, sp_attack: 105, sp_defense: 95, speed: 85 },
    catch_rate: 45,
    exp_yield: 230,
    description: "Corona real viviente forjada con oro de América. Contiene la sabiduría de todos los reyes de España. Solo puede ser levantada por quien sea digno de gobernar.",
    moves: [
      { level: 1, move_name: "Confusión" },
      { level: 1, move_name: "Defensa Férrea" },
      { level: 32, move_name: "Garra Metal" },
      { level: 42, move_name: "Psíquico" },
      { level: 52, move_name: "Cabeza de Hierro" },
      { level: 60, move_name: "Premonición" }
    ]
  },

  // CAMPEÓN: ISABEL - Maestra de todos los tipos
  {
    id: 78,
    name: "Realmajestic",
    types: ["normal", "psychic"],
    base_stats: { hp: 100, attack: 100, defense: 100, sp_attack: 130, sp_defense: 110, speed: 110 },
    catch_rate: 30,
    exp_yield: 270,
    description: "Espíritu ancestral del Palacio Real. Amalgama de todos los reyes y reinas de Madrid. Representa la historia completa de la ciudad. Solo aparece ante el Campeón definitivo.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 1, move_name: "Confusión" },
      { level: 35, move_name: "Psíquico" },
      { level: 45, move_name: "Derribo" },
      { level: 55, move_name: "Premonición" },
      { level: 65, move_name: "Hiperrayo" },
      { level: 70, move_name: "Decreto Real" }
    ]
  },
  {
    id: 79,
    name: "Osamajestuoso",
    types: ["normal", "fairy"],
    base_stats: { hp: 105, attack: 115, defense: 95, sp_attack: 105, sp_defense: 115, speed: 90 },
    catch_rate: 30,
    exp_yield: 275,
    description: "Forma evolucionada de Ursabón cuando se le expone a la Corona Real. Representa el máximo poder de Madrid. Su rugido puede oírse en toda España.",
    moves: [
      { level: 1, move_name: "Placaje" },
      { level: 1, move_name: "Viento Feérico" },
      { level: 30, move_name: "Golpe" },
      { level: 40, move_name: "Brillo Mágico" },
      { level: 50, move_name: "Derribo" },
      { level: 60, move_name: "Hoja Mágica" },
      { level: 70, move_name: "Abrazo Real" }
    ]
  },
  {
    id: 80,
    name: "Metrocrown",
    types: ["steel", "psychic"],
    base_stats: { hp: 110, attack: 95, defense: 125, sp_attack: 135, sp_defense: 125, speed: 95 },
    catch_rate: 30,
    exp_yield: 280,
    description: "Forma evolucionada de Metrión cuando absorbe la Corona Real. Une la modernidad del metro con la tradición real. Es la creación definitiva de Madrid.",
    moves: [
      { level: 1, move_name: "Confusión" },
      { level: 1, move_name: "Defensa Férrea" },
      { level: 30, move_name: "Garra Metal" },
      { level: 40, move_name: "Psíquico" },
      { level: 50, move_name: "Giro Bola" },
      { level: 60, move_name: "Premonición" },
      { level: 70, move_name: "Corona Metro" }
    ]
  }
];

async function generateEliteFour() {
  console.log('👑 POKÉMON MADRID - Alto Mando');
  console.log('===============================\n');

  for (const pokemon of eliteFour) {
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

  console.log('\n✅ Alto Mando completado!');
  console.log('\n📊 Estructura Liga Pokémon:');
  console.log('   1. CARMEN (Fantasma): Teatrón, Fantasmadrid, Espectrópera');
  console.log('   2. RODRIGO (Dragón): Lagartijo→Dragomadrid, Culebrasa');
  console.log('   3. VICTORIA (Hada): Florecita, Fuentealta, Angelreal');
  console.log('   4. ALFONSO (Acero/Lucha): Armadurón, Cañonazo, Coronarón');
  console.log('   CAMPEÓN: ISABEL (Balanced): Realmajestic, Osamajestuoso, Metrocrown + 3 más');
  console.log('\n   Total Pokémon generados: 80');
}

generateEliteFour();
