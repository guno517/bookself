export type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export type Height = {
  height: number;
}

export type Name = {
  name: string;
}

export type Sprites = { // pokemon image
  other: {
    'officail-artwork': {
      'front_default': string;
    }
  }
}

export type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export type Types = {
  slot: number;
  type: {
    name: string;
    url: string;
  }
  weight: number;
}