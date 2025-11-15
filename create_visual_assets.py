#!/usr/bin/env python3
"""Crea assets visuales mejorados sin APIs externas"""

from PIL import Image, ImageDraw
import os

# Paleta de colores Madrid
MADRID_COLORS = {
    'sky': (135, 206, 235),
    'grass': (76, 153, 0),
    'water': (30, 144, 255),
    'path': (169, 169, 169),
    'building': (188, 143, 143),
    'red': (220, 20, 60),
    'gold': (255, 215, 0),
    'white': (255, 255, 255),
    'black': (0, 0, 0)
}

def create_better_tileset(filename, palette='outdoor'):
    """Crea tileset con mejor calidad visual"""
    print(f"Creando {filename}...")
    img = Image.new('RGB', (256, 256), MADRID_COLORS['grass'])
    draw = ImageDraw.Draw(img)
    
    if palette == 'outdoor':
        colors = [MADRID_COLORS['grass'], MADRID_COLORS['path'], MADRID_COLORS['building']]
    else:
        colors = [MADRID_COLORS['building'], MADRID_COLORS['white'], (150, 111, 51)]
    
    # Tiles 32x32 con patrones
    for y in range(8):
        for x in range(8):
            px, py = x * 32, y * 32
            color = colors[(x + y) % len(colors)]
            
            # Tile base
            draw.rectangle([px, py, px+32, py+32], fill=color)
            
            # Detalles
            if (x + y) % 2 == 0:
                draw.rectangle([px+2, py+2, px+30, py+30], outline=MADRID_COLORS['black'])
            else:
                draw.line([px, py, px+32, py+32], fill=MADRID_COLORS['black'], width=1)
                draw.line([px+32, py, px, py+32], fill=MADRID_COLORS['black'], width=1)
    
    os.makedirs('img/tilesets', exist_ok=True)
    img.save(f'img/tilesets/{filename}')
    print(f"✅ {filename}")

