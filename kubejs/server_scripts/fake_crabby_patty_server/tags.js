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
//onEvent('item.tags', event => {

ServerEvents.tags('item', event => {
	event.get('create:upright_on_belt').add([
        "kubejs:hamburger_shaped_clay", 
        "kubejs:hamburger_shaped_clay_baked",
        'farmersdelight:hamburger',
        'minecraft:clay_ball'
    ]);
});
