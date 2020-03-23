module.exports.type_filtersCategoryList = 'jewel,jewel.abyss,weapon,weapon.one,weapon.onemelee,weapon.two,weapon.twomelee,weapon.bow,weapon.claw,weapon.dagger,weapon.oneaxe,weapon.twoaxe,weapon.onesword,weapon.twosword,weapon.onemace,weapon.sceptre,weapon.twomace,weapon.staff,weapon.wand,armour.armour.chest,armour.helmet,armour.boots,armour.gloves,armour.shield,armour.quiver,accessory,accessory,ring,accessory.amulet,accessory.belt'
module.exports.type_filtersRarityList = 'nonunique,unique,uniquefoil,rare,magic,normal'

module.exports.type_filtersTemplate = {
  filters: {
    category: '',
    rarity: ''
  }
}
// maybe the min here is 1, but there are things with 0
// also to avoid using them a null parameter is necessary
module.exports.socket_filtersTemplate = {
  disabled: false,
  filters: {
    links: {
      min: 0,
      max: 6
    },
    sockets: {
      min: 0,
      max: 6
    }
  }
}

// same here, null param for the unnecessary min or max (values between 1 and 16)
// option is a god damn string lmao
module.exports.map_filtersTemplate = {
  disabled: false,
  filters: {
    map_tier: {
      min: 1,
      max: 16
    },
    map_elder: {
      option: 'false' // yes, this isn't a mistake, thx poe
    },
    map_shaped: {
      option: 'false' // yes, this isn't a mistake, thx poe
    },
    map_blighted: {
      option: 'false' // yes, this isn't a mistake, thx poe
    },
    map_series: {
      option: 'metamorph' // league name. standard uses the latest one despite being separate
    }
  }
}

// pretty sure that you dont need to include all of these in a query, thats just insane
// ilvl and other min maxes might be different and differ with other patches
module.exports.misc_filtersTemplate = {
  filters: {
    quality: {
      min: 1,
      max: 16
    },
    ilvl: {
      min: 1,
      max: 100
    },
    gem_level: {
      min: 0,
      max: 21
    },
    gem_level_progress: {
      min: 0,
      max: 100 // no god damn clue how this works lmao, maybe 20?
    },
    shaper_item: {
      option: 'false'
    },
    crusader_item: {
      option: 'false'
    },
    hunter_item: {
      option: 'false'
    },
    elder_item: {
      option: 'false'
    },
    redeemer_item: {
      option: 'false'
    },
    warlord_item: {
      option: 'false'
    },
    fractured_item: {
      option: 'false'
    },
    synthesised_item: {
      option: 'false'
    },
    identified: {
      option: 'false'
    },
    alternate_art: {
      option: 'false'
    },
    corrupted: {
      option: 'false'
    },
    crafted: {
      option: 'false'
    },
    enchanted: {
      option: 'false'
    },
    mirrored: {
      option: 'false'
    },
    veiled: {
      option: 'false'
    }
  }
}

module.exports.stats.filtersTemplate = {
  0: {
    id: 'pseudo.pseudo_total_cold_resistance',
    value: {
      min: null,
      max: null
    },
    disabled: false
  },
  1: {
    id: 'explicit.stat_289389345709238', // oh no another api
    value: {
      min: null,
      max: null
    },
    disabled: true
  }
}
