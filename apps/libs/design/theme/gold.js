import {
  ATTRIBUTE_CRIT,
  ATTRIBUTE_EARTH,
  ATTRIBUTE_FIRE,
  ATTRIBUTE_MAGIC,
  ATTRIBUTE_WATER,
  RARITY_COMMON,
  RARITY_EPIC,
  RARITY_LEGENDARY,
  RARITY_RARE,
} from 'core/remix/state';

export const gold = {
  socials: {
    google: '#4285f4',
  },
  map: {
    cutout: '#1a1e2d',
    texture: '#314068',
    dark_texture: '#101219',
  },
  exp: {
    loading: '#6b4906',
    texture: '#ffba1a',
  },
  attribute: {
    [ATTRIBUTE_FIRE]: '#d5a2e2',
    [ATTRIBUTE_WATER]: '#9ab8db',
    [ATTRIBUTE_EARTH]: '#88cec4',
    [ATTRIBUTE_MAGIC]: '#dbca9a',
    [ATTRIBUTE_CRIT]: '#e2a2a2',
  },
  rarity: {
    [RARITY_COMMON]: '#00d652',
    [RARITY_RARE]: '#0084d6',
    [RARITY_EPIC]: '#8f00d6',
    [RARITY_LEGENDARY]: '#d68400',
    power: '#9ca6c9',
    power_border: '#c7ccdc',
  },
  gold: {
    button: 'radial-gradient(circle,  #695b0c 0%, #4d400f 80%)',
    tap: 'radial-gradient(circle,  #856800 0%, #856800 60%)',
    tile: '#856800',
    dark_tile: '#4f4317',
    highlight: '#4f4317',
    texture: '#d6cba9',
    resource: '#d6cba9',
    text: '#dbca9a',
    open: '#5e4c08',
  },
  water: {
    button: 'radial-gradient(circle,  #173a4f 0%, #173a4f 60%)',
    tap: 'radial-gradient(circle,  #1a4261 0%, #1a4261 60%)',
    tile: '#1a4261',
    dark_tile: '#173a4f',
    highlight: '#173a4f',
    texture: '#3392ff',
    resource: '#339cff',
    text: '#9ab8db',
  },
  craft: {
    button: 'radial-gradient(circle,  #283152 0%, #283152 60%)',
    tap: 'radial-gradient(circle,  #232b43 0%, #232b43 60%)',
    tile: '#232b43',
    dark_tile: '#1f2437',
    highlight: '#1f2437',
    texture: '#8692b1',
    resource: '#8692b1',
    text: '#8692b1',
  },
  fire: {
    button: 'radial-gradient(circle,  #411e48 0%, #411e48 60%)',
    tap: 'radial-gradient(circle,  #522159 0%, #522159 60%)',
    tile: '#522159',
    dark_tile: '#411e48',
    highlight: '#411e48',
    texture: '#d671ef',
    resource: '#d671ef',
    text: '#d5a2e2',
  },
  earth: {
    button: 'radial-gradient(circle,  #194332 0%, #194332 60%)',
    tap: 'radial-gradient(circle,  #1c5441 0%, #1c5441 60%)',
    tile: '#1c5441',
    dark_tile: '#194332',
    highlight: '#194332',
    texture: '#29bca6',
    resource: '#29bca6',
    text: '#88cec4',
  },
  element: {
    water: '#3392ff',
    fire: '#d671ef',
    earth: '#65e7c2',
    gold: '#d6cba9',
    craft: '#8692b1',
  },
  textures: {
    water: '#3392ff',
    fire: '#d671ef',
    earth: '#29bca6',
    craft: '#8692b1',
    gold: '#d6cba9',
  },
  tile: {
    water: '#1a4261',
    fire: '#522159',
    earth: '#1c5441',
    craft: '#232b43',
    gold: '#856800',
  },
  button: {
    gold: '#d3b578',
    gold_text: '#563c25',
  },
  loading: {
    gold: '#c6ae6c',
  },
  icons: {
    folder: '#54d4d0',
    search: '#a7adab',
  },
  indent: {
    active: '#7c8ec0',
    level: '#7c8ec0',
    disabled: '#323952',
  },
  highlight: {
    border: '#5f6f95',
    background: '#9aafdb',
    button: '#425176',
    text: '#fff',
  },
  tap: {
    button_high: 'radial-gradient(circle,  #333c5c 0%, #333c5c 60%)',
    button_shadow_high:
      'inset 1px 1px 8px -2px rgba(236, 240, 254, 0.32), 2px 2px 4px 0 rgba(0, 0, 0, 0.16), 0 0 32px 4px rgba(255, 255, 255, 0.16)',
  },
  interaction: {
    press: 'rgba(84, 212, 208, 0.65)',
  },
  primary: {
    link: '#42c4d1',
    background: '#42c4d1',
    background_active: '#42c4d1',
    text: '#42c4d1',
    text_active: '#42c4d1',
  },
  secondary: {
    background: '#aaacab',
    text: '#aaacab',
    border: '#aaacab',
    solid: '#aaacab',
  },
  background: {
    highest: '#2d3653',
    higher: '#232b43',
    high: '#283152',
    base: '#232b43',
    low: '#232b43',
    lower: '#232b43',
    lowest: '#1f2437',
    bottom: 'rgba(0,0,0,0.16)',
    fade: '#0e111b',
    button: 'radial-gradient(circle,  #232b43 0%, #232b43 60%)',
    button_disabled: 'radial-gradient(circle,  #1f2437 0%, #1f2437 60%)',
    button_low: 'radial-gradient(circle,  #232b43 0%, #232b43 60%)',
    button_high: 'radial-gradient(circle,  #283152 0%, #2d3653 60%)',
    button_active: 'radial-gradient(circle,  #425176 0%, #2d3653 150%)',
  },
  border: {
    highest: '#5f6f95',
    higher: '#2e3548',
    high: '#3c4667',
    base: '#2e3548',
    low: '#2e3548',
    lower: '#2e3548',
    lowest: '#2e3548',
  },
  shadow: {
    popover:
      'inset 2px 2px 4px 0 rgba(236, 240, 254, 0.16), 2px 2px 4px 0 rgba(0, 0, 0, 0.16)',
    card:
      'inset 1px 1px 4px 1px rgba(236, 240, 254, 0.16), 2px 2px 4px 0 rgba(0, 0, 0, 0.16)',
    glass:
      'inset 1px 1px 8px -2px rgba(236, 240, 254, 0.32), 2px 2px 4px 0 rgba(0, 0, 0, 0.16)',
    frost:
      'inset 1px 1px 4px 1px rgba(236, 240, 254, 0.12), 2px 2px 4px 0 rgba(0, 0, 0, 0.12)',
    loading:
      'inset 1px 1px 8px -2px rgba(236, 240, 254, 0.16), 2px 2px 4px 0 rgba(0, 0, 0, 0.12)',
    divider:
      'inset 2px 2px 4px 0 rgba(0,0,0,0.1), inset -1px -1px 2px 0 rgba(255,255,255,0.08)',
    text: '1px 1px 0 rgba(0,0,0,0.4)',
    text_glow: '1px 1px 8px rgba(255,255,255,0.24)',
    button: '2px 2px 4px 0 rgba(0, 0, 0, 0.16)',
    sphere:
      'inset -2px -2px 3px 0 rgba(0,0,0,0.16), 1px 1px 2px 1px rgba(0,0,0,0.16)',
    glow_sphere:
      'inset -2px -2px 3px 0 rgba(0,0,0,0.16), 0 0 8px 2px rgba(255,255,255,0.16), 1px 1px 2px 1px rgba(0,0,0,0.16)',
    cutout: 'inset 2px 2px 4px 0 rgba(0, 0, 0, 0.16)',
    super_glow_blue:
      '0 0 0.1rem 1px #fff, inset 0 0 0.1rem 1px #fff, 0 0 0.2rem 0.2rem #2b8bfc, inset 0 0 0.2rem 0.2rem #2b8bfc, 0 0 0.3rem 0.2rem #2b8bfc, inset 0 0 0.3rem 0.2rem #2b8bfc, 0 0 0.4rem 0.2rem #2b8bfc, inset 0 0 0.4rem 0.2rem #2b8bfc, 0 0 1rem 0.2rem #2b8bfc, inset 0 0 1rem 0.2rem #2b8bfc',
    super_glow_green:
      '0 0 0.1rem 1px #fff, inset 0 0 0.1rem 1px #fff, 0 0 0.4rem 0.2rem rgb(79 250 202 / 80%), inset 0 0 0.4rem 0.2rem rgb(79 250 202 / 80%), 0 0 1rem 0.2rem rgb(79 250 202 / 50%), inset 0 0 1rem 0.2rem rgb(79 250 202 / 50%)',
    super_glow_purple:
      '0 0 0.1rem 1px #fff, inset 0 0 0.1rem 1px #fff, 0 0 0.2rem 0.2rem #e754ff, inset 0 0 0.2rem 0.2rem #e754ff, 0 0 0.4rem 0.2rem #e754ff, inset 0 0 0.4rem 0.2rem #e754ff, 0 0 1rem 0.2rem #e754ff, inset 0 0 1rem 0.2rem #e754ff',
    blue_frost:
      'inset 1px 1px 4px 1px rgba(255, 255, 255, 0.12), 2px 2px 4px 0 rgba(0, 0, 0, 0.12)',
    green_frost:
      'inset 1px 1px 4px 1px rgba(255, 255, 255, 0.12), 2px 2px 4px 0 rgba(0, 0, 0, 0.12)',
    purple_frost:
      'inset 1px 1px 4px 1px rgba(214, 113, 239,0.12), 2px 2px 4px 0 rgba(0, 0, 0, 0.12)',
  },
  text: {
    base: '#8692b1',
    faded: '#58627e',
    active: '#cbcfe2',
    input: '#eaeaea',
    placeholder: '#9d9d9d',
    clear: 'rgba(222,222,255,0.56)',
    tile: '#4e577e',
  },
  font: {
    open_sauce: 'Open Sauce One',
    red_hat: 'Red Hat Display',
  },
};
