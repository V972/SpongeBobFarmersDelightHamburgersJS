// Fake FD Hamburger
// Funni part
// 
// Reference to mass-produced Crabby Patty
// 
// MC 1.20.1
// Forge
// Mods: Farmer's Delight, Create, Create: Dreams & Desires
//
// https://www.youtube.com/watch?v=fBB2mD7w3gM
//
//Updated by AdeptusAutumn

//Old 1.18 Code
//onEvent("recipes", (event) => {

ServerEvents.recipes(event => {
    let hamburgerShapedClay = "kubejs:hamburger_shaped_clay"
    let hamburgerShapedClayBaked = "kubejs:hamburger_shaped_clay_baked"

    event.recipes.createPressing(hamburgerShapedClay, 'minecraft:clay_ball').id('kubejs:sus_hamburger_1');
    event.smelting(hamburgerShapedClayBaked, hamburgerShapedClay).id('kubejs:sus_hamburger_2');
    event.recipes.create.filling(
        Item.of('farmersdelight:hamburger')
            .withName(Text.of('Hamburger ?').italic(false))
            .withNBT({ Sus: true }), [
        hamburgerShapedClayBaked, 
        Fluid.of('create_dd:shimmer', 500)
    ]).id('kubejs:sus_hamburger_3');
});