def create_better_character(filename, color_scheme='player'):
    """Crea sprite de personaje con mejor diseño"""
    print(f"Creando {filename}...")
    img = Image.new('RGBA', (288, 256), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Colores por personaje
    schemes = {
        'player': {
            'skin': (255, 220, 177),
            'hair': (80, 50, 30),
            'shirt': (220, 20, 60),  # Rojo Madrid
            'pants': (50, 50, 150)
        },
        'oak': {
            'skin': (255, 200, 160),
            'hair': (200, 200, 200),
            'shirt': (100, 100, 150),
            'pants': (70, 70, 70)
        },
        'rival': {
            'skin': (255, 210, 170),
            'hair': (200, 150, 50),
            'shirt': (50, 150, 50),
            'pants': (100, 80, 50)
        }
    }
    
    colors = schemes.get(color_scheme, schemes['player'])
    
    # 4 direcciones x 3 frames
    for row in range(4):
        for col in range(3):
            x, y = col * 48, row * 64
            
            # Cabeza
            draw.ellipse([x+16, y+8, x+32, y+24], fill=colors['skin'], outline=MADRID_COLORS['black'])
            # Pelo
            draw.arc([x+14, y+6, x+34, y+20], 0, 180, fill=colors['hair'], width=4)
            # Cuerpo
            draw.rectangle([x+18, y+24, x+30, y+42], fill=colors['shirt'], outline=MADRID_COLORS['black'])
            # Piernas
            draw.rectangle([x+18, y+42, x+23, y+58], fill=colors['pants'], outline=MADRID_COLORS['black'])
            draw.rectangle([x+25, y+42, x+30, y+58], fill=colors['pants'], outline=MADRID_COLORS['black'])
            # Brazos
            if col == 1:  # Frame de caminar
                draw.rectangle([x+12, y+26, x+17, y+40], fill=colors['skin'])
                draw.rectangle([x+31, y+26, x+36, y+40], fill=colors['skin'])
    
    os.makedirs('img/characters', exist_ok=True)
    img.save(f'img/characters/{filename}')
    print(f"✅ {filename}")

def create_pokemon_sprite(name, filename, primary_color, secondary_color):
    """Crea sprite de Pokémon estilo Game Boy mejorado"""
    print(f"Creando Pokémon: {name}...")
    img = Image.new('RGBA', (128, 128), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Cuerpo principal
    draw.ellipse([20, 30, 108, 110], fill=primary_color, outline=MADRID_COLORS['black'], width=3)
    
    # Detalles
    draw.ellipse([30, 40, 50, 60], fill=secondary_color)  # Mancha izq
    draw.ellipse([78, 40, 98, 60], fill=secondary_color)  # Mancha der
    
    # Ojos
    draw.ellipse([40, 50, 52, 62], fill=MADRID_COLORS['white'], outline=MADRID_COLORS['black'], width=2)
    draw.ellipse([76, 50, 88, 62], fill=MADRID_COLORS['white'], outline=MADRID_COLORS['black'], width=2)
    draw.ellipse([44, 54, 50, 60], fill=MADRID_COLORS['black'])
    draw.ellipse([80, 54, 86, 60], fill=MADRID_COLORS['black'])
    
    # Boca simple
    draw.arc([48, 60, 80, 80], 0, 180, fill=MADRID_COLORS['black'], width=2)
    
    os.makedirs('img/enemies', exist_ok=True)
    img.save(f'img/enemies/{filename}')
    print(f"✅ {name} ({filename})")

def create_icon_set():
    """Crea IconSet con iconos visuales"""
    print("Creando IconSet.png...")
    img = Image.new('RGBA', (512, 512), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Iconos 16x16 grid de 32x32 cada uno
    icon_types = [
        ('potion', MADRID_COLORS['red'], MADRID_COLORS['white']),
        ('pokeball', MADRID_COLORS['red'], MADRID_COLORS['white']),
        ('superball', (50, 100, 255), MADRID_COLORS['white']),
        ('ultraball', (255, 215, 0), MADRID_COLORS['black']),
    ]
    
    idx = 0
    for row in range(16):
        for col in range(16):
            x, y = col * 32, row * 32
            icon_type = icon_types[idx % len(icon_types)]
            
            # Fondo
            draw.ellipse([x+2, y+2, x+30, y+30], fill=icon_type[1], outline=MADRID_COLORS['black'], width=2)
            # Centro
            draw.ellipse([x+8, y+8, x+24, y+24], fill=icon_type[2], outline=MADRID_COLORS['black'])
            
            idx += 1
    
    os.makedirs('img/system', exist_ok=True)
    img.save('img/system/IconSet.png')
    print("✅ IconSet.png")

def create_window_skin():
    """Crea Window.png mejorado"""
    print("Creando Window.png...")
    img = Image.new('RGBA', (192, 192), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Elementos de ventana
    window_bg = (0, 0, 100, 230)
    border = (255, 255, 255, 255)
    
    # Tiles de ventana
    for i in range(0, 128, 32):
        for j in range(0, 128, 32):
            draw.rectangle([i+2, j+2, i+30, j+30], fill=window_bg, outline=border, width=2)
    
    os.makedirs('img/system', exist_ok=True)
    img.save('img/system/Window.png')
    print("✅ Window.png")

# MAIN
print("🎨 Generando assets visuales mejorados...\n")

print("📦 Tilesets...")
create_better_tileset('Outside_A1.png', 'outdoor')
create_better_tileset('Outside_A2.png', 'outdoor')
create_better_tileset('Inside_A1.png', 'indoor')

print("\n🖼️  System...")
create_window_skin()
create_icon_set()

print("\n👤 Characters...")
create_better_character('Player.png', 'player')
create_better_character('Oak.png', 'oak')
create_better_character('Rival.png', 'rival')

print("\n🐉 Pokémon...")
# Iniciales
create_pokemon_sprite('Chulapón', 'Chulapon.png', MADRID_COLORS['red'], MADRID_COLORS['gold'])
create_pokemon_sprite('Gatolegre', 'Gatolegre.png', (128, 0, 128), MADRID_COLORS['white'])
create_pokemon_sprite('Azulejín', 'Azulejen.png', (30, 144, 255), MADRID_COLORS['white'])
# Comunes
create_pokemon_sprite('Ratamad', 'Ratamad.png', (139, 69, 19), (200, 150, 100))
create_pokemon_sprite('Pichoneta', 'Pichoneta.png', (70, 130, 180), MADRID_COLORS['white'])

print("\n✅ ¡Assets mejorados creados!")
