// Fake FD Hamburger
// Server part
// 
// Tags to better display on belts, was used in the video, entirely optional
// 
// Reference to mass-produced Crabby Patty
// 
// MC 1.18
// Forge
// Mods: Farmer's Delight, Create, Create: Dreams & Desires
//
// https://www.youtube.com/watch?v=fBB2mD7w3gM

onEvent('item.tags', event => {
	event.get('create:upright_on_belt').add([
        "kubejs:hamburger_shaped_clay", 
        "kubejs:hamburger_shaped_clay_baked",
        'farmersdelight:hamburger',
        'minecraft:clay_ball'
    ]);
});
