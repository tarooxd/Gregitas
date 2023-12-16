// priority 10

const itemTypes = ["ingots", "plates", "rods", "gears"]

//Id's of things to replace furnace -> crucible
const furnacent = [
  "integrateddynamics:crafting/part_machine_reader",
  "gtceu:shaped/multi_furnace",
  "integrateddynamics:crafting/part_machine_writer",
  "gtceu:shaped/steam_boiler_coal_bronze",
  "gtceu:shaped/steam_boiler_coal_steel",
  "railcraft:fluid_fueled_firebox",
  "enderio:alloy_smelter",
  "minecraft:blast_furnace",
  "gtceu:shaped/steam_furnace_bronze",
  "gtceu:shaped/steam_alloy_smelter_bronze",
  "gtceu:shaped/electric_blast_furnace",
  "enderio:stirling_generator",
  "railcraft:steam_oven",
  "enderio:primitive_alloy_smelter",
  "ae2:network/blocks/energy_vibration_chamber",
  "railcraft:tunnel_bore",
  "integrateddynamics:crafting/coal_generator"
]
const tfcMetallics = [
  'bismuth',
  'bismuth_bronze',
  'black_bronze',
  'bronze',
  'brass',
  'copper',
  'gold',
  'nickel',
  'rose_gold',
  'silver',
  'tin',
  'zinc',
  'sterling_silver',
  'wrought_iron',
  'steel',
  'black_steel',
  'blue_steel',
  'red_steel',
  'tungsten_carbide',
  'damascus_steel',
  'tungsten_steel',
  'cobalt_brass',
  'vanadium_steel',
  'ultimet',
  'invar',
  'aluminium',
  'titanium'
]

let replaceRecipes = (/** @type {Internal.RecipesEventJS} */ event) => {
  event.replaceOutput({ type: "minecraft:crafting_shaped" }, "minecraft:torch", "tfc:torch")

  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:torch", "tfc:torch")
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:anvil", "tfc:metal/anvil/wrought_iron")
  event.replaceInput({ type: "minecraft:crafting_shapeless" }, "minecraft:slime_ball", "tfc:glue")

  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:slime_ball", "tfc:glue")
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:cobblestone_slab", "#forge:slabs/cobblestone")
  //remove furnace existance
  furnacent.forEach((furnace) => {
    event.replaceInput(furnace, "minecraft:furnace", "tfc:crucible")
  })
  //Simpleplanes
  event.replaceInput({ mod: "simpleplanes"}, "minecraft:iron_axe", "tfc:metal/axe/steel")
  event.replaceInput({ mod: "simpleplanes"}, "minecraft:iron_pickaxe", "tfc:metal/pickaxe/steel")
  //Corail

  event.replaceInput({ mod: "tombstone"}, "minecraft:stone", "tfc:rock/raw/marble")
  //Apotheosis
  event.replaceInput({ mod: "apotheosis"}, "minecraft:iron_axe", "tfc:metal/axe/red_steel")
  event.replaceInput({ mod: "apotheosis"}, "minecraft:iron_pickaxe", "tfc:metal/pickaxe/blue_steel")
  //Create
  event.replaceInput({ type: "minecraft:crafting_shaped" }, "minecraft:dried_kelp", "tfc:food/dried_kelp")
  event.replaceOutput({ id: "minecraft:dried_kelp" }, "minecraft:dried_kelp", "tfc:food/dried_kelp")
  event.replaceInput({ mod: "create" }, "#minecraft:planks", "#forge:treated_wood")


  //Functional Storage
  event.replaceInput(
    { id: "functionalstorage:framed_storage_controller" },
    "minecraft:iron_nugget",
    "#forge:plates/brass"
  )
  event.replaceInput(
    { id: "functionalstorage:framed_controller_extension" },
    "minecraft:iron_nugget",
    "#forge:plates/brass"
  )
  //Railcraft
  event.replaceInput({ id: "railcraft:water_tank_siding" }, "minecraft:slimeball", "gtceu:sticky_resin")
  event.replaceInput({ id: "railcraft:steam_locomotive" }, "railcraft:blast_furnace_bricks", "gtceu:firebricks")

  //TFC
  tfcMetallics.forEach((metal) => {
    event.replaceInput({ type: "minecraft:crafting_shaped" }, `tfc:metal/sheet/${metal}`, `#forge:plates/${metal}`)
    event.replaceInput(
      { type: "minecraft:crafting_shaped" },
      `tfc:metal/double_sheet/${metal}`,
      `#forge:plates/double/${metal}`
    )
  })

  //Firmalife
  event.replaceInput({ mod: "firmalife"}, "firmalife:metal/ingot/chromium", "gtceu:chromium_ingot" )
  event.replaceInput({ mod: "firmalife"}, "firmalife:metal/ingot/stainless_steel", "gtceu:stainless_steel_ingot" )
  //Firebricks/Cokebricks etc
  event.replaceInput({ id: "gtceu:shaped/compressed_coke_clay"}, "minecraft:clay_ball", "tfc:fire_clay")
  event.replaceOutput({ id: "tfc:crafting/fire_bricks"}, "tfc:fire_bricks", "gtceu:firebricks")

  //IE
  event.replaceInput({ mod: "immersiveengineering"}, "immersiveengineering:hemp_fiber", "tfc:jute_fiber")

  //Misc
  event.replaceInput({ type: "minecraft:crafting_shaped"}, "minecraft:gold_block", "#forge:double_plates/gold")

}
