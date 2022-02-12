import {
  ENCHANT_MAGIC,
  ENCHANT_MINING,
  TIER_I,
  TIER_II,
  TIER_III,
  TIER_IV,
  TYPE_EARTH,
  TYPE_FIRE,
  TYPE_GOLD,
  TYPE_WATER,
} from 'core/remix/state';
import { randomIntBetween } from 'core';

export const useLoot = (tile, caster, rewards, inventory) => {
  const tile_level = tile?.level;
  const tile_tier = tile?.tier;
  const tile_type = tile?.type;
  const tile_enchant = tile?.enchant;
  const resource_multiple = 10;

  const random_rewards = (rewards) => {
    if (
      tile_type === TYPE_FIRE ||
      tile_type === TYPE_WATER ||
      tile_type === TYPE_EARTH
    ) {
      // enchant
      const enchant_reward = tile_enchant === ENCHANT_MINING ? 1.5 : 1;

      // tier
      const tier_bonus = {
        [TIER_I]: 1,
        [TIER_II]: 1.15,
        [TIER_III]: 1.3,
        [TIER_IV]: 1.45,
      }[tile_tier];

      // equipment bonus
      const equipment_bonus = 1;

      // spell bonus
      const spell_bonus = 1;

      const max_reward =
        resource_multiple *
        tile_level *
        tier_bonus *
        enchant_reward *
        equipment_bonus *
        spell_bonus;

      const base_reward = randomIntBetween(1, max_reward);

      // luck
      const base_luck = 0.1;

      // enchant_luck
      const enchant_luck = tile_enchant === ENCHANT_MAGIC ? 1.5 : 1;

      // equipment_luck
      const equipment_luck = 0;

      // spell_luck
      const spell_luck = 0;

      // chest
      const next_chests = [...rewards.chests];
      const total_luck = base_luck * enchant_luck + equipment_luck + spell_luck;
      const luck_int = 1 / total_luck;
      const give_chest = 1; //  random chance
      const max_level = tile_level; // based on tile level
      let last_mint = inventory?.last_mint;
      if (give_chest === 1) {
        const mint = inventory?.last_mint + 1;
        next_chests.push({ tier: tile_tier, mint, max_level });
        last_mint = mint;
      }

      return {
        ...rewards,
        [tile_type]: base_reward,
        type: tile_type,
        chests: next_chests,
        last_mint,
      };
    } else if (tile_type === TYPE_GOLD) {
      const max_level = tile_level; // based on tile level
      const mint = inventory?.last_mint + 1;
      const next_chests = [...rewards.chests];
      next_chests.push({ tier: tile_tier, mint, max_level });
      return {
        ...rewards,
        type: tile_type,
        chests: next_chests,
      };
    } else return { ...rewards };
  };
  return random_rewards(rewards);
};
